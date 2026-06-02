import { createClient } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';
import { Shield, ShieldAlert, ShieldCheck } from 'lucide-react';

export default async function PermissoesAdmin() {
  const supabase = await createClient();

  // Busca todos os usuários ordenados pelos mais recentes
  const { data: usuarios } = await supabase
    .from('users')
    .select('id, nickname, email, admin')
    .order('created_at', { ascending: false });

  // Server Action para alternar o status de administrador
  async function toggleAdmin(formData: FormData) {
    'use server';
    const id = formData.get('id') as string;
    const currentAdmin = formData.get('currentAdmin') === 'true';
    
    const supabaseServer = await createClient();
    
    // Atualiza o banco de dados invertendo o status
    await supabaseServer
      .from('users')
      .update({ admin: !currentAdmin })
      .eq('id', id);
      
    // Atualiza a página automaticamente para mostrar a mudança
    revalidatePath('/admin/permissoes');
  }

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-slate-100 flex items-center gap-3">
          <Shield size={32} className="text-roxo-claro" />
          Permissões e Acessos
        </h1>
      </div>

      <div className="bg-dark-card border border-dark-borda rounded-2xl overflow-hidden shadow-xl">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-dark-borda bg-dark-fundo/50 text-dark-texto text-sm">
              <th className="p-4 font-medium">Usuário</th>
              <th className="p-4 font-medium">E-mail</th>
              <th className="p-4 font-medium">Status</th>
              <th className="p-4 font-medium text-right">Ação</th>
            </tr>
          </thead>
          <tbody>
            {usuarios?.map((user) => (
              <tr key={user.id} className="border-b border-dark-borda/50 hover:bg-dark-fundo/30 transition-colors">
                <td className="p-4 font-medium text-slate-200">{user.nickname || 'Sem apelido'}</td>
                <td className="p-4 text-dark-texto">{user.email}</td>
                <td className="p-4">
                  <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold ${user.admin ? 'bg-roxo-claro/10 text-roxo-claro border border-roxo-claro/20' : 'bg-slate-500/10 text-slate-400 border border-slate-500/20'}`}>
                    {user.admin ? <ShieldCheck size={14} /> : <ShieldAlert size={14} />}
                    {user.admin ? 'Administrador' : 'Usuário'}
                  </span>
                </td>
                <td className="p-4 text-right">
                  {/* Formulário invisível para rodar a Server Action */}
                  <form action={toggleAdmin}>
                    <input type="hidden" name="id" value={user.id} />
                    <input type="hidden" name="currentAdmin" value={user.admin?.toString()} />
                    <button 
                      type="submit" 
                      className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                        user.admin 
                          ? 'bg-dark-fundo text-red-400 hover:bg-red-400/10 border border-dark-borda' 
                          : 'bg-dark-fundo text-roxo-claro hover:bg-roxo-claro/10 border border-dark-borda'
                      }`}
                    >
                      {user.admin ? 'Remover Admin' : 'Tornar Admin'}
                    </button>
                  </form>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}