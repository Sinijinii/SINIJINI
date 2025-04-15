"use client"

import { cn } from "@/lib/utils"

interface NavigationProps {
  sections: string[]
  activeSection: number
  setActiveSection: (index: number) => void
}

export default function Navigation({ sections, activeSection, setActiveSection }: NavigationProps) {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 flex justify-center p-4 backdrop-blur-md">
      <div className="flex gap-2 rounded-full bg-white/10 p-1">
        {sections.map((section, index) => (
          <button
            key={index}
            onClick={() => setActiveSection(index)}
            className={cn(
              "px-4 py-2 text-sm font-medium transition-all duration-200",
              activeSection === index ? "rounded-full bg-white text-slate-900" : "text-white hover:bg-white/10",
            )}
          >
            {section}
          </button>
        ))}
      </div>
    </nav>
  )
}
