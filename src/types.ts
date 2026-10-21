export interface Pet {
  id: string;
  name: string;
  species: 'dog' | 'cat';
  breed: string;
  age: string;
  gender: 'Macho' | 'Fêmea';
  size: 'Pequeno' | 'Médio' | 'Grande';
  image: string;
  personality: string[];
  location: string;
  ngo: string;
  vaccinated: boolean;
  neutered: boolean;
  microchipped: boolean;
  story: string;
  specialNeeds?: string;
}

export interface StakeholderInfo {
  id: string;
  title: string;
  shortDesc: string;
  iconName: string;
  badge: string;
  benefits: string[];
  metrics: string;
  detailedPoints: { title: string; desc: string }[];
}

export interface AdoptionApplication {
  petId: string;
  petName: string;
  applicantName: string;
  email: string;
  phone: string;
  city: string;
  homeType: 'apartment' | 'house';
  hasOtherPets: boolean;
  notes: string;
}

export interface HealthRecord {
  id: string;
  type: string;
  date: string;
  status: 'Em dia' | 'Pendente';
  vet: string;
}
