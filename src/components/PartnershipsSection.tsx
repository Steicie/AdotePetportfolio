import React from 'react';
import { Building2, ShieldCheck, Stethoscope } from 'lucide-react';

export const PartnershipsSection: React.FC = () => {
  const partners = [
    {
      category: 'PODER PÚBLICO',
      title: 'Secretarias e prefeituras',
      desc: 'Integração tecnológica para Centros de Zoonoses (CCZ), censo demográfico animal geolocalizado e modernização de políticas de castração com dados transparentes.',
      icon: Building2,
      points: [
        'Mapeamento geoespacial de colônias urbanas',
        'Censo populacional de animais em tempo real',
        'Planejamento de mutirões municipais de castração',
      ],
    },
    {
      category: 'REDE DE PROTEÇÃO',
      title: 'ONGs e resgatantes',
      desc: 'Infraestrutura completa de triagem sem custos: gestão de lares temporários, controle de vacinas, ficha cadastral dos animais e termos de adoção com assinatura digital.',
      icon: ShieldCheck,
      points: [
        'Prontuário unificado do animal resgatado',
        'Triagem automatizada com questionário inteligente',
        'Gestão ágil de voluntários e lares temporários',
      ],
    },
    {
      category: 'ECOSSISTEMA PET',
      title: 'Clínicas e petshops locais',
      desc: 'Conexão direta com novos tutores na vizinhança. Validação de carteiras de vacinação com carimbo do CRMV e participação em planos preventivos com benefícios aos clientes.',
      icon: Stethoscope,
      points: [
        'Validação médica com chancela do CRMV',
        'Atração qualificada de novos tutores adotantes',
        'Lembretes integrados de vacinas e vermífugos',
      ],
    },
  ];

  return (
    <section id="parcerias" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24">
      {/* Eyebrow and Headline from Slide 7/08 */}
      <div className="max-w-3xl mb-12 space-y-3">
        <div className="flex items-center gap-2 text-xs font-semibold text-[#8A5A69] uppercase tracking-wider">
          <span>08 · ADOTEPET</span>
          <span>·</span>
          <span className="text-[#9E3E5D]">Expansão e Ecossistema</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-display font-bold text-[#2C1820] text-balance">
          Parcerias que multiplicam alcance
        </h2>
        <p className="text-base text-[#5E3B46] font-light leading-relaxed">
          Nenhum ator resolve a causa animal isolado. O AdotePet atua como a infraestrutura neutra
          que conecta o poder público, protetores voluntários e o mercado veterinário privado.
        </p>
      </div>

      {/* 3 Pillars Grid matching Slide 7 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {partners.map((partner) => {
          const Icon = partner.icon;
          return (
            <div
              key={partner.category}
              className="bg-white rounded-3xl p-8 border border-[#F0D5DD] shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#9E3E5D]">
                    {partner.category}
                  </span>
                  <div className="w-10 h-10 rounded-2xl bg-[#F9ECEF] flex items-center justify-center text-[#9E3E5D]">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-2xl font-serif-display font-bold text-[#2C1820]">
                  {partner.title}
                </h3>

                <p className="text-xs text-[#5E3B46] leading-relaxed">
                  {partner.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-[#F5E5E9] space-y-2">
                <span className="text-[11px] font-semibold text-[#2C1820] block">
                  Atuação Integrada:
                </span>
                <ul className="space-y-1.5 text-xs text-[#5E3B46]">
                  {partner.points.map((pt, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#9E3E5D] shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
