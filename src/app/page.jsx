import Header from "@/components/Header/Header";
import Intro from "@/components/introduction/intro";
import ArticleCard from "@/components/ArticleCard/ArticleCard";
import SignupWidget from "@/components/SignupWidget/SignupWidget";
import WorkWidget from "@/components/WorkedWidget/WorkedWidget";
import SkillsWidget from "@/components/SkillsWidget/SkillsWidget";
import Footer from "@/components/Footer/Footer";
import "./globals.css";

export const metadata = {
  title: "Portfolio - Home",
  description: "Home page of my portfolio.",
};

const articles = [
  {
    date: "April 5, 2024",
    title: "About",
    content:
      "In this section you will come to know about me and my journey to become a Cyber Security Analyst. You will learn the steps I took to obtain indenpende and join a carreer in cyber security. And also you will find how I have develop my skills in web development.",
    link: "#",
  },
  {
    date: "April 9, 2024",
    title: "Projects",
    content:
      "The prupose of this articles is showcase what I have done to make a dent in the univers. You will see the projects and the technologies I have used to make them. You will also see the challenges I have faced and how I have overcome them.",
    link: "#",
  },
  {
    date: "Apeil  9, 2024",
    title: "Uses",
    content:
      "This article will talk about on the software and gadget that I used to becomre a developer and Cyber Security Analyst.",
    link: "#",
  },
];

const intro = {
  image: "profile.jpeg",
  title: "Cyber Security Analyst",
  introduction:
    "I am a aspiring to be a Cyber Security Analyst and soon to be gradute of Ensign Collge. I am passionate about technology and I am always looking for ways to improve my skills. I am currently learning about Cyber Security and I am looking for opportunities to work in the field. I am also a self-taught web developer and I have been working on my portfolio to showcase my skills.",
  linkedIn_link:
    "https://www.linkedin.com/in/david-v-7055b827a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bh68rTKYaRKWxrIG6TvpPmQ%3D%3D",
  x_link: "https://www.twitter.com",
  github_link: "https://github.com/dvdman67/FinalPorfolio.git",
};

const skills = [
  { name: "HTML", proficiency: 60, icon: "html5.png" },
  { name: "CSS", proficiency: 50, icon: "css3.png" },
  { name: "JavaScript", proficiency: 75, icon: "javascript.png" },
];

export default function Home() {
  return (
    <div id="page-wrapper">
      <Header />
      <Intro
        image={intro.image}
        title={intro.title}
        introduction={intro.introduction}
        linkedIn_link={intro.linkedIn_link}
        x_link={intro.x_link}
        github_link={intro.github_link}
      />
      <div className="content-wrapper">
        <div id="main-content">
          {articles.map((article, index) => (
            <ArticleCard
              key={index}
              date={article.date}
              title={article.title}
              content={article.content}
              link={article.link}
            />
          ))}
        </div>

        <div id="main_right">
          <SignupWidget
            title={"Stay up to date"}
            content={"Get notified when I publish something new, and unsubscribe at any time."}
          />
          <WorkWidget
            title={"Work"}
            content={"My work experience."}
            experiences={[
              {
                logo: "/slack.png",
                organization: "Slack",
                jobTitle: "Software Engineer",
                startYear: 2016,
                endYear: null,
              },
              {
                logo: "/spotify.png",
                organization: "Spotify",
                jobTitle: "Software Engineer",
                startYear: 2014,
                endYear: 2015,
              },
              {
                logo: "/audible.png",
                organization: "Audible",
                jobTitle: "Software Engineer",
                startYear: 2012,
                endYear: 2013,
              },
              {
                logo: "/microsoft.png",
                organization: "Microsoft",
                jobTitle: "Software Engineer",
                startYear: 2010,
                endYear: 2011,
              },
            ]}
          />
          <SkillsWidget
            title={"Skills"}
            content={"Here is a my Web Delopment programming language visual to compare proficiency."}
            skills={skills}
          />
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
