// src/components/Hero.jsx
import React from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { FaDownload } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-12 bg-[#0a1a2a] text-white">
      <div className="grid md:grid-cols-2 items-center gap-6 max-w-6xl mx-auto px-6">
        {/* Left Side: Text and Buttons */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-[32px] md:text-4xl font-extrabold leading-tight">
            Hi, I'm{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-sky-400 via-purple-500 to-pink-500">
              Syed Mohammad Noman
            </span>
          </h1>
          <p className="mt-4 text-lg text-slate-300">
            Frontend Developer! I build modern, responsive websites using React.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap gap-4">
            {/* Download CV Button */}
            <a
              href="/CV.pdf"
              download
              className="relative inline-flex items-center gap-2 px-6 py-2 rounded-full font-semibold text-white overflow-hidden transition-all duration-300
                         before:absolute before:inset-0 before:bg-linear-to-r before:from-sky-400 before:via-purple-500 before:to-pink-500
                         before:blur-xl before:opacity-70 before:transition-all before:duration-500 hover:before:opacity-100 hover:before:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                <FaDownload /> Download CV
              </span>
            </a>

            {/* Contact Me Button */}
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              offset={-70}
              className="relative inline-flex items-center gap-2 px-6 py-2 rounded-full font-semibold text-white overflow-hidden transition-all duration-300 cursor-pointer
                         before:absolute before:inset-0 before:bg-linear-to-r before:from-sky-400 before:via-purple-500 before:to-pink-500
                         before:blur-xl before:opacity-70 before:transition-all before:duration-500 hover:before:opacity-100 hover:before:scale-105"
            >
              <span className="relative z-10">Contact Me</span>
            </ScrollLink>
          </div>
        </motion.div>

        {/* Right Side: Profile Image with Glow */}
        <motion.div
          className="flex justify-center md:justify-end"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative w-56 h-56 rounded-full p-1">
            {/* Glowing Border */}
            <div className="absolute inset-0 rounded-full bg-linear-to-r from-sky-400 via-purple-500 to-pink-500 blur-2xl opacity-70 animate-pulse"></div>

            {/* Profile Image */}
            <div className="relative cursor-pointer w-full h-full rounded-full overflow-hidden bg-[#0a1a2a]">
              <img
                src="/profile.jpg"
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
