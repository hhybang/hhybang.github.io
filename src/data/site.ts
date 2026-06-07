// Central site data — edit content here, layouts read from it.

export const site = {
  name: 'Hyemin Bang',
  nickname: 'Helen',
  title: 'PhD student',
  affiliation: 'MIT EECS',
  tagline: 'HCI + AI',
  email: 'hbang@mit.edu',
  links: {
    cv: '/CV.pdf',
    linkedin: 'https://www.linkedin.com/in/hyeminbang',
    github: 'https://github.com/hhybang',
    scholar: '',
  },
} as const;

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Publications', href: '/publications' },
  { label: 'CV', href: '/cv' },
];

export type NewsItem = { date: string; html: string };

export const news: NewsItem[] = [
  {
    date: 'Sep 2025',
    html: 'Started my PhD at MIT EECS.',
  },
  {
    date: 'May 2025',
    html: 'Graduated with my MEng in Computer Science (concentration in Artificial Intelligence) from MIT.',
  },
  {
    date: 'Oct 2024',
    html: 'Presented <em>Explanation Alignment</em> at the ECCV Workshop on Explainable Computer Vision in Milan, Italy.',
  },
];

export type Publication = {
  title: string;
  authors: string; // HTML; wrap your own name in <strong>
  venue: string;
  year: number;
  category: 'Conference' | 'Workshop' | 'Journal' | 'Preprint';
  image?: string;
  selected?: boolean;
  badge?: string; // e.g. 'Under Review' — shown as a small pill on the card
  links: { label: string; href: string }[];
};

export const publications: Publication[] = [
  {
    title:
      'Iterative Rubric Refinement from User Disagreement at Inference Time',
    authors: '<strong>Hyemin Bang</strong>, Mitchell Gordon',
    venue: 'Under review',
    year: 2026,
    category: 'Preprint',
    image: '/images/pubs/iterative-rubric-refinement.png',
    selected: true,
    links: [],
  },
  {
    title:
      'Abstraction Alignment: Comparing Model-Learned and Human-Encoded Conceptual Relationships',
    authors:
      'Angie Boggust, <strong>Hyemin Bang</strong>, Hendrik Strobelt, Arvind Satyanarayan',
    venue: 'ACM CHI Conference on Human Factors in Computing Systems (CHI)',
    year: 2025,
    category: 'Conference',
    image: '/images/pubs/abstraction-alignment.jpg',
    selected: true,
    links: [
      { label: 'Project', href: 'https://vis.csail.mit.edu/pubs/abstraction-alignment/' },
      { label: 'Paper', href: 'https://vis.csail.mit.edu/pubs/abstraction-alignment.pdf' },
      { label: 'Code', href: 'https://github.com/mitvis/abstraction-alignment' },
    ],
  },
  {
    title:
      'Explanation Alignment: Quantifying the Correctness of Model Reasoning At Scale',
    authors: '<strong>Hyemin Bang</strong>, Angie Boggust, Arvind Satyanarayan',
    venue:
      'ECCV Workshop on Explainable Computer Vision (xAI)',
    year: 2024,
    category: 'Workshop',
    image: '/images/pubs/explanation_alignment.jpg',
    selected: true,
    links: [
      { label: 'Project', href: 'https://vis.csail.mit.edu/pubs/explanation-alignment/' },
      { label: 'Paper', href: 'https://vis.csail.mit.edu/pubs/explanation-alignment.pdf' },
      { label: 'Code', href: 'https://github.com/mitvis/explanation_alignment' },
    ],
  },
];
