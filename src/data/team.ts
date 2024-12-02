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
    role: "Product Manager",
    symbol: "Pm",
    atomicNumber: 2,
    category: "Product",
    email: "michael@company.com",
    backgroundColor: "#fce7f3", // Light pink
  },
  {
    id: "3",
    name: "Alex Kim",
    role: "UX Designer",
    symbol: "Ux",
    atomicNumber: 3,
    category: "Design",
    email: "alex@company.com",
    backgroundColor: "#dbeafe", // Light blue
  },
];
