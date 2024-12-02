export interface Role {
  id: string;
  title: string;
  symbol: string;
  category: string;
  backgroundColor: string;
}

export const roles: Role[] = [
  // Engineering
  {
    id: "en",
    title: "Engineering Lead",
    symbol: "En",
    category: "Engineering",
    backgroundColor: "#fefce8", // Light yellow
  },

  // Executive Roles
  {
    id: "ceo",
    title: "Chief Executive Officer",
    symbol: "Ce",
    category: "Executive",
    backgroundColor: "#fef3c7", // Amber-100
  },
  {
    id: "coo",
    title: "Chief Operations Officer",
    symbol: "Co",
    category: "Executive",
    backgroundColor: "#fef3c7",
  },
  {
    id: "cfo",
    title: "Chief Financial Officer",
    symbol: "Cf",
    category: "Executive",
    backgroundColor: "#fef3c7",
  },
  {
    id: "cd",
    title: "Creative Director",
    symbol: "Cd",
    category: "Creative",
    backgroundColor: "#fee2e2", // Red-100
  },

  // Production Roles
  {
    id: "dp",
    title: "Director of Photography",
    symbol: "Dp",
    category: "Production",
    backgroundColor: "#dbeafe", // Blue-100
  },
  {
    id: "pd",
    title: "Production Director",
    symbol: "Pd",
    category: "Production",
    backgroundColor: "#dbeafe",
  },
  {
    id: "ae",
    title: "After Effects Artist",
    symbol: "Ae",
    category: "Post-Production",
    backgroundColor: "#e0e7ff", // Indigo-100
  },
  {
    id: "ed",
    title: "Video Editor",
    symbol: "Ed",
    category: "Post-Production",
    backgroundColor: "#e0e7ff",
  },

  // Photography Roles
  {
    id: "ph",
    title: "Photographer",
    symbol: "Ph",
    category: "Photography",
    backgroundColor: "#f3e8ff", // Purple-100
  },
  {
    id: "rt",
    title: "Retoucher",
    symbol: "Rt",
    category: "Photography",
    backgroundColor: "#f3e8ff",
  },

  // Design Roles
  {
    id: "gd",
    title: "Graphic Designer",
    symbol: "Gd",
    category: "Design",
    backgroundColor: "#fce7f3", // Pink-100
  },
  {
    id: "mo",
    title: "Motion Designer",
    symbol: "Mo",
    category: "Design",
    backgroundColor: "#fce7f3",
  },
  {
    id: "ux",
    title: "UX Designer",
    symbol: "Ux",
    category: "Design",
    backgroundColor: "#fce7f3",
  },

  // Management
  {
    id: "pm",
    title: "Project Manager",
    symbol: "Pm",
    category: "Management",
    backgroundColor: "#dcfce7", // Green-100
  },
  {
    id: "pc",
    title: "Production Coordinator",
    symbol: "Pc",
    category: "Management",
    backgroundColor: "#dcfce7",
  },
];
