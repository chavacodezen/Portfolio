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
    title: "App Developer",
    icon: mobile,
  },
  {
    title: "Backend",
    icon: backend,
  },
  {
    title: "DevOps",
    icon: creator,
  },
];

const experiences = [
  {
    title: "Software Engineer II",
    company_name: "WNC",
    icon: company1,
    iconBg: "#383E56",
    date: "Oct 2024 - Current",
    points: [
      {
        text: "",
        subpoints: [
          "Support and optimization of Oracle ERP, including advanced queries and stored procedure development using PL/SQL.",
          "Report generation and data analysis using Microsoft SQL Server, SSRS, and Power BI.",
          "Maintenance and support of .NET applications for Quality, WH, and Purchasing departments, ensuring proper functionality and process optimization.",
          "Development of Python-based tools for IT task automation, improving the team's operational efficiency.",
          "Process optimization through technological solutions to enhance productivity and reduce operational times.",
        ],
      },
    ],
  },
  {
    title: "Programmer & System Implementer",
    company_name: "LACROIX",
    icon: company2,
    iconBg: "#383E56",
    date: "May 2022 - Aug 2024",
    points: [
      {
        text: "Migration to a new Unified Data Architecture and API Implementation",
        subpoints: [
          "Created a cohesive approach for handling data. ",
          "Creation of DWH, ODS, MES, and used the data on Power BI Dashboards and Web Apps.",
        ],
      },
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
    company_name: "LACROIX",
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
    company_name: "LACROIX",
    icon: company2,
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

const projects = [
  {
    name: "CarePulse",
    description:
      "Streamlined appointment scheduling platform for healthcare practices, built with NEXT.js, integrating real-time notifications & secure data management.",
    tags: [
      {
        name: "NEXT",
        color: "blue-text-gradient",
      },
      {
        name: "AppWrite",
        color: "green-text-gradient",
      },
      {
        name: "Twilio",
        color: "blue-text-gradient",
      },
      {
        name: "Sentry",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://codezen-healthcare.vercel.app/",
  },
  {
    name: "ReactChat",
    description:
      "Web AI Assistant — Experience the future firsthand with our dynamic AI assistant, fueled by OpenAI and ElevenLabs innovation. Your digital ally awaits, ready to amaze and assist!",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "OpenAI",
        color: "blue-text-gradient",
      },
      {
        name: "ElevenLabs",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://bryan-reactchat.netlify.app/",
  },
  {
    name: "CrownStore",
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
    image: project3,
    source_code_link: "https://cheerful-cocada-2e7bfa.netlify.app/",
  },
];

const testimonials = [
  {
    testimonial:
      "I've never met a developer who truly cares about their clients like Bryan does.",
    name: "Wally Johnson",
    designation: "VP & CFO",
    company: "LACROIX",
    image: testimonial1,
  },
  {
    testimonial:
      "Bryan consistently demonstrated a strong commitment to deliver exceptional results for every project.",
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

const REACT_APP_EMAILJS_SERVICE_ID = "service_bj1iqgb";
const REACT_APP_EMAILJS_TEMPLATE_ID = "template_oztja3q";
const REACT_APP_EMAILJS_PUBLIC_KEY = "Y-ncLNPs1MjSs0LO8";

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  REACT_APP_EMAILJS_SERVICE_ID,
  REACT_APP_EMAILJS_TEMPLATE_ID,
  REACT_APP_EMAILJS_PUBLIC_KEY,
};