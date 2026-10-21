import { Pet, StakeholderInfo, HealthRecord } from '../types';

import rescueDogImg from '../assets/images/adotepet_rescue_dog_1792548042129.jpg';
import kittenCuddleImg from '../assets/images/adotepet_kitten_cuddle_1792548043337.jpg';
import happyAdopterImg from '../assets/images/adotepet_happy_adopter_1792548041550.jpg';

export { rescueDogImg, kittenCuddleImg, happyAdopterImg };

export const PETS_DATA: Pet[] = [
  {
    id: 'luna',
    name: 'Luna',
    species: 'dog',
    breed: 'Vira-lata Caramelo dócil',
    age: '1 ano e 2 meses',
    gender: 'Fêmea',
    size: 'Médio',
    image: rescueDogImg,
    personality: ['Carinhosa', 'Brincalhona', 'Sociável com outros cães', 'Ama crianças'],
    location: 'São Paulo, SP · Zona Sul',
    ngo: 'Instituto Salva Patas',
    vaccinated: true,
    neutered: true,
    microchipped: true,
    story: 'Resgatada prenha em uma obra abandonada, Luna cuidou dos seus filhotinhos com todo carinho até todos serem adotados. Agora chegou a vez dela encontrar um lar cheio de amor e aconchego!',
  },
  {
    id: 'milo',
    name: 'Milo & Nina',
    species: 'cat',
    breed: 'Gatinho Laranja Rajado',
    age: '4 meses',
    gender: 'Macho',
    size: 'Pequeno',
    image: kittenCuddleImg,
    personality: ['Ronronador', 'Dorme no colo', 'Calmo', 'Adora carinho'],
    location: 'Campinas, SP',
    ngo: 'Abrigo Focinhos Livres',
    vaccinated: true,
    neutered: true,
    microchipped: true,
    story: 'Encontrado desnutrido durante uma forte tempestade, Milo foi acolhido por mãos dedicadas. Adora dormir aconchegado entre as mãos e ronrona assim que ouve a voz humana.',
  },
  {
    id: 'pipoca',
    name: 'Pipoca',
    species: 'dog',
    breed: 'Mestiço Terrier',
    age: '3 anos',
    gender: 'Macho',
    size: 'Pequeno',
    image: happyAdopterImg,
    personality: ['Educado', 'Companheiro', 'Anda solto na coleira', 'Adaptação fácil'],
    location: 'Curitiba, PR',
    ngo: 'Rede SOS Bichos',
    vaccinated: true,
    neutered: true,
    microchipped: true,
    story: 'Pipoca foi acolhido após seu tutor idoso falecer. É extremamente educado, não late sem motivo e faz festa para todo mundo que chega em casa. Ideal para apartamento!',
  },
];

export const FOUR_STAKEHOLDERS: StakeholderInfo[] = [
  {
    id: 'ongs',
    title: 'ONGs e Resgatantes',
    shortDesc: 'Gestão integrada de acolhimento, prontuário digital e triagem ágil.',
    iconName: 'ShieldHeart',
    badge: 'Rede de Proteção',
    benefits: [
      'Controle unificado de fichas clínicas e vacinas',
      'Triagem digital de candidatos com questionário inteligente',
      'Campanhas transparentes de apadrinhamento e doações',
      'Redução do tempo médio de espera no abrigo de 180 para 32 dias',
    ],
    metrics: '8.400+ pets cadastrados',
    detailedPoints: [
      {
        title: 'Prontuário Médico Centralizado',
        desc: 'Registro completo de cirurgias, vermifugações, exames de sangue e datas de reforço vacinal que acompanham o animal por toda a vida.',
      },
      {
        title: 'Filtro Responsável de Adotantes',
        desc: 'O algoritmo pré-qualifica candidatos considerando tipo de moradia (telas de proteção para gatos, espaço para cães de grande porte).',
      },
      {
        title: 'Gestão de Lares Temporários',
        desc: 'Comunicação direta com voluntários acolhedores para monitoramento contínuo da evolução clínica do pet.',
      },
    ],
  },
  {
    id: 'adotantes',
    title: 'Adotantes e Tutores',
    shortDesc: 'Adoção guiada por afinidade, segurança documental e apoio contínuo.',
    iconName: 'HeartHandshake',
    badge: 'Amor & Cuidado',
    benefits: [
      'Match por compatibilidade de rotina e temperamento',
      'Assinatura digital do Termo de Adoção Responsável',
      'Carteirinha digital de vacinação com alertas automáticos',
      'Suporte comportamental e canal direto com a ONG no pós-adoção',
    ],
    metrics: '98.2% de retenção pós-adoção',
    detailedPoints: [
      {
        title: 'Busca Afetiva por Personalidade',
        desc: 'Encontre companheiros calmos para home office ou ativos para corrida, com descrições sinceras de comportamento.',
      },
      {
        title: 'Processo Sem Burocracia Arcaica',
        desc: 'Submissão de comprovantes direto pelo celular, chat com os protetores e agendamento de visita presencial.',
      },
      {
        title: 'Clube de Benefícios do Adotado',
        desc: 'Desconto exclusivo na primeira consulta e castração com clínicas parceiras credenciadas na cidade.',
      },
    ],
  },
  {
    id: 'clinicas',
    title: 'Petshops e Clínicas',
    shortDesc: 'Fidelização de novos tutores e promoção do bem-estar preventivo.',
    iconName: 'Stethoscope',
    badge: 'Ecossistema Pet',
    benefits: [
      'Atração qualificada de novos tutores recém-adotantes',
      'Validação de carteira de vacinas direto pelo CRMV do médico',
      'Campanhas de vacinação e castração subsidiada no app',
      'Fortalecimento da marca associada ao impacto social autêntico',
    ],
    metrics: '340+ clínicas parceiras',
    detailedPoints: [
      {
        title: 'Continuidade do Cuidado',
        desc: 'O histórico clínico do resgate é importado direto para o software da clínica parceira no primeiro atendimento.',
      },
      {
        title: 'Planos de Saúde Social',
        desc: 'Preços sociais e pacotes preventivos desenhados especificamente para animais adotados pela plataforma.',
      },
      {
        title: 'Agenda Integrada',
        desc: 'Lembretes de reforço vacinal e vermífugo enviados via push notification ao tutor, gerando visitas recorrentes.',
      },
    ],
  },
  {
    id: 'gestao',
    title: 'Gestão Pública',
    shortDesc: 'Secretarias e prefeituras com dados reais para políticas urbanas.',
    iconName: 'Building2',
    badge: 'Poder Público',
    benefits: [
      'Censo animal dinâmico com geolocalização de resgates e colônias',
      'Planejamento assertivo de mutirões municipais de castração',
      'Monitoramento epidemiológico e controle preventivo de zoonoses',
      'Economia de até 40% nos custos de manejo e acolhimento municipal',
    ],
    metrics: '18 municípios conveniados',
    detailedPoints: [
      {
        title: 'Painel Geoespacial de Resgates',
        desc: 'Mapa de calor em tempo real indicando áreas de maior incidência de abandono para direcionar fiscalização.',
      },
      {
        title: 'Controle de Zoonoses Eficiente',
        desc: 'Registro unificado de microchips e vacinação antirrábica municipal com emissão de RGA digital.',
      },
      {
        title: 'Integração de Políticas Públicas',
        desc: 'Prefeituras conectam seus Centros de Controle de Zoonoses (CCZ) diretamente com as ONGs cadastradas no AdotePet.',
      },
    ],
  },
];

export const TECH_PILLARS = [
  {
    category: 'EXPERIÊNCIA',
    headline: 'Interface Responsiva com Jetpack Compose',
    description:
      'Desenvolvimento moderno com UI declarativa no Android. Micro-interações suaves a 120fps, transições orquestradas, tipografia adaptativa e compatibilidade nativa com temas dinâmicos (Material You 3).',
    specs: ['Jetpack Compose 1.7', 'Material 3 Design Tokens', 'Compose Navigation', 'Animations & MotionLayout'],
  },
  {
    category: 'APLICATIVO',
    headline: 'Desenvolvimento Mobile Nativo em Kotlin',
    description:
      'Código robusto com tipagem estática, Coroutines e StateFlow para operações assíncronas livres de travamentos. Arquitetura limpa MVVM (Model-View-ViewModel) com banco de dados local Room para funcionamento offline-first.',
    specs: ['Kotlin 2.0 Coroutines', 'Architecture MVVM + Clean', 'Room SQLite Offline Cache', 'Hilt Dependency Injection'],
  },
  {
    category: 'PLATAFORMA',
    headline: 'Base Escalável para Usuários e Integrações',
    description:
      'Infraestrutura em nuvem elástica pronta para milhões de acessos simultâneos. APIs seguras com autenticação OAuth, criptografia ponta-a-ponta de dados pessoais conforme a LGPD e barramento de webhooks para clínicas e órgãos municipais.',
    specs: ['Cloud Serverless APIs', 'LGPD / Criptografia AES-256', 'OAuth 2.0 & Firebase Auth', 'Webhooks p/ Cidades e Clínicas'],
  },
];

export const HEALTH_RECORDS_MOCK: HealthRecord[] = [
  { id: '1', type: 'Vacina V10 Polivalente', date: '14/02/2026', status: 'Em dia', vet: 'Drª Camila Silveira (CRMV-SP 4921)' },
  { id: '2', type: 'Antirrábica Municipal', date: '10/01/2026', status: 'Em dia', vet: 'Centro de Controle Zoonoses SP' },
  { id: '3', type: 'Vermifugação Amplo Espectro', date: '05/03/2026', status: 'Em dia', vet: 'Clínica Amigo Fiel' },
  { id: '4', type: 'Castração e Microchipagem', date: '12/12/2025', status: 'Em dia', vet: 'Instituto Salva Patas' },
];
