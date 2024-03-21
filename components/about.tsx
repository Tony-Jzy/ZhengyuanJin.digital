"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After earning my undergraduate degree in{" "}
        <span className="font-bold">Computer Science </span> from{" "}
        <span className="font-bold">Boston University</span> in Massachusetts,
        I've developed a deep passion for web development.{" "}
        <span className="italic">
          I thrive on creating products, building applications, and ensuring
          client satisfaction.
        </span>{" "}
        My ability to provide solutions and solve problems has significantly
        contributed to my clients' success, yielding millions in profits. My
        journey began with
        <span className="font-medium"> SpringMVC, MySQL, and MongoDB</span>,
        later expanding my expertise to include{" "}
        <span className="font-medium">Next.js, Node.js, and Python</span>.{" "}
        <span className="underline">
          My focus extends beyond merely building applications, I aim to devise
          the best possible solutions for my clients.
        </span>{" "}
        I'm looking forward to graduate from{" "}
        <span className="font-bold">The University of Sydney</span> with a dual
        degree of{" "}
        <span className="font-bold">
          Master of IT & Master of IT Management
        </span>{" "}
        in November 2024, as I search for{" "}
        <span className="font-medium">full-time opportunities</span> in Sydney,
        Australia.
      </p>

      <p>
        <span className="italic">In my free time</span>, I enjoy spending time
        with <span className="font-medium">my family and pets</span>,{" "}
        <span className="font-medium">playing video games, making music</span>,
        and recently, I've started to find joy in{" "}
        <span className="font-medium">cooking</span>.
      </p>
    </motion.section>
  );
}
