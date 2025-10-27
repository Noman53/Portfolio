// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Navbar = () => {
  const navItems = ['home', 'about', 'skills', 'projects', 'contact']
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed w-full z-40 top-0 transition-all duration-500">
      <nav
        className={`mx-auto max-w-6xl px-4 py-3 flex items-center justify-between rounded-b-md transition-all duration-500
          ${scrolled ? 'bg-linear-to-r from-blue-900/80 via-purple-900/70 to-pink-900/80 backdrop-blur-lg shadow-lg' : ''}`}
      >
        {/* Logo */}
        <button
          onClick={() => scroll.scrollToTop()}
          className="font-bold text-lg cursor-pointer text-white"
        >
          DevNoman
        </button>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-6">
          {navItems.map(item => (
            <li key={item}>
              <ScrollLink
                to={item}
                smooth
                spy
                duration={500}
                offset={-70}
                className="nav-link text-white capitalize cursor-pointer transition-colors hover:text-cyan-400"
              >
                {item}
              </ScrollLink>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-block text-white hover:text-blue-400"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-block text-white hover:text-blue-400"
          >
            <FaLinkedin size={18} />
          </a>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>
      </nav>
    </header>
  )
}

const MobileMenu = () => {
  const items = ['home', 'about', 'skills', 'projects', 'contact']
  return (
    <details className="relative">
      <summary className="cursor-pointer px-2 py-1 text-white">☰</summary>
      <ul className="absolute right-0 mt-2 bg-[#0a1a2a] rounded-md shadow-lg p-3 flex flex-col gap-2">
        {items.map(i => (
          <li key={i}>
            <ScrollLink
              to={i}
              smooth
              spy
              duration={500}
              offset={-70}
              className="cursor-pointer text-white capitalize hover:underline hover:decoration-blue-400 hover:decoration-2"
            >
              {i}
            </ScrollLink>
          </li>
        ))}
      </ul>
    </details>
  )
}

export default Navbar