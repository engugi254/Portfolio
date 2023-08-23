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
  meta,
  dblogo,
  jitu,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  onlineBank,
  summarizer,
  fitnessApp,
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
    title: "UI/UX Designer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Database Administrator",
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
    name: "TypeScript",
    icon: typescript,
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
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Three JS",
    icon: threejs,
  }
];

const experiences = [
  {
    title: "Web Developer intern",
    company_name: "Digital Brands Group",
    icon: dblogo,
    iconBg: "#383E56",
    date: "Jan 2021 - April 2021",
    points: [
      "Developing and maintaining web applications using web applications.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Full Stack Developer Trainee",
    company_name: "The Jitu",
    icon: jitu,
    iconBg: "#E6DEDD",
    date: "March 2023 - June 2023",
    points: [
      "Developing and maintaining web applications using React.js.",
      "Also Working on the Back-End using Express.js and Node.js.",
      "Worked on projects such as Ecommerce website as well as social media website.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  }
];

const projects = [
  {
    name: "Fitness Website",
    description:
      "A website that helps a person to explore different kinds of exercises and how you can do them.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapid api",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: fitnessApp,
    source_code_link: "https://github.com/engugi254/fitnessApp",
    live_demo_link: "https://engugi254.github.io/fitnessApp",
  },
  {
    name: "Marvels",


    description:
      "Web application that enables a user to see latest marvel movies and select comics or characters.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/engugi254/Marvel",
    live_demo_link: "https://engugi254.github.io/Marvel",
  },
  {
    name: "Country Flags",
    description:
      "A website that enables a user to see all the flags of countries as well as select flags by continent and an individual flag with other properties.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/engugi254/countryFlags",
    live_demo_link: "https://engugi254.github.io/countryFlags",
  },
  {
    name: "Online Banking",
    description:
      "A website that enables a users and businesses to manage their money. It offers credit, rewards and bank transfers",
      tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind CSS",
        color: "green-text-gradient",
      },
    ],
    image: onlineBank,
    source_code_link: "https://github.com/engugi254/Banktr",
    live_demo_link: "https://engugi254.github.io/Banktr",
  },
  {
    name: "SocialHub Website",
    description:
      "A social media website where one can signup, follow other users, create posts, comment and like to other posts as well as create individual profile.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mssql",
        color: "green-text-gradient",
      },
      {
        name: "node.js",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/engugi254/Social-Website",
    live_demo_link: "https://github.com/engugi254/Social-Website",
  },
  {
    name: "Article Summarizer",
    description:
      "A website that summarizes articles by entering a link with the article. It uses chat GPT 4 api to summarize thee articles.",
    tags: [
      {
        name: "chatGPT 4 Api",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "tailwind css",
        color: "pink-text-gradient",
      },
    ],
    image: summarizer,
    source_code_link: "https://github.com/engugi254/Summarizer",
    live_demo_link: "https://engugi254.github.io/Summarizer",
  },
  
];

export { services, technologies, experiences, testimonials, projects };
