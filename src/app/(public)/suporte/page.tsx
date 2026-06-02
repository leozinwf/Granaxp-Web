'use client';

import { useState } from 'react';
import { HelpCircle, Mail, MessageSquare, ShieldCheck, ChevronDown, Send } from 'lucide-react';
import { Turnstile } from '@marsidev/react-turnstile';
import { enviarChamado } from './actions';

interface FAQItem { q: string; a: string; }
interface FAQCatalogo { [categoria: string]: { icone: string; itens: FAQItem[]; }; }

export default function SuportePage() {
  const [aberto, setAberto] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [sucesso, setSucesso] = useState(false);
  const [erro, setErro] = useState<string | null>(null);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);

  const faqCategorias: FAQCatalogo = {
    "Conta & Acesso": {
      icone: "🔑",
      itens: [
        { q: "Esqueci minha senha, o que fazer?", a: "Na tela de login do aplicativo, basta clicar em 'Esqueci minha senha'. Nós enviaremos um e-mail com um link seguro para você redefinir suas credenciais de acesso em poucos segundos." },
        { q: "Como posso alterar meu nickname ou e-mail?", a: "Dentro do aplicativo, acesse a área do seu perfil em 'Configurações'. Lá você poderá atualizar seus dados cadastrais facilmente." }
      ]
    },
    "Gamificação & XP": {
      icone: "🎮",
      itens: [
        { q: "Como funcionam as insígnias e o XP?", a: "O Grana XP gamifica suas finanças! Ao manter seus registros em dia, pagar contas antes do vencimento e atingir metas de economia, você ganha pontos de experiência (XP) e desbloqueia conquistas exclusivas no seu perfil." },
        { q: "O que acontece quando eu subo de nível?", a: "Subir de nível demonstra sua consistência financeira. No futuro, níveis mais altos darão acesso a recursos exclusivos na plataforma e temas personalizados para o seu painel." }
      ]
    },
    "Segurança & Planos": {
      icone: "🛡️",
      itens: [
        { q: "O Grana XP é gratuito?", a: "Sim! Você pode começar a organizar suas finanças e registrar suas contas sem pagar absolutamente nada. Também oferecemos recursos avançados no plano Premium para quem quer levar o controle financeiro ao nível máximo." },
        { q: "Meus dados financeiros estão seguros?", a: "Totalmente. Nós utilizamos a infraestrutura de segurança do Supabase com criptografia de ponta a ponta. Seus registros são privados e nenhum dado bancário real ou senha de banco é solicitado." }
      ]
    }
  };

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    
    if (!turnstileToken) {
      setErro("Aguarde a verificação de segurança finalizar.");
      return;
    }

    setLoading(true);
    setErro(null);

    const formData = new FormData(event.currentTarget);
    formData.append('cf-turnstile-response', turnstileToken);

    const result = await enviarChamado(formData);

    setLoading(false);
    if (result.success) {
      setSucesso(true);
      (event.target as HTMLFormElement).reset();
    } else {
      setErro(result.error || 'Ocorreu um erro inesperado.');
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-slate-100 mb-4 tracking-tight">
          Central de <span className="text-roxo-claro">Suporte</span>
        </h1>
        <p className="text-dark-texto text-lg">
          Precisa de ajuda? Explore o FAQ ou abra um chamado diretamente com a nossa equipe.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        <div className="bg-dark-card border border-dark-borda p-6 rounded-2xl flex items-start gap-4 shadow-lg">
          <div className="p-3 bg-roxo-claro/10 rounded-xl text-roxo-claro"><Mail size={24} /></div>
          <div>
            <h3 className="text-lg font-bold text-slate-100 mb-1">E-mail de Suporte</h3>
            <p className="text-dark-texto text-sm mb-3 leading-relaxed">Tempo de resposta estimado em até 24 horas úteis.</p>
            <a href="mailto:suportegranaxp@gmail.com" className="text-roxo-claro font-bold text-sm hover:underline">suportegranaxp@gmail.com</a>
          </div>
        </div>
        <div className="bg-dark-card border border-dark-borda p-6 rounded-2xl flex items-start gap-4 shadow-lg">
          <div className="p-3 bg-[#5865F2]/10 rounded-xl text-[#5865F2]"><MessageSquare size={24} /></div>
          <div>
            <h3 className="text-lg font-bold text-slate-100 mb-1">Comunidade no Discord</h3>
            <p className="text-dark-texto text-sm mb-3 leading-relaxed">Participe, tire dúvidas e converse diretamente com a nossa comunidade.</p>
            <a href="https://discord.gg/cyHqhhutCD" target="_blank" rel="noopener noreferrer" className="text-[#5865F2] font-bold text-sm hover:underline">Entrar no servidor</a>
          </div>
        </div>
      </div>

      <div className="bg-dark-card border border-dark-borda p-8 rounded-2xl shadow-xl mb-16">
        <h2 className="text-2xl font-bold text-slate-100 mb-2 flex items-center gap-2">🎫 Enviar um Chamado</h2>
        <p className="text-dark-texto text-sm mb-6">Teve algum problema, bug ou tem alguma dúvida comercial? Escreva para nós abaixo:</p>

        {sucesso ? (
          <div className="p-6 bg-green-500/10 border border-green-500/20 text-green-400 rounded-xl font-medium text-center">
            🎉 Chamado enviado com sucesso! Nosso time já foi alertado e responderemos no e-mail informado.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {erro && <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl text-sm font-medium">{erro}</div>}
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-dark-texto uppercase tracking-wider mb-2">Seu Nome</label>
                <input type="text" name="name" required className="w-full px-4 py-3 rounded-xl bg-dark-fundo border border-dark-borda text-slate-100 focus:border-roxo-claro outline-none transition-colors" placeholder="Leonardo" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-dark-texto uppercase tracking-wider mb-2">Seu E-mail</label>
                <input type="email" name="email" required className="w-full px-4 py-3 rounded-xl bg-dark-fundo border border-dark-borda text-slate-100 focus:border-roxo-claro outline-none transition-colors" placeholder="exemplo@gmail.com" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-dark-texto uppercase tracking-wider mb-2">Assunto</label>
              <input type="text" name="subject" required className="w-full px-4 py-3 rounded-xl bg-dark-fundo border border-dark-borda text-slate-100 focus:border-roxo-claro outline-none transition-colors" placeholder="Ex: Bug no contador de XP / Dúvida sobre limite" />
            </div>

            <div>
              <label className="block text-xs font-semibold text-dark-texto uppercase tracking-wider mb-2">Mensagem / Relato</label>
              <textarea name="message" rows={4} required className="w-full px-4 py-3 rounded-xl bg-dark-fundo border border-dark-borda text-slate-100 focus:border-roxo-claro outline-none resize-none transition-colors" placeholder="Descreva em detalhes o que aconteceu..."></textarea>
            </div>

            {/* Cloudflare Turnstile Widget */}
            <div className="flex justify-start py-2">
              {process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY && (
                <Turnstile 
                  siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY} 
                  onSuccess={(token) => setTurnstileToken(token)}
                  options={{ theme: 'dark' }}
                />
              )}
            </div>

            <div className="flex justify-end pt-2">
              <button type="submit" disabled={loading || !turnstileToken} className="bg-roxo-claro hover:bg-roxo-hover disabled:opacity-50 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-all shadow-[0_0_15px_rgba(130,10,209,0.2)]">
                <Send size={16} />
                {loading ? 'Enviando...' : 'Enviar Mensagem'}
              </button>
            </div>
          </form>
        )}
      </div>

      <div className="border-t border-dark-borda/60 pt-12">
        <h2 className="text-2xl font-bold text-slate-100 mb-8 flex items-center gap-2"><HelpCircle className="text-roxo-claro" size={24} /> Perguntas Frequentes</h2>
        <div className="space-y-8">
          {Object.entries(faqCategorias).map(([categoria, dados]) => (
            <div key={categoria} className="space-y-3">
              <h3 className="text-lg font-bold text-slate-300 flex items-center gap-2 px-1"><span>{dados.icone}</span>{categoria}</h3>
              <div className="space-y-2">
                {dados.itens.map((item, index) => {
                  const idUnico = `${categoria}-${index}`;
                  const isAberto = aberto === idUnico;
                  return (
                    <div key={index} className="bg-dark-card border border-dark-borda rounded-xl overflow-hidden transition-all duration-200">
                      <button onClick={() => setAberto(isAberto ? null : idUnico)} className="w-full flex items-center justify-between p-5 text-left text-slate-200 font-semibold hover:text-white transition-colors">
                        <span>{item.q}</span>
                        <ChevronDown size={18} className={`text-dark-texto transform transition-transform duration-200 ${isAberto ? 'rotate-180 text-roxo-claro' : ''}`} />
                      </button>
                      <div className={`transition-all duration-200 ease-in-out overflow-hidden ${isAberto ? 'max-h-40 border-t border-dark-borda/40' : 'max-h-0'}`}>
                        <p className="p-5 text-dark-texto text-sm leading-relaxed bg-dark-fundo/20">{item.a}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 text-center bg-dark-card/40 border border-dark-borda/40 p-6 rounded-2xl flex items-center justify-center gap-3 text-xs text-dark-texto">
        <ShieldCheck size={18} className="text-roxo-claro" />
        <span>Sua segurança é nossa prioridade. Nunca solicitamos senhas ou tokens por e-mail ou redes sociais.</span>
      </div>
    </div>
  );
}