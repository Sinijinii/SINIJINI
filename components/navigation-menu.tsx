"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface NavigationMenuProps {
  activeSection: string
}

export default function NavigationMenu({ activeSection }: NavigationMenuProps) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  const menuItems = [
    { id: "about", label: "About" },
    { id: "interview", label: "Interview" },
    { id: "tech-integration", label: "기술 통합" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "career", label: "Career" },
    { id: "education", label: "Education" },
    { id: "awards", label: "Awards" },
  ]

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.9)" : "rgba(255, 255, 255, 0)",
        boxShadow: isScrolled ? "0 4px 6px -1px rgba(0, 0, 0, 0.1)" : "none",
      }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm transition-all duration-300"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center py-4">
          <ul className="flex flex-wrap justify-center gap-1 md:gap-2">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 text-sm rounded-md transition-colors ${
                    activeSection === item.id ? "bg-gray-800 text-white" : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.nav>
  )
}
