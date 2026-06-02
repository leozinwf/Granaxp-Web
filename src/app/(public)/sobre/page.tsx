'use client';

import { 
  Gamepad2, Shield, Target, Rocket, Star, Code2, 
  Trophy, TrendingUp, Wallet, ArrowRight 
} from 'lucide-react';
import Link from 'next/link';

export default function SobrePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      
      {/* Título fora do Mockup */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-100 mb-4 tracking-tight">
          Conheça o <span className="text-roxo-claro">Sistema</span>
        </h1>
        <p className="text-dark-texto text-lg max-w-2xl mx-auto">
          Descubra a história por trás do Grana XP e veja como transformamos a gestão do seu dinheiro em um jogo real.
        </p>
      </div>

      {/* Mockup do Sistema (A Tela Inicial fake) */}
      <div className="bg-[#0D0D12] rounded-3xl border border-dark-borda shadow-2xl overflow-hidden flex flex-col mx-auto relative group max-w-5xl">
        
        {/* Barra superior estilo Browser (Navegador) */}
        <div className="bg-[#1A1A24] px-4 py-3 border-b border-dark-borda flex items-center justify-between">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          </div>
          <div className="text-xs text-dark-texto font-medium flex items-center gap-2">
            <Shield size={12} className="text-green-500" /> app.granaxp.com.br
          </div>
          <div className="w-12"></div> {/* Espaçador invisível para centralizar */}
        </div>

        {/* Header do App (Idêntico ao sistema real) */}
        <div className="p-6 md:p-8 border-b border-dark-borda bg-dark-card/50 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="w-16 h-16 bg-roxo-claro/10 rounded-2xl border border-roxo-claro/30 flex items-center justify-center shadow-[0_0_15px_rgba(130,10,209,0.2)]">
              <Gamepad2 size={32} className="text-roxo-claro" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-100">Olá, Visitante! 👋</h2>
              <p className="text-dark-texto text-sm">Bem-vindo à demonstração do painel.</p>
            </div>
          </div>

          {/* Fake XP Bar igual a do app */}
          <div className="bg-dark-fundo border border-dark-borda rounded-2xl p-4 w-full md:w-80 flex flex-col gap-2 shadow-inner">
            <div className="flex justify-between items-center text-xs font-bold">
              <span className="text-roxo-claro flex items-center gap-1"><Star size={12} /> Nível 1 (Aprendiz)</span>
              <span className="text-dark-texto">85/100 XP</span>
            </div>
            <div className="h-3 bg-dark-card rounded-full overflow-hidden border border-dark-borda/50">
              <div className="h-full bg-gradient-to-r from-purple-600 to-roxo-claro w-[85%] rounded-full relative">
                <div className="absolute inset-0 bg-white/20 w-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Conteúdo do Dashboard Fake (Cards com a História) */}
        <div className="p-6 md:p-8 bg-dark-fundo grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Coluna Esquerda: A História (Card Maior) */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Card: Origem do Sistema */}
            <div className="bg-dark-card border border-dark-borda rounded-2xl p-6 md:p-8 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Code2 size={150} />
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-4 flex items-center gap-2">
                <Rocket className="text-roxo-claro" /> Como o Grana XP Nasceu
              </h3>
              <div className="space-y-4 text-dark-texto text-sm md:text-base leading-relaxed relative z-10">
                <p>
                  A ideia nasceu de uma frustração simples: a maioria dos aplicativos financeiros parecem sistemas de contabilidade de empresas nos anos 90. São cheios de gráficos brancos que doem os olhos e jargões que ninguém entende.
                </p>
                <p>
                  O conceito mudou quando nos fizemos a pergunta: <strong>"E se cuidar do dinheiro fosse tão recompensador e viciante quanto subir de nível no seu jogo favorito?"</strong>
                </p>
                <p>
                  Criado pelo Leonardo como um projeto independente em São Bernardo do Campo, a plataforma une a paixão por tecnologia e games com a necessidade de organização financeira. Foi assim que trocamos planilhas chatas por um <em>dashboard</em> imersivo, com sistema de experiência, metas e mascotes evolutivos.
                </p>
              </div>
            </div>

            {/* Grid Interno de Pilares */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               {/* Card: Privacidade */}
               <div className="bg-dark-card border border-dark-borda rounded-2xl p-6 shadow-lg hover:border-roxo-claro/50 transition-colors group">
                 <Shield className="text-roxo-claro mb-4 group-hover:scale-110 transition-transform" size={28} />
                 <h4 className="font-bold text-slate-100 mb-2">Segurança em 1º Lugar</h4>
                 <p className="text-xs text-dark-texto leading-relaxed">
                   Não usamos Open Finance e não pedimos a senha do seu banco. Aqui, o registro é totalmente manual, intencional e protegido com criptografia. Apenas você controla os seus dados.
                 </p>
               </div>

               {/* Card: Evolução Visual */}
               <div className="bg-dark-card border border-dark-borda rounded-2xl p-6 shadow-lg hover:border-roxo-claro/50 transition-colors group">
                 <Trophy className="text-roxo-claro mb-4 group-hover:scale-110 transition-transform" size={28} />
                 <h4 className="font-bold text-slate-100 mb-2">Sistema de Progressão</h4>
                 <p className="text-xs text-dark-texto leading-relaxed">
                   Conforme você cadastra receitas, paga contas e atinge metas, seu mascote (O Porquinho) evolui com você, desbloqueando desde o nível "Hacker" até o "Rei dos Investimentos".
                 </p>
               </div>
            </div>

          </div>

          {/* Coluna Direita: Resumo Financeiro Fake e CTA */}
          <div className="space-y-6">
            
            {/* Card: Status Financeiro (Fake) */}
            <div className="bg-dark-card border border-dark-borda rounded-2xl p-6 shadow-lg">
              <h4 className="text-sm font-bold text-dark-texto uppercase tracking-wider mb-4 flex items-center gap-2">
                <Wallet size={16} /> Saldo de Demonstração
              </h4>
              <div className="mb-6">
                <span className="text-3xl font-black text-slate-100">R$ 15,259,37</span>
                <p className="text-xs text-green-400 font-bold mt-1 flex items-center gap-1">
                  <TrendingUp size={12} /> XP farmado com sucesso
                </p>
              </div>
              <ul className="space-y-3 text-sm text-dark-texto">
                <li className="flex justify-between items-center bg-dark-fundo p-3 rounded-xl border border-dark-borda">
                  <span className="flex items-center gap-2"><Target size={14} className="text-roxo-claro" /> Metas Concluídas</span>
                  <span className="text-green-400 font-bold">87%</span>
                </li>
                <li className="flex justify-between items-center bg-dark-fundo p-3 rounded-xl border border-dark-borda">
                  <span className="flex items-center gap-2"><Star size={14} className="text-yellow-500" /> Insígnias Coletadas</span>
                  <span className="text-slate-100 font-bold">7 / 15</span>
                </li>
              </ul>
            </div>

            {/* Card: Call to Action (Entrar no App Real) */}
            <div className="bg-gradient-to-br from-roxo-claro/10 to-dark-card border border-roxo-claro/30 rounded-2xl p-6 shadow-[0_0_20px_rgba(130,10,209,0.15)] flex flex-col items-center text-center">
              <Rocket size={40} className="text-roxo-claro mb-4 animate-bounce" />
              <h4 className="font-bold text-slate-100 mb-2">O Jogo Vai Começar</h4>
              <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                Pare de sofrer com planilhas chatas. Crie sua conta gratuitamente e comece a dominar o seu mês.
              </p>
              <Link 
                href="https://app.granaxp.com.br" 
                className="w-full bg-roxo-claro hover:bg-roxo-hover text-white py-3 rounded-xl font-bold flex justify-center items-center gap-2 transition-all shadow-[0_0_15px_rgba(130,10,209,0.4)] hover:-translate-y-1"
              >
                Acessar o Grana XP <ArrowRight size={16} />
              </Link>
            </div>

          </div>

        </div>
      </div>
      
    </div>
  );
}