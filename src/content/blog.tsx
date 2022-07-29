import { blogPostType } from "../pages/Blog/types";

export const blogNavbar = [
  {
    navText: "Portfolio",
    href: "/",
    solid: true,
  },
];

const filtersType = {
  All: "All",
  "Computer Science": "Computer Science",
  Music: "Music",
  Other: "Other",
};

export const filters = Object.keys(filtersType).map((k) => ({ text: k }));

const temp = {
  type: "Other",
  title: "Test Other",
  description: "These test blogs fill up pages to test pagination.",
  author: "Daniel",
  date: "November 9, 2021",
  dir: "b_2",
  url: "other-blog",
};

export const blogPosts: blogPostType = [
  {
    type: "Computer Science",
    title: "How I built my portfolio website",
    description:
      "The steps and inspirations I took when creating this website.",
    author: "Daniel",
    date: "November 9, 2021",
    dir: "b_1",
    url: "how-i-built-my-portfolio-website",
  },
  temp,
  temp,
  temp,
  temp,
  temp,
  temp,
  temp,
  temp,
  temp,
  temp,
];
