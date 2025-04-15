"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Quote } from "lucide-react"

// 팀원 리뷰 데이터 타입
interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  quote: string
}

// 샘플 리뷰 데이터
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "김규림",
    role: "프론트엔드 개발자",
    company: "SSAFY",
    quote:
      "함께 일하면서 항상 놀라웠던 점은 프론트엔드, 백엔드, AI 영역을 모두 아우르는 폭넓은 지식이었습니다. 특히 복잡한 문제를 해결할 때 다양한 관점에서 접근하는 능력이 프로젝트 성공에 큰 도움이 되었습니다.",
  },
  {
    id: 2,
    name: "정진영",
    role: "UX 디자이너",
    company: "SSAFY",
    quote:
      "개발자와 협업할 때 가장 중요한 것은 소통인데, 항상 사용자 경험을 최우선으로 생각하며 디자인 의도를 정확히 구현해주었습니다. 기술적 제약을 창의적으로 극복하는 문제 해결 능력이 인상적이었습니다.",
  },
  {
    id: 3,
    name: "류인환",
    role: "백엔드 개발자",
    company: "SSAFY",
    quote:
      ".",
  },
  {
    id: 4,
    name: "김하연",
    role: "프론트엔드 개발자",
    company: "SSAFY",
    quote:
      "프로젝트 일정과 품질을 모두 만족시키는 개발자를 만나기 어렵지만, 항상 책임감 있게 업무를 수행했습니다. 기술적 역량뿐만 아니라 팀원들과의 협업 능력도 뛰어나 프로젝트 분위기를 긍정적으로 이끌었습니다.",
  },
  {
    id: 5,
    name: "",
    role: "백엔드 개발자",
    company: "",
    quote:
      "",
  },
]

export default function AboutTestimonials() {
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
    <div className="mt-8" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <h3 className="mb-4 text-xl font-medium">팀원 리뷰</h3>
      <div className="relative h-[160px] overflow-hidden rounded-xl bg-white shadow-sm border border-gray-100">
        {/* 슬라이드 */}
        <div
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="min-w-full h-full flex p-4">
              <div className="flex items-center">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <div>
                      <h4 className="text-base font-medium">{testimonial.name}</h4>
                      <p className="text-xs text-gray-600">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <br />
                  <p className="text-gray-700 text-sm leading-tight line-clamp-3">{testimonial.quote}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 인디케이터 */}
        <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-1.5 rounded-full transition-all ${
                activeIndex === index ? "w-4 bg-gray-800" : "w-1.5 bg-gray-300"
              }`}
              aria-label={`슬라이드 ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
