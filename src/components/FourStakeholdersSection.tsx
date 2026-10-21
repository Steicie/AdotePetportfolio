import React, { useState } from 'react';
import { FOUR_STAKEHOLDERS } from '../data/portfolioData';
import { ShieldCheck, HeartHandshake, Stethoscope, Building2, Check, ArrowRight } from 'lucide-react';

interface FourStakeholdersSectionProps {
  selectedStakeholderId?: string;
  onPartnerClick: (category: string) => void;
}

export const FourStakeholdersSection: React.FC<FourStakeholdersSectionProps> = ({
  selectedStakeholderId,
  onPartnerClick,
}) => {
  const [activeId, setActiveId] = useState<string>(selectedStakeholderId || 'ongs');

  const currentStakeholder = FOUR_STAKEHOLDERS.find((s) => s.id === activeId) || FOUR_STAKEHOLDERS[0];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldHeart':
        return ShieldCheck;
      case 'HeartHandshake':
        return HeartHandshake;
      case 'Stethoscope':
        return Stethoscope;
      case 'Building2':
        return Building2;
      default:
        return ShieldCheck;
    }
  };

  return (
    <section id="publicos" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24">
      {/* Eyebrow and Headline from Slide 3 */}
      <div className="max-w-3xl mb-12 space-y-3">
        <div className="flex items-center gap-2 text-xs font-semibold text-[#8A5A69] uppercase tracking-wider">
          <span>03 · ADOTEPET</span>
          <span>·</span>
          <span className="text-[#9E3E5D]">Arquitetura de Ecossistema</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-display font-bold text-[#2C1820] text-balance">
          Uma rede, quatro públicos
        </h2>
        <p className="text-base text-[#5E3B46] font-light leading-relaxed">
          O AdotePet resolve a causa animal ao criar incentivos reais e ferramentas de alta produtividade
          para cada um dos 4 pilares indispensáveis do ecossistema urbano.
        </p>
      </div>

      {/* Stakeholders Selector Tabs (4 connected nodes) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
        {FOUR_STAKEHOLDERS.map((stakeholder) => {
          const Icon = getIcon(stakeholder.iconName);
          const isActive = stakeholder.id === activeId;
          return (
            <button
              key={stakeholder.id}
              onClick={() => setActiveId(stakeholder.id)}
              className={`p-4 sm:p-5 rounded-2xl text-left border transition-all duration-300 flex flex-col justify-between space-y-3 ${
                isActive
                  ? 'bg-[#9E3E5D] text-white border-[#9E3E5D] shadow-md scale-[1.02]'
                  : 'bg-white/80 hover:bg-white text-[#2C1820] border-[#F0D5DD] hover:border-[#9E3E5D]/40 shadow-sm'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className={`p-2 rounded-xl ${isActive ? 'bg-white/20 text-white' : 'bg-[#F9ECEF] text-[#9E3E5D]'}`}>
                  <Icon className="w-5 h-5" />
                </span>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                  isActive ? 'bg-white/20 text-rose-100' : 'bg-[#F5E5E9] text-[#812D49]'
                }`}>
                  {stakeholder.badge}
                </span>
              </div>

              <div>
                <h4 className="font-serif-display font-bold text-base leading-snug">
                  {stakeholder.title}
                </h4>
                <p className={`text-xs mt-1 line-clamp-2 ${isActive ? 'text-rose-100' : 'text-[#5E3B46]'}`}>
                  {stakeholder.shortDesc}
                </p>
              </div>

              <div className={`text-[11px] font-semibold flex items-center justify-between pt-1 border-t ${
                isActive ? 'border-white/20 text-rose-200' : 'border-[#F5E5E9] text-[#9E3E5D]'
              }`}>
                <span>{stakeholder.metrics}</span>
                <span>{isActive ? 'Ativo' : 'Ver Mais →'}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Stakeholder Detailed Card */}
      <div className="bg-white rounded-[32px] p-8 sm:p-12 border border-[#F0D5DD] shadow-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#9E3E5D] bg-[#F9ECEF] px-3 py-1 rounded-full">
              Público {currentStakeholder.badge}
            </span>
            <span className="text-xs text-[#8A5A69]">·</span>
            <span className="text-xs text-[#8A5A69]">{currentStakeholder.metrics}</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-serif-display font-bold text-[#2C1820]">
            Como o AdotePet empodera: {currentStakeholder.title}
          </h3>

          <p className="text-sm text-[#5E3B46] leading-relaxed">
            {currentStakeholder.shortDesc} A plataforma elimina formulários em papel, mensagens perdidas e desconfiança através de fluxos validados.
          </p>

          {/* Detailed Points */}
          <div className="space-y-4 pt-2">
            {currentStakeholder.detailedPoints.map((point, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#F4DEE4] flex items-center justify-center text-[#9E3E5D] shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <div>
                  <h5 className="text-xs font-bold text-[#2C1820]">{point.title}</h5>
                  <p className="text-xs text-[#5E3B46] mt-0.5 leading-relaxed">{point.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4 flex flex-wrap gap-4">
            <button
              onClick={() => onPartnerClick(currentStakeholder.title)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#9E3E5D] hover:bg-[#812D49] text-white text-xs font-semibold rounded-full shadow-sm transition-all"
            >
              <span>Ver Parcerias do Ecossistema</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Right Info Box */}
        <div className="lg:col-span-5 bg-[#FAF0F3] rounded-3xl p-6 sm:p-8 border border-[#F0D5DD] space-y-5">
          <div className="flex items-center justify-between pb-3 border-b border-[#F0D5DD]">
            <h4 className="text-sm font-serif-display font-bold text-[#2C1820]">
              Ganhos Chave na Rede AdotePet
            </h4>
            <span className="text-xs font-mono font-bold text-[#9E3E5D]">100% Digital</span>
          </div>

          <ul className="space-y-3">
            {currentStakeholder.benefits.map((benefit, i) => (
              <li key={i} className="flex items-center gap-2.5 text-xs text-[#5E3B46]">
                <div className="w-2 h-2 rounded-full bg-[#9E3E5D] shrink-0" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>

          <div className="p-4 bg-white rounded-2xl border border-[#F0D5DD] text-xs text-[#7A4E5C] leading-relaxed">
            <strong className="block font-semibold text-[#9E3E5D] mb-1">Impacto Integrado:</strong>
            Quando uma ONG cadastra um resgate, a clínica da vizinhança recebe o aviso para checkup e a prefeitura atualiza a contagem do censo daquela área.
          </div>
        </div>
      </div>
    </section>
  );
};
