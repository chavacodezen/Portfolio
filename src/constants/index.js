import {
  backend,
  creator,
  mobile,
  web,
  // Tech
  dotnet,
  reactjs,
  csharp,
  javascript,
  typescript,
  python,
  nodejs,
  graphql,
  sql,
  azure,
  aws,
  firebase,
  git,
  docker,
  // Company
  company1,
  company2,
  company3,
  company4,
  // Projects
  crownreact,
  retournreact,
  borderchat,
  // Testimonials
  testimonial1,
  testimonial2,
  testimonial3,
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "DevOps",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Dot Net",
    icon: dotnet,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "C#",
    icon: csharp,
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
    name: "Python",
    icon: python,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "GraphQL",
    icon: graphql,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "Azure",
    icon: azure,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Programmer & System Implementer",
    company_name: "LACROIX",
    icon: company1,
    iconBg: "#383E56",
    date: "May 2022 - Current",
    points: [
      "Deployed a Component Cost Increase Tracker for the Purchasing Managers, and Accounting Managers. Developed with .NET (MVC) a portal to have all the online projects together. For the Purchasing Team I have created a Price Increase Log (for components) and for the Accounting Managers a Component Cost Increase Tracker where they see how the price increases in the component (made by the purchasing team) affect their assemblies cost, tracking the gained/lost revenue and Tp.",
      "Deployed Power BI Dashboards for Quality, Production and Supply Chain.",
      "Deployed EDI Reports. Developed an EDI parse tool with Python to handle EDI files and give them format to interact and create reports.",
    ],
  },
  {
    title: "Jr Programmer",
    company_name: "Firstronic",
    icon: company2,
    iconBg: "#E6DEDD",
    date: "Mar 2020 - May 2022",
    points: [
      "Improved management of production hardware resources using Raspberry Pi, developed Python scripts and put them on the stations monitoring and storing information of the processes in our SQL DB, replacing operators and equipment.",
      "Deployed a Supply-Chain Control Monitor for the Purchasing team.",
      "Deployed a Demand Accuracy Tool for the Materials Managers.",
      "Deployed a Defective Containers Report for the Quality team.",
    ],
  },
  {
    title: "Internship",
    company_name: "Firstonic",
    icon: company3,
    iconBg: "#383E56",
    date: "Oct 2019 - Mar 2020",
    points: [
      "Developing and maintaining applications using .NET and other related technologies.",
      "Collaborating with cross-functional teams including quality, product managers, and other developers to create high-quality products.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Freelance",
    icon: company4,
    iconBg: "WHITE",
    date: "Oct 2019 - Present",
    points: [
      "Developed E-Commerce Web App.",
      "Developed Inventory Control Web App.",
      "Developed EDI Web App.",
      "Developed BorderChat with React Native.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Bryan proved me wrong.",
    name: "Wally Johnson",
    designation: "VP & CFO",
    company: "LACROIX",
    image: testimonial1,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Bryan does.",
    name: "Ed Weinheimer",
    designation: "CTO",
    company: "LACROIX",
    image: testimonial2,
  },
  {
    testimonial:
      "The quality of his products and services exceeds all expectations. Definitely an awesome experience working with him.",
    name: "Juan Munoz",
    designation: "Sr Dev",
    company: "LACROIX",
    image: testimonial3,
  },
];

const projects = [
  {
    name: "Crown React",
    description:
      "E-Commerce site — where style meets simplicity. Secure transactions, diverse sections, and hassle-free authentication await you.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "stripe",
        color: "blue-text-gradient",
      },
      {
        name: "graphql",
        color: "pink-text-gradient",
      },
    ],
    image: crownreact,
    source_code_link: "https://cheerful-cocada-2e7bfa.netlify.app/",
  },
  {
    name: "Retourn React",
    description:
      "Web & Mobile application that enables users to search for rentals, list new rentals, view estimated price ranges, and locate available rentals based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "react-native",
        color: "green-text-gradient",
      },
      {
        name: "aws",
        color: "blue-text-gradient",
      },
      {
        name: "graphql",
        color: "pink-text-gradient",
      },
    ],
    image: retournreact,
    source_code_link: "https://github.com/",
  },
  {
    name: "BorderChat",
    description:
      "Web & Mobile app with a dynamic and engaging platform for collaborative discussions and shared insights within the local developer community.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "react-native",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: borderchat,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };