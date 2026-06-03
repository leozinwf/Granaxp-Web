"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

import logotipoImg from '@/assets/logotipo.png';

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  // Função mágica para rolar para o topo
  const handleInicioClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === '/') {
      e.preventDefault(); // Impede o Next.js de tentar navegar
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Sobe a tela com animação suave
    }
  };

  // Função para o menu mobile: Rola pro topo E fecha o menu
  const handleMobileInicioClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    handleInicioClick(e);
    closeMenu();
  };

  return (
    <>
      {isMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/80 backdrop-blur-sm z-40 animate-in fade-in duration-200"
          onClick={closeMenu}
        />
      )}

      <header className="w-full z-50 sticky top-0 border-b border-dark-borda/50 bg-dark-fundo/90 backdrop-blur-md">
        <nav className="w-full flex items-center justify-between p-6 max-w-7xl mx-auto relative z-50">
          
          {/* Logo com a Imagem (Agora com rolagem suave também!) */}
          <Link href="/" onClick={handleInicioClick} className="text-2xl font-bold flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Image 
              src={logotipoImg} 
              alt="Logotipo Grana XP" 
              width={36} 
              height={36} 
              className="object-contain"
            />
            <span><span className="text-roxo-claro">Grana</span>XP</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8 font-medium text-sm text-dark-texto">
            <Link href="/" onClick={handleInicioClick} className="hover:text-roxo-claro transition-colors">Início</Link>
            <Link href="/sobre" className="hover:text-roxo-claro transition-colors">Sobre o GranaXP</Link>
            <Link href="/blog" className="hover:text-roxo-claro transition-colors">Blog</Link>
            <Link href="/suporte" className="hover:text-roxo-claro transition-colors">Suporte</Link>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <Link href="https://app.granaxp.com.br/" className="bg-roxo-claro hover:bg-roxo-hover text-white px-5 py-2 rounded-full font-bold text-sm transition-all shadow-[0_0_15px_rgba(130,10,209,0.3)] hover:shadow-[0_0_25px_rgba(130,10,209,0.5)]">
              Acessar App
            </Link>
          </div>

          <button 
            className="md:hidden text-slate-200 hover:text-roxo-claro transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Alternar menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </nav>

        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-dark-fundo border-b border-dark-borda shadow-2xl flex flex-col p-6 gap-6 animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-4 text-center text-lg font-medium text-slate-200">
              <Link href="/" onClick={handleMobileInicioClick} className="hover:text-roxo-claro transition-colors">Início</Link>
              <Link href="/sobre" onClick={closeMenu} className="hover:text-roxo-claro transition-colors">Sobre o GranaXP</Link>
              <Link href="/blog" onClick={closeMenu} className="hover:text-roxo-claro transition-colors">Blog</Link>
              <Link href="/suporte" onClick={closeMenu} className="hover:text-roxo-claro transition-colors">Suporte</Link>
            </div>
            <div className="w-full h-px bg-dark-borda/50"></div>
            <div className="flex flex-col gap-4">
              <Link href="https://app.granaxp.com.br" onClick={closeMenu} className="text-center text-dark-texto hover:text-white font-medium transition-colors">
                Entrar
              </Link>
              <Link href="https://app.granaxp.com.br/" onClick={closeMenu} className="text-center bg-roxo-claro hover:bg-roxo-hover text-white py-3 rounded-full font-bold transition-all shadow-[0_0_15px_rgba(130,10,209,0.3)]">
                Criar Conta
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}