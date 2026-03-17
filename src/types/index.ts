export interface Service {
  id: string;
  number: string;
  title: string;
  badge: string;
  benefits: string[];
  price: string;
  cta: string;
  popular: boolean;
  icon: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Static' | 'Dynamic';
  desc: string;
  seed: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initials: string;
  stars: number;
  accent: 'yellow' | 'red' | 'default';
}

export interface ProcessStep {
  step: string;
  icon: string;
  title: string;
  desc: string;
}
