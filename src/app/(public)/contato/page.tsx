import { Mail, MessageSquare, Briefcase, MapPin } from 'lucide-react';

export default function ContatoPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-slate-100 mb-4 tracking-tight">
          Fale com o <span className="text-roxo-claro">Grana XP</span>
        </h1>
        <p className="text-dark-texto text-lg max-w-2xl mx-auto">
          Tem alguma proposta comercial, deseja fazer uma parceria ou quer conversar com o criador do projeto? Escolha o melhor canal abaixo.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {/* Contato Comercial / E-mail */}
        <div className="bg-dark-card border border-dark-borda rounded-2xl p-8 shadow-lg hover:border-roxo-claro/50 transition-colors flex flex-col items-center text-center">
          <div className="p-4 bg-roxo-claro/10 rounded-full text-roxo-claro mb-6">
            <Briefcase size={32} />
          </div>
          <h3 className="text-xl font-bold text-slate-100 mb-3">Parcerias e Imprensa</h3>
          <p className="text-dark-texto text-sm mb-6 flex-1">
            Para propostas comerciais, marketing ou para falar diretamente sobre o projeto Grana XP.
          </p>
          <a 
            href="mailto:suportegranaxp@gmail.com" 
            className="w-full bg-dark-fundo border border-roxo-claro text-roxo-claro hover:bg-roxo-claro hover:text-white py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2"
          >
            <Mail size={18} /> Enviar E-mail
          </a>
        </div>

        {/* Contato Comunidade / Discord */}
        <div className="bg-dark-card border border-dark-borda rounded-2xl p-8 shadow-lg hover:border-[#5865F2]/50 transition-colors flex flex-col items-center text-center">
          <div className="p-4 bg-[#5865F2]/10 rounded-full text-[#5865F2] mb-6">
            <MessageSquare size={32} />
          </div>
          <h3 className="text-xl font-bold text-slate-100 mb-3">Comunidade</h3>
          <p className="text-dark-texto text-sm mb-6 flex-1">
            Quer trocar uma ideia rápida, dar sugestões de funcionalidades ou interagir com outros usuários?
          </p>
          <a 
            href="https://discord.gg/cyHqhhutCD" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full bg-dark-fundo border border-[#5865F2] text-[#5865F2] hover:bg-[#5865F2] hover:text-white py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2"
          >
            <MessageSquare size={18} /> Acessar Discord
          </a>
        </div>
      </div>

      {/* Informações Adicionais */}
      <div className="bg-dark-fundo border border-dark-borda rounded-2xl p-6 text-center flex flex-col items-center justify-center">
         <MapPin size={24} className="text-dark-texto mb-3" />
         <h4 className="text-slate-200 font-bold mb-1">Localização</h4>
         <p className="text-sm text-dark-texto">Desenvolvido em São Bernardo do Campo - SP, Brasil.</p>
      </div>
    </div>
  );
}