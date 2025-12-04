// src/components/Contact.jsx
import React, { useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import emailjs from 'emailjs-com'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'

const Contact = () => {
  const formRef = useRef()
  const [showPopup, setShowPopup] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
           // ✅ Your EmailJS public key
    ).then(() => {
      setShowPopup(true)
      formRef.current.reset()
      setTimeout(() => setShowPopup(false), 3000)
    }, (error) => {
      alert('Oops, something went wrong. ' + error.text)
    })
  }

  const whatsappNumber = '+8801767910036'

  return (
    <section id="contact" className="py-12 bg-[#0a1a2a] relative">
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-center text-transparent bg-clip-text bg-linear-to-r from-sky-400 via-purple-500 to-pink-500">
        Contact Me
      </h2>

      {/* Grid Layout */}
      <motion.div
        className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Contact Form */}
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          className="cursor-pointer space-y-4 p-6 rounded-2xl bg-[#112233] shadow-lg backdrop-blur-md hover:scale-105 transition-transform duration-500 hover:shadow-[0_0_20px_rgba(56,189,248,0.6)]"
        >
          <input
            name="user_name"
            required
            placeholder="Your name"
            className="w-full p-3 rounded-md bg-[#0a1a2a] text-white placeholder-gray-400"
          />
          <input
            name="user_email"
            required
            placeholder="Email"
            className="w-full p-3 rounded-md bg-[#0a1a2a] text-white placeholder-gray-400"
          />
          <textarea
            name="message"
            required
            placeholder="Message"
            className="w-full p-3 rounded-md bg-[#0a1a2a] text-white placeholder-gray-400 h-32"
          />
          <button
            type="submit"
            className="cursor-pointer px-4 py-2 rounded-md bg-linear-to-r from-pink-400 to-sky-400 text-white font-semibold hover:opacity-95 transition"
          >
            Send Message
          </button>
        </motion.form>

        {/* Contact Info */}
        <motion.div
          className="cursor-pointer p-6 rounded-2xl bg-[#112233] shadow-lg backdrop-blur-md hover:scale-105 transition-transform duration-500 hover:shadow-[0_0_20px_rgba(56,189,248,0.6)] flex flex-col justify-center items-center text-center gap-4"
          whileHover={{ scale: 1.05 }}
        >
          <p className="text-white font-bold text-xl">Let's Connect</p>
          <p className="text-white text-sm">You can also reach me at:</p>
          <a
            href="mailto:syednoman1997@gmail.com"
            className="text-white font-medium hover:text-blue-400 transition-colors"
          >
            syednoman1997@gmail.com
          </a>

          {/* Social Icons */}
          <div className="mt-4 flex gap-6">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-blue-400 transition-colors text-2xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-blue-600 transition-colors text-2xl"
            >
              <FaLinkedin />
            </a>
            <a
              href={`https://wa.me/${whatsappNumber.replace(/\D/g, '')}`}
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-green-400 transition-colors text-2xl"
            >
              <FaWhatsapp />
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Popup Message */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 flex justify-center items-center bg-black/50 z-50"
          >
            <div className="bg-[#112233] p-6 rounded-2xl text-center shadow-lg border border-sky-400">
              <h3 className="text-xl font-semibold text-sky-400 mb-2">
                Thank You!
              </h3>
              <p className="text-gray-200">Your message has been sent successfully.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Contact