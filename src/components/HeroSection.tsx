import React from 'react';
import { kittenCuddleImg } from '../data/portfolioData';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface HeroSectionProps {
  onExploreApp: () => void;
  onViewBusinessModel: () => void;
  onOpenReferenceModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreApp,
  onViewBusinessModel,
  onOpenReferenceModal,
}) => {
  return (
    <section className="relative pt-6 pb-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Top Editorial Eyebrow & Reference homage */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 pb-4 border-b border-[#F0D5DD]">
        <div className="flex items-center gap-3">
          <span className="px-3.5 py-1 text-xs font-semibold tracking-wide bg-[#F4DEE4] text-[#9E3E5D] rounded-full">
            Mobile Case Study & Portfolio
          </span>
          <span className="text-xs text-[#8A5A69]">
            Desenvolvido em Kotlin · Jetpack Compose · Arquitetura Escalonável
          </span>
        </div>

        <button
          onClick={onOpenReferenceModal}
          className="inline-flex items-center gap-1.5 text-xs font-medium text-[#9E3E5D] hover:text-[#812D49] hover:underline"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Comparar com Design Original & Slides PDF</span>
        </button>
      </div>

      {/* Main 2-Column Split directly inspired by reference JPG */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left Hero Card: Deep Dusty Berry / Rose rounded container */}
        <div className="lg:col-span-7 bg-[#9E3E5D] text-white rounded-[32px] p-8 sm:p-12 lg:p-14 flex flex-col justify-between shadow-lg relative overflow-hidden">
          {/* Subtle decorative cat silhouette vector */}
          <div className="absolute -bottom-6 -left-6 opacity-15 pointer-events-none select-none">
            <svg width="220" height="220" viewBox="0 0 100 100" fill="currentColor">
              <path d="M70,90 C65,75 55,70 50,70 C45,70 35,75 30,90 C25,75 20,40 30,25 C35,20 40,25 45,28 C50,26 55,26 60,28 C65,25 70,20 75,25 C85,40 80,75 70,90 Z" />
              <circle cx="42" cy="40" r="3" fill="#9E3E5D" />
              <circle cx="58" cy="40" r="3" fill="#9E3E5D" />
              <path d="M47,48 Q50,52 53,48" stroke="#9E3E5D" strokeWidth="1.5" fill="none" />
            </svg>
          </div>

          {/* Top content */}
          <div className="relative z-10 space-y-6">
            <div className="inline-block">
              <span className="text-xs uppercase tracking-widest font-semibold text-rose-200 bg-white/10 px-3.5 py-1 rounded-full backdrop-blur-sm">
                Rede Social para Adoção Responsável
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif-display font-bold tracking-tight text-white leading-[1.1] text-balance">
              Conectar.
              <br />
              Adotar.
              <br />
              <span className="italic font-normal underline decoration-rose-300 decoration-wavy decoration-1 underline-offset-8">
                Cuidar.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-rose-100 max-w-xl font-light leading-relaxed">
              Uma plataforma mobile centralizada que aproxima protetores, adotantes, clínicas e serviços públicos
              — com segurança documental, histórico de saúde e continuidade do afeto.
            </p>
          </div>

          {/* Bottom actions & stats */}
          <div className="relative z-10 pt-8 mt-6 border-t border-white/20 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={onExploreApp}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-[#9E3E5D] hover:bg-rose-50 font-semibold text-sm rounded-full shadow-md hover:shadow-lg transition-all active:scale-95"
            >
              <span>Testar Simulador do App</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onViewBusinessModel}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/15 hover:bg-white/25 text-white font-medium text-sm rounded-full backdrop-blur-sm transition-all"
            >
              <span>Ver Modelo de Negócio</span>
            </button>
          </div>
        </div>

        {/* Right Hero Card: Tender Pet Editorial Photo Container */}
        <div className="lg:col-span-5 bg-[#FDF0F3] border border-[#F2D7E0] rounded-[32px] p-4 sm:p-6 flex flex-col justify-between shadow-sm relative overflow-hidden group">
          <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-[420px] rounded-[24px] overflow-hidden bg-rose-100">
            <img
              src={kittenCuddleImg}
              alt="Gatinho filhote resgatado descansando em mãos cuidadosas"
              className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700 ease-out"
              referrerPolicy="no-referrer"
            />
            
            {/* Soft gradient overlay for subtle contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

            {/* Bottom floating badge inside photo */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-md flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FBF1F3] flex items-center justify-center text-[#9E3E5D]">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#2C1820]">Adoção com Histórico Real</h4>
                  <p className="text-xs text-[#7A4E5C]">Vacinas, castração e microchip certificados</p>
                </div>
              </div>
              <span className="text-xs font-bold text-[#9E3E5D] bg-[#F9ECEF] px-2.5 py-1 rounded-full whitespace-nowrap">
                100% Seguro
              </span>
            </div>
          </div>

          {/* Under-photo testimonial note */}
          <div className="mt-4 px-2 py-1 flex items-center justify-between text-xs text-[#7A4E5C]">
            <span className="italic">"Cada conexão bem-sucedida melhora a vida do animal e da cidade."</span>
            <span className="font-semibold text-[#9E3E5D]">AdotePet · 2026</span>
          </div>
        </div>
      </div>
    </section>
  );
};
