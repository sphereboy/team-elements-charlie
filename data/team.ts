import { TeamMember } from '../types/team'

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    role: 'Engineering Lead',
    department: 'Engineering',
    element: {
      symbol: 'En',
      atomicNumber: 1,
    },
    strengths: ['Technical Architecture', 'Team Leadership', 'System Design', 'Problem Solving'],
    color: 'bg-yellow-100 dark:bg-yellow-900/20',
  },
  {
    id: '2',
    name: 'Michael Rodriguez',
    role: 'Product Manager',
    department: 'Product',
    element: {
      symbol: 'Pm',
      atomicNumber: 2,
    },
    strengths: ['Strategy', 'User Research', 'Roadmap Planning', 'Stakeholder Management'],
    color: 'bg-pink-100 dark:bg-pink-900/20',
  },
  {
    id: '3',
    name: 'Alex Kim',
    role: 'UX Designer',
    department: 'Design',
    element: {
      symbol: 'Ux',
      atomicNumber: 3,
    },
    strengths: ['User Interface', 'Prototyping', 'User Testing', 'Visual Design'],
    color: 'bg-blue-100 dark:bg-blue-900/20',
  },
]

