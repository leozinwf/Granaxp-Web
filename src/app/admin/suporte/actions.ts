'use server';

import { createClient } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';

export async function atualizarStatusChamado(id: string, novoStatus: string) {
  const supabase = await createClient();

  const { error } = await supabase
    .from('support_tickets')
    .update({ status: novoStatus })
    .eq('id', id);

  if (error) {
    console.error("Erro ao atualizar status:", error);
    return { success: false };
  }

  revalidatePath('/admin/suporte');
  return { success: true };
}