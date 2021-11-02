import About from "./About";
import Floating from "./Floating";
import Tabs from "./Tabs";

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
        logo: <div>Py</div>,
        text: "Python",
      },
      {
        logo: <div>JS</div>,
        text: "JavaScript",
      },
      {
        logo: <div>TS</div>,
        text: "JavaScript",
      },
      {
        logo: <div>JS</div>,
        text: "TypeScript",
      },
      {
        logo: <div>HTML5</div>,
        text: "HTML",
      },
      {
        logo: <div>CSS</div>,
        text: "CSS",
      },
      {
        logo: <div>SQL</div>,
        text: "SQL",
      },
      {
        logo: <div>Java</div>,
        text: "Java",
      },
      {
        logo: <div>C</div>,
        text: "C",
      },
      {
        logo: <div>MIPS</div>,
        text: "MIPS",
      },
    ],
  },
  {
    title: "Favorite frameworks & tools",
    list: [
      { logo: <div>React</div>, text: "React" },
      { logo: <div>React Native</div>, text: "React Native" },
      { logo: <div>GraphQL</div>, text: "GraphQL" },
      { logo: <div>GitHub Actions</div>, text: "GitHub Actions" },
      { logo: <div>Docker</div>, text: "Docker" },
      { logo: <div>Kubernetes</div>, text: "Kubernetes" },
      { logo: <div>Google Cloud Platform</div>, text: "Google Cloud Platform" },
      { logo: <div>Amazon Web Services</div>, text: "Amazon Web Services" },
      { logo: <div>Azure DevOps</div>, text: "Azure DevOps" },
      { logo: <div>SonarLint</div>, text: "SonarLint" },
      { logo: <div>AdobeSign</div>, text: "AdobeSign" },
      { logo: <div>GigaSign</div>, text: "GigaSign" },
      { logo: <div>AppSheet</div>, text: "AppSheet" },
    ],
  },
  {
    title: "My areas of interest",
    list: [
      {
        logo: <div>Full stack development</div>,
        text: "Full stack development",
      },
      { logo: <div>Web development</div>, text: "Web development" },
      { logo: <div>Mobile development</div>, text: "Mobile development" },
      { logo: <div>UI/UX design</div>, text: "UI/UX design" },
      { logo: <div>Website Security</div>, text: "Website Security" },
      { logo: <div>Project Management</div>, text: "Project Management" },
      { logo: <div>Customer Relations</div>, text: "Customer Relations" },
    ],
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
    text: "Projects",
  },
  {
    navText: "Contact",
    text: "What's Next",
  },
];
