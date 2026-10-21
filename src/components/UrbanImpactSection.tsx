import React from 'react';
import { HeartHandshake, ShieldCheck, Smile } from 'lucide-react';

export const UrbanImpactSection: React.FC = () => {
  return (
    <section id="impacto" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24">
      {/* Eyebrow and Headline from Slide 6 */}
      <div className="max-w-3xl mb-12 space-y-3">
        <div className="flex items-center gap-2 text-xs font-semibold text-[#8A5A69] uppercase tracking-wider">
          <span>06 · ADOTEPET</span>
          <span>·</span>
          <span className="text-[#9E3E5D]">Cadeia de Transformação Social</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-display font-bold text-[#2C1820] text-balance">
          Do encontro ao impacto urbano
        </h2>
        <p className="text-base text-[#5E3B46] font-light leading-relaxed">
          A adoção não termina quando o portão se fecha: ela inaugura uma nova relação de cidadania, saúde pública
          e harmonia entre os moradores e os animais da cidade.
        </p>
      </div>

      {/* The 3 Sequential Stages from Slide 6 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 relative">
        {/* Stage 1 */}
        <div className="bg-[#FAF0F3] border border-[#F0D5DD] rounded-3xl p-6 sm:p-8 space-y-4 relative overflow-hidden flex flex-col justify-between">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-[#9E3E5D] text-white flex items-center justify-center font-bold text-sm shadow-sm">
              01
            </div>
            <h3 className="text-xl font-serif-display font-bold text-[#2C1820]">
              Menos estigma
            </h3>
            <p className="text-xs text-[#5E3B46] leading-relaxed">
              Fotografias de alta qualidade, perfis humanizados e valorização da personalidade do animal transformam o vira-lata em protagonista desejado, superando preconceitos de raça e idade.
            </p>
          </div>
          <div className="pt-4 border-t border-[#F0D5DD] flex items-center gap-2 text-xs font-semibold text-[#9E3E5D]">
            <Smile className="w-4 h-4" />
            <span>Redução do preconceito</span>
          </div>
        </div>

        {/* Stage 2 */}
        <div className="bg-[#FAF0F3] border border-[#F0D5DD] rounded-3xl p-6 sm:p-8 space-y-4 relative overflow-hidden flex flex-col justify-between">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-[#9E3E5D] text-white flex items-center justify-center font-bold text-sm shadow-sm">
              02
            </div>
            <h3 className="text-xl font-serif-display font-bold text-[#2C1820]">
              Mais adoções responsáveis
            </h3>
            <p className="text-xs text-[#5E3B46] leading-relaxed">
              Questionário de afinidade que avalia tempo livre, espaço e orçamento do adotante. O termo assinado e o vínculo afetivo evitam devoluções impulsivas que traumatizam o pet.
            </p>
          </div>
          <div className="pt-4 border-t border-[#F0D5DD] flex items-center gap-2 text-xs font-semibold text-[#9E3E5D]">
            <HeartHandshake className="w-4 h-4" />
            <span>98.2% de permanência</span>
          </div>
        </div>

        {/* Stage 3 */}
        <div className="bg-[#FAF0F3] border border-[#F0D5DD] rounded-3xl p-6 sm:p-8 space-y-4 relative overflow-hidden flex flex-col justify-between">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-[#9E3E5D] text-white flex items-center justify-center font-bold text-sm shadow-sm">
              03
            </div>
            <h3 className="text-xl font-serif-display font-bold text-[#2C1820]">
              Mais cuidado e consciência
            </h3>
            <p className="text-xs text-[#5E3B46] leading-relaxed">
              Carteira de vacinas sincronizada, lembretes de reforço anual, integração com clínicas parceiras e vigilância epidemiológica municipal contínua.
            </p>
          </div>
          <div className="pt-4 border-t border-[#F0D5DD] flex items-center gap-2 text-xs font-semibold text-[#9E3E5D]">
            <ShieldCheck className="w-4 h-4" />
            <span>Saúde pública contínua</span>
          </div>
        </div>
      </div>

      {/* Central Quote from Slide 6 */}
      <div className="bg-[#9E3E5D] text-white rounded-3xl p-8 sm:p-12 shadow-lg text-center space-y-4 relative overflow-hidden">
        <div className="text-4xl text-rose-300 font-serif-display">“</div>
        <blockquote className="text-xl sm:text-2xl lg:text-3xl font-serif-display font-medium max-w-3xl mx-auto leading-relaxed">
          Cada conexão bem-sucedida melhora a vida do animal — e a cidade ao redor dele.
        </blockquote>
        <div className="text-xs uppercase tracking-widest text-rose-200 font-semibold pt-2">
          Slide 06 · Manifesto de Impacto Urbano AdotePet
        </div>
      </div>
    </section>
  );
};
