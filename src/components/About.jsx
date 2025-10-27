// src/components/About.jsx
import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-12 bg-[#0a1a2a]">
      {/* Section Title */}
      <motion.h2
        className="text-3xl md:text-4xl font-extrabold mb-10 text-center text-transparent bg-clip-text bg-linear-to-r from-sky-400 via-purple-500 to-pink-500"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>

      {/* Content Grid */}
      <motion.div
        className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {/* Left Card - About Text */}
        <motion.div
          className="cursor-pointer bg-[#112233] p-8 rounded-2xl shadow-lg backdrop-blur-md hover:shadow-xl transition-shadow duration-500"
          whileHover={{ scale: 1.03 }}
        >
          <p className="text-white leading-relaxed text-lg">
            I'm a frontend developer focused on creating{' '}
            <span className="text-sky-400 font-semibold">performant</span>,{' '}
            <span className="text-purple-400 font-semibold">accessible</span>, and{' '}
            <span className="text-pink-400 font-semibold">delightful</span> user experiences.
            I love turning ideas into real products using modern web technologies.
          </p>

          <ul className="mt-6 space-y-3 text-white">
            <motion.li whileHover={{ x: 5 }} transition={{ type: 'spring', stiffness: 200 }}>
              • Building responsive single-page applications with React
            </motion.li>
            <motion.li whileHover={{ x: 5 }} transition={{ type: 'spring', stiffness: 200 }}>
              • Crafting sleek, modern designs with Tailwind CSS
            </motion.li>
            <motion.li whileHover={{ x: 5 }} transition={{ type: 'spring', stiffness: 200 }}>
              • Writing clean, maintainable code and collaborating via GitHub
            </motion.li>
          </ul>
        </motion.div>

        {/* Right Card - Experience */}
        <motion.div
          className="cursor-pointer bg-linear-to-r from-sky-500 via-purple-500 to-pink-500 p-8 rounded-2xl shadow-lg text-white text-center hover:scale-105 transition-transform duration-500"
          whileHover={{ scale: 1.05 }}
        >
          <p className="text-xl font-bold mb-2">Experience</p>
          <p className="text-sm mb-4">2+ years building web apps</p>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <span className="bg-[#112233] rounded-lg py-2 text-sm">React</span>
            <span className="bg-[#112233] rounded-lg py-2 text-sm">Tailwind CSS</span>
            <span className="bg-[#112233] rounded-lg py-2 text-sm">Vite</span>
            <span className="bg-[#112233] rounded-lg py-2 text-sm">Node.js</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default About