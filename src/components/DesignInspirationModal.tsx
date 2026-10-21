import React from 'react';
import { X, Check, ExternalLink, Image as ImageIcon, BookOpen } from 'lucide-react';

interface DesignInspirationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DesignInspirationModal: React.FC<DesignInspirationModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <div className="bg-[#FBF1F3] rounded-[32px] max-w-4xl w-full border border-[#F0D5DD] shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="p-6 bg-white border-b border-[#F0D5DD] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-full bg-[#9E3E5D] text-white flex items-center justify-center text-xs font-bold">
              AP
            </span>
            <div>
              <h3 className="font-serif-display font-bold text-lg text-[#2C1820]">
                Alinhamento de Design & Informações do PDF
              </h3>
              <p className="text-xs text-[#8A5A69]">
                Homagem visual à referência JPG de Valeria Shlyahtova + Conteúdo do Modelo de Negócios AdotePet
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#5E3B46] hover:text-[#2C1820] rounded-full hover:bg-rose-50"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Column 1: Visual JPG Alignment */}
            <div className="bg-white p-5 rounded-2xl border border-[#F0D5DD] space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-[#9E3E5D] uppercase tracking-wider">
                <ImageIcon className="w-4 h-4" />
                <span>Identidade Visual da Imagem JPG</span>
              </div>

              <div className="rounded-xl overflow-hidden border border-[#F0D5DD] bg-rose-50 max-h-56">
                <img
                  src="/public/assets/aistudio/__________________________________-_Valeria_Shlyahtova_d3db4fb8.jpg"
                  alt="Referência Visual Original"
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                />
              </div>

              <ul className="text-xs text-[#5E3B46] space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Paleta Editorial:</strong> Fundo blush suave (#FBF1F3) harmonizado com dusty rose/berry (#9E3E5D) e cartões arredondados.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Hero Split 2 Colunas:</strong> Cartão heroico com tipografia serifada e grifo manuscrito + fotografia carinhosa de animal em mãos protetoras.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Faixa com Patinhas (🐾):</strong> 4 pilares centrais de segurança e processo de acolhimento.</span>
                </li>
              </ul>
            </div>

            {/* Column 2: PDF Information Alignment */}
            <div className="bg-white p-5 rounded-2xl border border-[#F0D5DD] space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-[#9E3E5D] uppercase tracking-wider">
                <BookOpen className="w-4 h-4" />
                <span>Conteúdo do PDF (Modelo de Negócio)</span>
              </div>

              <div className="space-y-2.5 text-xs text-[#5E3B46]">
                <div className="p-2.5 bg-rose-50/50 rounded-xl border border-rose-100">
                  <strong className="text-[#2C1820] block">Slide 01 & 04 · Proposta de Valor:</strong>
                  "AdotePet: Rede Social para Adoção Responsável e Bem-Estar Animal" — Tríade central: "Conectar. Adotar. Cuidar."
                </div>

                <div className="p-2.5 bg-rose-50/50 rounded-xl border border-rose-100">
                  <strong className="text-[#2C1820] block">Slide 02 · O Desafio:</strong>
                  01 Alto índice de abandono / 02 Atores trabalham sem conexão integrada.
                </div>

                <div className="p-2.5 bg-rose-50/50 rounded-xl border border-rose-100">
                  <strong className="text-[#2C1820] block">Slide 03 · Uma Rede, Quatro Públicos:</strong>
                  ONGs e Resgatantes · Adotantes e Tutores · Petshops e Clínicas · Gestão Pública.
                </div>

                <div className="p-2.5 bg-rose-50/50 rounded-xl border border-rose-100">
                  <strong className="text-[#2C1820] block">Slide 05 · Tecnologia Escalável:</strong>
                  Interface em Jetpack Compose, aplicativo nativo em Kotlin e plataforma cloud resiliente.
                </div>

                <div className="p-2.5 bg-rose-50/50 rounded-xl border border-rose-100">
                  <strong className="text-[#2C1820] block">Slide 06 & 08 · Impacto & Parcerias:</strong>
                  "Do encontro ao impacto urbano" (Menos estigma → Mais adoções → Mais cuidado) e alianças estratégicas.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-white border-t border-[#F0D5DD] flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-[#9E3E5D] hover:bg-[#812D49] text-white text-xs font-semibold rounded-full transition-all"
          >
            Entendido, continuar navegando
          </button>
        </div>
      </div>
    </div>
  );
};
