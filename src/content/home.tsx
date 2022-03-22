import About from "../components/About";
import Floating from "../components/Floating";
import Project from "../components/Project";
import Tabs from "../components/Tabs";
import Contact from "../components/Contact";

import pythonLogo from "../components/svg/lang/python.svg";
import javascriptLogo from "../components/svg/lang/javascript.svg";
import typescriptLogo from "../components/svg/lang/typescript.svg";
import htmlLogo from "../components/svg/lang/html.svg";
import cssLogo from "../components/svg/lang/css.svg";
import sqlLogo from "../components/svg/lang/sql.svg";
import javaLogo from "../components/svg/lang/java.svg";
import cLogo from "../components/svg/lang/c.svg";

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
import devopsGh1 from "../components/images/ytl/gh1.png";
import dliewPic from "../components/images/dliew.com_.png";

const experienceTabContent = [
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

const projectsContent = [
  {
    title: "Supersharkz.com",
    images: [web1, web2, web3, web4],
    text: "A professional website, swim school admin portal, instructor portal, and parent portal - all in one.",
    tags: ["React", "Express", "MySQL", "Google App Engine"],
    url: "https://supersharkz.et.r.appspot.com/",
  },
  {
    title: "Supersharkz",
    images: [app1, app2, app3, app4],
    mobile: true,
    text: "Parents can manage their account, register for classes, and track their students progress, whilst instructors can manage and monitor their active classes and schedules.",
    tags: ["React Native", "Expo", "Express", "Socket.io"],
    url: "https://apps.apple.com/us/app/supersharkz/id1578259870?itsct=apps_box_link&itscg=30200",
  },
  {
    title: "IJM Land Calendar Booking",
    images: [ijmWeb1],
    text: "An online booking system allowing agencies to book time slots for visitor show unit tours to minimize social gathering during the COVID-19 pandemic",
    tags: ["React", "Google Sheets", "Google Calendar", "Express", "AppSheet"],
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
  },
  {
    title: "Poker AI",
    images: [pokerApp1],
    text: "Play 1v1 poker against an AI bot that has played over 1,000,000 random poker games",
    tags: ["Python", "Kivy", "TensorFlow", "Machine Learning"],
    url: "https://youtu.be/xPMff4euRmI",
  },
  {
    title: "DevOps Exploration",
    images: [devopsGh1],
    text: "A research repository containing several mini-projects demonstrating Agile methodology and Devops best practices",
    tags: ["git", "Docker", "Kubernetes", "Github Actions", "Agile"],
    url: "https://github.com/danielliew/devops-test",
  },
  {
    title: "Portfolio",
    images: [dliewPic],
    text: "The website you're currently on. A collection of my work, experiences and stuff.",
    tags: ["React", "Google App Engine", "TypeScript", "CSS", "UI/UX design"],
    url: "https://github.com/danielliew/portfolio",
  },
];

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
    navText: "Contact",
    text: "What's Next",
    content: (
      <div>
        <Contact />
      </div>
    ),
  },
];
