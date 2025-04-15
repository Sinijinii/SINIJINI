"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Code, Database, Brain, ExternalLink } from "lucide-react"
import ProjectDetailModal from "./project-detail-modal"
import { projects } from "@/data/projects"

interface IntegratedProjectCardProps {
  projectId: string
  title: string
  description: string
  image: string
  frontendTech: string[]
  backendTech: string[]
  aiTech: string[]
}

export default function IntegratedProjectCard({
  projectId,
  title,
  description,
  image,
  frontendTech,
  backendTech,
  aiTech,
}: IntegratedProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  // 프로젝트 데이터 찾기
  const projectData = projects.find((p) => p.id === projectId)

  if (!projectData) {
    return null
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="project-card overflow-hidden rounded-xl bg-white shadow-sm border border-gray-100"
      >
        <div className="relative h-48 overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <h3 className="mb-2 text-xl font-medium">{title}</h3>
          <p className="mb-4 text-sm text-gray-600">{description}</p>

          <div className="mb-3">
            <div className="mb-1 flex items-center">
              <Code className="mr-2 h-4 w-4 text-blue-500" />
              <span className="text-xs font-medium text-gray-700">Frontend</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {frontendTech.map((tech, index) => (
                <span key={index} className="rounded-full bg-blue-50 px-2 py-1 text-xs text-blue-700">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-3">
            <div className="mb-1 flex items-center">
              <Database className="mr-2 h-4 w-4 text-green-500" />
              <span className="text-xs font-medium text-gray-700">Backend</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {backendTech.map((tech, index) => (
                <span key={index} className="rounded-full bg-green-50 px-2 py-1 text-xs text-green-700">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <div className="mb-1 flex items-center">
              <Brain className="mr-2 h-4 w-4 text-purple-500" />
              <span className="text-xs font-medium text-gray-700">AI/ML</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {aiTech.map((tech, index) => (
                <span key={index} className="rounded-full bg-purple-50 px-2 py-1 text-xs text-purple-700">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center text-sm font-medium text-gray-700 transition-colors hover:text-gray-900"
          >
            자세히 보기
            <ExternalLink className="ml-1 h-4 w-4" />
          </button>
        </div>
      </motion.div>

      <ProjectDetailModal project={projectData} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
