import React, { useState } from 'react';
import { TECH_PILLARS } from '../data/portfolioData';
import { Layers, Cpu, Database, CheckCircle, Terminal, Smartphone } from 'lucide-react';

export const TechStackSection: React.FC = () => {
  const [selectedPillarIndex, setSelectedPillarIndex] = useState(0);

  const getPillarIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return Layers;
      case 1:
        return Cpu;
      case 2:
        return Database;
      default:
        return Layers;
    }
  };

  return (
    <section id="tecnologia" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24">
      {/* Header from Slide 5 */}
      <div className="max-w-3xl mb-12 space-y-3">
        <div className="flex items-center gap-2 text-xs font-semibold text-[#8A5A69] uppercase tracking-wider">
          <span>05 · ADOTEPET</span>
          <span>·</span>
          <span className="text-[#9E3E5D]">Engenharia & Performance</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-display font-bold text-[#2C1820] text-balance">
          Tecnologia moderna, pronta para escalar
        </h2>
        <p className="text-base text-[#5E3B46] font-light leading-relaxed">
          Arquitetura mobile nativa desenvolvida com foco em performance imediata, consumo mínimo de bateria
          e funcionamento offline-first mesmo em áreas rurais ou abrigos periféricos.
        </p>
      </div>

      {/* 3 Pillars from PDF Slide 5 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {TECH_PILLARS.map((pillar, idx) => {
          const Icon = getPillarIcon(idx);
          const isSelected = selectedPillarIndex === idx;
          return (
            <div
              key={pillar.category}
              onClick={() => setSelectedPillarIndex(idx)}
              className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-4 ${
                isSelected
                  ? 'bg-white border-[#9E3E5D] shadow-lg ring-2 ring-[#9E3E5D]/20 scale-[1.01]'
                  : 'bg-white/60 hover:bg-white border-[#F0D5DD] shadow-sm'
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold tracking-widest uppercase text-[#9E3E5D] bg-[#F9ECEF] px-3 py-1 rounded-full">
                    {pillar.category}
                  </span>
                  <div className={`p-2.5 rounded-xl ${isSelected ? 'bg-[#9E3E5D] text-white' : 'bg-[#F4DEE4] text-[#9E3E5D]'}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="font-serif-display font-bold text-xl text-[#2C1820] leading-snug">
                  {pillar.headline}
                </h3>

                <p className="text-xs text-[#5E3B46] leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#F5E5E9]">
                <div className="flex flex-wrap gap-1.5">
                  {pillar.specs.map((spec) => (
                    <span
                      key={spec}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#FAF0F3] text-[#812D49] border border-[#F0D5DD]"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Deep Dive Architecture Card */}
      <div className="bg-[#24131A] text-white rounded-3xl p-6 sm:p-10 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-6 space-y-5">
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase font-mono text-rose-300 tracking-wider">
              {TECH_PILLARS[selectedPillarIndex].category} · DEEP DIVE
            </span>
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-xs text-rose-200">Produção</span>
          </div>

          <h4 className="text-2xl font-serif-display font-bold text-white">
            {TECH_PILLARS[selectedPillarIndex].headline}
          </h4>

          <p className="text-xs sm:text-sm text-rose-100/90 leading-relaxed font-light">
            {selectedPillarIndex === 0 &&
              'O Jetpack Compose permite recomposição inteligente de tela. Quando um novo animal é cadastrado ou ganha uma nova vacina, apenas a tag de saúde se atualiza na tela sem reconstruir a árvore inteira, garantindo fluidez cinematográfica a 120Hz.'}
            {selectedPillarIndex === 1 &&
              'Com Kotlin Coroutines e Room Database, voluntários e médicos veterinários conseguem dar baixa em vacinas mesmo no fundo de um canil sem sinal 4G. Ao restabelecer a conexão, os dados são sincronizados automaticamente em segundo plano.'}
            {selectedPillarIndex === 2 &&
              'A infraestrutura em nuvem protege informações sensíveis dos adotantes através de hashing avançado e criptografia em repouso, cumprindo com rigor todas as exigências da Lei Geral de Proteção de Dados (LGPD).'}
          </p>

          <div className="grid grid-cols-2 gap-3 text-xs text-rose-200 pt-2 border-t border-white/10">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Offline-First com Room DB</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Arquitetura MVVM Clean</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Material Design 3</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>API Gateway com Cache</span>
            </div>
          </div>
        </div>

        {/* Code / Visual Terminal */}
        <div className="lg:col-span-6 bg-[#170C11] rounded-2xl p-5 border border-white/10 font-mono text-xs overflow-x-auto shadow-inner space-y-2">
          <div className="flex items-center justify-between pb-3 border-b border-white/10 text-[11px] text-rose-300">
            <div className="flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-rose-400" />
              <span>AdotePetApplication.kt · Kotlin 2.0</span>
            </div>
            <span className="text-[10px] text-rose-400/80">Android Native</span>
          </div>

          <pre className="text-[11px] text-rose-100 leading-relaxed font-mono">
            {`// Repositório Offline-First de Adoção
class PetRepositoryImpl @Inject constructor(
    private val localDao: PetDao,
    private val remoteApi: AdotePetApiService
) : PetRepository {

    override fun observeAvailablePets(): Flow<List<Pet>> =
        localDao.getAvailablePetsFlow().onStart {
            syncRemoteCatalog()
        }

    private suspend fun syncRemoteCatalog() {
        try {
            val remotePets = remoteApi.fetchRescuedPets()
            localDao.upsertAll(remotePets.toEntityList())
        } catch (e: IOException) {
            // Opera perfeitamente em cache offline
            Timber.w("Modo offline ativo: %s", e.message)
        }
    }
}`}
          </pre>
        </div>
      </div>
    </section>
  );
};
