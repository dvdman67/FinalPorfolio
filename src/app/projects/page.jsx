import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Intro from "@/components/Intro/Intro";
import Project from "@/components/Project/Project";
import "./Projects.css";

export const metadata = {
  title: "These are a collection of accomplishement in School and/or Professional world.",
  description:
    "You will see the accomplishement and recognition that I obtained through my journey as a student, helped generalist, specialist and Supervisor.",
  projects: [
    {
      company: "Ensign College",
      description:
        "Create a Home Cyber Lab. This lab is used to test and learn about different cyber security tools and techniques to keep an organization safe.",
      link: "https://www.ensign.edu/",
    },
    {
      company: "Ensign College",
      description:
        "Documented my journey to obtained Root privileges in virtualizae environment of a enterprise organization.",
      link: "https://www.ensign.edu/",
    },
    {
      company: "Ensign College",
      description:
        "Created a log Environment to alert me of malicious attacks that can harm a network or organization.",
      link: "https://www.ensign.edu/",
    },
    {
      company: "Global Service Department",
      description: "Automatize 15 repetitive task to out perform best representative in the floor.",
      link: "https://www.churchofjesuschrist.org/?lang=eng",
    },
    {
      company: "Global Service Department",
      description:
        "Perform regular Access Control audits to ensure employees have access to what they need. Also to Idenitfy other areas of work that can be taken on",
      link: "https://www.churchofjesuschrist.org/?lang=eng",
    },
    {
      company: "Global Service Department",
      description:
        "Audit and improve the onboarding process of new hires to ensure better performace as they transition to indepence of their work.",
      link: "https://www.churchofjesuschrist.org/?lang=eng",
    },
  ],
};

export default function Projects() {
  const projects = metadata.projects.map((project, index) => (
    <Project key={index} company={project.company} description={project.description} link={project.link} />
  ));
  return (
    <div id="page-wrapper">
      <Header />
      <div id="main-content">
        <Intro title={metadata.title} introduction={metadata.description} />
        <div id="projects">{projects}</div>
      </div>
      <Footer />
    </div>
  );
}
