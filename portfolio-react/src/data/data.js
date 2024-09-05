import profileImage from "../assets/images/profile-image.jpg";
import l0lDigitalLogo from "../assets/images/101digital-logo.png";
import inovaITLogo from "../assets/images/inovaIT.png";
import axiataLogo from "../assets/images/axiata.png";

export const PROFILE = {
  name: "Pamitha Lakbodha",
  firstName: "Pamitha",
  subtitle: "I design and develop web applications",
  intro: "A Software Engineer currently living in Sydney | Australia",
  description:
    "I’m a software engineer based in Sydney, Australia, specializing in Java backend development with Spring Boot and designing high-quality websites and applications, with expertise in both backend and frontend development.",
};

export const ABOUT_ME = {
  title: "About Me",
  descriptionTitle:
    "A Results-Oriented Software Engineer with a Passion for Scalable Solutions.",
  description: [
    "I am a Software Engineer with 8+ years of experience in Java development. I specialize in designing and deploying scalable software solutions, leveraging Java, Spring, React.js, ADF, and more to create impactful digital products.",
    `With a Bachelor's degree in Computer Science from 
    <a href="https://ucsc.cmb.ac.lk" target="_blank" rel="noopener noreferrer">
    University of Colombo School of Computing(UCSC)</a> and an 
    <a href="https://www.credly.com/badges/35075bd4-4d19-4d33-ac84-d6e2cab1e510/public_url"
    target="_blank" rel="noopener noreferrer">AWS Certified Solutions Architect Associate</a>, I focus on optimizing distributed systems and implementing clean, reliable code. My expertise spans the full Software Development Life Cycle (SDLC), Agile methodologies, and Microservice Architecture, with hands-on experience in unit testing, data analysis, and cloud solutions.`,
    "Currently, I’m dedicated to creating robust software solutions. Although I'm not available for freelance work, feel free to connect—I'm always open to discussing technology and solving challenging problems.",
    "Cheers, Pamitha!",
  ],
  contactEmail: "pamitha99@gmail.com",
  profileImage: profileImage,
};

export const EXPERIENCE = [
  {
    companyName: "101 Digital - Singapore",
    companyLogo: l0lDigitalLogo,
    websiteUrl: "https://www.101digital.io",
    role: "Software Engineer",
    companyDescription:
      "101 Digital is a leading provider of digital banking and marketplace platforms, empowering businesses to drive digital transformation and enhance customer experiences. With innovative products like the Neobank SDK, Bank-API, 101Pay and DiGiBank, 101 Digital enables seamless and cost-effective digital banking solutions.",
    responsibilities: [
      "Designed, developed, and deployed RESTful back end APIs using Java, Spring Boot, and relevant frameworks.",
      "Implemented APIs for efficient data retrieval and integration within a microservices architecture.",
      "Ensured scalability and high availability of cloud-native Java APIs, improving system performance and reliability.",
      "Owned the full API lifecycle, from design and implementation to rigorous testing and deployment.",
      "Utilized Kafka and Redis to enhance API functionality and performance.",
      "Managed code with Git/GitHub for efficient collaboration within Agile teams.",
      "Maintained code quality using SonarQube and adhered to best practices in Java development.",
    ],
    timePeriod: "March 2023 - April 2024",
  },
  {
    companyName: "Axiata Digital Labs - Sri Lanka",
    companyLogo: axiataLogo,
    websiteUrl: "https://www.axiatadigitallabs.com",
    role: "Senior Software Engineer",
    companyDescription:
      "Axiata Digital Labs (ADL) is a leading software development company operating across Sri Lanka, Malaysia, and Indonesia. ADL serves clients including Dialog Sri Lanka, the second-largest telecommunications provider in Sri Lanka and the largest mobile services provider in the country, as well as Axiata Malaysia, the largest telecommunications company in Malaysia. ADL also provides software services to several other telecommunications providers across Asia.",
    responsibilities: [
      "Designed, developed, and implemented RESTful APIs using Java, Spring and PostgreSQL, for a key back-office telecommunications application with a microservices architecture.",
      "Owned the API lifecycle from design and implementation to integration, ensuring efficient data retrieval and seamless system communication.",
      "Applied Scrum methodology to manage the SDLC of APIs, including requirements gathering, analysis, feature planning, and progress tracking.",
      "Troubleshot and resolved production issues related to APIs, fixing bugs and optimizing performance to guarantee system stability and reliability.",
      "Utilized Git branching strategies and GitHub pull requests to facilitate code reviews and seamless merges within Agile sprints.",
    ],
    timePeriod: "October 2022 - February 2023 | Outsource",
  },
  {
    companyName: "InovaIT Systems - Sri Lanka",
    companyLogo: inovaITLogo,
    websiteUrl: "https://inovaitsys.com",
    role: "Senior Software Engineer",
    companyDescription:
      "Inova IT Systems, established in 2010, is a full-scale software solution development company with a global presence in Australia, Cambodia, Malaysia, and South Africa. With over 12 years of expertise, they deliver cutting-edge software development, IT consulting, enterprise solutions, and mobile/web applications for industries like e-commerce, banking, finance, telecommunications, health, and pharmaceuticals.",
    responsibilities: [
      "Designed, developed, and implemented RESTful APIs using Java, Spring, and MySQL, creating high-impact Java applications for projects like ETFB and Peoples Bank",
      "Implemented secure payment processing through integration with a payment gateway.",
      "Managed project lifecycles using Agile Scrum, ensuring timely delivery of client-facing features, including API design and development.",
      "Communicated directly with clients and product owners to gather and analyze requirements related to API functionality and data exchange.",
      "Applied strong understanding of data management through database design and optimization practices (stored procedures, views, functions) for API data access and manipulation.",
      "Utilized Git/GitHub for efficient code management and collaboration within Agile teams.",
      "Contributed to front end development using React.js, enhancing user interfaces and improving user experience for web applications.",
    ],
    timePeriod: "August 2015 - September 2022",
  },
];
