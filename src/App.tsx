import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { FourPillarsStrip } from './components/FourPillarsStrip';
import { UrbanChallengeSection } from './components/UrbanChallengeSection';
import { FourStakeholdersSection } from './components/FourStakeholdersSection';
import { InteractiveAppSimulator } from './components/InteractiveAppSimulator';
import { TechStackSection } from './components/TechStackSection';
import { UrbanImpactSection } from './components/UrbanImpactSection';
import { PartnershipsSection } from './components/PartnershipsSection';
import { DesignInspirationModal } from './components/DesignInspirationModal';
import { Footer } from './components/Footer';

export default function App() {
  const [referenceModalOpen, setReferenceModalOpen] = useState(false);
  const [selectedStakeholder, setSelectedStakeholder] = useState<string>('ongs');

  const scrollToSimulator = () => {
    const el = document.getElementById('simulador');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToBusinessModel = () => {
    const el = document.getElementById('desafio');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectPillar = (pillarId: string) => {
    setSelectedStakeholder(pillarId);
    const el = document.getElementById('publicos');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePartnerClick = (category: string) => {
    const el = document.getElementById('parcerias');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FBF1F3] text-[#2C1820] flex flex-col font-sans">
      {/* Top Header conforming to 3-zone Top Bar Contract */}
      <Header
        onOpenPartnerModal={() => {
          const el = document.getElementById('parcerias');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
        onScrollToSimulator={scrollToSimulator}
      />

      <main className="flex-1">
        {/* Hero Section reflecting the iconic visual layout of the reference JPG */}
        <HeroSection
          onExploreApp={scrollToSimulator}
          onViewBusinessModel={scrollToBusinessModel}
          onOpenReferenceModal={() => setReferenceModalOpen(true)}
        />

        {/* 4 Feature Pillars with Paw Marks (🐾) matching the reference JPG */}
        <FourPillarsStrip onSelectPillar={handleSelectPillar} />

        {/* 04. Slide 4: Interactive Mobile App Simulator (Kotlin & Jetpack Compose) */}
        <InteractiveAppSimulator />

        {/* 02. Slide 2: Um Desafio que Cresce nas Cidades */}
        <UrbanChallengeSection />

        {/* 03. Slide 3: Uma Rede, Quatro Públicos */}
        <FourStakeholdersSection
          selectedStakeholderId={selectedStakeholder}
          onPartnerClick={handlePartnerClick}
        />

        {/* 05. Slide 5: Tecnologia Moderna, Pronta para Escalar */}
        <TechStackSection />

        {/* 06. Slide 6: Do Encontro ao Impacto Urbano */}
        <UrbanImpactSection />

        {/* 08. Slide 7: Parcerias que Multiplicam Alcance */}
        <PartnershipsSection />
      </main>

      {/* Editorial Footer */}
      <Footer
        onOpenReferenceModal={() => setReferenceModalOpen(true)}
        onScrollToSimulator={scrollToSimulator}
      />

      {/* Side-by-side design & PDF alignment modal */}
      <DesignInspirationModal
        isOpen={referenceModalOpen}
        onClose={() => setReferenceModalOpen(false)}
      />
    </div>
  );
}
