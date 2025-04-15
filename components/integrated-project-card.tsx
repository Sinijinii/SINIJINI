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

  // 프로젝트 데이터 찾기
  const projectData = projects.find((p) => p.id === projectId)

  if (!projectData) {
    return null
  }

  // 각 기술 영역이 있는지 확인
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
        className="group relative overflow-hidden rounded-xl bg-white shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* 이미지 섹션 */}
        <div className="relative h-56 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className={`object-cover transition-transform duration-700 ${isHovered ? 'scale-105' : 'scale-100'}`}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
          
          {/* 오버레이 기술 태그 */}
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
        
        {/* 컨텐츠 섹션 */}
        <div className="p-6">
          <h3 className="mb-3 text-xl font-medium line-clamp-2">{title}</h3>
          <p className="mb-6 text-gray-600 line-clamp-3">{description}</p>
          
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center text-sm font-medium text-gray-700 transition-colors hover:text-gray-900 group"
          >
            자세히 보기
            <ExternalLink className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </motion.div>

      <ProjectDetailModal project={projectData as any} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}