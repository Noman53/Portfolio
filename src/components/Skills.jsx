// src/components/Skills.jsx
import React from 'react'
import { FaReact, FaJsSquare, FaCss3Alt, FaNode, FaFigma } from 'react-icons/fa'
import { SiTailwindcss, SiVite } from 'react-icons/si'
import { motion } from 'framer-motion'

const skills = [
  { name: 'React', icon: <FaReact size={50} color="#61DBFB" /> },
  { name: 'JavaScript', icon: <FaJsSquare size={50} color="#F7DF1E" /> },
  { name: 'Tailwind', icon: <SiTailwindcss size={50} color="#38BDF8" /> },
  { name: 'Vite', icon: <SiVite size={50} color="#646CFF" /> },
  { name: 'CSS', icon: <FaCss3Alt size={50} color="#264de4" /> },
  { name: 'Node', icon: <FaNode size={50} color="#68A063" /> },
  { name: 'Figma', icon: <FaFigma size={50} color="#F24E1E" /> }
]

const Skills = () => {
  return (
    <section id="skills" className="py-12 bg-[#0a1a2a] overflow-hidden snap-start">
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-center text-transparent bg-clip-text bg-linear-to-r from-sky-400 via-purple-500 to-pink-500">
        Skills
      </h2>

      {/* Marquee Container */}
      <div className="max-w-6xl mx-auto overflow-hidden">
        <div className="flex w-max animate-[scroll_20s_linear_infinite] gap-8">
          {[...skills, ...skills].map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center min-w-[120px] p-4 rounded-2xl bg-[#112233] shadow-lg backdrop-blur-md hover:scale-105 transition-transform duration-500 hover:shadow-[0_0_20px_rgba(56,189,248,0.6)] cursor-pointer"
              whileHover={{ scale: 1.08 }}
            >
              {skill.icon}
              <span className="mt-2 text-white font-semibold">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
