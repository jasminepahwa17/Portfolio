import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  factacy,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  fablearner,
  xculture,
  miclone,
  passport,
  portfolioo,
  threejs,
  image,
  insights,
  digitek,
  bidwars,
  startupai
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  // {
  //   id: "projects",
  //   title: "Projects",
  // },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Architecture",
    icon: web,
  },
  {
    title: "System Design & Integration",
    icon: mobile,
  },
  {
    title: "UI/UX Development",
    icon: backend,
  },
  {
    title: "Data-Driven Interfaces",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Typescript",
    icon: typescript,
  },

];

const experiences = [
  {
    title: "Frontend Engineer",
    company_name: "Factacy Private Limited",
    icon: factacy,
    iconBg: "#383E56",
    date: "April 2023 - Present",
    points: [
      "Built Factacy Insights, a real-time data visualization platform using React.js and GraphQL, serving over 5,000+ users with dynamic charts and global startup insights.",
      "Created a WebRTC-based gesture recognition app with MediaPipe and OpenCV, achieving gesture evaluation with 250ms latency.",
      "Used AG Grid for interactive planning tools with editable cells and dynamic week/month grouping, reducing planning time by 30%.",
      "Built a startup data portal with secure Razorpay Payment Gateway integration, optimized API calls using debouncing and timeout logic to reduce server load.",
      "Built an AI chatbot for Digitek using React.js, Tailwind CSS, improving customer query resolution by 30%. Integrated into their Shopify store via custom JavaScript.",
      "Developed reusable, modular components to reduce code duplication and enhance deployment efficiency.",
      "Implemented and optimized GraphQL queries for real-time updates, accelerating data retrieval speed by 50%."
    ],
  },
  {
    title: "Project Intern",
    company_name: "X-culture",
    icon: xculture,
    iconBg: "#E6DEDD",
    date: "Aug 2020 - Dec 2020",
    points: [
      "Successfully completed the X-culture Global Collaboration Course involving theoritical training and two months of practical experience as a member of a Global Virtual Team",
      "Each international team completed a consulting project for a real international company and developed an international market entry strategy.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [

  {
    name: "Typescript Sales Data Viewer",
    description:
      "This Progressive Web App allows users to define dimension members, input and analyze measure data using AG-Grid, and visualize insights through interactive charts. It supports real-time calculations, conditional formatting to highlight outliers, and offers a lightweight, spreadsheet-like experience with offline capability.",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "AG-Grid",
        color: "pink-text-gradient",
      },
    ],
    image: image,
    source_code_link: "https://github.com/jasminepahwa17/Typescript-Grid",
  },
  {
    name: "Digitek AI Chatbot",
    description:
      "Built an AI chatbot for Digitek using React.js, Tailwind CSS, improving customer query resolution by 30%. Integrated into their Shopify store via custom JavaScript.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "fastapi",
        color: "green-text-gradient",
      },
      {
        name: "shopify",
        color: "pink-text-gradient",
      },
    ],
    image: digitek,
    source_code_link: "https://www.digitek.net.in/",
  },
  {
    name: "Real-Time Car Auction Bidding App",
    description:
      "Built the frontend of a real-time bidding app using React.js, WebSockets, and Tailwind CSS, where up to 4 users could join a live auction room, place bids with millisecond precision, and track dynamic card values. Reduced bid response delay to under 150ms, ensuring a smooth and competitive experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "websockets",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: bidwars,
    source_code_link: "",
  },
  {
    name: "Factacy Insights",
    description:
      "A platform providing real-time insights into global market trends, emerging industries, and startup ecosystems. Utilized React.js and GraphQL to create responsive UI components, optimizing performance, and ensuring efficient data fetching for a growing user base of 5,000+ users.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "graphql",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
    ],
    image: insights,
    source_code_link: "https://factacyinsights.com/",
  },
  {
    name: "Startup Data Portal",
    description:
      "Developed a marketplace platform with React and Tailwind CSS. Integrated Razorpay for secure payments, implemented timeout functions to optimize API calls, and employed debouncing to reduce server load.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "razorpay payments",
        color: "green-text-gradient",
      },
      {
        name: "azure cosmosdb",
        color: "pink-text-gradient",
      },
    ],
    image: startupai,
    source_code_link: "https://www.startupinvestors.ai/",
  },
  {
    name: "Mi Clone",
    description:
      "Clone of the Xiomi website developed using ReactJs while creating reusable react components with all it's features, animations and motion effects.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: miclone,
    source_code_link: "https://github.com/jasminepahwa17/mi-clone",
  },
  {
    name: "NodeJs Passport Authentication",
    description:
      "Simple, unobtrusive authentication for nodeJs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "ejs",
        color: "pink-text-gradient",
      },
    ],
    image: passport,
    source_code_link: "https://github.com/jasminepahwa17/NodeJS-Passport",
  },
  {
    name: "Portfolio",
    description:
      "Personal Portfolio made using Three.js, #D motions and effects, React Javascript showcasing projects, introduction, work experiences and contact form.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: portfolioo,
    source_code_link: "https://github.com/jasminepahwa17/",
  },
];

export { services, technologies, experiences, testimonials, projects };