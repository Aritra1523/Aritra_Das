export const projects = [
  {
    id: "doctor-appointment",
    title: "Doctor Appointment System",
    category: ["Full Stack", "Next.js"],
    featured: true,
    problem:
      "Booking a doctor's appointment usually means a phone call or a clunky form with no confirmation. This app gives patients a self-serve flow from sign-up to a confirmed slot.",
    description:
      "A full-stack booking platform where patients verify their identity by OTP, browse doctors, and reserve open slots without double-booking.",
    features: [
      "OTP-based signup and JWT-secured login",
      "Doctor listing with availability by date",
      "Slot booking with conflict prevention",
      "Appointment history per user",
      "Admin tools for managing doctors and slots",
      "Redux Toolkit for predictable client state",
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Tailwind CSS",
    ],
    github: "https://github.com/Aritra1523/user_Doctor_appoinment",
    live: null,
  },
  {
    id: "doctor-admin",
    title: "Doctor Admin Panel",
    category: ["Full Stack", "Next.js", "React"],
    featured: true,
    problem:
      "Managing doctor schedules, appointments, and patient records manually is chaotic. A dedicated admin panel is needed for healthcare staff to maintain order and efficiency.",
    description:
      "A secure admin dashboard for managing the entire doctor appointment ecosystem, with role-based access, scheduling tools, and CRUD operations for doctors and patients.",
    features: [
      "Role-based authentication for admin staff",
      "CRUD operations for managing doctors and schedules",
      "Appointment status tracking and management",
      "Patient record viewing and management",
      "Real-time dashboard with booking analytics",
      "Secured API with JWT authentication",
    ],
    tech: [
      "Next.js",
      "React",
      "Zustand",
      "Node.js",
      "MongoDB",
      "JWT",
      "Tailwind CSS",
    ],
    github: "https://github.com/Aritra1523/DoctorAdmin",
    live: null,
  },
  
  {
    id: "swiggy-clone",
    title: "Food Delivery App(Like Swiggy ) (Frontend)",
    category: ["Frontend", "Next"],
    featured: true,
    problem:
      "Food delivery platforms rely heavily on fast, interactive UI and real-time data fetching. This project focuses on replicating that high-performance frontend experience.",
    description:
      "A pixel-perfect Swiggy frontend clone built with React, utilizing real API integration, dynamic routing, and a responsive UI that mimics the core browsing experience.",
    features: [
      "Dynamic restaurant listings and menus",
      "Live API integration with real Swiggy endpoints",
      "Search and filter functionality",
      "Shimmer UI for enhanced loading states",
      "Cart state management with React Context/Redux",
      "Fully responsive mobile-first design",
    ],
    tech: [
      "Next",
      "Redux Toolkit",
      "TanStack Query",
      "Tailwind CSS",
      "JavaScript",
      "Vite",
      "REST APIs",
    ],
    github: "https://github.com/Aritra1523/Swiggy_Frontend",
    live: null,
  },
  {
    id: "swiggy-admin",
    title: "Food Delivery App(Like Swiggy ) (Admin Panel)",
    category: ["Full Stack", "Next"],
    featured: true,
    problem:
      "A frontend needs a robust backend and dashboard to manage the ecosystem. This admin panel provides full control over the restaurant's data and inventory.",
    description:
      "An admin dashboard designed to complement the Swiggy frontend, allowing administrators to manage restaurant categories, menu items, and user data efficiently.",
    features: [
      "Admin login and role-based access",
      "Manage restaurants and menu items (CRUD)",
      "Order management and status tracking",
      "Dashboard with analytics on platform usage",
      "Integrated backend API with secure data handling",
      "Clean, data-dense UI for quick management",
    ],
    tech: [
       "Next",
      "Zustand",
      "Tailwind CSS",
      "JWT",
      "REST APIs",
    ],
    github: "https://github.com/Aritra1523/Swiggy_Admin",
    live: null,
  },
  {
    id: "medifinder",
    title: "MediFinder",
    category: ["Full Stack"],
    featured: true,
    problem:
      "Finding which nearby pharmacy actually has a specific medicine in stock is mostly guesswork. MediFinder turns that into a searchable, authenticated platform.",
    description:
      "A medicine-availability platform that lets users search for medicines across nearby pharmacies, with role-based access for pharmacy staff to manage inventory.",
    features: [
      "JWT authentication with role-based access",
      "Medicine search across pharmacy inventory",
      "Inventory management for pharmacy accounts",
      "Responsive UI for quick lookups on mobile",
    ],
    tech: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "CSS3"],
    github: "https://github.com/Aritra1523/MediCine-Finder",
    live: "https://medi-cine-finder.vercel.app/register",
  },
  {
    id: "salon-app",
    title: "Salon App Management",
    category: ["Full Stack"],
    featured: false,
    problem:
      "Small service businesses need a simple booking presence online without building a heavy custom system from scratch.",
    description:
      "A salon service-management site with service listings, project/work showcases, and a Node/Express backend for handling data.",
    features: [
      "Service listing and showcase sections",
      "Node.js and Express backend",
      "Mongoose-modeled data layer",
      "Responsive layout for mobile clients",
    ],
    tech: ["HTML", "CSS3", "Node.js", "Express.js", "Mongoose"],
    github: "https://github.com/Aritra1523/Saloon-App",
    live: null,
  },
  {
    id: "portfolio",
    title: "Personal Portfolio",
    category: ["Frontend", "React"],
    featured: false,
    problem:
      "A developer needs one place that proves technical ability, not just lists it.",
    description:
      "This site — a React and Tailwind CSS portfolio built to present projects, skills, and contact details with production-quality UI.",
    features: [
      "Componentized architecture with structured data files",
      "Framer Motion for restrained, purposeful animation",
      "Accessible, keyboard-navigable UI",
      "Dark-first design with light mode",
    ],
    tech: ["React", "Tailwind CSS", "Framer Motion", "JavaScript"],
    github: "https://github.com/Aritra1523/Portfolio",
    live: "https://my-portfolio123-kappa.vercel.app/",
  },
];

export const filterCategories = ["All", "Frontend", "Full Stack", "React", "Next.js"];