// src/components/Footer.jsx
import React from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
  const navItems = ['home', 'about', 'skills', 'projects', 'contact']
  const whatsappNumber = '+8801767910036'

  return (
    <section id="footer" className="bg-[#0a1a2a] py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Logo */}
        <div className="text-white font-bold text-lg">DevNoman</div>

        {/* Navigation Links */}
        <ul className="flex flex-wrap gap-6 text-white text-sm font-medium">
          {navItems.map(item => (
            <li key={item}>
              <ScrollLink
                to={item}
                smooth={true}
                duration={500}
                offset={-70}
                className="nav-link cursor-pointer capitalize hover:text-blue-400 transition-colors"
              >
                {item}
              </ScrollLink>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="flex gap-4 text-white text-xl">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-600 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href={`https://wa.me/${whatsappNumber.replace(/\D/g, '')}`}
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-400 transition-colors"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-6 text-center text-gray-400 text-xs">
        &copy; {new Date().getFullYear()} DevNoman. All rights reserved.
      </div>
    </section>
  )
}

export default Footer