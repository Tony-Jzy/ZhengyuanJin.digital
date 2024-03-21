import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import eeShoppingCenter from "@/public/ee-shopping-center.png";
import zhengyuanjin from "@/public/zhengyuanjin.png";
import facial from "@/public/facial-big-data.png";
import healthCode from "@/public/ningbo-health-code.png";

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

export const experiencesData = [
  {
    title: "Bachlor's Degree",
    location: "Boston, United States",
    description:
      "I graduated from Boston University with a degree in Computer Science. With Android Internship experience, I also worked as a teaching assistant for CS591 Android Application Development for 1 year.",
    icon: React.createElement(LuGraduationCap),
    date: "2014 - 2018",
  },
  {
    title: "Full-Stack Developer, Full-Time",
    location: "Hangzhou, China",
    description:
      "I worked as a full-stack developer for 4 years at Shangjingyun Technology Co., Ltd.. I significantly improved my coding skills and also project and team management skills.",
    icon: React.createElement(CgWorkAlt),
    date: "2018 - 2022",
  },
  {
    title: "Master's Degree",
    location: "Sydney, Australia",
    description:
      "I'm currently studying for dual degree in Master of IT & Master of IT Management specialized in Data Management and Analystics at University of Sydney. I am also working as a research student with Professor Xiuying Wang, focusing on Knowledge-driven Traffic Image Analysis.",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - 2024",
  },
  {
    title: "Full-Stack Developer, Intern",
    location: "Sydney, Australia",
    description:
      "I'm now a full-stack developer working as a intern for EE-Shopping-Center. I'm open to full-time opportunities.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "EE-Shopping-Center",
    progress: 1,
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "MySQL", "AWS"],
    imageUrl: eeShoppingCenter,
  },
  {
    title: "ZhengyuanJin.Digital",
    progress: 2,
    description:
      "My personal website.I built it with Next.js and Tailwind. It's hosted on AWS.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "AWS"],
    imageUrl: zhengyuanjin,
  },
  {
    title: "Facial Recognition Big Data Platform",
    progress: 2,
    description:
      "Built for Zhejiang Police Department. Storing and analysing over 300 millions of capture data. Won a 9-million contract for SenseTime.",
    tags: ["SpringMVC", "MongoDB", "MySQL"],
    imageUrl: facial,
  },
  {
    title: "Ningbo Health Code",
    progress: 3,
    description:
      "Created for Ningbo Government for manaing COVID-19 spread. Used by over 15 million users, 20 million daily usage.",
    tags: [
      "WeChat Miniprogram",
      "SpringMVC",
      "MongoDB",
      "Redis",
      "Aliyun Cloud",
    ],
    imageUrl: healthCode,
  },
] as const;

export const skillsData = [
  "Java",
  "SpringMVC",
  "HTML",
  "CSS",
  "Python",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind",
  "Git",
  "MongoDB",
  "MySQL",
  "Redis",
  "AWS",
  "Linux",
  "Docker",
] as const;
