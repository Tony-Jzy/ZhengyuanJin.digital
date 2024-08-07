import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import what2Eat from "@/public/what2eat.png";
import eeShoppingCenter from "@/public/ee-supply.png";
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
      "I earned my degree in Computer Science from Boston University. Alongside an internship in Android development in 2017, I also spent a year working as a teaching assistant for the CS591 Android Application Development course.",
    icon: React.createElement(LuGraduationCap),
    date: "2014 - 2018",
  },
  {
    title: "Software Developer, Full-Time",
    location: "Hangzhou, China",
    description:
      "For four years, I was a full-stack developer at Shangjingyun Technology Co., Ltd., where I significantly honed my coding abilities, as well as my project and team management skills.",
    icon: React.createElement(CgWorkAlt),
    date: "2018 - 2022",
  },
  {
    title: "Software Developer, Full-Time",
    location: "Shanghai, China",
    description:
      "At the company, I was responsible for web development and system design, focusing on creating and maintaining the website using modern technologies, optimizing SEO, and ensuring secure data transactions through robust backend solutions.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "Master's Degree",
    location: "Sydney, Australia",
    description:
      "I'm currently pursuing a dual degree in Master of IT and Master of IT Management, specializing in Data Management and Analytics, at the University of Sydney. Additionally, I'm working as a research student under Professor Xiuying Wang, with a focus on Knowledge-driven Traffic Image Analysis.",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - 2024",
  },
  {
    title: "Full-Stack Developer, Part-Time",
    location: "Sydney, Australia",
    description:
      "I worked as full-stack developer freelancing at EE Corporation, where I developed a fully functional e-commerce web application with Stripe payment integration, deployed with a robust network architecture on AWS, ensured high availability and scalability, and optimized the performance of the application.",
    icon: React.createElement(CgWorkAlt),
    date: "2024.3 - 2024.5",
  },
  {
    title: "Full-Stack Developer, Part-Time",
    location: "Sydney, Australia",
    description:
      "I'm currently working at ManezCo Pty. Ltd. In this company, I am responsible for developing and maintaining an AI online learning platform, leading CI/CD pipeline implementation, ensuring platform quality through testing, and utilizing Docker for consistent environment management.",
    icon: React.createElement(CgWorkAlt),
    date: "2024.5 - present",
  },
] as const;

export const projectsData = [
  {
    title: "What2Eat",
    progress: 1,
    description:
      "An AI dish recommendation system that suggests daily meals. The project is designed and planned with Figma and is currently under development.",
    tags: ["Figma", "Next.js", "MongoDB", "Github Action", "Stripe"],
    imageUrl: what2Eat,
  },
  {
    title: "eesupply.com.au",
    progress: 2,
    description:
      "Fully functional e-commerce web application with Stripe payment integration. The project was built using Next.js and MongoDB. The website is deployed on AWS.",
    tags: ["Next.js", "MongoDB", "GitHub Actions", "AWS", "Stripe"],
    imageUrl: eeShoppingCenter,
  },
  {
    title: "ZhengyuanJin.Digital",
    progress: 2,
    description:
      "I developed my personal website using Next.js and Tailwind, and it's currently hosted on AWS.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "AWS"],
    imageUrl: zhengyuanjin,
  },
  {
    title: "Facial Recognition Big Data Platform",
    progress: 2,
    description:
      "Storing and analysis over 300 million of facial captured data. Currently used by the Zhejiang Police Department and owned by SenseTime.",
    tags: ["SpringMVC", "MongoDB", "MySQL"],
    imageUrl: facial,
  },
  {
    title: "Ningbo Health Code",
    progress: 3,
    description:
      "Developed for the Ningbo Government to manage the spread of COVID-19, this solution is now utilized by over 15 million users, with daily usage reaching 20 million.",
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
  "CI/CD",
  "Jest",
  "GitHub Actions",
  "AWS",
  "Linux",
  "Docker",
] as const;
