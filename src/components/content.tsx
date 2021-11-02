import Floating from "./Floating";
import Tabs from "./Tabs";

const experienceTabContent = [
  {
    company: "Company",
    jobTitle: "SWE",
    duration: "May 2020 - Present",
    content: <p>experience here</p>,
  },
  {
    company: "Company 1",
    jobTitle: "SWE intern",
    duration: "Nov 2020 - Jan 2020",
    content: <p>easdfxperience here</p>,
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
];

export const contentSections = [
  {
    navText: "About",
    text: "About Me",
    content: (
      <p>
        Hello! My name is Daniel and I'm a Junior at Rollins College in the
        picturesque city of Winter Park, FL.
        <br />
        <br />
        I love building websites and mobile applications that positively impact
        the world around me and improve the daily lives of others. I've always
        taken a keen interest towards problem solving and creative thinking.
        From building elegant and powerful frontend designs to complex and
        functional backend APIs, I want to use programming as a creative medium
        for bringing purposeful ideas to fruition.
        <br />
        <br />
        I've had the priveledge of interning at `one of Malaysia's leading
        conglomerates`, `a multinational cement manufacturer`, and `an IT
        strategy and deployment consultantcy firm`. Nowadays, I'm building
        user-friendly, inclusive, and accessible digital experiences at `one of
        Malaysia's largest swim schools`.
      </p>
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
