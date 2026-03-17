import { Service } from '../types';

export const services: Service[] = [
  {
    id: 'static',
    number: '01',
    title: 'STATIC\nWEBSITE',
    badge: 'FAST ✦ AFFORDABLE ✦ SEO-READY',
    benefits: [
      'Lightning-fast load times',
      'Zero maintenance overhead',
      'Perfect for portfolios & landing pages',
      'Delivered in 4 days',
    ],
    price: 'FROM ₹8,000',
    cta: 'START HERE →',
    popular: false,
    icon: 'Zap',
  },
  {
    id: 'dynamic',
    number: '02',
    title: 'DYNAMIC\nWEBSITE',
    badge: 'SCALABLE ✦ INTERACTIVE ✦ POWERFUL',
    benefits: [
      'User logins & dashboards',
      'Database-driven content',
      'E-commerce & payment integration',
      'Built for 10x growth',
    ],
    price: 'FROM ₹25,000',
    cta: 'BUILD MINE →',
    popular: true,
    icon: 'Layers',
  },
];
