'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Gamepad2, Zap, Monitor, Smartphone, Medal, Flame, ArrowRight, 
  ShieldCheck, Target, TrendingUp, CheckCircle, Users, ChevronDown, 
  Lock, Moon, Wallet, PieChart, Trophy
} from 'lucide-react';

// ============================================================================
// 🎯 ÁREA DE CONFIGURAÇÃO DE IMAGENS
// Substitua pelas suas imagens reais do sistema
// ============================================================================
const IMAGENS = {
  dashboardWeb: "https://placehold.co/1200x675/1A1A24/820AD1?text=Print+do+Sistema+Web+(PC)",
  dashboardMobile: "https://placehold.co/600x1200/1A1A24/820AD1?text=Print+do+App+Mobile",
  avatar: "https://placehold.co/150x150/1A1A24/820AD1?text=Avatar",
  insignia1: "https://placehold.co/100x100/1A1A24/FF1493?text=Badge+1",
  insignia2: "https://placehold.co/100x100/1A1A24/F59E0B?text=Badge+2",
  insignia3: "https://placehold.co/100x100/1A1A24/10B981?text=Badge+3",
};

export default function Home() {
  const [faqAberto, setFaqAberto] = useState<number | null>(null);

  const faqItems = [
    { q: "O Grana XP é realmente gratuito?", a: "Sim! O plano essencial, que permite registrar contas, ganhar XP e evoluir seu mascote, é e sempre será 100% gratuito. Não tem pegadinha." },
    { q: "Vocês pedem a senha do meu banco?", a: "Nunca. Nós não utilizamos Open Finance e não nos conectamos à sua conta bancária. Todo o controle é feito de forma manual e intencional por você, garantindo privacidade absoluta." },
    { q: "Posso acessar pelo celular e pelo PC?", a: "Com certeza! O Grana XP é responsivo. Funciona perfeitamente no navegador do seu computador e pode ser instalado no seu celular (como um PWA) direto pela tela do navegador." }
  ];

  return (
    <div className="overflow-hidden">
      {/* =========================================
          1. HERO SECTION (O TOPO)
      ========================================= */}
      <header className='flex flex-col items-center text-center px-4 pt-24 pb-12 max-w-6xl mx-auto relative'>
        <div className='absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-roxo-claro/20 blur-[150px] rounded-full pointer-events-none -z-10'></div>

        <div className='inline-flex items-center gap-2 border border-roxo-claro/30 bg-roxo-claro/10 text-roxo-claro px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase mb-8 backdrop-blur-sm'>
          <Zap size={14} className="animate-pulse" />
          A Revolução do Controle Financeiro
        </div>
        
        <h1 className='text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-[1.1] z-10'>
          Suas finanças como um <br className='hidden md:block'/>
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-roxo-claro via-purple-400 to-pink-500'>Jogo na Vida Real</span>
        </h1>
        
        <p className='text-lg md:text-xl text-dark-texto max-w-2xl mb-10 leading-relaxed z-10'>
          Suba de nível, ganhe insígnias, conclua missões e veja o seu patrimônio evoluir. Fuja das planilhas chatas e assuma o controle do seu dinheiro brincando.
        </p>
        
        <div className='flex flex-col sm:flex-row gap-4 w-full sm:w-auto z-10 mb-20'>
          <Link href='https://app.granaxp.com.br/' className='bg-roxo-claro hover:bg-roxo-hover text-white px-8 py-4 rounded-xl font-black text-lg transition-all shadow-[0_0_20px_rgba(130,10,209,0.4)] hover:shadow-[0_0_35px_rgba(130,10,209,0.6)] hover:-translate-y-1 flex items-center justify-center gap-2'>
            <Gamepad2 size={24} />
            Criar Conta Grátis
          </Link>
          <a href='#como-funciona' className='bg-dark-card hover:bg-dark-borda text-white border border-dark-borda px-8 py-4 rounded-xl font-bold text-lg transition-all hover:-translate-y-1 flex items-center justify-center'>
            Ver como funciona
          </a>
        </div>

        {/* Mockup do Sistema WEB */}
        <div className="relative w-full max-w-5xl mx-auto z-20 group perspective-[1000px]">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D12] via-transparent to-transparent z-10 bottom-0 top-1/2"></div>
          <img 
            src={IMAGENS.dashboardWeb} 
            alt="Dashboard do Grana XP no Computador" 
            className="w-full h-auto rounded-t-2xl md:rounded-t-[2rem] border-t-4 border-x-4 border-dark-borda shadow-2xl object-cover transform transition-transform duration-700 hover:scale-[1.02]"
          />
        </div>
      </header>

      {/* =========================================
          2. SOCIAL PROOF (EMPRESAS / TECNOLOGIAS)
      ========================================= */}
      <div className="border-y border-dark-borda/50 bg-dark-card/30 py-6 relative z-30">
        <div className="max-w-6xl mx-auto px-4 flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale">
           {/* Aqui você pode colocar logos de tecnologias ou sites que citaram. Ex: Supabase, Vercel, Next.js */}
           <span className="font-black text-xl tracking-widest text-slate-400">SUPABASE</span>
           <span className="font-black text-xl tracking-widest text-slate-400">VERCEL</span>
           <span className="font-black text-xl tracking-widest text-slate-400">NEXT.JS</span>
           <span className="font-black text-xl tracking-widest text-slate-400">REACT</span>
        </div>
      </div>

      {/* =========================================
          3. PASSO A PASSO (COMO FUNCIONA)
      ========================================= */}
      <section id="como-funciona" className='py-24 px-4 max-w-6xl mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-5xl font-black mb-4'>A jornada do herói <span className='text-roxo-claro'>financeiro.</span></h2>
          <p className='text-dark-texto text-lg'>Três passos simples para transformar sua relação com o dinheiro.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Linha conectora (Some no mobile) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-roxo-claro/0 via-roxo-claro/30 to-roxo-claro/0 z-0"></div>

          <div className="relative z-10 flex flex-col items-center text-center space-y-4">
            <div className="w-24 h-24 rounded-full bg-dark-card border-4 border-dark-fundo shadow-[0_0_20px_rgba(130,10,209,0.2)] flex items-center justify-center text-3xl font-black text-roxo-claro">1</div>
            <h3 className="text-xl font-bold text-slate-100">Crie seu Perfil</h3>
            <p className="text-dark-texto text-sm">Defina seus objetivos, escolha seu nickname e prepare-se para iniciar o jogo.</p>
          </div>

          <div className="relative z-10 flex flex-col items-center text-center space-y-4">
            <div className="w-24 h-24 rounded-full bg-roxo-claro border-4 border-dark-fundo shadow-[0_0_30px_rgba(130,10,209,0.5)] flex items-center justify-center text-3xl font-black text-white">2</div>
            <h3 className="text-xl font-bold text-slate-100">Cumpra Missões</h3>
            <p className="text-dark-texto text-sm">Registre seus ganhos e gastos mensais. Manter tudo no verde é a sua missão principal.</p>
          </div>

          <div className="relative z-10 flex flex-col items-center text-center space-y-4">
            <div className="w-24 h-24 rounded-full bg-dark-card border-4 border-dark-fundo shadow-[0_0_20px_rgba(130,10,209,0.2)] flex items-center justify-center text-3xl font-black text-pink-500">3</div>
            <h3 className="text-xl font-bold text-slate-100">Suba de Nível</h3>
            <p className="text-dark-texto text-sm">Acumule XP, evolua seu mascote e desbloqueie insígnias para mostrar quem manda.</p>
          </div>
        </div>
      </section>

      {/* =========================================
          4. BENTO GRID (FUNCIONALIDADES)
      ========================================= */}
      <section className='py-20 px-4 max-w-6xl mx-auto'>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          
          {/* Card Gigante 1 */}
          <div className="md:col-span-2 md:row-span-2 bg-dark-card/40 backdrop-blur-sm border border-dark-borda rounded-3xl p-8 hover:border-roxo-claro/50 transition-all flex flex-col justify-between group overflow-hidden relative">
            <div className="absolute -right-20 -bottom-20 opacity-10 group-hover:scale-110 transition-transform duration-700">
              <PieChart size={300} />
            </div>
            <div className="relative z-10">
              <div className='w-14 h-14 bg-roxo-claro/10 rounded-2xl flex items-center justify-center text-roxo-claro mb-6'>
                <Target size={28} />
              </div>
              <h3 className='text-3xl font-black mb-3 text-slate-100'>Dashboard Completo</h3>
              <p className='text-dark-texto leading-relaxed max-w-md'>Visão geral de receitas, despesas, objetivos e faturas pendentes. Tudo em uma única tela, sem complicação e com dados atualizados em tempo real.</p>
            </div>
          </div>

          {/* Card Pequeno 1 */}
          <div className="bg-dark-card/40 backdrop-blur-sm border border-dark-borda rounded-3xl p-8 hover:border-pink-500/50 transition-all group">
            <TrendingUp className="text-pink-500 mb-4 group-hover:-translate-y-1 transition-transform" size={32} />
            <h3 className='text-xl font-bold mb-2 text-slate-100'>Metas de Vida</h3>
            <p className='text-dark-texto text-sm'>Guarde grana com propósito. Crie cofres virtuais para viagens ou compras.</p>
          </div>

          {/* Card Pequeno 2 */}
          <div className="bg-dark-card/40 backdrop-blur-sm border border-dark-borda rounded-3xl p-8 hover:border-green-500/50 transition-all group">
            <Lock className="text-green-500 mb-4 group-hover:-translate-y-1 transition-transform" size={32} />
            <h3 className='text-xl font-bold mb-2 text-slate-100'>100% Seguro</h3>
            <p className='text-dark-texto text-sm'>Sem Open Finance. Você insere os dados, você tem o controle total. Zero risco.</p>
          </div>

          {/* Card Largo 1 */}
          <div className="md:col-span-2 bg-dark-card/40 backdrop-blur-sm border border-dark-borda rounded-3xl p-8 hover:border-blue-500/50 transition-all group flex items-center justify-between overflow-hidden">
            <div>
              <Moon className="text-blue-500 mb-4 group-hover:rotate-12 transition-transform" size={32} />
              <h3 className='text-xl font-bold mb-2 text-slate-100'>Dark Mode Nativo</h3>
              <p className='text-dark-texto text-sm max-w-xs'>Uma interface pensada para não cansar os seus olhos, perfeita para quem passa horas no PC.</p>
            </div>
            <div className="hidden md:block w-32 h-32 bg-blue-500/10 rounded-full blur-[30px]"></div>
          </div>

          {/* Card Pequeno 3 */}
          <div className="bg-dark-card/40 backdrop-blur-sm border border-dark-borda rounded-3xl p-8 hover:border-yellow-500/50 transition-all group">
            <Wallet className="text-yellow-500 mb-4 group-hover:-translate-y-1 transition-transform" size={32} />
            <h3 className='text-xl font-bold mb-2 text-slate-100'>Multi-carteiras</h3>
            <p className='text-dark-texto text-sm'>Em breve: Controle várias contas e cartões em um só lugar.</p>
          </div>

        </div>
      </section>

      {/* =========================================
          5. GAMIFICAÇÃO & AVATAR (MANTIDO)
      ========================================= */}
      <section className='py-24 px-4 bg-[#111118] border-y border-dark-borda relative overflow-hidden'>
        <div className='absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 blur-[120px] rounded-full pointer-events-none'></div>

        <div className='max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
          <div className='space-y-8 z-10'>
            <div className='inline-flex items-center gap-2 text-pink-500 font-bold uppercase tracking-wider text-sm bg-pink-500/10 px-4 py-2 rounded-full'>
              <Trophy size={16} /> O Seu Personagem
            </div>
            <h2 className='text-4xl md:text-5xl font-black leading-tight tracking-tight text-slate-100'>
              Evolua seu <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-roxo-claro'>Avatar</span> e colecione conquistas.
            </h2>
            <p className='text-lg text-dark-texto leading-relaxed'>
              Ao manter suas contas em dia, você ganha <strong>Pontos de Experiência (XP)</strong>, sobe de nível e desbloqueia novos visuais para o seu mascote.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="bg-dark-card border border-dark-borda p-4 rounded-2xl flex items-start gap-4">
                <div className="p-2 bg-yellow-500/10 rounded-lg text-yellow-500"><Flame size={20}/></div>
                <div>
                  <h4 className="font-bold text-slate-200 text-sm">Ofensiva (Streak)</h4>
                  <p className="text-xs text-dark-texto mt-1">Acesse diariamente para multiplicar seus ganhos de XP.</p>
                </div>
              </div>
              <div className="bg-dark-card border border-dark-borda p-4 rounded-2xl flex items-start gap-4">
                <div className="p-2 bg-roxo-claro/10 rounded-lg text-roxo-claro"><Medal size={20}/></div>
                <div>
                  <h4 className="font-bold text-slate-200 text-sm">Insígnias Épicas</h4>
                  <p className="text-xs text-dark-texto mt-1">Cumpra missões secretas para platinar o seu perfil.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className='relative z-10 flex justify-center lg:justify-end'>
            <div className='w-full max-w-md bg-dark-card border border-dark-borda rounded-[2rem] p-8 shadow-2xl shadow-roxo-claro/10'>
              <div className="flex items-center gap-4 mb-8">
                <div className="relative">
                  <img src={IMAGENS.avatar} alt="Avatar" className="w-20 h-20 rounded-full border-4 border-dark-fundo shadow-lg object-cover bg-dark-fundo" />
                  <div className="absolute -bottom-2 -right-2 bg-yellow-500 text-black text-[10px] font-black px-2 py-1 rounded-full border-2 border-dark-card flex items-center gap-1">
                    <Flame size={10} fill="currentColor" /> 12
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-black text-slate-100">Ninja das Finanças</h3>
                  <p className="text-roxo-claro font-bold text-sm">Nível 43</p>
                </div>
              </div>
              <div className='space-y-3 mb-8 bg-dark-fundo p-4 rounded-2xl border border-dark-borda'>
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-slate-300">Progresso de XP</span>
                  <span className="text-roxo-claro">8.450 / 10.000</span>
                </div>
                <div className='h-3 w-full bg-dark-card rounded-full overflow-hidden border border-dark-borda/50'>
                  <div className='h-full bg-gradient-to-r from-purple-600 to-roxo-claro w-[84%] relative rounded-full'>
                    <div className="absolute inset-0 bg-white/20 w-full animate-pulse"></div>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-xs font-bold text-dark-texto uppercase tracking-wider mb-4">Últimas Conquistas</h4>
                <div className='grid grid-cols-3 gap-4'>
                  <div className='aspect-square bg-dark-fundo rounded-2xl border border-dark-borda flex items-center justify-center p-2 hover:border-pink-500 transition-colors group cursor-pointer'>
                    <img src={IMAGENS.insignia1} alt="Insígnia 1" title="Insígnia 1" className="w-full h-full object-contain group-hover:scale-110 transition-transform" />
                  </div>
                  <div className='aspect-square bg-dark-fundo rounded-2xl border border-roxo-claro flex items-center justify-center p-2 shadow-[0_0_15px_rgba(130,10,209,0.2)] group cursor-pointer'>
                    <img src={IMAGENS.insignia2} alt="Insígnia 2" title="Insígnia 2" className="w-full h-full object-contain group-hover:scale-110 transition-transform" />
                  </div>
                  <div className='aspect-square bg-dark-fundo rounded-2xl border border-dark-borda flex items-center justify-center p-2 hover:border-green-500 transition-colors group cursor-pointer'>
                    <img src={IMAGENS.insignia3} alt="Insígnia 3" title="Insígnia 3" className="w-full h-full object-contain group-hover:scale-110 transition-transform grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          6. MOBILE E COMUNIDADE (DISCORD)
      ========================================= */}
      <section className='py-24 px-4 max-w-6xl mx-auto'>
        <div className='flex flex-col md:flex-row-reverse items-center gap-16 mb-24'>
          <div className='flex-1 space-y-6 text-center md:text-left'>
            <h2 className='text-3xl md:text-5xl font-black leading-tight text-slate-100'>
              Controle na <span className='text-roxo-claro'>palma da mão.</span>
            </h2>
            <p className='text-lg text-dark-texto leading-relaxed'>
              O Grana XP é um PWA moderno. Rode liso no navegador do PC ou instale no seu celular Android/iOS como um aplicativo nativo.
            </p>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-4">
              <div className="flex items-center gap-2 bg-dark-card border border-dark-borda px-4 py-2 rounded-xl text-sm font-bold text-slate-300"><Monitor size={18} className="text-roxo-claro" /> Web Desktop</div>
              <div className="flex items-center gap-2 bg-dark-card border border-dark-borda px-4 py-2 rounded-xl text-sm font-bold text-slate-300"><Smartphone size={18} className="text-roxo-claro" /> Mobile App</div>
            </div>
          </div>
          <div className='flex-1 w-full flex justify-center'>
            <div className="relative">
              <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-80 bg-roxo-claro/30 blur-[80px] rounded-full pointer-events-none'></div>
              <div className="relative bg-black rounded-[2.5rem] p-3 border-4 border-dark-borda shadow-2xl w-64 md:w-72 transform -rotate-6 hover:rotate-0 transition-transform duration-500">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-20"></div>
                <img src={IMAGENS.dashboardMobile} alt="App Mobile" className="w-full h-auto rounded-[2rem] object-cover bg-dark-fundo" />
              </div>
            </div>
          </div>
        </div>

        {/* Banner Discord */}
        <div className="bg-[#5865F2]/10 border border-[#5865F2]/30 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 opacity-10">
             <Users size={200} />
          </div>
          <div className="relative z-10 space-y-4 text-center md:text-left">
            <h3 className="text-3xl font-black text-slate-100">Não jogue sozinho!</h3>
            <p className="text-[#a5b0ff] max-w-lg">Participe da nossa comunidade no Discord. Dê sugestões, tire dúvidas e converse com outros jogadores sobre educação financeira.</p>
          </div>
          <div className="relative z-10 w-full md:w-auto">
            <a href="https://discord.gg/cyHqhhutCD" target="_blank" rel="noreferrer noopener" className="w-full md:w-auto bg-[#5865F2] hover:bg-[#4752C4] text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg hover:-translate-y-1">
              <Users size={20} /> Entrar no Servidor
            </a>
          </div>
        </div>
      </section>

      {/* =========================================
          7. PLANOS (GERANDO HYPE)
      ========================================= */}
      <section className='py-20 px-4 max-w-5xl mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-black mb-4'>Preço simples. <span className='text-roxo-claro'>Sem surpresas.</span></h2>
          <p className='text-dark-texto text-lg'>Comece agora mesmo sem colocar a mão no bolso.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-dark-card border border-roxo-claro rounded-3xl p-8 shadow-[0_0_30px_rgba(130,10,209,0.15)] relative">
            <div className="absolute top-0 right-8 bg-roxo-claro text-white text-xs font-bold px-3 py-1 rounded-b-lg">MAIS ESCOLHIDO</div>
            <h3 className="text-2xl font-bold text-slate-100 mb-2">Essencial</h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-black text-white">R$ 0</span>
              <span className="text-dark-texto">/para sempre</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-slate-300"><CheckCircle size={18} className="text-roxo-claro" /> Registro ilimitado de contas</li>
              <li className="flex items-center gap-3 text-slate-300"><CheckCircle size={18} className="text-roxo-claro" /> Dashboard completo</li>
              <li className="flex items-center gap-3 text-slate-300"><CheckCircle size={18} className="text-roxo-claro" /> Ganho de XP e Insígnias</li>
              <li className="flex items-center gap-3 text-slate-300"><CheckCircle size={18} className="text-roxo-claro" /> Acesso à comunidade</li>
            </ul>
            <Link href="https://app.granaxp.com.br" className="block w-full text-center bg-roxo-claro hover:bg-roxo-hover text-white py-3 rounded-xl font-bold transition-colors">Criar Conta Grátis</Link>
          </div>

          <div className="bg-dark-fundo border border-dark-borda rounded-3xl p-8 opacity-70 grayscale relative overflow-hidden">
            <div className="absolute inset-0 bg-dark-fundo/40 z-10 flex items-center justify-center backdrop-blur-[2px]">
              <span className="bg-dark-card border border-dark-borda px-6 py-2 rounded-full font-bold text-slate-200 shadow-xl">🚀 Em Breve</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-100 mb-2">Lendário (Premium)</h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-black text-white">???</span>
              <span className="text-dark-texto">/mês</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-slate-300"><CheckCircle size={18} /> Multi-carteiras e Cartões</li>
              <li className="flex items-center gap-3 text-slate-300"><CheckCircle size={18} /> Metas ilimitadas</li>
              <li className="flex items-center gap-3 text-slate-300"><CheckCircle size={18} /> Temas exclusivos pro painel</li>
              <li className="flex items-center gap-3 text-slate-300"><CheckCircle size={18} /> Relatórios avançados</li>
            </ul>
            <button disabled className="w-full bg-dark-card border border-dark-borda text-dark-texto py-3 rounded-xl font-bold cursor-not-allowed">Aguarde as novidades</button>
          </div>
        </div>
      </section>

      {/* =========================================
          8. FAQ RÁPIDO
      ========================================= */}
      <section className='py-20 px-4 max-w-4xl mx-auto'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl font-black mb-4'>Perguntas Frequentes</h2>
        </div>
        <div className="space-y-4">
          {faqItems.map((item, index) => {
            const isAberto = faqAberto === index;
            return (
              <div key={index} className="bg-dark-card border border-dark-borda rounded-2xl overflow-hidden transition-all duration-200">
                <button
                  onClick={() => setFaqAberto(isAberto ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left text-slate-200 font-bold hover:text-white transition-colors"
                >
                  <span>{item.q}</span>
                  <ChevronDown size={20} className={`text-roxo-claro transform transition-transform duration-200 ${isAberto ? 'rotate-180' : ''}`} />
                </button>
                <div className={`transition-all duration-200 ease-in-out overflow-hidden ${isAberto ? 'max-h-40 border-t border-dark-borda/50' : 'max-h-0'}`}>
                  <p className="p-6 text-dark-texto text-sm leading-relaxed bg-dark-fundo/50">{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* =========================================
          9. CTA FINAL
      ========================================= */}
      <section className='py-20 px-4 pb-32'>
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-dark-card to-[#0D0D12] border border-roxo-claro/30 rounded-3xl p-12 md:p-16 text-center shadow-[0_0_50px_rgba(130,10,209,0.1)] relative overflow-hidden">
          <div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-roxo-claro to-transparent'></div>
          
          <h2 className="text-3xl md:text-5xl font-black text-slate-100 mb-6">Pronto para a primeira missão?</h2>
          <p className="text-dark-texto text-lg mb-10 max-w-2xl mx-auto">
            Crie sua conta agora mesmo, ganhe seu primeiro avatar e descubra que gerenciar dinheiro pode ser incrivelmente divertido.
          </p>
          <Link 
            href="https://app.granaxp.com.br/" 
            className="inline-flex items-center gap-3 bg-roxo-claro hover:bg-roxo-hover text-white px-10 py-5 rounded-2xl font-black text-xl transition-all shadow-[0_0_30px_rgba(130,10,209,0.4)] hover:shadow-[0_0_50px_rgba(130,10,209,0.7)] hover:-translate-y-1"
          >
            Criar Conta Gratuitamente <ArrowRight size={24} />
          </Link>
        </div>
      </section>
    </div>
  );
}