import { Link } from "react-router-dom";

import astyles from "../components/HoverDecoration/a.module.css";

import { openInNewTab } from "../components/About/AboutLink";
import About from "../components/About";
import Floating from "../components/Floating";
import Project from "../components/Project";
import Tabs from "../components/Tabs";
import Contact from "../components/Contact";
import { ProjectProps } from "../components/Project/types";

import pythonLogo from "../components/svg/lang/python.svg";
import javascriptLogo from "../components/svg/lang/javascript.svg";
import typescriptLogo from "../components/svg/lang/typescript.svg";
import htmlLogo from "../components/svg/lang/html.svg";
import cssLogo from "../components/svg/lang/css.svg";
import sqlLogo from "../components/svg/lang/sql.svg";
import javaLogo from "../components/svg/lang/java.svg";
import cLogo from "../components/svg/lang/c.svg";
import rubyLogo from "../components/images/ruby.jpeg";

import reactLogo from "../components/svg/frameworks/react.svg";
import reactNativeLogo from "../components/svg/frameworks/reactNative.svg";
import expressLogo from "../components/svg/frameworks/express.svg";
import mySQLLogo from "../components/svg/frameworks/mySQL.svg";
import graphQLLogo from "../components/svg/frameworks/graphQL.svg";
import gaLogo from "../components/svg/frameworks/ga.svg";
import dockerLogo from "../components/svg/frameworks/docker.svg";
import kubernetesLogo from "../components/svg/frameworks/kubernetes.svg";
import gcpLogo from "../components/svg/frameworks/gcp.svg";
import awsLogo from "../components/svg/frameworks/aws.svg";
import azureDevopsLogo from "../components/svg/frameworks/azureDevops.svg";
import sonarLintLogo from "../components/svg/frameworks/sonarLint.svg";
import docuSignLogo from "../components/svg/frameworks/docuSign.svg";
import adobeSignLogo from "../components/svg/frameworks/adobeSign.svg";
import appSheetLogo from "../components/svg/frameworks/appSheet.svg";
import figmaLogo from "../components/svg/frameworks/figma.svg";
import rubyOnRailsLogo from "../components/images/rubyOnRails.png";

import fullstack from "../components/svg/areasOI/fullstack.svg";
import webDev from "../components/svg/areasOI/webDev.svg";
import mobile from "../components/svg/areasOI/mobile.svg";
import uiux from "../components/svg/areasOI/uiux.svg";
import webS from "../components/svg/areasOI/webS.svg";
import projectM from "../components/svg/areasOI/projectM.svg";
import customerR from "../components/svg/areasOI/customerR.svg";

import web1 from "../components/images/supersharkz/web1.png";
import web2 from "../components/images/supersharkz/web2.png";
import web3 from "../components/images/supersharkz/web3.png";
import web4 from "../components/images/supersharkz/web4.png";

import app1 from "../components/images/supersharkz/app1.png";
import app2 from "../components/images/supersharkz/app2.png";
import app3 from "../components/images/supersharkz/app3.png";
import app4 from "../components/images/supersharkz/app4.png";

import ijmWeb1 from "../components/images/ijm/web1.png";
import ijmApp1 from "../components/images/ijm/app1.jpg";
import pokerApp1 from "../components/images/poker/app1.png";
import pokerApp2 from "../components/images/poker/app2.png";
import devopsGh1 from "../components/images/ytl/gh1.png";
import dliew1Pic from "../components/images/dliew/dliew.com1.png";
import dliew2Pic from "../components/images/dliew/dliew.com2.png";
import cardDeck from "../components/images/cards.png";
import z1 from "../components/images/zendesk-ticket-viewer/z1.png";
import z2 from "../components/images/zendesk-ticket-viewer/z2.png";
import rockets from "../components/images/rockets.png";
import zendeskAw from "../components/images/zendesk-aw.png";
import uiLibrary from "../components/images/ui-library.png";
import { Button, Calendar, Dropdown, TextInput } from "liew-i-library";
import foxday1 from "../components/images/foxday/prediction.png";
import foxday2 from "../components/images/foxday/profile.png";
import foxday3 from "../components/images/foxday/social.png";

const experienceTabContent = [
  {
    company: "Zendesk",
    location: "Los Angeles, San Francisco, Remote",
    positions: [
      {
        jobTitle: "Software Engineering Intern",
        duration: "June 2022-Present",
        content: (
          <div>
            <ul>
              <li>
                Worked on developing frontend React and backend Ruby features on
                the Support Suite Engineering team.
              </li>
              <li>
                Implemented Zendesk's Garden UI components to build buttons,
                alerts, and website banners in React and Typescript that added
                functionality and commu`nication to customers' Support product
                Agent Workspace Auto-Activation experience.
              </li>
              <li>
                Collaborated cross-functionally with product managers and other
                teams to successfully build and deploy engaging user
                experienc`es to production
              </li>
              <li>
                Set up Cypress CI with GitHub Actions to Zendesk admin center
                GitHub repo to help streamline the team's code development.
              </li>
            </ul>
          </div>
        ),
      },
    ],
  },
  {
    company: "Supersharkz Swim School",
    location: "Shah Alam, Malaysia",
    positions: [
      {
        jobTitle: "Freelance Software Engineer (Full-stack)",
        duration: "August 2020 – Present",
        content: (
          <div>
            <p>Projects developed independently:</p>
            <ul>
              <li>
                Fully functional professional swim school management system.
              </li>
              <li>
                Main website, staff portal, parent portal, and marketing landing
                page using React JavaScript and Typescript.
              </li>
              <li>
                Backend REST API using Express JS and Node.js secured with
                custom JWT authentication to handle all API requests to a MySQL
                database.
              </li>
              <li>
                Secure real-time server using Socket.io and Node.js enabling
                real-time chat messaging between parents and admins.
              </li>
              <li>
                Mobile app using React Native, JavaScript and Expo equipped with
                a custom DevOps infrastructure.
              </li>
            </ul>
          </div>
        ),
      },
    ],
  },
  {
    company: "YTL Cement Bhd",
    location: "Kuala Lumpur, Malaysia",
    positions: [
      {
        jobTitle: "Software Engineering Intern (Remote)",
        duration: "May 2021 – Jul 2021",
        content: (
          <ul>
            <li>
              Developed a blueprint for modernizing YTL Group’s software
              development processes based on Agile methodology and DevOps
              best-practices.
            </li>
            <li>
              Prototyped CI/CD, git branching strategy, monitoring process flows
              and prepared an implementation guideline.
            </li>
            <li>
              Developed automation scripts in YAML files for GitHub Actions.
            </li>
          </ul>
        ),
      },
    ],
  },
  {
    company: "IJM Corporation Bhd",
    location: "Kuala Lumpur, Malaysia",
    positions: [
      {
        jobTitle: "Freelance Software Engineer (Full-stack)",
        duration: "Feb 2021 – May 2021",
        content: (
          <ul>
            <li>
              Contributed to IJM Land’s CRM system by building an API in Express
              JS to search customer records by various fields across multiple
              legacy databases.
            </li>
            <li>
              Fixed bugs and handled feature requests in IJM Land Rimbayu Joint
              Inspection booking app in AppSheet.
            </li>
          </ul>
        ),
      },
      {
        jobTitle: "Software Engineering Intern",
        duration: "June 2020 – Nov 2020",
        content: (
          <ul>
            <li>
              Developed a mobile app frontend in React Native for COVID-19
              contact tracing in IJM Headquarters and Annex buildings.
            </li>
            <li>
              Built a calendar booking website for IJM Land Joint Inspection
              agents using React JS, Express JS, and Google Cloud Platform.
            </li>
            <li>
              Built a cross-platform, low-code app built in AppSheet for IJM
              Land Rimbayu Joint Inspection booking app.
            </li>
            <li>
              Configured AdobeSign and GigaSign to digitize IJM’s ABCS Due
              Diligence workflow with customized signing and approval workflows.
            </li>
            <li>
              Assisted in IJM’s company-wide migration of Facebook Workplace to
              Google Currents. Wrote a python script that uses Selenium to
              automate the maintenance of all employees’ groups in Google
              Currents.
            </li>
          </ul>
        ),
      },
    ],
  },
  {
    company: "ICT Resource Center Sdn Bhd",
    location: "Petaling Jaya, Malaysia",
    positions: [
      {
        jobTitle: "Network Intern",
        duration: "June 2018 – Aug 2018",
        content: (
          <ul>
            <li>
              Designed best possible network blueprints and optimized traffic
              routing solutions for several office and home networks.
            </li>
            <li>
              Installed network hardware technologies for customers to improve
              network speeds and stability.
            </li>
            <li>
              Built server machines for ICT Resource Center offices to host
              centralized filesystems.
            </li>
          </ul>
        ),
      },
    ],
  },
];

const skillsFloatingContent = [
  {
    title: "Languages I'm comfortable with",
    list: [
      {
        logo: <img src={pythonLogo} alt="py" />,
        text: "Python",
      },
      {
        logo: <img src={javascriptLogo} alt="js" />,
        text: "JavaScript",
      },
      {
        logo: <img src={typescriptLogo} alt="ts" />,
        text: "TypeScript",
      },
      {
        logo: <img src={rubyLogo} alt="ruby" />,
        text: "Ruby",
      },
      {
        logo: <img src={htmlLogo} alt="html" />,
        text: "HTML",
      },
      {
        logo: <img src={cssLogo} alt="css" />,
        text: "CSS",
      },
      {
        logo: <img src={sqlLogo} alt="sql" />,
        text: "SQL",
      },
      {
        logo: <img src={javaLogo} alt="java" />,
        text: "Java",
      },
      {
        logo: <img src={cLogo} alt="c" />,
        text: "C",
      },
    ],
  },
  {
    title: "Favorite frameworks & tools",
    list: [
      { logo: <img src={reactLogo} alt="React" />, text: "React" },
      {
        logo: <img src={reactNativeLogo} alt="React Native" />,
        text: "React Native",
      },
      { logo: <img src={expressLogo} alt="Express" />, text: "Express" },
      { logo: <img src={mySQLLogo} alt="MySQL" />, text: "MySQL" },
      { logo: <img src={graphQLLogo} alt="GraphQL" />, text: "GraphQL" },
      {
        logo: <img src={gaLogo} alt="GitHub Actions" />,
        text: "GitHub Actions",
      },
      {
        logo: <img src={rubyOnRailsLogo} alt="Ruby On Rails" />,
        text: "Ruby On Rails",
      },
      { logo: <img src={dockerLogo} alt="Docker" />, text: "Docker" },
      {
        logo: <img src={kubernetesLogo} alt="Kubernetes" />,
        text: "Kubernetes",
      },
      {
        logo: <img src={gcpLogo} alt="Google Cloud Platform" />,
        text: "Google Cloud Platform",
      },
      {
        logo: <img src={awsLogo} alt="Amazon Web Services" />,
        text: "Amazon Web Services",
      },
      {
        logo: <img src={azureDevopsLogo} alt="Azure DevOps" />,
        text: "Azure DevOps",
      },
      { logo: <img src={sonarLintLogo} alt="SonarLint" />, text: "SonarLint" },
      { logo: <img src={docuSignLogo} alt="DocuSign" />, text: "DocuSign" },
      { logo: <img src={adobeSignLogo} alt="AdobeSign" />, text: "AdobeSign" },
      { logo: <img src={appSheetLogo} alt="AppSheet" />, text: "AppSheet" },
      { logo: <img src={figmaLogo} alt="Figma" />, text: "Figma" },
    ],
  },
  {
    title: "My areas of interest",
    list: [
      {
        logo: <img src={fullstack} alt="Full stack development" />,
        text: "Full stack development",
      },
      {
        logo: <img src={webDev} alt="Web development" />,
        text: "Web development",
      },
      {
        logo: <img src={mobile} alt="Mobile development" />,
        text: "Mobile development",
      },
      { logo: <img src={uiux} alt="UI/UX design" />, text: "UI/UX design" },
      {
        logo: <img src={webS} alt="Website Security" />,
        text: "Website Security",
      },
      {
        logo: <img src={projectM} alt="Project Management" />,
        text: "Project Management",
      },
      {
        logo: <img src={customerR} alt="Customer Relations" />,
        text: "Customer Relations",
      },
    ],
  },
];

const projectLinkStyle = {
  backgroundColor: "#eefff0",
  padding: 1,
  borderRadius: 3,
  marginTop: 2,
  marginBottom: 2,
};

const projectsContent: ProjectProps["project"][] = [
  {
    title: "foxday.io",
    images: [foxday1, foxday2, foxday3],
    text: (
      <div>
        <p>
          My CS senior capstone project. Built around the idea of{" "}
          <a
            className={astyles.a}
            href="https://www.rollins.edu/fox-day/"
            style={{
              ...projectLinkStyle,
            }}
            {...openInNewTab}
          >
            Fox Day,
          </a>{" "}
          a Rollins College tradition where the president of the college
          announces a surprise day off for students and faculty every spring. We
          used machine learning to predict the date of Fox Day and created a
          social media platform for community building within the student body
          to interact with each other regarding all things Fox Day.
        </p>
      </div>
    ),
    tags: [
      "React",
      "Redux",
      "TypeScript",
      "Django",
      "TensorFlow",
      "HTML/CSS",
      "Python",
      "MongoDB",
      "Google Cloud App Engine/Cloud Run",
      "Docker",
    ],
    url: "https://foxday.io",
    year: 2023,
  },
  {
    title: "liew-i-library",
    images: [uiLibrary],
    text: (
      <div>
        <p>
          I wrote a completely customized react component library built with
          pure Typescript and CSS for the ultimate user experience.{" "}
          <a
            className={astyles.a}
            href="https://www.npmjs.com/package/liew-i-library"
            {...openInNewTab}
            style={{
              ...projectLinkStyle,
            }}
          >
            Check out
          </a>{" "}
          the package on npm.{" "}
          <Link
            className={astyles.a}
            to="/demo"
            {...openInNewTab}
            style={{
              ...projectLinkStyle,
            }}
          >
            Click here
          </Link>{" "}
          for a full demo of the library
          <br />
        </p>
        <div
          style={{
            backgroundColor: "white",
            borderRadius: 20,
            padding: `4px 0px`,
          }}
        >
          <Button type="solid">This is a liew-i-library button</Button>
          <hr />
          <Dropdown
            anchor="This is a dropdown"
            items={["Item 1", "Item 2", "Item 3"]}
          />
          <hr />
          <TextInput
            placeholder="Try me"
            label="This is a liew-i-library textinput"
            extra="Very nice text input"
          />
          <hr />
          <Calendar onDateHover={() => "Display some text here if u want"} />
          <hr />
          Like what you see?{" "}
          <Link
            className={astyles.a}
            to="/demo"
            {...openInNewTab}
            style={{
              ...projectLinkStyle,
            }}
          >
            Click here
          </Link>{" "}
          for a full demo of the library
        </div>
      </div>
    ),
    tags: ["React", "npm", "TypeScript", "CSS", "vitejs"],
    url: "https://www.npmjs.com/package/liew-i-library",
    year: 2023,
  },
  {
    title: "Zendesk Agent Workspace Auto-activation Experience",
    images: [zendeskAw],
    text: (
      <p>
        Contributed several features that helped customers migrate from the old
        version of Support to the new Agent Workspace product version.{" "}
        <a
          className={astyles.a}
          href="https://drive.google.com/file/d/1pC7lJ-UxWBIvTGRGKy3UtFnslO56QMft/view?usp=sharing"
          {...openInNewTab}
          style={{
            ...projectLinkStyle,
          }}
        >
          View my intern presentation here.
        </a>
      </p>
    ),
    tags: ["React", "TypeScript", "Ruby", "Rails", "Cypress", "GitHub Actions"],
    url: "https://support.zendesk.com/hc/en-us/articles/4408821259930-About-the-Zendesk-Agent-Workspace",
    year: 2022,
  },
  {
    title: "Zendesk Ticket Viewer",
    images: [z1, z2],
    text: "A ticket viewer for a Zendesk Support instance. Connects to Zendesk's developer API via an OAuth token in the backend and displays the information in a frontend",
    tags: [
      "React",
      "TypeScript",
      "Express",
      "Jest",
      "React Testing Library",
      "Full stack",
    ],
    url: "https://github.com/danielliew/zendesk-ticket-viewer",
    year: 2022,
  },
  {
    title: "Rockets Database",
    images: [rockets],
    text: "A database project where we modelled private spaceflight companies and their rockets. Created scripts to create the database structure, populate the database, and wrote complex test database queries to simulate a real-world situation.",
    tags: ["MySQL", "Database Schema", "Database Queries"],
    url: "https://github.com/danielliew/devops-test",
    year: 2022,
  },
  {
    title: "DevOps Exploration",
    images: [devopsGh1],
    text: "A research repository containing several mini-projects demonstrating Agile methodology and Devops best practices",
    tags: ["git", "Docker", "Kubernetes", "Github Actions", "Agile"],
    url: "https://github.com/danielliew/devops-test",
    year: 2021,
  },
  {
    title: "Supersharkz website",
    images: [web1, web2, web3, web4],
    text: "A professional website, swim school admin portal, instructor portal, and parent portal - all in one React app. Powered by an ExpressJS server, a socket.io realtime microservice, and MySQL database.",
    tags: [
      "React",
      "Express",
      "MySQL",
      "Google App Engine",
      "Hostinger",
      "Socket.io",
      "Full stack",
    ],
    url: "https://supersharkz.et.r.appspot.com/",
    year: 2020,
  },
  {
    title: "svg card deck",
    images: [cardDeck],
    text: (
      <p>
        I was unsatisfied with online SVG/PNG card decks so I made my own on
        Figma. Pretty happy with how this turned out so if you ever need a
        digital card deck, get it from{" "}
        <a
          className={astyles.a}
          href="https://www.etsy.com/shop/theDanielLiewStore"
          style={{
            ...projectLinkStyle,
          }}
          {...openInNewTab}
        >
          my store on Etsy.
        </a>
      </p>
    ),
    tags: ["Figma", "Frontend", "Graphic Design"],
    url: "https://www.etsy.com/shop/theDanielLiewStore",
    year: 2022,
  },
  {
    title: "Portfolio",
    images: [dliew1Pic, dliew2Pic],
    text: "The website you're currently on. A collection of my work, experiences and stuff.",
    tags: [
      "React",
      "Google App Engine",
      "TypeScript",
      "CSS",
      "UI/UX design",
      "Portfolio",
      "Blog",
    ],
    url: "https://github.com/danielliew/portfolio",
    year: 2021,
  },
  {
    title: "IJM Land Calendar Booking",
    images: [ijmWeb1],
    text: "An online booking system allowing agencies to book time slots for visitor show unit tours to minimize social gathering during the COVID-19 pandemic",
    tags: [
      "React",
      "Google Sheets",
      "Google Calendar",
      "Express",
      "AppSheet",
      "iframe",
    ],
    year: 2020,
  },
  {
    title: "IJM COVID-19 Monitoring",
    images: [ijmApp1],
    mobile: true,
    text: "A user-friendly way for security guards to monitor visitors' going in and out of IJM buildings and their COVID-19 health screening information",
    tags: [
      "React Native",
      "Google Sheets",
      "Google Forms",
      "Express",
      "AppSheet",
    ],
    year: 2020,
  },
  {
    title: "Supersharkz Mobile App",
    images: [app1, app2, app3, app4],
    mobile: true,
    text: "A mobile app for parents to manage their students, register students in classes, and track their progress. Instructors can manage and monitor their active classes and schedules. Available on the iOS App Store and Google Play Store",
    tags: ["React Native", "Expo", "Express", "Socket.io", "Mobile App"],
    url: "https://apps.apple.com/us/app/supersharkz/id1578259870?itsct=apps_box_link&itscg=30200",
    year: 2020,
  },
  {
    title: "Poker AI",
    images: [pokerApp1, pokerApp2],
    text: (
      <p>
        My A-Level Computer Science final project. A 1v1 poker desktop game
        against an AI bot that has played 1,000,000 poker games. The game
        included an accurate hand-strength recognition and ranking algorithm. I
        wrote a paper documenting my game design and process building and
        training the AI.{" "}
        <a
          className={astyles.a}
          href="https://docs.google.com/document/d/1tGRpGCPNYvv40YYqBUqg1W0TrMaHfN2104wEdEXOphQ/edit?usp=sharing"
          {...openInNewTab}
          style={{
            ...projectLinkStyle,
          }}
        >
          Read the paper here
        </a>{" "}
        and follow the link below to watch a walkthrough.
      </p>
    ),
    tags: [
      "Python",
      "Kivy",
      "TensorFlow",
      "Machine Learning",
      "AI",
      "Academic Research Paper",
    ],
    url: "https://youtu.be/xPMff4euRmI",
    year: 2019,
  },
].map((item) => ({
  ...item,
  id: item.title.toLowerCase().replaceAll(" ", "-").replaceAll(".", "-"),
}));

export const contentSections = [
  {
    navText: "About",
    text: "About Me",
    content: (
      <div>
        <About />
      </div>
    ),
  },
  {
    navText: "Experience",
    text: "Where I've worked",
    content: (
      <div>
        <Tabs tabs={experienceTabContent} />
      </div>
    ),
  },
  {
    navText: "Projects",
    text: "Some Things I've Built",
    content: (
      <div>
        {projectsContent.map((project, i) => (
          <Project project={project} key={i} left={i % 2 !== 0} />
        ))}
      </div>
    ),
  },
  {
    navText: "Skills",
    text: "Skills & Interests",
    content: (
      <div>
        {skillsFloatingContent.map((item, i) => (
          <div key={i}>
            <h3>{item.title}</h3>
            <Floating content={item.list} />
          </div>
        ))}
      </div>
    ),
  },
  {
    navText: "Contact",
    text: "What's Next",
    content: (
      <div>
        <Contact />
      </div>
    ),
  },
];
