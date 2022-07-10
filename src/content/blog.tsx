import { blogPostType } from "../pages/Blog/types";

export const blogNavbar = [
  {
    navText: "Portfolio",
    href: "/",
    solid: true,
  },
];

const filtersType = {
  "All": "All",
  "Computer Science": "Computer Science",
  "Music": "Music",
  "Other": "Other",
}

export const filters = Object.keys(filtersType).map(k => ({ text: k }))


const temp = [
  {
    type: "Computer Science",
    title: "Test cs",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    date: "November 9, 2021",
    dir: "b_0",
  },
  {
    type: "Music",
    title: "Test music",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    date: "November 9, 2021",
    dir: "b_1",
  },
  {
    type: "Other",
    title: "Test Other",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    date: "November 9, 2021",
    dir: "b_2",
  },
]
export const blogPosts : blogPostType = [
  ...temp,
  ...temp,
  ...temp,
  ...temp,
  ...temp,
  ...temp,
  ...temp,
  ...temp,
  ...temp,
  ...temp,
];
