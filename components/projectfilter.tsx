"use client"
import { motion } from "framer-motion"

interface ProjectFilterProps {
  activeFilter: string
  setActiveFilter: (filter: string) => void
}

export default function ProjectFilter({ activeFilter, setActiveFilter }: ProjectFilterProps) {
  const filters = [
    { id: "all", label: "All" },
    { id: "ai", label: "AI/ML" },
    { id: "frontend", label: "Front-End" },
    { id: "backend", label: "Back-End" },
    
  ]

  return (
    <div className="mb-12 flex justify-center">
      <div className="inline-flex rounded-full bg-gray-100 p-1">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
              activeFilter === filter.id ? "text-white" : "text-gray-600 hover:text-gray-900"
            }`}
          >
            {activeFilter === filter.id && (
              <motion.div
                layoutId="activeFilterBg"
                className="absolute inset-0 rounded-full bg-gray-800"
                initial={false}
                transition={{ type: "spring", duration: 0.6 }}
              />
            )}
            <span className="relative z-10">{filter.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
