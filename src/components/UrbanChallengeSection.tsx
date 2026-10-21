import React, { useState } from 'react';
import { AlertTriangle, Network, CheckCircle2, ArrowRight } from 'lucide-react';

export const UrbanChallengeSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'problem' | 'solution'>('problem');

  return (
    <section id="desafio" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24">
      {/* Eyebrow & Headline from Slide 2 */}
      <div className="max-w-3xl mb-12 space-y-3">
        <div className="flex items-center gap-2 text-xs font-semibold text-[#8A5A69] uppercase tracking-wider">
          <span>02 · ADOTEPET</span>
          <span>·</span>
          <span className="text-[#9E3E5D]">Diagnóstico e Contexto</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-display font-bold text-[#2C1820] text-balance">
          Um desafio que cresce nas cidades
        </h2>
        <p className="text-base text-[#5E3B46] font-light leading-relaxed">
          O abandono animal não é apenas um problema ético individual, mas uma crise de saúde pública e gestão
          urbana que se agrava pela fragmentação total dos envolvidos.
        </p>
      </div>

      {/* Interactive Toggle for Problem vs Connected Solution */}
      <div className="flex items-center gap-2 mb-8 bg-[#F4DEE4]/60 p-1.5 rounded-full w-fit">
        <button
          onClick={() => setActiveTab('problem')}
          className={`px-5 py-2 text-xs font-semibold rounded-full transition-all ${
            activeTab === 'problem'
              ? 'bg-[#9E3E5D] text-white shadow-sm'
              : 'text-[#5E3B46] hover:text-[#2C1820]'
          }`}
        >
          O Cenário Fragmentado Atual
        </button>
        <button
          onClick={() => setActiveTab('solution')}
          className={`px-5 py-2 text-xs font-semibold rounded-full transition-all ${
            activeTab === 'solution'
              ? 'bg-[#9E3E5D] text-white shadow-sm'
              : 'text-[#5E3B46] hover:text-[#2C1820]'
          }`}
        >
          A Solução Conectada AdotePet
        </button>
      </div>

      {activeTab === 'problem' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 01: Alto Índice de Abandono */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#F0D5DD] shadow-sm relative overflow-hidden flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-4xl font-serif-display font-bold text-[#9E3E5D]/40">01</span>
                <div className="w-10 h-10 rounded-full bg-rose-50 flex items-center justify-center text-[#9E3E5D]">
                  <AlertTriangle className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-2xl font-serif-display font-bold text-[#2C1820]">
                Alto índice de abandono
              </h3>

              <p className="text-sm text-[#5E3B46] leading-relaxed">
                Mais de 30 milhões de cães e gatos vivem em situação de rua no Brasil. Sem políticas unificadas de castração e identificação, abrigos trabalham 200% acima da capacidade, acumulando custos insustentáveis de ração e tratamentos.
              </p>

              <div className="pt-4 border-t border-[#F5E5E9] space-y-2 text-xs text-[#5E3B46]">
                <div className="flex items-center justify-between">
                  <span>Animais desabrigados estimados:</span>
                  <strong className="font-semibold text-[#9E3E5D] font-mono tabular-nums">~30,2 Milhões</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span>Taxa de animais sem identificação:</span>
                  <strong className="font-semibold text-[#9E3E5D] font-mono tabular-nums">92%</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span>Tempo médio em abrigos físicos:</span>
                  <strong className="font-semibold text-[#9E3E5D] font-mono tabular-nums">180 a 300 dias</strong>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 text-xs font-semibold text-[#8A5A69]">
              Consequência: Superlotação crônica e estigma social dos animais sem raça definida.
            </div>
          </div>

          {/* Card 02: Atores Trabalham Sem Conexão */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#F0D5DD] shadow-sm relative overflow-hidden flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-4xl font-serif-display font-bold text-[#9E3E5D]/40">02</span>
                <div className="w-10 h-10 rounded-full bg-rose-50 flex items-center justify-center text-[#9E3E5D]">
                  <Network className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-2xl font-serif-display font-bold text-[#2C1820]">
                Atores trabalham sem conexão
              </h3>

              <p className="text-sm text-[#5E3B46] leading-relaxed">
                Protetores independentes dependem de posts informais em redes sociais genéricas. Clínicas desconhecem o histórico de resgate. E prefeituras não dispõem de dados consolidados para mapear colônias e destinar orçamentos de castração.
              </p>

              <div className="pt-4 border-t border-[#F5E5E9] space-y-2 text-xs text-[#5E3B46]">
                <div className="flex items-center justify-between">
                  <span>Comunicação entre ONGs e Prefeituras:</span>
                  <strong className="font-semibold text-rose-700">Praticamente Nula</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span>Histórico vacinal perdido em mudanças:</span>
                  <strong className="font-semibold text-rose-700 font-mono tabular-nums">~74%</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span>Adoções devolvidas por falta de triagem:</span>
                  <strong className="font-semibold text-rose-700 font-mono tabular-nums">1 em cada 4</strong>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 text-xs font-semibold text-[#8A5A69]">
              Consequência: Desgaste emocional dos protetores e descontinuidade dos tratamentos médicos.
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-[#9E3E5D] text-white rounded-[32px] p-8 sm:p-12 shadow-lg space-y-8">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-widest font-semibold text-rose-200">
              A Virada Estrutural
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif-display font-bold mt-2">
              Transformando silos isolados em uma malha urbana colaborativa
            </h3>
            <p className="text-rose-100 text-sm mt-2 leading-relaxed">
              O AdotePet estabelece o protocolo unificado de comunicação e dados para a proteção animal:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-white/20">
            <div className="bg-white/10 rounded-2xl p-5 backdrop-blur-sm space-y-2">
              <div className="flex items-center gap-2 text-rose-200 font-semibold text-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                <span>Identificação Única</span>
              </div>
              <h4 className="font-serif-display font-bold text-base">Passaporte Digital RGA</h4>
              <p className="text-xs text-rose-100 leading-relaxed">
                Cada pet resgatado ganha um ID único com foto, microchip e prontuário imutável acessível por qualquer clínica parceira.
              </p>
            </div>

            <div className="bg-white/10 rounded-2xl p-5 backdrop-blur-sm space-y-2">
              <div className="flex items-center gap-2 text-rose-200 font-semibold text-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                <span>Triagem Responsável</span>
              </div>
              <h4 className="font-serif-display font-bold text-base">Compatibilidade Afetiva</h4>
              <p className="text-xs text-rose-100 leading-relaxed">
                Algoritmo de afinidade cruzando hábitos do tutor com temperamento do animal, reduzindo a taxa de devolução para menos de 2%.
              </p>
            </div>

            <div className="bg-white/10 rounded-2xl p-5 backdrop-blur-sm space-y-2">
              <div className="flex items-center gap-2 text-rose-200 font-semibold text-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                <span>Gestão Baseada em Dados</span>
              </div>
              <h4 className="font-serif-display font-bold text-base">Inteligência Municipal</h4>
              <p className="text-xs text-rose-100 leading-relaxed">
                Dashboards em tempo real para secretarias de saúde e meio ambiente direcionarem mutirões de castração para onde mais se precisa.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
