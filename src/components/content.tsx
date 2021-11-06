import About from "./About";
import Floating from "./Floating";
import Project from "./Project";
import Tabs from "./Tabs";

import web1 from "./images/supersharkz/web1.png";
import web2 from "./images/supersharkz/web2.png";
import web3 from "./images/supersharkz/web3.png";
import web4 from "./images/supersharkz/web4.png";

import app1 from "./images/supersharkz/app1.png";
import app2 from "./images/supersharkz/app2.png";
import app3 from "./images/supersharkz/app3.png";
import app4 from "./images/supersharkz/app4.png";

import ijmWeb1 from "./images/ijm/web1.png";
import ijmApp1 from "./images/ijm/app1.jpg";
import pokerApp1 from "./images/poker/app1.png";
import devopsGh1 from "./images/ytl/gh1.png";
import Contact from "./Contact";

const experienceTabContent = [
  {
    company: "Supersharkz Swim School",
    location: "Shah Alam, Malaysia",
    positions: [
      {
        jobTitle: "Freelance Software Developer (Full-stack)",
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
        jobTitle: "Freelance Software Developer (Full-stack)",
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
        logo: <div>P</div>,
        text: "Python",
      },
      {
        logo: <div>J</div>,
        text: "JavaScript",
      },
      {
        logo: <div>T</div>,
        text: "JavaScript",
      },
      {
        logo: <div>J</div>,
        text: "TypeScript",
      },
      {
        logo: <div>H</div>,
        text: "HTML",
      },
      {
        logo: <div>C</div>,
        text: "CSS",
      },
      {
        logo: <div>S</div>,
        text: "SQL",
      },
      {
        logo: <div>J</div>,
        text: "Java",
      },
      {
        logo: <div>C</div>,
        text: "C",
      },
      {
        logo: <div>M</div>,
        text: "MIPS",
      },
    ],
  },
  {
    title: "Favorite frameworks & tools",
    list: [
      { logo: <div>R</div>, text: "React" },
      { logo: <div>R</div>, text: "React Native" },
      { logo: <div>G</div>, text: "GraphQL" },
      { logo: <div>G</div>, text: "GitHub Actions" },
      { logo: <div>D</div>, text: "Docker" },
      { logo: <div>K</div>, text: "Kubernetes" },
      { logo: <div>G</div>, text: "Google Cloud Platform" },
      { logo: <div>A</div>, text: "Amazon Web Services" },
      { logo: <div>A</div>, text: "Azure DevOps" },
      { logo: <div>S</div>, text: "SonarLint" },
      { logo: <div>A</div>, text: "AdobeSign" },
      { logo: <div>G</div>, text: "GigaSign" },
      { logo: <div>A</div>, text: "AppSheet" },
    ],
  },
  {
    title: "My areas of interest",
    list: [
      {
        logo: <div>F</div>,
        text: "Full stack development",
      },
      { logo: <div>W</div>, text: "Web development" },
      { logo: <div>M</div>, text: "Mobile development" },
      { logo: <div>U</div>, text: "UI/UX design" },
      { logo: <div>W</div>, text: "Website Security" },
      { logo: <div>P</div>, text: "Project Management" },
      { logo: <div>C</div>, text: "Customer Relations" },
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
