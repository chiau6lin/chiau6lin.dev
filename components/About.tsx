"use client";

import SectionHeading from './SectionHeading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/hooks/useSectionInView';

export default function About() {
  const { ref } = useSectionInView("About")

  return (
    <motion.section
      id="about"
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28">
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        Before becoming frontend engineer, my first job was a QA engineer.
        Because of intern working experience, it makes me interest in frontend development, so currently I focus on web development.
        My favorite part of programming is the problem-solving aspect.
        I love the feeling of finally figuring out a solution to a problem.<br />
        My core tech stack is <span className="relative font-medium inline-block highlight">React, NextJS, Vue, NuxtJS and TypeScript</span>.
        I am also familiar with <span className="font-medium">Golang and PostgreSQL.</span>
      </p>
      <p className="mb-3">
        I actively seek out new technologies and stay up-to-date on industry trends and advancements.
        Currently, I'm moving towards the goal of becoming a full-stack engineer, and looking for a full-time position as a software developer.</p>
      <p>
        When I'm not coding, I enjoy <span className="font-medium">watching movies</span> and <span className="font-medium">hiphop dancing</span> even have participated in dance performances on stage.
        I am like a curious child, open my mind to embrace new things, <span className="block font-medium">Peace and Love. ✌️ 💛</span>
      </p>
      <br />
      <blockquote className="m-0 text-left flex justify-end items-center">
        <p className="italic p-4 before:content-['\201C'] after:content-['\201D']">
          You’ve got to find what you love.
        </p>
        <span className="text-right text-sm">by Steve Jobs</span>
      </blockquote>
    </motion.section>
  )
}

