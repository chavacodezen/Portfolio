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
  project1,
  project2,
  project3,
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
    name: "Python",
    icon: python,
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
      {
        text: "Developed Company Internal Portal",
        subpoints: [
          "Created a centralized portal using .NET Framework (MVC) to consolidate various online projects.",
          "Streamlined project management by providing a unified platform for different teams.",
        ],
      },
      {
        text: "Implemented Price Increase Log",
        subpoints: [
          "Designed and integrated a log system for the Purchasing Team to track and record component price increases.",
          "Replaced the cumbersome Excel-based process, enhancing efficiency and accuracy in tracking price changes.",
        ],
      },
      {
        text: "Introduced Cost Increase Tracker for Accounting Managers",
        subpoints: [
          "Developed a Cost Increase Tracker for Accounting Managers to analyze the impact of component price increases on assembly costs.",
          "Integrated a comprehensive tracking system within the portal, connecting purchasing data with assembly costs.",
          "Empowered Accounting Managers to assess revenue and Tp changes, facilitating informed decision-making.",
        ],
      },
    ],
  },
  {
    title: "Programmer Jr",
    company_name: "Firstronic",
    icon: company2,
    iconBg: "#383E56",
    date: "Mar 2020 - May 2022",
    points: [
      {
        text: "Project Leadership in Cost-Efficient Hardware Transition",
        subpoints: [
          "Led a project to optimize production hardware management by transitioning from costly computers to Raspberry Pi devices, and eliminating manual interventions.",
          "Developed Python and Bash scripts on Raspbian OS to automate real-time monitoring, ensuring accurate and timely updates to visual aids and production graphs without manual interventions.",
          "Achieved significant cost savings by repurposing existing computers for administrative tasks and avoiding the need for new stations, and enhanced overall operational efficiency, reducing dependency on manual processes and establishing a sustainable hardware infrastructure.",
        ],
      },
      {
        text: "Implemented Supply-Chain Control Monitor",
        subpoints: [
          "Developed a comprehensive report using SSRS (SQL Reporting Services) and SQL for the purchasing team, consolidating demand and supplier data for a holistic view of quantities.",
          "Built an MRP (Material Requirements Planning) system that forecasts demand for upcoming months, incorporating inventories and data on bonds and pipes from suppliers.",
          "Designed a report to identify excess, and shortages, empowering the purchasing and planning team to anticipate and address potential supply chain issues.",
        ],
      },
    ],
  },
  {
    title: "Internship",
    company_name: "Firstronic",
    icon: company3,
    iconBg: "#383E56",
    date: "Oct 2019 - Mar 2020",
    points: [
      {
        text: "",
        subpoints: [
          "Developing and maintaining applications using .NET and other related technologies.",
        ],
      },
      {
        text: "",
        subpoints: [
          "Collaborating with cross-functional teams including quality, product managers, and other developers to create high-quality products.",
        ],
      },
      {
        text: "",
        subpoints: [
          "Participating in code reviews and providing constructive feedback to other developers.",
        ],
      },
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Freelance",
    icon: company4,
    iconBg: "WHITE",
    date: "Oct 2019 - Current",
    points: [
      {
        text: "Developed EDI Web App",
        subpoints: [
          "I designed a specialized EDI Web App for warehouse management, employing React and Azure. This system facilitates streamlined communication of inventories and demands between my client's warehouse and their customers, optimizing supply chain operations.",
        ],
      },
      {
        text: "Developed Inventory Control Web App",
        subpoints: [
          "Designed using React and .NET. It efficiently manages inventory movements, tracking items in and out of warehouses with a user-friendly interface.",
        ],
      },
      {
        text: "Developed E-Commerce Web App",
        subpoints: [
          "I crafted a dynamic E-Commerce Web App using React, Firebase, GraphQL, and Stripe. Specialized in stylish clothing, the platform provides a seamless shopping experience with secure payment integration.",
        ],
      },
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
    image: project1,
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
    image: project2,
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
    image: project3,
    source_code_link: "https://github.com/",
  },
];

const REACT_APP_EMAILJS_SERVICE_ID = "service_bj1iqgb";
const REACT_APP_EMAILJS_TEMPLATE_ID = "template_oztja3q";
const REACT_APP_EMAILJS_PUBLIC_KEY = "Y-ncLNPs1MjSs0LO8";

const API_MEASUREMENT_ID = "G-Y1VHHJ1SBW";

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  REACT_APP_EMAILJS_SERVICE_ID,
  REACT_APP_EMAILJS_TEMPLATE_ID,
  REACT_APP_EMAILJS_PUBLIC_KEY,
  API_MEASUREMENT_ID,
};