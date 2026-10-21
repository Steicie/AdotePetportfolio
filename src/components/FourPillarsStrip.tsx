import React from 'react';
import { ShieldCheck, HeartHandshake, Stethoscope, Building2 } from 'lucide-react';

interface FourPillarsStripProps {
  onSelectPillar: (pillarId: string) => void;
}

export const FourPillarsStrip: React.FC<FourPillarsStripProps> = ({ onSelectPillar }) => {
  const pillars = [
    {
      id: 'ongs',
      icon: ShieldCheck,
      pawEmoji: '🐾',
      title: 'ONGs e Resgatantes',
      subtitle: 'Prontuário unificado de acolhimento, triagem de candidatos e pedidos de apadrinhamento.',
      category: 'Rede de Proteção',
    },
    {
      id: 'adotantes',
      icon: HeartHandshake,
      pawEmoji: '🐾',
      title: 'Adotantes e Tutores',
      subtitle: 'Busca inteligente por estilo de vida, formalização segura e suporte contínuo pós-adoção.',
      category: 'Adoção Consciente',
    },
    {
      id: 'clinicas',
      icon: Stethoscope,
      pawEmoji: '🐾',
      title: 'Petshops e Clínicas',
      subtitle: 'Continuidade dos cuidados clínicos, validação de vacinas e benefícios aos novos tutores.',
      category: 'Ecossistema Pet',
    },
    {
      id: 'gestao',
      icon: Building2,
      pawEmoji: '🐾',
      title: 'Gestão Pública',
      subtitle: 'Secretarias e prefeituras com censo animal, controle de zoonoses e planejamento urbano.',
      category: 'Poder Público',
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-b border-[#F0D5DD]/70 my-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {pillars.map((pillar) => {
          const Icon = pillar.icon;
          return (
            <div
              key={pillar.id}
              onClick={() => onSelectPillar(pillar.id)}
              className="group cursor-pointer p-5 rounded-2xl bg-white/60 hover:bg-white border border-[#F0D5DD] hover:border-[#9E3E5D]/30 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col items-center text-center space-y-3"
            >
              {/* Top Paw Marker mirroring reference JPG */}
              <div className="flex items-center gap-1.5 text-xs font-semibold text-[#9E3E5D]">
                <span className="text-sm select-none">{pillar.pawEmoji}</span>
                <span className="text-[11px] uppercase tracking-wider text-[#8A5A69]">{pillar.category}</span>
              </div>

              {/* Main Pillar Title */}
              <h3 className="text-base font-serif-display font-bold text-[#2C1820] group-hover:text-[#9E3E5D] transition-colors">
                {pillar.title}
              </h3>

              {/* Subtitle Description */}
              <p className="text-xs text-[#5E3B46] leading-relaxed line-clamp-3">
                {pillar.subtitle}
              </p>

              <span className="text-[11px] font-semibold text-[#9E3E5D] opacity-0 group-hover:opacity-100 transition-opacity pt-1 flex items-center gap-1">
                Ver detalhes na rede →
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};
