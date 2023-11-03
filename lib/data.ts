import React from "react";
import { BsHeadsetVr, BsLaptop, BsCreditCard2Back } from 'react-icons/bs';
import projectImg from "@/public/project.jpg"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "project1",
    description:
      "project1",
    tags: [],
    imageUrl: projectImg,
  },
  {
    title: "project2",
    description:
      "project2",
    tags: [],
    imageUrl: projectImg,
  },
  {
    title: "project3",
    description:
      "project3",
    tags: [],
    imageUrl: projectImg,
  },
] as const;

export const skillsData = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Vue",
  "Vuex",
  "Nuxt.js",
  "Git",
  "Tailwind CSS",
  "shadcn-ui",
  "element-ui",
  "react-hook-form",
  "Zod",
  "Golang",
  "PostgreSQL",
  "MongoDB",
] as const;

export const experiencesData = [
  {
    title: "Frontend Engineer",
    location: "Taipei, Taiwan",
    company: "Taiwan INSTO Technologies Co., Ltd. 台灣盈士多科技股份有限公司",
    description:
      `
        I worked as a full-time frontend engineer in FinTech industry.
        My responsibility is to develop new payment method feature and maintain website.
      `,
    icon: React.createElement(BsCreditCard2Back),
    date: "2018.08 - 2020.02",
  },
  {
    title: "Frontend Engineer",
    location: "Taipei, Taiwan",
    company: "XRSPACE Co., Ltd 未來市股份有限公司",
    description:
      `
        I worked as a full-time frontend engineer in VR industry.
        My responsibility is to develop CMS website.
        The special experience is that develop browser homepage in VR headset.
      `,
    icon: React.createElement(BsHeadsetVr),
    date: "2020.06 - 2021.03",
  },
  {
    title: "Frontend Engineer",
    location: "Taipei, Taiwan",
    company: "SAT. KNOWLEDGE 知識衛星",
    description:
      `
        I worked as a full-time frontend engineer in online course platform.
        My responsibility is develop new feature and refactor website for SEO friendly and optimize speed of website.
        Working closely with PM, UI designer and backend engineer.
        And other interest thing is that we will build extra tool project for teacher if need.
      `,
    icon: React.createElement(BsLaptop),
    date: "2021.03 - 2023.01",
  },
] as const;