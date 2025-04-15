"use client"

import type React from "react"

import { useState } from "react"
import { X, Code, Database, Brain, ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

interface ProjectDetailProps {
  project: {
    id: string
    title: string
    description: string
    image: string
    overview: string
    challenge: string
    solution: string
    result: string
    github?: string
    demo?: string
    frontend?: {
      description: string
      responsibilities: string[]
      tech: string[]
      features: string[]
      images?: string[]
    }
    backend?: {
      description: string
      responsibilities: string[]
      tech: string[]
      features: string[]
      architecture?: string
    }
    ai?: {
      description: string
      responsibilities: string[]
      tech: string[]
      models: string[]
      dataProcessing?: string
      evaluation?: string
    }
  }
  isOpen: boolean
  onClose: () => void
}

export default function ProjectDetailModal({ project, isOpen, onClose }: ProjectDetailProps) {
  const [activeTab, setActiveTab] = useState<"overview" | "frontend" | "backend" | "ai">("overview")

  // 각 직무 탭이 있는지 확인
  const hasFrontend = !!project.frontend
  const hasBackend = !!project.backend
  const hasAI = !!project.ai

  // 모달 외부 클릭 시 닫기
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
          onClick={handleBackdropClick}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-xl bg-white shadow-xl"
          >
            {/* 헤더 이미지 */}
            <div className="relative h-64 w-full">
              <Image
                src={project.image || "/placeholder.svg?height=300&width=1000"}
                alt={project.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h2 className="text-3xl font-bold text-white">{project.title}</h2>
              </div>
              <button
                onClick={onClose}
                className="absolute right-4 top-4 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
                aria-label="닫기"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* 탭 네비게이션 */}
            <div className="border-b border-gray-200">
              <div className="flex overflow-x-auto">
                <button
                  onClick={() => setActiveTab("overview")}
                  className={`px-6 py-4 text-sm font-medium ${
                    activeTab === "overview"
                      ? "border-b-2 border-blue-500 text-blue-600"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  개요
                </button>
                {hasFrontend && (
                  <button
                    onClick={() => setActiveTab("frontend")}
                    className={`flex items-center px-6 py-4 text-sm font-medium ${
                      activeTab === "frontend"
                        ? "border-b-2 border-blue-500 text-blue-600"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    <Code className="mr-2 h-4 w-4" />
                    프론트엔드
                  </button>
                )}
                {hasBackend && (
                  <button
                    onClick={() => setActiveTab("backend")}
                    className={`flex items-center px-6 py-4 text-sm font-medium ${
                      activeTab === "backend"
                        ? "border-b-2 border-green-500 text-green-600"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    <Database className="mr-2 h-4 w-4" />
                    백엔드
                  </button>
                )}
                {hasAI && (
                  <button
                    onClick={() => setActiveTab("ai")}
                    className={`flex items-center px-6 py-4 text-sm font-medium ${
                      activeTab === "ai"
                        ? "border-b-2 border-purple-500 text-purple-600"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    <Brain className="mr-2 h-4 w-4" />
                    AI/ML
                  </button>
                )}
              </div>
            </div>

            {/* 탭 콘텐츠 */}
            <div className="max-h-[calc(90vh-400px)] overflow-y-auto p-6">
              {activeTab === "overview" && (
                <div className="space-y-6">
                  <div>
                    <h3 className="mb-2 text-xl font-medium">프로젝트 개요</h3>
                    <p className="text-gray-600">{project.overview}</p>
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-medium">도전 과제</h3>
                    <p className="text-gray-600">{project.challenge}</p>
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-medium">해결 방법</h3>
                    <p className="text-gray-600">{project.solution}</p>
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-medium">결과</h3>
                    <p className="text-gray-600">{project.result}</p>
                  </div>
                </div>
              )}

              {activeTab === "frontend" && project.frontend && (
                <div className="space-y-6">
                  <div>
                    <h3 className="mb-2 text-xl font-medium">프론트엔드 개발 개요</h3>
                    <p className="text-gray-600">{project.frontend.description}</p>
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-medium">담당 업무</h3>
                    <ul className="list-inside list-disc space-y-1 text-gray-600">
                      {project.frontend.responsibilities.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-medium">주요 기능</h3>
                    <ul className="list-inside list-disc space-y-1 text-gray-600">
                      {project.frontend.features.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-medium">사용 기술</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.frontend.tech.map((tech, index) => (
                        <span key={index} className="rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-700">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  {project.frontend.images && project.frontend.images.length > 0 && (
                    <div>
                      <h3 className="mb-2 text-xl font-medium">UI 스크린샷</h3>
                      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        {project.frontend.images.map((img, index) => (
                          <div key={index} className="relative h-48 overflow-hidden rounded-lg">
                            <Image src={img || "/placeholder.svg"} alt="UI Screenshot" fill className="object-cover" />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {activeTab === "backend" && project.backend && (
                <div className="space-y-6">
                  <div>
                    <h3 className="mb-2 text-xl font-medium">백엔드 개발 개요</h3>
                    <p className="text-gray-600">{project.backend.description}</p>
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-medium">담당 업무</h3>
                    <ul className="list-inside list-disc space-y-1 text-gray-600">
                      {project.backend.responsibilities.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-medium">주요 기능</h3>
                    <ul className="list-inside list-disc space-y-1 text-gray-600">
                      {project.backend.features.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  {project.backend.architecture && (
                    <div>
                      <h3 className="mb-2 text-xl font-medium">시스템 아키텍처</h3>
                      <p className="text-gray-600">{project.backend.architecture}</p>
                    </div>
                  )}
                  <div>
                    <h3 className="mb-2 text-xl font-medium">사용 기술</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.backend.tech.map((tech, index) => (
                        <span key={index} className="rounded-full bg-green-50 px-3 py-1 text-sm text-green-700">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "ai" && project.ai && (
                <div className="space-y-6">
                  <div>
                    <h3 className="mb-2 text-xl font-medium">AI/ML 개발 개요</h3>
                    <p className="text-gray-600">{project.ai.description}</p>
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-medium">담당 업무</h3>
                    <ul className="list-inside list-disc space-y-1 text-gray-600">
                      {project.ai.responsibilities.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-medium">사용 모델</h3>
                    <ul className="list-inside list-disc space-y-1 text-gray-600">
                      {project.ai.models.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  {project.ai.dataProcessing && (
                    <div>
                      <h3 className="mb-2 text-xl font-medium">데이터 처리 방법</h3>
                      <p className="text-gray-600">{project.ai.dataProcessing}</p>
                    </div>
                  )}
                  {project.ai.evaluation && (
                    <div>
                      <h3 className="mb-2 text-xl font-medium">모델 평가 및 성능</h3>
                      <p className="text-gray-600">{project.ai.evaluation}</p>
                    </div>
                  )}
                  <div>
                    <h3 className="mb-2 text-xl font-medium">사용 기술</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.ai.tech.map((tech, index) => (
                        <span key={index} className="rounded-full bg-purple-50 px-3 py-1 text-sm text-purple-700">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 푸터 */}
            <div className="border-t border-gray-200 p-4">
              <div className="flex justify-end space-x-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center rounded-md bg-gray-800 px-4 py-2 text-sm text-white transition-colors hover:bg-gray-700"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-700"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    데모 보기
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
