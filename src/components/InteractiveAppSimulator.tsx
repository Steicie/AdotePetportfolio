import React, { useState } from 'react';
import { PETS_DATA, HEALTH_RECORDS_MOCK } from '../data/portfolioData';
import { Pet } from '../types';
import {
  Heart,
  Search,
  MapPin,
  CheckCircle,
  ShieldCheck,
  Calendar,
  Sparkles,
  ChevronLeft,
  Share2,
  FileText,
  User,
  MessageCircle,
  ThumbsUp,
  Award,
  Smartphone,
  Code2,
} from 'lucide-react';

export const InteractiveAppSimulator: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'feed' | 'carteira' | 'comunidade' | 'auth'>('feed');
  const [speciesFilter, setSpeciesFilter] = useState<'all' | 'dog' | 'cat'>('all');
  const [selectedPet, setSelectedPet] = useState<Pet | null>(null);
  const [adoptionSubmitted, setAdoptionSubmitted] = useState(false);
  const [applicantName, setApplicantName] = useState('');
  const [applicantPhone, setApplicantPhone] = useState('');
  const [applicantCity, setApplicantCity] = useState('São Paulo, SP');
  const [likesCount, setLikesCount] = useState(48);
  const [hasLiked, setHasLiked] = useState(false);
  const [codeDrawerOpen, setCodeDrawerOpen] = useState(false);

  const filteredPets = PETS_DATA.filter((pet) => {
    if (speciesFilter === 'all') return true;
    return pet.species === speciesFilter;
  });

  const handleLike = () => {
    if (hasLiked) {
      setLikesCount(likesCount - 1);
      setHasLiked(false);
    } else {
      setLikesCount(likesCount + 1);
      setHasLiked(true);
    }
  };

  const handleAdoptionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!applicantName.trim()) return;
    setAdoptionSubmitted(true);
  };

  return (
    <section id="simulador" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 text-xs font-semibold bg-[#F4DEE4] text-[#9E3E5D] rounded-full">
          <Smartphone className="w-3.5 h-3.5" />
          <span>Experiência Interativa do Usuário</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-serif-display font-bold text-[#2C1820]">
          O Aplicativo AdotePet em Ação
        </h2>
        <p className="text-base text-[#5E3B46] font-light leading-relaxed">
          Navegue abaixo pelo simulador funcional desenvolvido com as diretrizes do Jetpack Compose e Kotlin nativo.
          Experimente o fluxo de busca, carteira de vacinas e tela de login extraída diretamente do case.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left column: Explanations & Quick Navigation */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white/80 backdrop-blur-sm border border-[#F0D5DD] rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
            <div>
              <span className="text-xs uppercase tracking-wider font-semibold text-[#8A5A69]">
                Slide 04 do Case Study
              </span>
              <h3 className="text-2xl font-serif-display font-bold text-[#9E3E5D] mt-1">
                Conectar. Adotar. Cuidar.
              </h3>
              <p className="text-sm text-[#5E3B46] mt-2 leading-relaxed">
                Uma experiência que vai além do anúncio de adoção: assegura que o novo tutor tenha suporte contínuo,
                comprovantes digitais e conexão direta com a clínica veterinária da sua vizinhança.
              </p>
            </div>

            {/* Quick Screen Selectors */}
            <div className="space-y-2.5">
              <span className="text-xs font-semibold text-[#2C1820] uppercase tracking-wider">
                Módulos do Aplicativo:
              </span>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => {
                    setActiveTab('feed');
                    setSelectedPet(null);
                  }}
                  className={`p-3 rounded-xl text-left border transition-all ${
                    activeTab === 'feed'
                      ? 'bg-[#9E3E5D] text-white border-[#9E3E5D] shadow-sm'
                      : 'bg-[#FDF2F4] text-[#5E3B46] border-[#F0D5DD] hover:border-[#9E3E5D]'
                  }`}
                >
                  <div className="text-xs font-bold">1. Catálogo Afetivo</div>
                  <div className={`text-[11px] ${activeTab === 'feed' ? 'text-rose-100' : 'text-[#8A5A69]'}`}>
                    Busca por afinidade
                  </div>
                </button>

                <button
                  onClick={() => {
                    setActiveTab('carteira');
                    setSelectedPet(null);
                  }}
                  className={`p-3 rounded-xl text-left border transition-all ${
                    activeTab === 'carteira'
                      ? 'bg-[#9E3E5D] text-white border-[#9E3E5D] shadow-sm'
                      : 'bg-[#FDF2F4] text-[#5E3B46] border-[#F0D5DD] hover:border-[#9E3E5D]'
                  }`}
                >
                  <div className="text-xs font-bold">2. Carteira Digital</div>
                  <div className={`text-[11px] ${activeTab === 'carteira' ? 'text-rose-100' : 'text-[#8A5A69]'}`}>
                    Vacinas & Microchip
                  </div>
                </button>

                <button
                  onClick={() => {
                    setActiveTab('comunidade');
                    setSelectedPet(null);
                  }}
                  className={`p-3 rounded-xl text-left border transition-all ${
                    activeTab === 'comunidade'
                      ? 'bg-[#9E3E5D] text-white border-[#9E3E5D] shadow-sm'
                      : 'bg-[#FDF2F4] text-[#5E3B46] border-[#F0D5DD] hover:border-[#9E3E5D]'
                  }`}
                >
                  <div className="text-xs font-bold">3. Rede Social</div>
                  <div className={`text-[11px] ${activeTab === 'comunidade' ? 'text-rose-100' : 'text-[#8A5A69]'}`}>
                    Histórias & Resgates
                  </div>
                </button>

                <button
                  onClick={() => {
                    setActiveTab('auth');
                    setSelectedPet(null);
                  }}
                  className={`p-3 rounded-xl text-left border transition-all ${
                    activeTab === 'auth'
                      ? 'bg-[#9E3E5D] text-white border-[#9E3E5D] shadow-sm'
                      : 'bg-[#FDF2F4] text-[#5E3B46] border-[#F0D5DD] hover:border-[#9E3E5D]'
                  }`}
                >
                  <div className="text-xs font-bold">4. Tela de Entrada</div>
                  <div className={`text-[11px] ${activeTab === 'auth' ? 'text-rose-100' : 'text-[#8A5A69]'}`}>
                    UI original do PDF
                  </div>
                </button>
              </div>
            </div>

            {/* Jetpack Compose Tech Peek */}
            <div className="pt-2">
              <button
                onClick={() => setCodeDrawerOpen(!codeDrawerOpen)}
                className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-[#F5E5E9] hover:bg-[#EED5DC] text-xs font-semibold text-[#812D49] transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-[#9E3E5D]" />
                  <span>{codeDrawerOpen ? 'Ocultar Código Kotlin' : 'Ver Código Compose (Kotlin)'}</span>
                </div>
                <span>{codeDrawerOpen ? '▲' : '▼'}</span>
              </button>

              {codeDrawerOpen && (
                <div className="mt-3 p-4 bg-[#21151A] rounded-2xl text-rose-100 font-mono text-[11px] overflow-x-auto shadow-inner leading-relaxed">
                  <p className="text-rose-300">// Jetpack Compose: PetCard.kt</p>
                  <p className="text-purple-300">@Composable</p>
                  <p>
                    <span className="text-blue-300">fun</span>{' '}
                    <span className="text-yellow-200">AdotePetCard</span>(pet: Pet, onAdoptClick: () {'->'} Unit) &#123;
                  </p>
                  <p className="pl-4">Card(shape = RoundedCornerShape(24.dp), elevation = CardDefaults.cardElevation(4.dp)) &#123;</p>
                  <p className="pl-8 text-rose-200">AsyncImage(model = pet.imageUrl, contentDescription = pet.name)</p>
                  <p className="pl-8">Column(modifier = Modifier.padding(16.dp)) &#123;</p>
                  <p className="pl-12 text-green-300">Text(pet.name, style = MaterialTheme.typography.headlineSmall)</p>
                  <p className="pl-12 text-rose-200">HealthBadge(pet.vaccinated, pet.neutered)</p>
                  <p className="pl-12 text-yellow-300">Button(onClick = onAdoptClick) &#123; Text("Quero Adotar") &#125;</p>
                  <p className="pl-8">&#125;</p>
                  <p className="pl-4">&#125;</p>
                  <p>&#125;</p>
                </div>
              )}
            </div>

            {/* Security Guarantee Note */}
            <div className="flex items-start gap-3 p-3.5 bg-rose-50/60 rounded-2xl border border-rose-100 text-xs text-[#7A4E5C]">
              <ShieldCheck className="w-4 h-4 text-[#9E3E5D] shrink-0 mt-0.5" />
              <span>
                Termo de adoção formalizado com assinatura digital válida juridicamente e checagem de antecedentes para coibir maus-tratos.
              </span>
            </div>
          </div>
        </div>

        {/* Right column: The Working Phone Mockup */}
        <div className="lg:col-span-7 flex justify-center">
          <div className="relative w-full max-w-[360px] sm:max-w-[380px] bg-[#1F1418] p-3 sm:p-4 rounded-[48px] shadow-2xl border-4 border-[#3D252E]">
            {/* Phone Speaker & Camera Notch */}
            <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-4 bg-[#1F1418] rounded-full z-30 flex items-center justify-center">
              <div className="w-10 h-1 bg-[#3D252E] rounded-full" />
              <div className="w-2.5 h-2.5 bg-[#2C1820] rounded-full ml-3 border border-[#3D252E]" />
            </div>

            {/* Phone Screen Canvas */}
            <div className="w-full bg-[#FDF6F8] rounded-[38px] overflow-hidden flex flex-col h-[640px] text-[#2C1820] relative">
              {/* Phone Status Bar */}
              <div className="h-8 bg-[#FDF6F8] px-6 pt-2 flex items-center justify-between text-[11px] font-semibold text-[#5E3B46] select-none shrink-0 z-20">
                <span>09:41</span>
                <div className="flex items-center gap-1.5 text-[10px]">
                  <span>5G</span>
                  <span>100%</span>
                </div>
              </div>

              {/* SCREEN CONTENT AREA */}
              <div className="flex-1 overflow-y-auto pb-16 relative">
                {/* 1. FEED TAB */}
                {activeTab === 'feed' && !selectedPet && (
                  <div className="p-4 space-y-4">
                    {/* App Header */}
                    <div className="flex items-center justify-between pt-1">
                      <div>
                        <span className="text-[11px] text-[#8A5A69]">Localização Atual</span>
                        <div className="flex items-center gap-1 text-xs font-bold text-[#9E3E5D]">
                          <MapPin className="w-3.5 h-3.5" />
                          <span>São Paulo, SP</span>
                        </div>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-[#9E3E5D] text-white flex items-center justify-center text-xs font-bold shadow-sm">
                        AP
                      </div>
                    </div>

                    {/* Search & Filter Bar */}
                    <div className="relative">
                      <Search className="w-4 h-4 absolute left-3 top-3 text-[#9E3E5D]/60" />
                      <input
                        type="text"
                        placeholder="Buscar por porte, raça ou ONG..."
                        className="w-full pl-9 pr-4 py-2 bg-white rounded-full text-xs border border-[#F0D5DD] focus:outline-none focus:border-[#9E3E5D]"
                        readOnly
                      />
                    </div>

                    {/* Species Tabs */}
                    <div className="flex items-center gap-1.5 p-1 bg-[#F5E5E9] rounded-full text-xs">
                      <button
                        onClick={() => setSpeciesFilter('all')}
                        className={`flex-1 py-1.5 rounded-full font-medium transition-all ${
                          speciesFilter === 'all' ? 'bg-[#9E3E5D] text-white shadow-sm' : 'text-[#5E3B46]'
                        }`}
                      >
                        Todos (3)
                      </button>
                      <button
                        onClick={() => setSpeciesFilter('dog')}
                        className={`flex-1 py-1.5 rounded-full font-medium transition-all ${
                          speciesFilter === 'dog' ? 'bg-[#9E3E5D] text-white shadow-sm' : 'text-[#5E3B46]'
                        }`}
                      >
                        Cães (2)
                      </button>
                      <button
                        onClick={() => setSpeciesFilter('cat')}
                        className={`flex-1 py-1.5 rounded-full font-medium transition-all ${
                          speciesFilter === 'cat' ? 'bg-[#9E3E5D] text-white shadow-sm' : 'text-[#5E3B46]'
                        }`}
                      >
                        Gatos (1)
                      </button>
                    </div>

                    {/* Pet List Cards */}
                    <div className="space-y-4">
                      {filteredPets.map((pet) => (
                        <div
                          key={pet.id}
                          onClick={() => {
                            setSelectedPet(pet);
                            setAdoptionSubmitted(false);
                          }}
                          className="bg-white rounded-2xl overflow-hidden border border-[#F0D5DD] shadow-sm hover:shadow-md transition-all cursor-pointer group"
                        >
                          <div className="relative h-44 w-full bg-rose-50 overflow-hidden">
                            <img
                              src={pet.image}
                              alt={pet.name}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute top-2.5 right-2.5 bg-white/90 backdrop-blur-md rounded-full px-2.5 py-0.5 text-[10px] font-bold text-[#9E3E5D]">
                              {pet.gender} · {pet.age}
                            </div>
                            <div className="absolute bottom-2.5 left-2.5 bg-black/60 backdrop-blur-sm rounded-full px-2.5 py-0.5 text-[10px] text-white flex items-center gap-1">
                              <CheckCircle className="w-3 h-3 text-emerald-400" />
                              <span>Vacinado & Castrado</span>
                            </div>
                          </div>

                          <div className="p-3.5 space-y-2">
                            <div className="flex items-center justify-between">
                              <h4 className="font-serif-display font-bold text-base text-[#2C1820]">
                                {pet.name}
                              </h4>
                              <span className="text-[11px] text-[#9E3E5D] font-medium">{pet.breed}</span>
                            </div>

                            <p className="text-xs text-[#5E3B46] line-clamp-2 leading-relaxed">
                              {pet.story}
                            </p>

                            <div className="pt-1 flex items-center justify-between text-[11px] border-t border-[#F5E5E9]">
                              <span className="text-[#8A5A69]">{pet.ngo}</span>
                              <span className="font-bold text-[#9E3E5D] group-hover:underline">
                                Conhecer História →
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 1.1 DETAIL VIEW OF SELECTED PET */}
                {activeTab === 'feed' && selectedPet && (
                  <div className="p-4 space-y-4">
                    <button
                      onClick={() => {
                        setSelectedPet(null);
                        setAdoptionSubmitted(false);
                      }}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#9E3E5D] hover:underline"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>Voltar para lista</span>
                    </button>

                    <div className="rounded-2xl overflow-hidden bg-rose-50 h-52 relative shadow-inner">
                      <img
                        src={selectedPet.image}
                        alt={selectedPet.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2.5 right-2.5 bg-white/90 backdrop-blur-sm rounded-full p-2 text-[#9E3E5D]">
                        <Share2 className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    <div>
                      <div className="flex items-baseline justify-between">
                        <h3 className="text-xl font-serif-display font-bold text-[#2C1820]">
                          {selectedPet.name}
                        </h3>
                        <span className="text-xs font-semibold text-[#9E3E5D]">{selectedPet.age}</span>
                      </div>
                      <p className="text-xs text-[#8A5A69]">{selectedPet.breed} · {selectedPet.location}</p>
                    </div>

                    {/* Personality Tags */}
                    <div>
                      <span className="text-[11px] font-semibold text-[#2C1820]">Personalidade:</span>
                      <div className="flex flex-wrap gap-1.5 mt-1">
                        {selectedPet.personality.map((trait) => (
                          <span
                            key={trait}
                            className="text-[10px] bg-[#F5E5E9] text-[#812D49] px-2.5 py-0.5 rounded-full font-medium"
                          >
                            {trait}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Health Checklist */}
                    <div className="bg-white p-3 rounded-xl border border-[#F0D5DD] space-y-1.5 text-xs">
                      <span className="font-semibold text-[11px] text-[#2C1820]">Prontuário de Saúde Verificado:</span>
                      <div className="grid grid-cols-2 gap-1 text-[11px] text-[#5E3B46]">
                        <div className="flex items-center gap-1">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Vacinas V10 / Raiva</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Castrado(a)</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Vermifugado(a)</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Microchipado(a)</span>
                        </div>
                      </div>
                    </div>

                    {/* Story */}
                    <div>
                      <span className="text-[11px] font-semibold text-[#2C1820]">História do Resgate:</span>
                      <p className="text-xs text-[#5E3B46] mt-1 leading-relaxed">{selectedPet.story}</p>
                    </div>

                    {/* Adoption Form Simulator */}
                    {!adoptionSubmitted ? (
                      <form onSubmit={handleAdoptionSubmit} className="bg-[#FAF0F3] p-3 rounded-2xl space-y-2 border border-[#F0D5DD]">
                        <span className="text-xs font-bold text-[#9E3E5D] block">
                          Formulário de Adoção Responsável
                        </span>
                        <input
                          type="text"
                          required
                          placeholder="Seu nome completo"
                          value={applicantName}
                          onChange={(e) => setApplicantName(e.target.value)}
                          className="w-full text-xs p-2 bg-white rounded-lg border border-[#F0D5DD] focus:outline-none"
                        />
                        <input
                          type="tel"
                          required
                          placeholder="WhatsApp para contato"
                          value={applicantPhone}
                          onChange={(e) => setApplicantPhone(e.target.value)}
                          className="w-full text-xs p-2 bg-white rounded-lg border border-[#F0D5DD] focus:outline-none"
                        />
                        <button
                          type="submit"
                          className="w-full py-2.5 bg-[#9E3E5D] text-white rounded-xl text-xs font-semibold hover:bg-[#812D49] transition-all shadow-sm"
                        >
                          Enviar Manifestação de Adoção
                        </button>
                      </form>
                    ) : (
                      <div className="bg-emerald-50 border border-emerald-200 p-3.5 rounded-2xl text-center space-y-1">
                        <CheckCircle className="w-6 h-6 text-emerald-600 mx-auto" />
                        <h5 className="text-xs font-bold text-emerald-900">Solicitação Enviada com Sucesso!</h5>
                        <p className="text-[11px] text-emerald-700">
                          A ONG <strong className="font-semibold">{selectedPet.ngo}</strong> entrará em contato via WhatsApp para agendar sua entrevista.
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {/* 2. CARTEIRA DIGITAL TAB */}
                {activeTab === 'carteira' && (
                  <div className="p-4 space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="font-serif-display font-bold text-lg text-[#2C1820]">
                        Carteira Digital Pet
                      </h4>
                      <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">
                        Ativa
                      </span>
                    </div>

                    {/* Virtual ID Card */}
                    <div className="bg-gradient-to-br from-[#9E3E5D] to-[#6E233D] text-white p-4 rounded-2xl shadow-md space-y-3 relative overflow-hidden">
                      <div className="flex justify-between items-start">
                        <div>
                          <span className="text-[10px] tracking-wider uppercase text-rose-200">
                            Registro Geral Animal (RGA)
                          </span>
                          <h5 className="text-lg font-serif-display font-bold">Luna Caramelo</h5>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-xs">
                          🐾
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-[10px] text-rose-100 pt-2 border-t border-white/20">
                        <div>
                          <span className="block text-rose-300">Microchip:</span>
                          <span className="font-mono font-semibold text-white">#BR-982-104-55</span>
                        </div>
                        <div>
                          <span className="block text-rose-300">Tutor:</span>
                          <span className="font-semibold text-white">Mariana Santos</span>
                        </div>
                        <div>
                          <span className="block text-rose-300">Espécie:</span>
                          <span>Canina · Fêmea</span>
                        </div>
                        <div>
                          <span className="block text-rose-300">Município:</span>
                          <span>São Paulo, SP</span>
                        </div>
                      </div>
                    </div>

                    {/* Vaccines Checklist */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-[#2C1820]">Histórico de Imunização</span>
                        <span className="text-[10px] text-[#9E3E5D] font-medium">Validado por CRMV</span>
                      </div>

                      <div className="space-y-2">
                        {HEALTH_RECORDS_MOCK.map((rec) => (
                          <div
                            key={rec.id}
                            className="bg-white p-2.5 rounded-xl border border-[#F0D5DD] flex items-center justify-between text-xs"
                          >
                            <div className="space-y-0.5">
                              <div className="font-semibold text-[#2C1820] text-[11px]">{rec.type}</div>
                              <div className="text-[10px] text-[#8A5A69]">{rec.vet} · {rec.date}</div>
                            </div>
                            <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                              {rec.status}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Partner Clinic Promo */}
                    <div className="bg-[#FAF0F3] p-3 rounded-xl border border-[#F0D5DD] text-xs space-y-1.5">
                      <div className="flex items-center gap-1.5 text-[#9E3E5D] font-bold">
                        <Award className="w-4 h-4" />
                        <span>Clube de Cuidados AdotePet</span>
                      </div>
                      <p className="text-[11px] text-[#5E3B46]">
                        Apresente esta tela em clínicas conveniadas e garanta 20% de desconto na consulta preventiva de 6 meses.
                      </p>
                    </div>
                  </div>
                )}

                {/* 3. COMUNIDADE TAB */}
                {activeTab === 'comunidade' && (
                  <div className="p-4 space-y-4">
                    <h4 className="font-serif-display font-bold text-lg text-[#2C1820]">
                      Histórias & Conexões
                    </h4>

                    {/* Social Post */}
                    <div className="bg-white rounded-2xl border border-[#F0D5DD] p-3.5 space-y-3 shadow-sm">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-[#F4DEE4] flex items-center justify-center font-bold text-[#9E3E5D] text-xs">
                          MS
                        </div>
                        <div>
                          <div className="text-xs font-bold text-[#2C1820]">Mariana Santos</div>
                          <div className="text-[10px] text-[#8A5A69]">Adotou Luna há 2 meses · Zona Sul</div>
                        </div>
                      </div>

                      <p className="text-xs text-[#5E3B46] leading-relaxed">
                        Hoje fez 60 dias que a Luna chegou aqui em casa! No começo ela era tímida, mas hoje já corre pelo quintal e dorme aos meus pés. Agradecimento especial à equipe do AdotePet e ao Instituto Salva Patas! 🐾❤️
                      </p>

                      <div className="h-44 rounded-xl overflow-hidden bg-rose-50">
                        <img src={PETS_DATA[0].image} alt="Luna feliz" className="w-full h-full object-cover" />
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t border-[#F5E5E9] text-xs text-[#5E3B46]">
                        <button
                          onClick={handleLike}
                          className={`flex items-center gap-1 font-medium transition-colors ${
                            hasLiked ? 'text-[#9E3E5D] font-bold' : 'hover:text-[#9E3E5D]'
                          }`}
                        >
                          <ThumbsUp className="w-3.5 h-3.5" />
                          <span>{likesCount} Curtidas</span>
                        </button>
                        <div className="flex items-center gap-1">
                          <MessageCircle className="w-3.5 h-3.5" />
                          <span>12 Comentários</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 4. AUTH TAB (Recreating PDF Slide 4 Login UI!) */}
                {activeTab === 'auth' && (
                  <div className="p-5 flex flex-col justify-center min-h-[520px] text-center space-y-5">
                    {/* Cat Silhouette Logo matching Slide 4 */}
                    <div className="flex flex-col items-center space-y-2">
                      <div className="w-16 h-16 rounded-full bg-[#FAF0F3] flex items-center justify-center border border-[#F0D5DD]">
                        <svg width="40" height="40" viewBox="0 0 100 100" fill="#2C1820">
                          <path d="M70,85 C65,70 55,65 50,65 C45,65 35,70 30,85 C25,70 20,40 30,25 C35,20 40,25 45,28 C50,26 55,26 60,28 C65,25 70,20 75,25 C85,40 80,70 70,85 Z" />
                        </svg>
                      </div>
                      <h3 className="font-serif-display text-2xl font-bold text-[#2C1820]">
                        Adote<span className="text-[#9E3E5D] italic">Pet</span>
                      </h3>
                      <p className="text-[11px] text-[#8A5A69]">
                        Conectando quem ama e protege animais
                      </p>
                    </div>

                    <div className="space-y-2.5 text-left">
                      <div>
                        <label className="text-[10px] font-semibold text-[#5E3B46] block mb-1">
                          E-mail ou usuário
                        </label>
                        <input
                          type="text"
                          defaultValue="tutor@adotepet.org.br"
                          className="w-full text-xs p-2.5 bg-white rounded-xl border border-[#F0D5DD] focus:outline-none focus:border-[#9E3E5D]"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] font-semibold text-[#5E3B46] block mb-1">
                          Senha
                        </label>
                        <input
                          type="password"
                          defaultValue="••••••••••••"
                          className="w-full text-xs p-2.5 bg-white rounded-xl border border-[#F0D5DD] focus:outline-none focus:border-[#9E3E5D]"
                        />
                      </div>

                      <button
                        onClick={() => setActiveTab('feed')}
                        className="w-full py-2.5 bg-[#9E3E5D] hover:bg-[#812D49] text-white text-xs font-bold rounded-xl transition-all shadow-sm"
                      >
                        Entrar na Plataforma
                      </button>
                    </div>

                    <div className="pt-2 border-t border-[#F0D5DD] space-y-2">
                      <span className="text-[10px] text-[#8A5A69]">Ou continue com:</span>
                      <div className="flex justify-center gap-2">
                        <button className="px-4 py-1.5 bg-white border border-[#F0D5DD] rounded-lg text-xs font-semibold text-[#2C1820] hover:bg-rose-50">
                          Google
                        </button>
                        <button className="px-4 py-1.5 bg-white border border-[#F0D5DD] rounded-lg text-xs font-semibold text-[#2C1820] hover:bg-rose-50">
                          Gov.br
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Phone Navigation Bar */}
              <div className="absolute bottom-0 left-0 right-0 h-14 bg-white/95 backdrop-blur-md border-t border-[#F0D5DD] flex items-center justify-around px-2 text-[#8A5A69] z-20">
                <button
                  onClick={() => {
                    setActiveTab('feed');
                    setSelectedPet(null);
                  }}
                  className={`flex flex-col items-center gap-0.5 text-[10px] ${
                    activeTab === 'feed' ? 'text-[#9E3E5D] font-bold' : 'hover:text-[#2C1820]'
                  }`}
                >
                  <Heart className={`w-4 h-4 ${activeTab === 'feed' ? 'fill-[#9E3E5D]' : ''}`} />
                  <span>Adotar</span>
                </button>

                <button
                  onClick={() => {
                    setActiveTab('carteira');
                    setSelectedPet(null);
                  }}
                  className={`flex flex-col items-center gap-0.5 text-[10px] ${
                    activeTab === 'carteira' ? 'text-[#9E3E5D] font-bold' : 'hover:text-[#2C1820]'
                  }`}
                >
                  <FileText className="w-4 h-4" />
                  <span>Carteira</span>
                </button>

                <button
                  onClick={() => {
                    setActiveTab('comunidade');
                    setSelectedPet(null);
                  }}
                  className={`flex flex-col items-center gap-0.5 text-[10px] ${
                    activeTab === 'comunidade' ? 'text-[#9E3E5D] font-bold' : 'hover:text-[#2C1820]'
                  }`}
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Rede</span>
                </button>

                <button
                  onClick={() => {
                    setActiveTab('auth');
                    setSelectedPet(null);
                  }}
                  className={`flex flex-col items-center gap-0.5 text-[10px] ${
                    activeTab === 'auth' ? 'text-[#9E3E5D] font-bold' : 'hover:text-[#2C1820]'
                  }`}
                >
                  <User className="w-4 h-4" />
                  <span>Perfil</span>
                </button>
              </div>

              {/* iPhone style home indicator bar */}
              <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-32 h-1 bg-[#2C1820]/40 rounded-full z-30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
