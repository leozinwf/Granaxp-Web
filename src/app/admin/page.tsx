import { createClient } from '@/lib/supabase/server';

export default async function AdminDashboard() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  
  // Buscando o nickname do usuário para dar boas-vindas
  const { data: profile } = await supabase
    .from('users')
    .select('nickname')
    .eq('id', user?.id)
    .single();

  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold mb-2">
        Bem-vindo de volta, <span className="text-roxo-claro">{profile?.nickname || 'Admin'}</span>! 🚀
      </h1>
      <p className="text-dark-texto mb-8">Este é o seu centro de comando do Grana XP.</p>

      {/* Cards de Resumo */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-dark-card border border-dark-borda p-6 rounded-2xl shadow-lg">
          <h3 className="text-dark-texto text-sm font-medium mb-1">Posts Publicados</h3>
          <p className="text-4xl font-bold text-roxo-claro">0</p>
        </div>
        
        <div className="bg-dark-card border border-dark-borda p-6 rounded-2xl shadow-lg">
          <h3 className="text-dark-texto text-sm font-medium mb-1">Artigos em Rascunho</h3>
          <p className="text-4xl font-bold text-slate-100">0</p>
        </div>

        <div className="bg-dark-card border border-dark-borda p-6 rounded-2xl shadow-lg">
          <h3 className="text-dark-texto text-sm font-medium mb-1">Total de Acessos</h3>
          <p className="text-4xl font-bold text-pink-500">--</p>
        </div>
      </div>
    </div>
  );
}