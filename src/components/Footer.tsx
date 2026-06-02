import Link from 'next/link';
import { Gamepad2, Terminal, ArrowRight, MessageSquare, MapPin } from 'lucide-react';

export default function Footer() {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="relative border-t border-dark-borda mt-20 bg-[#0D0D12] overflow-hidden">
      
      {/* Fundo cibernético sutil (Grid) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#820ad10a_1px,transparent_1px),linear-gradient(to_bottom,#820ad10a_1px,transparent_1px)] bg-[size:24px_24px] -z-10"></div>

      {/* CTA Principal (Topo do Footer) */}
      <div className="py-16 px-4 text-center max-w-4xl mx-auto relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-roxo-claro/10 border border-roxo-claro/20 text-roxo-claro text-xs font-bold mb-6">
          <Terminal size={14} /> Sistema Online
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-100 mb-6 tracking-tight">
          Pronto para o próximo nível?
        </h2>
        <p className="text-dark-texto text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
          Junte-se a nós e comece a farmar XP transformando sua relação com o dinheiro hoje mesmo.
        </p>
        <Link 
          href="https://app.granaxp.com.br/" 
          className="inline-flex items-center gap-2 bg-roxo-claro hover:bg-roxo-hover text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-[0_0_20px_rgba(130,10,209,0.3)] hover:shadow-[0_0_35px_rgba(130,10,209,0.5)] hover:-translate-y-1"
        >
          Criar Conta Grátis <ArrowRight size={20} />
        </Link>
      </div>

      {/* Grid de Navegação de Links */}
      <div className="border-t border-dark-borda/50 pt-16 pb-8 px-6 max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16">
          
          {/* Coluna 1: Marca e Bio (Ocupa mais espaço) */}
          <div className="md:col-span-4 lg:col-span-5">
            <Link href="/" className="flex items-center gap-2 text-2xl font-black text-slate-100 mb-4 hover:text-roxo-claro transition-colors w-fit">
              <Gamepad2 className="text-roxo-claro" size={28} />
              Grana XP
            </Link>
            <p className="text-dark-texto text-sm leading-relaxed mb-6 max-w-sm">
              Transformando planilhas chatas em um sistema de progressão imersivo para a sua vida financeira. Seu patrimônio, suas regras.
            </p>
            <div className="flex gap-4">
              <a href="https://discord.gg/cyHqhhutCD" target="_blank" rel="noreferrer noopener" aria-label="Discord" title="Discord" className="w-10 h-10 rounded-full bg-dark-card border border-dark-borda flex items-center justify-center text-dark-texto hover:text-[#5865F2] hover:border-[#5865F2]/50 transition-all">
                <MessageSquare size={18} />
              </a>
            </div>
          </div>

          {/* Colunas de Links (Agrupadas) */}
          <div className="md:col-span-8 lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            
            {/* Bloco: Produto */}
            <div className="flex flex-col space-y-4">
              <h4 className="text-slate-100 font-bold tracking-wide uppercase text-sm mb-2">Produto</h4>
              <Link href="/sobre" className="text-dark-texto text-sm hover:text-roxo-claro transition-colors w-fit">Sobre o Sistema</Link>
              <Link href="/blog" className="text-dark-texto text-sm hover:text-roxo-claro transition-colors w-fit">Blog & Dicas</Link>
              <Link href="https://app.granaxp.com.br" className="text-dark-texto text-sm hover:text-roxo-claro transition-colors w-fit">Acessar Painel</Link>
            </div>

            {/* Bloco: Suporte */}
            <div className="flex flex-col space-y-4">
              <h4 className="text-slate-100 font-bold tracking-wide uppercase text-sm mb-2">Ajuda</h4>
              <Link href="/suporte" className="text-dark-texto text-sm hover:text-roxo-claro transition-colors w-fit">Central de Suporte</Link>
              <Link href="/contato" className="text-dark-texto text-sm hover:text-roxo-claro transition-colors w-fit">Contato Comercial</Link>
              <a href="https://discord.gg/cyHqhhutCD" target="_blank" rel="noreferrer" className="text-dark-texto text-sm hover:text-roxo-claro transition-colors w-fit">Comunidade</a>
            </div>

            {/* Bloco: Legal */}
            <div className="flex flex-col space-y-4">
              <h4 className="text-slate-100 font-bold tracking-wide uppercase text-sm mb-2">Legal</h4>
              <Link href="/termos" className="text-dark-texto text-sm hover:text-roxo-claro transition-colors w-fit">Termos de Uso</Link>
              <Link href="/privacidade" className="text-dark-texto text-sm hover:text-roxo-claro transition-colors w-fit">Privacidade</Link>
            </div>

          </div>
        </div>
        
        {/* Barra Inferior (Copyright e Localização) */}
        <div className="border-t border-dark-borda/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-dark-texto">
          <p>© {anoAtual} Grana XP. Todos os direitos reservados.</p>
          
          <div className="flex items-center gap-1 font-medium bg-dark-card/50 px-3 py-1.5 rounded-lg border border-dark-borda/50">
            <MapPin size={12} className="text-roxo-claro" />
            Desenvolvido em São Bernardo do Campo - SP
          </div>
        </div>

      </div>
    </footer>
  );
}