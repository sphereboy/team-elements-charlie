# Periodic Team Viewer 👥⚛️

A modern, interactive team directory inspired by the Periodic Table of Elements. Built with Next.js 14 and TypeScript, this application provides a unique and engaging way to view and interact with your team members.

![Periodic Team Viewer Demo](./public/demo-screenshot.png)

## ✨ Features

- **Periodic Table Layout**: Team members displayed in a familiar periodic table grid
- **Interactive Elements**: Click on team "elements" to view detailed information
- **Responsive Design**: Seamlessly works across desktop and mobile devices
- **Real-time Filtering**: Filter team members by department, role, or search terms
- **Smooth Animations**: Engaging transitions and interactions powered by Framer Motion
- **Server-Side Rendering**: Optimized performance with Next.js App Router

## 🚀 Getting Started

1. Clone the repository:

```bash
git clone https://github.com/yourusername/periodic-team-viewer.git
cd periodic-team-viewer
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Set up your environment variables:

```bash
cp .env.example .env.local
```

4. Start the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **State Management**: React Context API
- **Database**: MongoDB (optional)
- **Authentication**: NextAuth.js (optional)

## 📁 Project Structure

```
src/
├── app/                 # Next.js App Router pages
├── components/         # React components
│   ├── action-bar.tsx  # Filtering and search controls
│   ├── member-card.tsx # Individual team member card
│   ├── team-grid.tsx   # Periodic table grid layout
│   └── team-viewer.tsx # Main viewer component
├── data/              # Team data and constants
├── types/             # TypeScript type definitions
└── utils/             # Utility functions
```

## 🎨 Customization

### Adding Team Members

Edit `src/data/team.ts` to add or modify team members:

```typescript
export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "John Doe",
    role: "Software Engineer",
    department: "Engineering",
    symbol: "Jd",
    atomicNumber: 1,
    // ...
  },
  // ...
];
```

### Styling

The application uses Tailwind CSS for styling. Customize the look and feel by modifying:

- `tailwind.config.js` for theme configuration
- Individual component styles using Tailwind classes

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Contact

Your Name - [@jnprdsgn](https://x.com/jnprdsgn)

Project Link: [https://github.com/sphereboy/team-elements-charlie](https://github.com/sphereboy/team-elements-charlie)
