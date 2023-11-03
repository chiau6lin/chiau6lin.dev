"use client";

import React from 'react'
import Image from 'next/image'
import avatar from '@/assets/images/avatar.jpg'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { BsArrowRight, BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { HiDownload } from 'react-icons/hi'
import { useActiveSectionContext } from '@/context/ActiveSectionContext';
import { useSectionInView } from '@/hooks/useSectionInView'

export default function Intro() {
  const { ref } = useSectionInView("Home")
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext()

  return (
    <section id="home" ref={ref} className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween", // spring
              duration: 0.2
            }}
            className=""
          >
            <Image
              src={avatar}
              alt="Jamie's avatar"
              quality="95" // 80
              priority={true}
              className="w-24 h-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7
            }}
            className="absolute bottom-0 right-0 text-4xl"
          >
            👋 {/* CTRL + CMD + SPACE */}
          </motion.span>
        </div>
      </div>

      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-3xl">
        <span className="font-bold">Hi, I'm Jamie</span>, a{" "}
        <span className="font-bold">frontend developer</span> with{" "}
        <span className="font-bold">6 years</span> of experience based in Taipei, Taiwan 🇹🇼.<br />
        I enjoy building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React/NextJS</span> and... <span className="underline">Vue/NuxtJS</span>, Why not both 👽.
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1
        }}
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium">

        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact")
            setTimeOfLastClick(Date.now())
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack"
          href="https://www.cakeresume.com/s--3OSadGmDDo7L6XtPAu0obQ--/jamie-lin-03fad3"
          target="_blank"
          rel="noopener noreferrer"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer"
          href="https://www.linkedin.com/in/chia-yi-lin-jamie-a88b07a8"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer"
          href="https://github.com/chiau6lin"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <FaGithub />
        </a>
      </motion.div>
    </section>
  )
}
