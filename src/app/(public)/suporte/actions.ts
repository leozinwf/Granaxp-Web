'use server';

import { createClient } from '@/lib/supabase/server';

declare const process: {
  env: {
    TURNSTILE_SECRET_KEY?: string;
    DISCORD_WEBHOOK_URL?: string;
  };
};

export async function enviarChamado(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const subject = formData.get('subject') as string;
  const message = formData.get('message') as string;
  const token = formData.get('cf-turnstile-response') as string;

  if (!name || !email || !subject || !message) {
    return { success: false, error: 'Todos os campos são obrigatórios.' };
  }

  if (!token) {
    return { success: false, error: 'Verificação de segurança falhou. Tente novamente.' };
  }

  const verifyForm = new URLSearchParams();
  verifyForm.append('secret', process.env.TURNSTILE_SECRET_KEY!);
  verifyForm.append('response', token);

  const turnstileResponse = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    body: verifyForm,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });

  const turnstileResult = await turnstileResponse.json();

  if (!turnstileResult.success) {
    return { success: false, error: 'Bot detectado pela segurança do sistema.' };
  }

  const supabase = await createClient();
  const { error } = await supabase
    .from('support_tickets')
    .insert([{ name, email, subject, message }]);

  if (error) {
    console.error('Erro no Supabase:', error);
    return { success: false, error: 'Não foi possível salvar seu chamado agora.' };
  }

  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          embeds: [{
            title: `🎫 Novo Chamado: ${subject}`,
            color: 8522193,
            fields: [
              { name: '👤 Nome do Usuário', value: name, inline: true },
              { name: '📧 E-mail de Contato', value: email, inline: true },
              { name: '💬 Relato do Problema', value: message }
            ],
            timestamp: new Date().toISOString(),
            footer: { text: 'Grana XP Sistema de Suporte' }
          }]
        })
      });
    } catch (err) {
      console.error('Erro ao enviar para o Discord:', err);
    }
  }

  return { success: true };
}