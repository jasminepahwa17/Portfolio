import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
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
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "ReactJS Developer",
      icon: mobile,
    },
    {
      title: "Freelancer",
      icon: backend,
    },
    {
      title: "Graphic Designer",
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
    
  ];
  
  const experiences = [
    {
      title: "Graphic Designer",
      company_name: "FabLearner",
      icon: fablearner,
      iconBg: "#383E56",
      date: "March 2023 - Present",
      points: [
        "Developed the overall layout and production design for advertisements, brochures, magazines, and books.",
        "Spearheaded daily design in a small but prolific firm.",
        "Responsible for designing a book to be published by e-learning platform that prepares kids for a better future.",
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