"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Quote } from "lucide-react"

// 팀원 리뷰 데이터 타입
interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  image: string
  quote: string
}

// 샘플 리뷰 데이터
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "김지훈",
    role: "프론트엔드 개발자",
    company: "SSAFY",
    image: "/images/testimonials/person1.jpg",
    quote:
      "함께 일하면서 항상 놀라웠던 점은 프론트엔드, 백엔드, AI 영역을 모두 아우르는 폭넓은 지식이었습니다. 특히 복잡한 문제를 해결할 때 다양한 관점에서 접근하는 능력이 프로젝트 성공에 큰 도움이 되었습니다.",
  },
  {
    id: 2,
    name: "이서연",
    role: "UX 디자이너",
    company: "차세대융합기술연구원",
    image: "/images/testimonials/person2.jpg",
    quote:
      "디자이너로서 개발자와 협업할 때 가장 중요한 것은 소통인데, 항상 사용자 경험을 최우선으로 생각하며 디자인 의도를 정확히 구현해주었습니다. 기술적 제약을 창의적으로 극복하는 문제 해결 능력이 인상적이었습니다.",
  },
  {
    id: 3,
    name: "박민준",
    role: "AI 연구원",
    company: "SSAFY",
    image: "/images/testimonials/person3.jpg",
    quote:
      "AI 모델을 실제 서비스에 적용하는 과정에서 발생하는 다양한 문제들을 효과적으로 해결했습니다. 특히 프론트엔드와 AI를 연결하는 부분에서 뛰어난 통합 능력을 보여주었고, 항상 새로운 기술을 배우려는 열정이 인상적이었습니다.",
  },
  {
    id: 4,
    name: "최예은",
    role: "프로젝트 매니저",
    company: "SSAFY",
    image: "/images/testimonials/person4.jpg",
    quote:
      "프로젝트 일정과 품질을 모두 만족시키는 개발자를 만나기 어렵지만, 항상 책임감 있게 업무를 수행했습니다. 기술적 역량뿐만 아니라 팀원들과의 협업 능력도 뛰어나 프로젝트 분위기를 긍정적으로 이끌었습니다.",
  },
  {
    id: 5,
    name: "정현우",
    role: "백엔드 개발자",
    company: "차세대융합기술연구원",
    image: "/images/testimonials/person5.jpg",
    quote:
      "백엔드와 프론트엔드 사이의 간극을 효과적으로 메워주는 개발자입니다. API 설계부터 데이터 처리까지 전체적인 흐름을 이해하고 최적화하는 능력이 뛰어났으며, 항상 더 나은 방법을 고민하는 자세가 인상적이었습니다.",
  },
]

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // 자동 슬라이드 기능
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length)
      }, 5000) // 5초마다 슬라이드 변경
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isPaused])

  // 마우스 호버 시 슬라이드 일시 정지
  const handleMouseEnter = () => setIsPaused(true)
  const handleMouseLeave = () => setIsPaused(false)

  // 특정 슬라이드로 이동
  const goToSlide = (index: number) => {
    setActiveIndex(index)
    // 수동으로 슬라이드 변경 시 타이머 재설정
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    setIsPaused(false)
  }

  return (
    <section id="testimonials" className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-4xl font-light md:text-5xl text-center"
        >
          팀원 리뷰
        </motion.h2>

        <div className="mx-auto max-w-4xl" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div className="relative h-[400px] overflow-hidden rounded-xl bg-white shadow-sm border border-gray-100">
            {/* 슬라이드 */}
            <div
              className="flex h-full transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="min-w-full h-full flex flex-col p-8">
                  <div className="flex items-center mb-6">
                    <div className="relative h-16 w-16 overflow-hidden rounded-full mr-4">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium">{testimonial.name}</h3>
                      <p className="text-gray-600">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <div className="flex-grow flex items-center">
                    <div className="relative">
                      <Quote className="absolute -left-8 -top-6 h-6 w-6 text-gray-300 rotate-180" />
                      <p className="text-gray-700 text-lg italic leading-relaxed">{testimonial.quote}</p>
                      <Quote className="absolute -bottom-6 -right-8 h-6 w-6 text-gray-300" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* 인디케이터 */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    activeIndex === index ? "w-8 bg-gray-800" : "w-2 bg-gray-300"
                  }`}
                  aria-label={`슬라이드 ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
