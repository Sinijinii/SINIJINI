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
    company: "기웃기옷, 손누리",
    quote:
      "항상 밝고 긍정적인 에너지로 팀 분위기를 좋게 만들어주는 존재였습니다. 창의적인 아이디어로 프로젝트의 기획을 주도 했고, 본인의 맡은 역할을 항상 성실하게 수행하였습니다. 또한 뒤쳐지는 팀원들도 잘 챙겨주고, 배려주해주는 최고의 다정한 팀원 !!!!",
  },
  {
    id: 2,
    name: "정진영",
    role: "프론트엔드 개발자",
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
    name: "조창훈",
    role: "백엔드 개발자",
    company: "손누리",
    quote:
      "'문제를 포기하지않는 끈기있는 팀원' 같이 프로젝트를 진행하면서 어려운 주제인데도 불구하고, 끝까지 원인을 분석하고 해결하려는 팀원입니다. 개발 중, 영상 프레임 생성과 같은 ai기술을 새로 도입해야할 때가 있었는데, 기술의 완성도를 위해서 깃허브와 관련 논문 수십개를 찾아보면서 해결책을 찾아내는 모습이 인상적이었습니다. 또한, 새롭게 기술 스택을 배우는데도 빠르게 적응하여 프로젝트에 크게 도움이 되었습니다.",
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
      }, 2000) // 5초마다 슬라이드 변경
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
