export interface NewsArticle {
  slug: string
  title: string
  description: string
  coverImage: string
  publishedAt: string
  author: {
    name: string
  }
}

export interface Partner {
  name: string
  href: string
}

export const placeholderNews: NewsArticle[] = [
  {
    slug: 'welcome-week-spring-2026',
    title: 'Welcome Week Spring 2026 is Here!',
    description:
      'Join us for a packed week of orientation events, city tours, and your first Czech beer experience. All incoming Erasmus students are welcome!',
    coverImage: 'https://picsum.photos/seed/esn-news-1/600/400',
    publishedAt: '2026-02-15',
    author: { name: 'ESN UWB Pilsen' },
  },
  {
    slug: 'buddy-system-registration-open',
    title: 'Buddy System Registration Now Open',
    description:
      'Local students can now sign up to become a buddy for the spring semester. Help an international student discover Pilsen!',
    coverImage: 'https://picsum.photos/seed/esn-news-2/600/400',
    publishedAt: '2026-01-20',
    author: { name: 'ESN UWB Pilsen' },
  },
  {
    slug: 'trip-to-prague-recap',
    title: 'Trip to Prague — A Weekend to Remember',
    description:
      'Over 60 students joined our weekend trip to Prague. Check out the highlights from the castle tour, river cruise, and night out.',
    coverImage: 'https://picsum.photos/seed/esn-news-3/600/400',
    publishedAt: '2025-12-05',
    author: { name: 'ESN UWB Pilsen' },
  },
]

export interface BoardMember {
  slug: string
  name: string
  role: string
  photo: string
  email: string
}

export const placeholderBoardMembers: BoardMember[] = [
  {
    slug: 'anna-novakova',
    name: 'Anna Novakova',
    role: 'President',
    photo: 'https://picsum.photos/seed/esn-board-1/300/300',
    email: 'president@esnuwbpilsen.cz',
  },
  {
    slug: 'tomas-dvorak',
    name: 'Tomas Dvorak',
    role: 'Vice-President',
    photo: 'https://picsum.photos/seed/esn-board-2/300/300',
    email: 'vicepresident@esnuwbpilsen.cz',
  },
  {
    slug: 'klara-prochazkova',
    name: 'Klara Prochazkova',
    role: 'Treasurer',
    photo: 'https://picsum.photos/seed/esn-board-3/300/300',
    email: 'treasurer@esnuwbpilsen.cz',
  },
  {
    slug: 'jan-horak',
    name: 'Jan Horak',
    role: 'Communication Manager',
    photo: 'https://picsum.photos/seed/esn-board-4/300/300',
    email: 'communication@esnuwbpilsen.cz',
  },
  {
    slug: 'petra-kralova',
    name: 'Petra Kralova',
    role: 'Event Manager',
    photo: 'https://picsum.photos/seed/esn-board-5/300/300',
    email: 'events@esnuwbpilsen.cz',
  },
  {
    slug: 'martin-svoboda',
    name: 'Martin Svoboda',
    role: 'Buddy System Coordinator',
    photo: 'https://picsum.photos/seed/esn-board-6/300/300',
    email: 'buddy@esnuwbpilsen.cz',
  },
]

export const partners: Partner[] = [
  { name: 'Amnesty International', href: '#' },
  { name: 'BOHO CO', href: '#' },
  { name: 'DZS', href: '#' },
  { name: 'Eurosender', href: '#' },
  { name: 'FlixBus', href: '#' },
  { name: 'HoppyGo', href: '#' },
  { name: 'Nesnězeno', href: '#' },
  { name: 'Perlego', href: '#' },
  { name: 'Quanti s.r.o.', href: '#' },
  { name: 'Rise and Shine', href: '#' },
  { name: 'Ryanair', href: '#' },
  { name: 'Spotahome', href: '#' },
  { name: 'The Economist', href: '#' },
  { name: 'Timetravels', href: '#' },
  { name: 'Vodafone', href: '#' },
  { name: 'Záchranka', href: '#' },
]
