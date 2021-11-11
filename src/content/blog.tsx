import testImg from "../content/blogPosts/Test/test.webp";
import test1Img from "../content/blogPosts/Test1/test1.webp";

export const blogNavbar = [
  {
    navText: "Portfolio",
    href: "/",
    solid: true,
  },
];

export const filters = [
  { text: "All" },
  { text: "Computer Science" },
  { text: "Music" },
  { text: "Other" },
];

// blog posts array
const testBlog = {
  cs: {
    type: "Computer Science",
    title: "Test",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    date: "November 9, 2021",
    dir: "Test",
    filename: "Test.md",
    image: testImg,
  },
  mus: {
    type: "Music",
    title: "Test",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    date: "November 9, 2021",
    dir: "Test1",
    filename: "Test.md",
    image: test1Img,
  },
};

export const blogPosts = [
  ...new Array(51)
    .fill(0)
    .map((v, i) => ({ ...testBlog.cs, title: `Test CS Blog ${i + 1}` })),
  ...new Array(51)
    .fill(0)
    .map((v, i) => ({ ...testBlog.mus, title: `Test Mus Blog ${i + 1}` })),
];
