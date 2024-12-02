import { TeamMember } from "@/types/team";

export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Sarah Chen",
    role: "Engineering Lead",
    symbol: "En",
    atomicNumber: 1,
    category: "Engineering",
    email: "sarah@company.com",
    backgroundColor: "#fefce8", // Light yellow
  },
  {
    id: "2",
    name: "Michael Rodriguez",
    role: "Project Manager",
    symbol: "Pm",
    atomicNumber: 2,
    category: "Management",
    email: "michael@company.com",
    backgroundColor: "#dcfce7", // Light green
  },
  {
    id: "3",
    name: "Alex Kim",
    role: "UX Designer",
    symbol: "Ux",
    atomicNumber: 3,
    category: "Design",
    email: "alex@company.com",
    backgroundColor: "#fce7f3", // Light pink
  },
];
