import React, { useState } from 'react';
import { Heart, Smartphone, Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  onOpenPartnerModal: () => void;
  onScrollToSimulator: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenPartnerModal, onScrollToSimulator }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'O Desafio', href: '#desafio' },
    { label: 'Os 4 Públicos', href: '#publicos' },
    { label: 'App Interativo', href: '#simulador' },
    { label: 'Tecnologia', href: '#tecnologia' },
    { label: 'Impacto Urbano', href: '#impacto' },
    { label: 'Parcerias', href: '#parcerias' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FBF1F3]/90 backdrop-blur-md border-b border-[#F0D5DD] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single Element as required by Top Bar Contract) */}
        <a
          href="#"
          className="flex items-center gap-2.5 text-2xl font-serif-display font-bold tracking-tight text-[#2C1820] hover:text-[#9E3E5D] transition-colors whitespace-nowrap shrink-0 group"
        >
          <span className="w-10 h-10 rounded-full bg-[#9E3E5D] text-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
            <Heart className="w-5 h-5 fill-white text-white" />
          </span>
          <span className="font-serif-display text-2xl font-bold tracking-tight">
            Adote<span className="text-[#9E3E5D] italic">Pet</span>
          </span>
        </a>

        {/* Zone 2: 4-6 Clean Single-Line Nav Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#5E3B46]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#9E3E5D] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8 decoration-[#9E3E5D]/40"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onScrollToSimulator}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#9E3E5D] hover:bg-[#812D49] rounded-full shadow-sm hover:shadow transition-all whitespace-nowrap shrink-0 active:scale-95"
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>Testar Demo no Celular</span>
          </button>

          <button
            onClick={onOpenPartnerModal}
            className="sm:hidden inline-flex items-center px-4 py-2 text-xs font-semibold text-white bg-[#9E3E5D] rounded-full whitespace-nowrap"
          >
            Parcerias
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#5E3B46] hover:text-[#2C1820] rounded-lg focus:outline-none"
            aria-label="Abrir Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#F0D5DD] bg-[#FBF1F3] px-6 py-4 space-y-3 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-medium text-[#5E3B46] hover:text-[#9E3E5D]"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-[#F0D5DD] flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onScrollToSimulator();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-white bg-[#9E3E5D] rounded-full"
            >
              <Smartphone className="w-4 h-4" />
              <span>Experimentar App Mobile</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPartnerModal();
              }}
              className="w-full flex items-center justify-center gap-1.5 py-2.5 text-xs font-semibold text-[#9E3E5D] bg-[#F4DEE4] rounded-full"
            >
              <span>Seja uma ONG ou Clínica Parceira</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
