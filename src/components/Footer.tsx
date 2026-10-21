import React from 'react';
import { Heart, Sparkles, Smartphone, ShieldCheck, Mail, Phone } from 'lucide-react';

interface FooterProps {
  onOpenReferenceModal: () => void;
  onScrollToSimulator: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenReferenceModal, onScrollToSimulator }) => {
  return (
    <footer className="bg-white border-t border-[#F0D5DD] mt-20 pt-16 pb-12 text-[#5E3B46]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#F5E5E9]">
          {/* Brand & Mission column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="w-9 h-9 rounded-full bg-[#9E3E5D] text-white flex items-center justify-center">
                <Heart className="w-4 h-4 fill-white" />
              </span>
              <span className="font-serif-display text-2xl font-bold tracking-tight text-[#2C1820]">
                Adote<span className="text-[#9E3E5D] italic">Pet</span>
              </span>
            </div>

            <p className="text-sm text-[#5E3B46] font-light leading-relaxed max-w-sm">
              Rede social para adoção responsável e bem-estar animal. Conectando protetores, adotantes, clínicas e poder público em prol de cidades mais conscientes.
            </p>

            <div className="p-3 bg-[#FAF0F3] rounded-2xl border border-[#F0D5DD] text-xs text-[#8A5A69] italic">
              "Cada conexão bem-sucedida melhora a vida do animal — e a cidade ao redor dele."
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#2C1820]">
              Módulos do Case Study
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#desafio" className="hover:text-[#9E3E5D] transition-colors">
                  02. O Desafio Urbano do Abandono
                </a>
              </li>
              <li>
                <a href="#publicos" className="hover:text-[#9E3E5D] transition-colors">
                  03. Uma Rede, Quatro Públicos (Stakeholders)
                </a>
              </li>
              <li>
                <a href="#simulador" className="hover:text-[#9E3E5D] transition-colors">
                  04. Conectar. Adotar. Cuidar. (Simulador Mobile)
                </a>
              </li>
              <li>
                <a href="#tecnologia" className="hover:text-[#9E3E5D] transition-colors">
                  05. Engenharia Nativa: Jetpack Compose & Kotlin
                </a>
              </li>
              <li>
                <a href="#impacto" className="hover:text-[#9E3E5D] transition-colors">
                  06. Do Encontro ao Impacto Urbano
                </a>
              </li>
              <li>
                <a href="#parcerias" className="hover:text-[#9E3E5D] transition-colors">
                  08. Parcerias que Multiplicam Alcance
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Actions & Contact */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#2C1820]">
              Demonstração & Design
            </h4>
            <div className="space-y-2 pt-1">
              <button
                onClick={onScrollToSimulator}
                className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-xl bg-[#9E3E5D] text-white text-xs font-semibold hover:bg-[#812D49] transition-colors"
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>Abrir Simulador Mobile</span>
              </button>

              <button
                onClick={onOpenReferenceModal}
                className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-xl bg-[#FAF0F3] text-[#9E3E5D] text-xs font-semibold hover:bg-[#F2DEE4] transition-colors border border-[#F0D5DD]"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Ver Referências (JPG & PDF)</span>
              </button>
            </div>

            <div className="pt-2 text-[11px] text-[#8A5A69]">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Em conformidade com a LGPD</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8A5A69]">
          <div>
            © {new Date().getFullYear()} AdotePet. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-4">
            <span>Kotlin & Jetpack Compose Case Study</span>
            <span>·</span>
            <span>Design Editorial Inspirado</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
