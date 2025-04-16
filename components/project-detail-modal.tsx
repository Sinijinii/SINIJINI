"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { X, Code, Database, Brain, ExternalLink, Github, TrendingUp, Wrench } from "lucide-react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

interface ProjectDetailProps {
  project: {
    id: string
    title: string
    description: string
    image: string
    overview: string
    planning?: string
    challenge: string
    solution: string
    result: string
    github?: string
    demo?: string
    images?: string[]
    frontend?: {
      description: string
      responsibilities: string[]
      tech: string[]
      features?: string[]
      images?: string[]
      troubleshooting?: {
        problem: string
        solution: string
        result?: string
      }[]
      growth?: string[]
    }
    backend?: {
      description: string
      responsibilities: string[]
      tech: string[]
      features?: string[]
      images?: string[]
      architecture?: string
      architectureImage?: string
      architectureImageCaption?: string
      troubleshooting?: {
        problem: string
        solution: string
        result?: string
      }[]
      growth?: string[]
    }
    ai?: {
      description: string
      responsibilities: string[]
      tech: string[]
      models?: string[]
      images?: string[]
      dataProcessing?: string
      evaluation?: string
      modelDiagram?: string
      modelDiagramCaption?: string
      troubleshooting?: {
        problem: string
        solution: string
        result?: string
      }[]
      growth?: string[]
    }
  }
  isOpen: boolean
  onClose: () => void
}


export default function ProjectDetailModal({ project, isOpen, onClose }: ProjectDetailProps) {
  const [activeTab, setActiveTab] = useState<"overview" | "frontend" | "backend" | "ai">("overview")

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
      document.documentElement.style.overflow = "hidden" // ← 추가!
    } else {
      document.body.style.overflow = "auto"
      document.documentElement.style.overflow = "auto"
    }
  
    return () => {
      document.body.style.overflow = "auto"
      document.documentElement.style.overflow = "auto"
    }
  }, [isOpen])
  

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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-2 backdrop-blur-sm"
          onClick={handleBackdropClick}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative max-h-[95vh] w-full max-w-6xl overflow-hidden rounded-xl bg-white shadow-xl"
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
  
              </div>
            </div>

            {/* 탭 콘텐츠 */}
            <div className="max-h-[calc(95vh-330px)] overflow-y-auto p-6">
            {activeTab === "overview" && (
              <div className="space-y-6">
                {project.planning && (
                  <div>
                    <h3 className="mb-2 text-xl font-medium">기획 배경</h3>
                    <p className="text-gray-600">{project.planning}</p>
                  </div>
                )}

                <div>
                  <h3 className="mb-2 text-xl font-medium">프로젝트 개요</h3>
                  <p className="text-gray-600">{project.overview}</p>
                </div>

                {/* ✨ 이미지 섹션 추가 */}
                {project.images && project.images.length > 0 && (
                  <div className="pt-2">
                    <h3 className="mb-4 text-xl font-medium">대표 이미지</h3>
                    <div className="space-y-6">
                      {project.images.map((img, index) => (
                        <div key={index} className="relative w-full max-w-[900px] h-[400px] mx-auto rounded-lg overflow-hidden shadow-md border">
                          <Image
                            src={img || "/placeholder.svg"}
                            alt={`프로젝트 대표 이미지 ${index + 1}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

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

{activeTab === "ai" && project.ai && (
                <div className="space-y-8">
                  {/* 주요 내용 */}
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
                    {project.ai.models && project.ai.models.length > 0 && (
                      <div>
                        <h3 className="mb-2 text-xl font-medium">사용 모델</h3>
                        <ul className="list-inside list-disc space-y-1 text-gray-600">
                          {project.ai.models.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}
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

                  {/* 트러블 슈팅 */}
                  {project.ai.troubleshooting && project.ai.troubleshooting.length > 0 && (
                    <div className="border-t border-gray-200 pt-8">
                      <div className="flex items-center">
                        <Wrench className="mr-2 h-5 w-5 text-purple-500" />
                        <h3 className="text-xl font-medium">트러블 슈팅</h3>
                      </div>
                      <div className="mt-4 space-y-6">
                        {project.ai.troubleshooting.map((item, index) => (
                          <div key={index} className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                            <h4 className="mb-2 font-medium text-red-600">문제점</h4>
                            <p className="mb-4 text-gray-700">{item.problem}</p>

                            <h4 className="mb-2 font-medium text-blue-600">해결 방법</h4>
                            <p className="mb-4 text-gray-700">{item.solution}</p>

                            {/* 결과가 있을 때만 렌더링 */}
                            {item.result && (
                              <>
                                <h4 className="mb-2 font-medium text-green-600">결과</h4>
                                <p className="text-gray-700">{item.result}</p>
                              </>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* 기술적 성장 */}
                  {project.ai.growth && project.ai.growth.length > 0 && (
                    <div className="border-t border-gray-200 pt-8">
                      <div className="flex items-center">
                        <TrendingUp className="mr-2 h-5 w-5 text-purple-500" />
                        <h3 className="text-xl font-medium">기술적 성장</h3>
                      </div>
                      <div className="mt-4 rounded-lg border border-gray-200 bg-purple-50 p-4">
                        <ul className="space-y-3">
                          {project.ai.growth.map((item, index) => (
                            <li key={index} className="flex items-start">
                              <TrendingUp className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-purple-600" />
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                  {/* AI 이미지 섹션 추가 */}
                  {project.ai.images && project.ai.images.length > 0 && (
                      <div className="pt-2">
                        <h3 className="mb-4 text-xl font-medium">AI/ML 구현 이미지</h3>
                        <div className="space-y-6">
                          {project.ai.images.map((img, index) => (
                            <div key={index} className="relative w-full max-w-[900px] h-[400px] mx-auto rounded-lg overflow-hidden shadow-md border">
                              <Image
                                src={img || "/placeholder.svg?height=400&width=900"}
                                alt={`AI/ML 이미지 ${index + 1}`}
                                fill
                                className="object-contain"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                </div>
              )}


              {activeTab === "frontend" && project.frontend && (
                <div className="space-y-8">
                  {/* 주요 내용 */}
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
                    {project.frontend.features && project.frontend.features.length > 0 && (
                      <div>
                        <h3 className="mb-2 text-xl font-medium">주요 기능</h3>
                        <ul className="list-inside list-disc space-y-1 text-gray-600">
                          {project.frontend.features.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}
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
                  </div>
                  {/* 트러블 슈팅 */}
                  {project.frontend.troubleshooting && project.frontend.troubleshooting.length > 0 && (
                    <div className="border-t border-gray-200 pt-8">
                      <div className="flex items-center">
                        <Wrench className="mr-2 h-5 w-5 text-blue-500" />
                        <h3 className="text-xl font-medium">트러블 슈팅</h3>
                      </div>
                      <div className="mt-4 space-y-6">
                        {project.frontend.troubleshooting.map((item, index) => (
                          <div key={index} className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                            <h4 className="mb-2 font-medium text-red-600">문제점</h4>
                            <p className="mb-4 text-gray-700">{item.problem}</p>

                            <h4 className="mb-2 font-medium text-blue-600">해결 방법</h4>
                            <p className="mb-4 text-gray-700">{item.solution}</p>

                            {/* 결과가 있을 때만 렌더링 */}
                            {item.result && (
                              <>
                                <h4 className="mb-2 font-medium text-green-600">결과</h4>
                                <p className="text-gray-700">{item.result}</p>
                              </>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* 기술적 성장 */}
                  {project.frontend.growth && project.frontend.growth.length > 0 && (
                    <div className="border-t border-gray-200 pt-8">
                      <div className="flex items-center">
                        <TrendingUp className="mr-2 h-5 w-5 text-blue-500" />
                        <h3 className="text-xl font-medium">기술적 성장</h3>
                      </div>
                      <div className="mt-4 rounded-lg border border-gray-200 bg-blue-50 p-4">
                        <ul className="space-y-3">
                          {project.frontend.growth.map((item, index) => (
                            <li key={index} className="flex items-start">
                              <TrendingUp className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-blue-600" />
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* 프론트엔드 이미지 섹션 추가 */}
                  {project.frontend.images && project.frontend.images.length > 0 && (
                      <div className="pt-2">
                        <h3 className="mb-4 text-xl font-medium">프론트엔드 구현 이미지</h3>
                        <div className="space-y-6">
                          {project.frontend.images.map((img, index) => (
                            <div key={index} className="relative w-full max-w-[900px] h-[400px] mx-auto rounded-lg overflow-hidden shadow-md border">
                              <Image
                                src={img || "/placeholder.svg?height=400&width=900"}
                                alt={`프론트엔드 이미지 ${index + 1}`}
                                fill
                                className="object-contain"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                  {/* 화면 설계
                  {project.frontend.wireframes && project.frontend.wireframes.length > 0 && (
                    <div className="border-t border-gray-200 pt-8">
                      <h3 className="mb-4 text-xl font-medium">작업 화면</h3>
                      <div className="grid grid-cols-1 gap-6">
                        {project.frontend.wireframes.map((img, index) => (
                          <div key={index} className="space-y-2">
                            <div className="relative h-[400px] overflow-hidden rounded-lg border border-gray-200">
                              <Image
                                src={img || "/placeholder.svg"}
                                alt={`와이어프레임 ${index + 1}`}
                                fill
                                className="object-contain"
                              />
                            </div>
                            <p className="text-center text-sm text-gray-500">화면 설계 {index + 1}</p>
                          </div>
                        ))}
                      </div>
                      <p className="mt-4 text-sm text-gray-600">
                        위 와이어프레임은 사용자 경험을 최적화하기 위해 설계된 화면 구성입니다. 사용자 테스트와 피드백을
                        통해 지속적으로 개선되었습니다.
                      </p>
                    </div>
                  )} */}
                </div>
              )}

              {activeTab === "backend" && project.backend && (
                <div className="space-y-8">
                  {/* 주요 내용 */}
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
                    {project.backend.features && project.backend.features.length > 0 && (
                      <div>
                        <h3 className="mb-2 text-xl font-medium">주요 기능</h3>
                        <ul className="list-inside list-disc space-y-1 text-gray-600">
                          {project.backend.features.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {project.backend.architecture && (
                      <div>
                        <h3 className="mb-2 text-xl font-medium">시스템 아키텍처</h3>
                        <p className="text-gray-600">{project.backend.architecture}</p>
                      </div>
                    )}

                    {/* 아키텍처 이미지 추가 */}
                    {project.backend.architectureImage && (
                      <div className="pt-2">
                        <div className="relative w-full max-w-[900px] h-[400px] mx-auto rounded-lg overflow-hidden shadow-md border">
                          <Image
                            src={project.backend.architectureImage || "/placeholder.svg?height=400&width=900"}
                            alt="시스템 아키텍처 다이어그램"
                            fill
                            className="object-contain"
                          />
                        </div>
                        {project.backend.architectureImageCaption && (
                          <p className="mt-2 text-center text-sm text-gray-500">
                            {project.backend.architectureImageCaption}
                          </p>
                        )}
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

                  {/* 트러블 슈팅 */}
                  {project.backend.troubleshooting && project.backend.troubleshooting.length > 0 && (
                    <div className="border-t border-gray-200 pt-8">
                      <div className="flex items-center">
                        <Wrench className="mr-2 h-5 w-5 text-green-500" />
                        <h3 className="text-xl font-medium">트러블 슈팅</h3>
                      </div>
                      <div className="mt-4 space-y-6">
                        {project.backend.troubleshooting.map((item, index) => (
                          <div key={index} className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                            <h4 className="mb-2 font-medium text-red-600">문제점</h4>
                            <p className="mb-4 text-gray-700">{item.problem}</p>

                            <h4 className="mb-2 font-medium text-blue-600">해결 방법</h4>
                            <p className="mb-4 text-gray-700">{item.solution}</p>

                            {/* 결과가 있을 때만 렌더링 */}
                            {item.result && (
                              <>
                                <h4 className="mb-2 font-medium text-green-600">결과</h4>
                                <p className="text-gray-700">{item.result}</p>
                              </>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* 기술적 성장 */}
                  {project.backend.growth && project.backend.growth.length > 0 && (
                    <div className="border-t border-gray-200 pt-8">
                      <div className="flex items-center">
                        <TrendingUp className="mr-2 h-5 w-5 text-green-500" />
                        <h3 className="text-xl font-medium">기술적 성장</h3>
                      </div>
                      <div className="mt-4 rounded-lg border border-gray-200 bg-green-50 p-4">
                        <ul className="space-y-3">
                          {project.backend.growth.map((item, index) => (
                            <li key={index} className="flex items-start">
                              <TrendingUp className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-green-600" />
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                  {/* 백엔드 이미지 섹션 추가 */}
                  {project.backend.images && project.backend.images.length > 0 && (
                      <div className="pt-2">
                        <h3 className="mb-4 text-xl font-medium">백엔드 구현 이미지</h3>
                        <div className="space-y-6">
                          {project.backend.images.map((img, index) => (
                            <div key={index} className="relative w-full max-w-[900px] h-[400px] mx-auto rounded-lg overflow-hidden shadow-md border">
                              <Image
                                src={img || "/placeholder.svg?height=400&width=900"}
                                alt={`백엔드 이미지 ${index + 1}`}
                                fill
                                className="object-contain"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
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