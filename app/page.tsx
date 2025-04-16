"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Mail, MessageSquare, ArrowUp, Code, Database, Brain } from "lucide-react"
import Image from "next/image"
import ProjectFilter from "@/components/projectfilter"

// 기존 import 구문 아래에 추가
import IntegratedProjectCard from "@/components/integrated-project-card"
// 새로운 About 섹션용 팀원 리뷰 컴포넌트 import
import AboutTestimonials from "@/components/about-testimonials"
import NavigationMenu from "@/components/navigation-menu"

import { projects } from "@/data/projects"


export default function Home() {
  const [activeSection, setActiveSection] = useState("intro")
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [activeProjectFilter, setActiveProjectFilter] = useState("all")
  const containerRef = useRef(null)

  // 스크롤 위치에 따라 활성 섹션 업데이트
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight

      // 스크롤 위로 버튼 표시 여부
      setShowScrollTop(scrollPosition > windowHeight / 2)

      // 각 섹션의 위치를 확인하여 활성 섹션 설정
      const sections = document.querySelectorAll("section[id]")
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop - 100
        const sectionHeight = (section as HTMLElement).offsetHeight
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // 각 직무 타이틀
  const roles = ["AI", "Front-End", "Backend"]
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)

  // 타이틀 자동 변경
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [roles.length])


  // 필터링된 프로젝트
  const filteredProjects =
  activeProjectFilter === "all"
    ? projects
    : projects.filter((project) => project.categories.includes(activeProjectFilter))


  return (
    <div className="relative bg-white text-gray-800">
      <NavigationMenu activeSection={activeSection} />
      {/* 인트로 섹션 */}
      <section id="intro" className="relative flex h-screen items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-blue-100 opacity-30 blur-[100px]"></div>
          <div className="absolute right-1/4 top-1/2 h-64 w-64 rounded-full bg-purple-100 opacity-30 blur-[100px]"></div>
        </div>

        <div className="z-10 text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentRoleIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="mb-4 text-8xl font-bold text-gray-100 md:text-9xl"
            >
              {roles[currentRoleIndex]}
            </motion.div>
          </AnimatePresence>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-2xl font-light md:text-3xl"
          >
            신희진의 <span className="font-medium">포트폴리오</span>입니다.
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 transform text-sm text-gray-500"
        >
          스크롤을 내려주세요
          <div className="mt-2 flex justify-center">
            <div className="animate-bounce">↓</div>
          </div>
        </motion.div>
      </section>

      {/* About 섹션 (Interview 섹션과 통합) - 사진 추가 */}
      <section id="about" className="min-h-screen py-20 section-bg-alt">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="mb-16 text-4xl font-light md:text-5xl"
          >
            {/* About me */}
          </motion.h2>

          <div className="mx-auto max-w-6xl">
            {/* About 내용 - 사진과 텍스트 나란히 배치 */}
            <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2">
              {/* 왼쪽: 프로필 사진 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="flex flex-col items-center justify-center"
              >
                <div className="relative h-80 w-80 overflow-hidden rounded-full border-4 border-white shadow-lg">
                  <Image src="/profile.jpg" alt="신희진" fill className="w-full h-full object-cover object-top" />
                </div>
                <div className="mt-6 flex justify-center gap-4">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md bg-gray-800 px-4 py-2 text-sm text-white transition-colors hover:bg-gray-700"
                  >
                    GitHub
                  </a>
                  {/* <a
                    href="https://velog.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md bg-gray-800 px-4 py-2 text-sm text-white transition-colors hover:bg-gray-700"
                  >
                    Velog
                  </a> */}
                </div>
              </motion.div>

              {/* 오른쪽: 텍스트 내용 */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="space-y-6 text-gray-600"
              >
                <p className="text-lg">
                  안녕하세요, <span className="gradient-text font-medium"> AI 개발, 프론트엔드, 백엔드</span> 경험을 두루
                  갖춘 풀스택 개발자입니다. 다양한 영역에서의 개발 경험을 통해 종합적인 시각으로 문제를 해결합니다.
                </p>
                <p className="text-lg">
                  <strong>사용자 중심의 서비스</strong>를 개발하는 것을 목표로, 최신 기술 트렌드를 학습하고 적용하여
                  효율적이고 직관적인 서비스를 구현합니다. 특히 프론트엔드와 AI를 결합한 지능형 사용자 인터페이스에
                  관심이 많습니다.
                </p>
                <p className="text-lg">
                  <strong>기술 통합의 중요성</strong>을 이해하고, 프론트엔드, 백엔드, AI 기술을 유기적으로 연결하여
                  사용자에게 더 나은 경험을 제공하는 서비스를 만들고자 합니다.
                </p>
                <div className="flex flex-wrap gap-2 pt-4">
                  <span className="rounded-full bg-gray-200 px-3 py-1 text-sm text-gray-700">#열정적인</span>
                  <span className="rounded-full bg-gray-200 px-3 py-1 text-sm text-gray-700">#긍정적인</span>
                  <span className="rounded-full bg-gray-200 px-3 py-1 text-sm text-gray-700">#빅데이터분석기사</span>
                  <span className="rounded-full bg-gray-200 px-3 py-1 text-sm text-gray-700">#정보처리기사</span>
                </div>
              </motion.div>
            </div>

            {/* 팀원 리뷰 컴포넌트 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mb-16"
            >
              <AboutTestimonials />
            </motion.div>

            {/* Interview 섹션 내용 - 가로 배치로 변경 */}
            <div className="mb-12">
              <motion.h3
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className="mb-8 text-2xl font-medium"
              >
                Interview
              </motion.h3>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="rounded-xl bg-white p-6 shadow-sm border border-gray-100 h-full"
                >
                  <h4 className="mb-3 text-lg font-medium">Q. 다양한 개발 영역에 관심을 갖게 된 계기는?</h4>
                  <p className="text-gray-600">
                    처음에는 AI 모델 개발부터 시작해 정확도를 높이는 데 집중했습니다.<br/>
                    그 과정에서, 결과물을 실제 사용자에게 제공해보고 싶다는 생각이 들었습니다.
                  </p>
                  <p className="mt-2 text-gray-600">
                  단순히 모델의 성능을 높이는 것을 넘어,  
                  <strong className="text-gray-800"> 사용자가 실제로 사용할 수 있는 서비스로 구현하기 위해</strong> 개발 역량의 필요성을 느꼈습니다.  
                  이후 프론트엔드와 백엔드 기술을 공부하며, 세 영역을 모두 학습하게 되었습니다.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="rounded-xl bg-white p-6 shadow-sm border border-gray-100 h-full"
                >
                  <h4 className="mb-3 text-lg font-medium">Q. 세 가지 영역을 어떻게 통합하여 개발하나요?</h4>
                  <p className="text-gray-600">
                    세 가지 영역은 <strong className="text-gray-800">사용자 관점에서 하나의 흐름으로 이어지도록 통합</strong>합니다.<br/>
                    프론트엔드에서는 사용자가 쉽게 이해하고 조작할 수 있는 UI를 구성하고,  <br/>
                    백엔드에서는 AI 모델과 데이터를 연결하는 API를 설계해 기능이 원활하게 동작하도록 만듭니다.  <br/>
                    여기에 AI 기술을 접목하여 사용자 데이터를 분석하고 개인화된 경험을 제공합니다.
                  </p>

                  <p className="mt-2 text-gray-600">
                    <strong className="text-gray-800">사용자 중심의 설계</strong>를 기반으로,  
                    각 영역이 끊김 없이 연결되어 하나의 완성된 서비스로 작동하도록 개발합니다.
                  </p>
                </motion.div>

                {/* <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  className="rounded-xl bg-white p-6 shadow-sm border border-gray-100 h-full md:col-span-2"
                >
                  <h4 className="mb-3 text-lg font-medium">Q. 개발자로서 가장 중요하게 생각하는 가치는?</h4>
                  <p className="text-gray-600">
                    <strong className="text-gray-800">기술의 경계를 넘어선 통합적 사고</strong>가 가장 중요하다고
                    생각합니다. 단일 기술에 국한되지 않고 다양한 기술을 연결하여 문제를 해결하는 능력이 현대 개발자에게
                    필수적입니다.
                  </p>
                  <p className="mt-2 text-gray-600">
                    또한, <strong className="text-gray-800">사용자 공감 능력</strong>을 바탕으로 기술이 실제 사람들의
                    삶에 어떤 가치를 제공할 수 있는지 항상 고민합니다. 기술은 결국 사람을 위한 것이라는 철학을 바탕으로
                    개발에 임하고 있습니다.
                  </p>
                </motion.div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career 섹션 */}
      
      <section id="career" className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="mb-16 text-4xl font-light md:text-5xl"
          >
            {/* Education & Experience */}
          </motion.h2>

          {/* ✨ 2단 그리드로 변경 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* 왼쪽: 커리어 타임라인 */}
            <div className="relative space-y-12 pl-8 before:absolute before:left-0 before:top-2 before:h-full before:w-0.5 before:bg-gray-300">
            <h3 className="mb-6 text-2xl font-medium">Education & Experience</h3>
              <EducationItem
                period="2024.01 ~ 2024.12"
                institution="삼성 청년 SW 아카데미 11기"
                description="프로젝트 기반 학습을 통해 실무 역량을 키우고, 다양한 기술 스택을 활용한 웹/앱 서비스 개발 경험을 쌓았습니다."
              />
              <CareerItem
                period="2022.08 ~ 2023.11"
                company="차세대융합기술연구원"
                position="산업지능연구실"
                description={[
                  "관성 센서-카메라 융합 작업자 동작 인식 모델 개발",
                  "작업 패턴 모델 기반 실시간 작업 이상 탐지 알고리즘 개발",
                  "작업자의 위험을 감지하기 위한 멀티모달 딥러닝 기반 작업자 자세 인식 모델 개발",
                  "RabbitMQ 기반 실시간 데이터 처리 및 전송 시스템 구축",
                ]}
              />
              <CareerItem
                period="2021.10 ~ 2022.06"
                company="차세대융합기술연구원"
                position="기술기획팀"
                description={[
                  "인공지능 기반 영유아 안전보육 시스템 개발",
                  "영유아 센서 데이터 실시간 수집 및 전처리",
                  "영유아 이상 탐지 알고리즘 개발",
                  "학부모, 교사용 웹 보고서 개발"
                ]}
              />
              <EducationItem
                period="2017.03 ~ 2021.08"
                institution="산업데이터사이언스전공"
                description=""
              />
            </div>

            {/* 오른쪽: 수상 + 논문 */}
            <div className="space-y-12">
              <div>
                <h3 className="mb-6 text-2xl font-medium">수상</h3>
                <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-100">
                  <ul className="space-y-4">
                    <AwardItem date="2024.11" title="공모전 장려상 (한국관광공사)" />
                    <AwardItem date="2024.11" title="자율 프로젝트 우수상 (SSAFY)" />
                    <AwardItem date="2024.10" title="특화 프로젝트 우수상 (SSAFY)" />
                    <AwardItem date="2024.05" title="관통 프로젝트 우수상 (SSAFY)" />
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="mb-6 text-2xl font-medium">논문</h3>
                <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-100">
                  <ul className="space-y-4">
                    <li>
                      <div className="text-sm font-medium text-gray-500">2023.05</div>
                      <div className="text-gray-800">
                        카메라 및 관성 측정 장치 융합을 활용한 딥러닝 기반 수작업 조립 공정 작업자 동작 인식 방법론 개발
                      </div>
                      <a
                        href="/paper.pdf"
                        target="_blank"
                        className="mt-2 inline-flex items-center text-sm text-blue-600 hover:text-blue-800"
                        rel="noreferrer"
                      >
                        논문 보기
                        <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 기술 통합 섹션 */}
      <section id="tech-integration" className="min-h-screen py-20 section-bg-alt">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="mb-16 text-4xl font-light md:text-5xl"
          >
            {/* 기술 통합 접근법 */}
          </motion.h2>

          <div className="mx-auto max-w-5xl">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <TechIntegrationCard
                icon={<Brain className="h-12 w-12 text-purple-500" />}
                title="AI / ML"
                description="데이터 기반 의사결정과 지능형 기능을 구현합니다. 사용자 행동 분석, 추천 시스템, 자연어 처리 등을 통해 서비스를 고도화합니다."
                skills={["TensorFlow", "PyTorch", "NLP", "데이터 분석"]}
              />
              <TechIntegrationCard
                icon={<Code className="h-12 w-12 text-blue-500" />}
                title="Front-End"
                description="사용자와 직접 상호작용하는 인터페이스를 구현합니다. React, Vue, TypeScript를 활용하여 반응형 UI와 최적화된 사용자 경험을 제공합니다."
                skills={["React", "TypeScript", "Next.js", "Tailwind CSS"]}
              />

              <TechIntegrationCard
                icon={<Database className="h-12 w-12 text-green-500" />}
                title="Back-End"
                description="안정적이고 확장 가능한 서버 시스템을 구축합니다. RESTful API 설계, 데이터베이스 최적화, 보안 강화에 중점을 둡니다."
                skills={["Node.js", "Django", "MySQL", "MongoDB"]}
              />

            </div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mt-16 rounded-xl bg-white p-8 shadow-sm border border-gray-100"
            >
              <h3 className="mb-6 text-2xl font-medium text-center">통합 개발 프로세스</h3>
              <div className="relative">
                <div className="space-y-12">
                  <ProcessStep
                    number="01"
                    title="사용자 중심 설계"
                    description="프론트엔드, 백엔드, AI 관점에서 사용자 요구사항을 종합적으로 분석하고, 전반적인 서비스 구조를 설계합니다."
                  />

                  <ProcessStep
                    number="02"
                    title="개발 구조 구축"
                    description="프론트엔드 UI와 백엔드 API를 동시에 개발하며, AI 모델이 통합될 수 있는 구조적 기반을 마련합니다."
                  />

                  <ProcessStep
                    number="03"
                    title="AI 모델 통합"
                    description="사용자 데이터를 바탕으로 AI 모델을 개발하고, 전체 서비스 흐름에 맞춰 기능을 유기적으로 연결합니다."
                  />

                  <ProcessStep
                    number="04"
                    title="최적화 및 개선"
                    description="사용자 피드백과 실제 사용 데이터를 바탕으로 전체 시스템을 지속적으로 개선하고 고도화합니다."
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="skills" className="min-h-screen py-20">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-semibold text-center mb-16"
          >

          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-10">
            {/* AI / ML */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="rounded-xl p-6 shadow-md border border-gray-200 bg-purple-50"
            >
              <h3 className="text-xl font-semibold mb-6 text-center text-purple-500">AI / ML</h3>
              <div className="grid grid-cols-3 gap-6">
                <SkillIcon name="TensorFlow" icon="/Skills/Tensor.png" />
                <SkillIcon name="PyTorch" icon="/Skills/Pytorch.png" />
                <SkillIcon name="Scikit-learn" icon="/Skills/Scikit.png" />
                <SkillIcon name="HuggingFace" icon="/Skills/hugging.png" />
                <SkillIcon name="LangChain" icon="/Skills/langchain.jpeg" />
              </div>
            </motion.div>

            {/* Front-End */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-xl p-6 shadow-md border border-gray-200 bg-blue-50"
            >
              <h3 className="text-xl font-semibold mb-6 text-center text-blue-500">Front-End</h3>
              <div className="grid grid-cols-3 gap-6">
                <SkillIcon name="HTML" icon="/Skills/HTML.png" />
                <SkillIcon name="CSS" icon="/Skills/CSS.png" />
                <SkillIcon name="JavaScript" icon="/Skills/JavaScript.png" />
                <SkillIcon name="TypeScript" icon="/Skills/TypeScript.png" />
                <SkillIcon name="React" icon="/Skills/React.png" />
                <SkillIcon name="Vue" icon="/Skills/Vue.png" />
              </div>
            </motion.div>

            {/* Back-End */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-xl p-6 shadow-md border border-gray-200 bg-green-50"
            >
              <h3 className="text-xl font-semibold mb-6 text-center text-green-500">Back-End</h3>
              <div className="grid grid-cols-3 gap-6">
                <SkillIcon name="Python" icon="/Skills/Python.jpeg" />
                <SkillIcon name="Django" icon="/Skills/Django.png" />
                <SkillIcon name="FastAPI" icon="/Skills/Fastapi.png" />
                <SkillIcon name="Flask" icon="/Skills/Flask.png" />
                <SkillIcon name="Spring" icon="/Skills/spring.png" />
              </div>
            </motion.div>

            {/* Tools */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="rounded-xl p-6 shadow-md border border-gray-200 bg-yellow-50"
            >
              <h3 className="text-xl font-semibold mb-6 text-center text-yellow-600">Tools</h3>
              <div className="grid grid-cols-3 gap-6">
                <SkillIcon name="Git" icon="/Skills/Git.png" />
                <SkillIcon name="GitHub" icon="/Skills/Github.jpeg" />
                <SkillIcon name="JIRA" icon="/Skills/Jira.jpeg" />
                <SkillIcon name="Figma" icon="/Skills/Figma.jpeg" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Projects 섹션 */}
      <section id="projects" className="min-h-screen py-20 section-bg-alt">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mx-auto max-w-3xl text-center text-gray-600 mb-12"
            >
            </motion.p>

            {/* 프로젝트 필터 추가 */}
            <ProjectFilter activeFilter={activeProjectFilter} setActiveFilter={setActiveProjectFilter} />
          </div>

          {/* 그리드 변경: 여유있게 나열, 모바일에서 1열, md에서 2열, xl에서 3열로 변경하고 간격 늘림 */}
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
            {filteredProjects.map((project) => (
              <IntegratedProjectCard
                key={project.id}
                projectId={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                frontendTech={project.frontendTech}
                backendTech={project.backendTech}
                aiTech={project.aiTech}
              />
            ))}

            {filteredProjects.length === 0 && (
              <div className="col-span-full py-16 text-center text-gray-500">
                <p className="text-xl">해당 카테고리의 프로젝트가 없습니다.</p>
              </div>
            )}
          </div>
        </div>
      </section>



      {/* 고정 네비게이션 */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-4">
        <a
          href="gmlwls2407@gmail.com"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md transition-all hover:bg-gray-100"
          aria-label="이메일 보내기"
        >
          <Mail className="h-5 w-5 text-gray-600" />
        </a>
        <a
          href="#"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md transition-all hover:bg-gray-100"
          aria-label="메시지 보내기"
        >
          <MessageSquare className="h-5 w-5 text-gray-600" />
        </a>
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={scrollToTop}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md transition-all hover:bg-gray-100"
              aria-label="맨 위로 스크롤"
            >
              <ArrowUp className="h-5 w-5 text-gray-600" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

function SkillIcon({ name, icon }: { name: string; icon: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center"
    >
      <div className="flex h-20 w-20 items-center justify-center rounded-xl bg-white p-2 shadow-sm border border-gray-100">
        <Image src={icon || "/placeholder.svg"} alt={name} width={60} height={60} />
      </div>
      <span className="mt-2 text-sm text-gray-600">{name}</span>
    </motion.div>
  )
}

function CareerItem({
  period,
  company,
  position,
  description,
}: {
  period: string
  company: string
  position: string
  description: string[]
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      className="relative"
    >
      <div className="absolute -left-10 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-gray-300"></div>
      <div>
        <div className="text-sm text-gray-500">{period}</div>
        <h3 className="mt-1 text-xl font-medium">{company}</h3>
        <div className="mt-1 text-gray-600">{position}</div>
        <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-gray-500">
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

function TechIntegrationCard({
  icon,
  title,
  description,
  skills,
}: {
  icon: React.ReactNode
  title: string
  description: string
  skills: string[]
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      className="rounded-xl bg-white p-6 shadow-sm border border-gray-100 flex flex-col h-full"
    >
      <div className="mb-4 flex justify-center">{icon}</div>
      <h3 className="mb-3 text-center text-xl font-medium">{title}</h3>
      <p className="mb-4 text-center text-gray-600 flex-grow">{description}</p>
      <div className="flex flex-wrap justify-center gap-2">
        {skills.map((skill, index) => (
          <span key={index} className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700">
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

function ProcessStep({
  number,
  title,
  description,
}: {
  number: string
  title: string
  description: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      className="relative pl-16"
    >
      <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-gray-800 text-white">
        {number}
      </div>
      <h4 className="mb-2 text-lg font-medium">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  )
}

function EducationItem({
  period,
  institution,
  major,
  description,
  details,
}: {
  period: string
  institution: string
  major?: string
  description: string
  details?: string[]
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      className="relative"
    >
      <div className="absolute -left-10 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-gray-300"></div>
      <div>
        <div className="text-sm text-gray-500">{period}</div>
        <h3 className="mt-1 text-xl font-medium">{institution}</h3>
        {major && <div className="mt-1 text-gray-600">{major}</div>}
        {description && <p className="mt-3 text-sm text-gray-500">{description}</p>}
        {details && details.length > 0 && (
          <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-gray-500">
            {details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  )
}

function AwardItem({ date, title }: { date: string; title: string }) {
  return (
    <li>
      <div className="text-sm font-medium text-gray-500">{date}</div>
      <div className="text-gray-800">{title}</div>
    </li>
  )
}
