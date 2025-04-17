"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { projects } from "@/data/projects"
import ProjectDetailModal from "./project-detail-modal"

interface IntegratedProjectCardProps {
  projectId: string
  title: string
  description: string
  image: string
  frontendTech?: string[]
  backendTech?: string[]
  aiTech?: string[]
}

export default function IntegratedProjectCard({
  projectId,
  title,
  description,
  image,
  aiTech = [],
  frontendTech = [],
  backendTech = [],
}: IntegratedProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const prefix = process.env.NODE_ENV === "production" ? "/SINIJINI" : "";
  const projectData = projects.find((p) => p.id === projectId)

  if (!projectData) {
    return null
  }

  const hasAiTech = aiTech.length > 0
  const hasFrontendTech = frontendTech.length > 0
  const hasBackendTech = backendTech.length > 0

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="group relative overflow-hidden rounded-xl bg-white shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsModalOpen(true)} // 👈 카드 전체 클릭 시 모달 열기
      >
        {/* 이미지 영역 */}
        <div className="relative h-56 overflow-hidden">
          <Image
            src={image ? `${prefix}${image}` : "/placeholder.svg?height=300&width=1000"}
            alt={title}
            fill
            className={`object-cover transition-transform duration-700 ${isHovered ? "scale-105" : "scale-100"}`}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />

          <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
            {hasAiTech && (
              <span className="rounded-full bg-purple-500/90 px-3 py-1 text-xs font-medium text-white">
                AI/ML
              </span>
            )}
            {hasFrontendTech && (
              <span className="rounded-full bg-blue-500/90 px-3 py-1 text-xs font-medium text-white">
                Frontend
              </span>
            )}
            {hasBackendTech && (
              <span className="rounded-full bg-green-500/90 px-3 py-1 text-xs font-medium text-white">
                Backend
              </span>
            )}
          </div>
        </div>

        {/* 텍스트 영역 */}
        <div className="p-6">
          <h3 className="mb-3 text-xl font-medium line-clamp-2">{title}</h3>
          <p className="text-gray-600 line-clamp-3">{description}</p>
        </div>
      </motion.div>

      <ProjectDetailModal project={projectData as any} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}