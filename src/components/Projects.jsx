// src/components/Projects.jsx
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A modern personal portfolio built with React and Tailwind CSS showcasing my projects and skills.',
    tech: ['React', 'Tailwind', 'Framer Motion'],
    image: '/project-1.jpg',
    github: 'https://github.com/',
    live: 'https://example.com'
  },
  {
    title: 'E-Commerce App',
    description: 'Full-featured e-commerce application with product filters, dynamic cart, and payment gateway.',
    tech: ['React', 'Node.js', 'Express'],
    image: '/project-1.jpg',
    github: 'https://github.com/',
    live: 'https://example.com'
  },
  {
    title: 'Chat Application',
    description: 'Real-time chat app with Socket.io and Node.js enabling instant communication between users.',
    tech: ['Socket.io', 'Node.js', 'MongoDB'],
    image: '/project-2.jpg',
    github: 'https://github.com/',
    live: 'https://example.com'
  },
  {
    title: 'E-Commerce App',
    description: 'Full-featured e-commerce application with product filters, dynamic cart, and payment gateway.',
    tech: ['React', 'Node.js', 'Express'],
    image: '/project-1.jpg',
    github: 'https://github.com/',
    live: 'https://example.com'
  },
]

const Projects = () => {
  const [showAll, setShowAll] = useState(false)
  const displayedProjects = showAll ? projects : projects.slice(0, 3)

  return (
    <section id="projects" className="py-16 bg-[#0a1a2a]">
      {/* Section Title */}
      <motion.h2
        className="text-3xl md:text-4xl font-extrabold mb-10 text-center text-transparent bg-clip-text bg-linear-to-r from-sky-400 via-purple-500 to-pink-500"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h2>

      {/* Project Grid */}
      <motion.div
        className="cursor-pointer grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {displayedProjects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            className="group relative rounded-2xl bg-white/10 border border-slate-500/20 backdrop-blur-md shadow-lg overflow-hidden hover:shadow-[0_0_25px_rgba(56,189,248,0.4)] transition-all duration-500"
          >
            {/* Project Image */}
            <div className="h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Project Details */}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
              <p className="text-sm text-slate-300 mb-4">{project.description}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-linear-to-r from-sky-500 to-pink-500 text-white"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-5">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-300 hover:text-sky-400 transition-all flex items-center gap-1"
                >
                  <FaGithub size={18} /> <span className="text-sm">Code</span>
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-300 hover:text-sky-400 transition-all flex items-center gap-1"
                >
                  <FaExternalLinkAlt size={16} /> <span className="text-sm">Live</span>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Show More / Less Button */}
      {projects.length > 3 && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="cursor-pointer px-6 py-2 rounded-md font-medium text-white bg-linear-to-r from-sky-500 to-pink-500 hover:opacity-90 transition-all shadow-[0_0_10px_rgba(56,189,248,0.5)]"
          >
            {showAll ? 'Show Less' : 'See More'}
          </button>
        </div>
      )}
    </section>
  )
}

export default Projects