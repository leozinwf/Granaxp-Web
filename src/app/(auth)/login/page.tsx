import Link from 'next/link';
import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';

export default async function Login(props: { searchParams: Promise<{ erro?: string }> }) {
  const searchParams = await props.searchParams;

  async function signIn(formData: FormData) {
    'use server';
    
    const email = (formData.get('email') as string)?.trim();
    const password = formData.get('password') as string;
    
    const supabase = await createClient();
    
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      console.error("Motivo da recusa do Supabase:", error.message); 
      redirect('/login?erro=true');
    }
    
    redirect('/admin');
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-dark-fundo px-4 font-sans">
      <div className="w-full max-w-md bg-dark-card border border-dark-borda p-8 rounded-2xl shadow-2xl relative z-10">
        
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-100 mb-2">
            Admin <span className="text-roxo-claro">GranaXP</span>
          </h1>
          <p className="text-dark-texto">Acesse o painel para gerenciar o blog.</p>
        </div>

        {searchParams?.erro && (
          <div className="mb-6 p-3 bg-red-500/10 border border-red-500/50 rounded-lg text-red-400 text-sm text-center">
            E-mail ou senha incorretos.
          </div>
        )}
        
        <form action={signIn} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-dark-texto mb-2">E-mail</label>
            <input 
              type="email" name="email" placeholder="admin@granaxp.com" 
              className="w-full px-4 py-3 rounded-xl bg-dark-fundo border border-dark-borda text-slate-100 focus:outline-none focus:border-roxo-claro focus:ring-1 focus:ring-roxo-claro transition-all" 
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-dark-texto mb-2">Senha</label>
            <input 
              type="password" name="password" placeholder="••••••••" 
              className="w-full px-4 py-3 rounded-xl bg-dark-fundo border border-dark-borda text-slate-100 focus:outline-none focus:border-roxo-claro focus:ring-1 focus:ring-roxo-claro transition-all" 
              required
            />
          </div>
          <button type="submit" className="w-full bg-roxo-claro hover:bg-roxo-hover text-white font-bold py-3 rounded-xl transition-all shadow-[0_0_15px_rgba(130,10,209,0.3)] hover:shadow-[0_0_25px_rgba(130,10,209,0.5)]">
            Entrar no Painel
          </button>
        </form>
        
        <div className="mt-8 text-center">
          <Link href="/" className="text-sm text-dark-texto hover:text-roxo-claro transition-colors">
            &larr; Voltar para a página inicial
          </Link>
        </div>
      </div>
    </div>
  );
}