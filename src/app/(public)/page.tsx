import Link from 'next/link';
import { Trophy, Target, TrendingUp, ShieldCheck, Gamepad2, Zap } from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* 1. Hero Section */}
      <header className='flex flex-col items-center text-center px-6 pt-24 pb-20 max-w-5xl mx-auto relative'>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-roxo-claro/20 blur-[120px] rounded-full pointer-events-none'></div>

        <div className='inline-flex items-center gap-2 border border-roxo-claro/30 bg-roxo-claro/10 text-roxo-claro px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase mb-8 backdrop-blur-sm'>
          <Zap size={14} className="animate-pulse" />
          Transforme sua vida financeira
        </div>
        
        <h1 className='text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight z-10'>
          Suas finanças como um <br className='hidden md:block'/>
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-roxo-claro to-pink-500'>Jogo na Vida Real</span>
        </h1>
        
        <p className='text-lg md:text-xl text-dark-texto max-w-2xl mb-12 leading-relaxed z-10'>
          O Grana XP gamifica o seu controle financeiro. Suba de nível, ganhe insígnias, conclua missões e conquiste a sua independência financeira enquanto se diverte.
        </p>
        
        <div className='flex flex-col sm:flex-row gap-4 w-full sm:w-auto z-10'>
          <Link href='https://grana-xp.vercel.app/' className='bg-roxo-claro hover:bg-roxo-hover text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg shadow-roxo-claro/20 hover:-translate-y-1 flex items-center justify-center gap-2'>
            <Gamepad2 size={20} />
            Começar a Jogar
          </Link>
          <Link href='#funcionalidades' className='bg-dark-card hover:bg-dark-borda text-white border border-dark-borda px-8 py-4 rounded-full font-bold text-lg transition-all hover:-translate-y-1'>
            Como Funciona?
          </Link>
        </div>
      </header>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-dark-borda to-transparent my-8"></div>

      {/* 2. Funcionalidades */}
      <section id="funcionalidades" className='py-20 px-6 max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>Controle total, <span className='text-roxo-claro'>zero tédio</span></h2>
          <p className='text-dark-texto max-w-2xl mx-auto'>Esqueça as planilhas monótonas. Aqui cada centavo economizado te deixa mais forte.</p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div className='bg-dark-card border border-dark-borda p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 shadow-xl'>
            <div className='w-14 h-14 bg-roxo-claro/10 rounded-xl flex items-center justify-center text-roxo-claro mb-6'>
              <Target size={28} />
            </div>
            <h3 className='text-xl font-bold mb-3'>Gestão Inteligente</h3>
            <p className='text-dark-texto leading-relaxed'>Registre suas receitas e despesas com facilidade. Acompanhe seus gastos diários e saiba exatamente para onde seu dinheiro está indo.</p>
          </div>

          <div className='bg-dark-card border border-dark-borda p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 shadow-xl relative overflow-hidden'>
            <div className='absolute top-0 right-0 w-32 h-32 bg-pink-500/5 blur-[50px] rounded-full'></div>
            <div className='w-14 h-14 bg-pink-500/10 rounded-xl flex items-center justify-center text-pink-500 mb-6'>
              <TrendingUp size={28} />
            </div>
            <h3 className='text-xl font-bold mb-3'>Metas e Investimentos</h3>
            <p className='text-dark-texto leading-relaxed'>Defina objetivos financeiros, acompanhe sua carteira de investimentos e veja seu patrimônio multiplicar ao longo do tempo.</p>
          </div>

          <div className='bg-dark-card border border-dark-borda p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 shadow-xl'>
            <div className='w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-500 mb-6'>
              <ShieldCheck size={28} />
            </div>
            <h3 className='text-xl font-bold mb-3'>Segurança em 1º Lugar</h3>
            <p className='text-dark-texto leading-relaxed'>Seus dados estão protegidos com criptografia de ponta. Faça seu controle financeiro com total privacidade e tranquilidade.</p>
          </div>
        </div>
      </section>

      {/* 3. Gamificação Section */}
      <section className='py-20 px-6 bg-dark-card/50 border-y border-dark-borda'>
        <div className='max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12'>
          <div className='flex-1 space-y-6'>
            <div className='inline-flex items-center gap-2 text-pink-500 font-bold uppercase tracking-wider text-sm'>
              <Trophy size={16} /> O Diferencial
            </div>
            <h2 className='text-3xl md:text-5xl font-bold leading-tight'>
              Evolua seu <span className='text-roxo-claro'>Avatar</span> e Conquiste o Topo
            </h2>
            <p className='text-lg text-dark-texto leading-relaxed'>
              Cada transação positiva e meta batida rende <strong>XP</strong>. Acumule pontos para evoluir sua conta, desbloquear Insígnias exclusivas (como Aprendiz, Guardião e Lenda) e mostre que você domina as suas finanças.
            </p>
            <ul className='space-y-4 mt-6'>
              <li className='flex items-center gap-3 text-slate-200'>
                <div className='w-8 h-8 rounded-full bg-roxo-claro/20 flex items-center justify-center text-roxo-claro'>✓</div>
                Missões diárias e semanais
              </li>
              <li className='flex items-center gap-3 text-slate-200'>
                <div className='w-8 h-8 rounded-full bg-roxo-claro/20 flex items-center justify-center text-roxo-claro'>✓</div>
                Ranking de melhores investidores
              </li>
              <li className='flex items-center gap-3 text-slate-200'>
                <div className='w-8 h-8 rounded-full bg-roxo-claro/20 flex items-center justify-center text-roxo-claro'>✓</div>
                Avatares exclusivos para os níveis mais altos
              </li>
            </ul>
          </div>
          
          <div className='flex-1 w-full flex justify-center relative'>
            <div className='relative w-full max-w-sm bg-dark-fundo border-2 border-dark-borda rounded-3xl p-6 shadow-2xl shadow-roxo-claro/20 transform rotate-2 hover:rotate-0 transition-transform duration-500'>
              <div className='flex justify-between items-center mb-8 border-b border-dark-borda pb-4'>
                <div>
                  <p className='text-dark-texto text-sm'>Nível Atual</p>
                  <p className='text-2xl font-bold text-roxo-claro'>Lvl 42</p>
                </div>
                <div className='bg-dark-card px-4 py-2 rounded-full border border-dark-borda'>
                  <span className='text-pink-500 font-bold text-sm'>Mestre do Ouro</span>
                </div>
              </div>
              <div className='space-y-4'>
                <div className='h-4 w-full bg-dark-card rounded-full overflow-hidden'>
                  <div className='h-full bg-gradient-to-r from-roxo-claro to-pink-500 w-3/4'></div>
                </div>
                <p className='text-right text-xs text-dark-texto'>7.500 / 10.000 XP</p>
              </div>
              <div className='mt-8 grid grid-cols-3 gap-3'>
                <div className='h-20 bg-dark-card rounded-xl border border-dark-borda flex items-center justify-center opacity-50'><Trophy className="text-dark-texto" /></div>
                <div className='h-20 bg-dark-card rounded-xl border border-roxo-claro flex items-center justify-center shadow-[0_0_15px_rgba(130,10,209,0.2)]'><Trophy className="text-roxo-claro" /></div>
                <div className='h-20 bg-dark-card rounded-xl border border-dark-borda flex items-center justify-center opacity-50'><Trophy className="text-dark-texto" /></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}