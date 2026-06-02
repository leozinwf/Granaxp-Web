import { redirect } from 'next/navigation';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/server';
import { LayoutDashboard, FileText, LogOut } from 'lucide-react';

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect('/login');
  }

  const { data: profile } = await supabase
    .from('users')
    .select('admin, nickname')
    .eq('id', user.id)
    .single();

  if (!profile?.admin) {
    redirect('/');
  }

  return (
    <div className="min-h-screen bg-dark-fundo text-slate-100 flex">
      
      {/* Sidebar do Painel */}
      <aside className="w-64 bg-dark-card border-r border-dark-borda flex flex-col">
        <div className="p-6 border-b border-dark-borda">
          <h2 className="text-xl font-bold text-slate-100">
            Admin <span className="text-roxo-claro">XP</span>
          </h2>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          <Link href="/admin" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-roxo-claro/10 text-roxo-claro font-medium transition-colors">
            <LayoutDashboard size={20} />
            Dashboard
          </Link>
          <Link href="/admin/blog" className="flex items-center gap-3 px-4 py-3 rounded-xl text-dark-texto hover:bg-dark-borda/50 hover:text-slate-100 transition-colors">
            <FileText size={20} />
            Posts do Blog
          </Link>
        </nav>

        {/* Botão de Logout usando Server Action */}
        <div className="p-4 border-t border-dark-borda">
          <form action={async () => {
            'use server';
            const supabase = await createClient();
            await supabase.auth.signOut();
            redirect('/login');
          }}>
            <button type="submit" className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-red-400 hover:bg-red-400/10 font-medium transition-colors">
              <LogOut size={20} />
              Sair do Painel
            </button>
          </form>
        </div>
      </aside>

      {/* Conteúdo Central que muda dependendo da página */}
      <main className="flex-1 p-8 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}