"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

// 팀원 리뷰 데이터 타입
interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  quote: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "김규림",
    role: "프론트엔드 개발자",
    company: "기웃기옷, 손누리",
    quote:
      "항상 밝고 긍정적인 에너지로 팀 분위기를 좋게 만들어주는 존재였습니다. 창의적인 아이디어로 프로젝트의 기획을 주도 했고, 본인의 맡은 역할을 항상 성실하게 수행하였습니다.\n또한 뒤쳐지는 팀원들도 잘 챙겨주고, 배려주해주는 최고의 다정한 팀원 !!!!",
  },
  {
    id: 2,
    name: "정진영",
    role: "프론트엔드 개발자",
    company: "SSAFY",
    quote:
      "개발자와 협업할 때 가장 중요한 것은 소통인데, 항상 사용자 경험을 최우선으로 생각하며 디자인 의도를 정확히 구현해주었습니다.\n기술적 제약을 창의적으로 극복하는 문제 해결 능력이 인상적이었습니다.",
  },
  {
    id: 3,
    name: "박주연",
    role: "풀스택 개발자",
    company: "주주핀, 마음끗",
    quote: "개발자로서 가장 중요한 역량은 새로운 기술을 습득하고자 하는 열망이라고 생각합니다. 신희진 개발자는 2번의 프로젝트를 함께 하면서 기존 기술을 답습하는 것이 아닌, 프로젝트의 고객층에 맞추어 타당한 기술 스택을 선정하고 전개해왔습니다.\n이러한 열정을 기반으로 2번의 프로젝트 모두 수상하는 우수한 성과를 거둘 수 있었습니다. 저 또한 개발자로서 역량 이상의 목표를 세우고, 열정은 기반으로 목표를 성취하고야 마는 발전하는 팀원을 꿈꾸어왔습니다.\n이러한 바람에 맞추어 신희진 개발자는 늘 기대치를 충족시키는 팀원이었습니다. 다시 함께 개발하는 기회가 있기를 희망합니다."
  },
  {
    id: 4,
    name: "신승호",
    role: "백엔드 개발자",
    company: "손누리",
    quote:
      "회의 시간마다 밝은 에너지로 분위기를 주도하며 팀원들의 사기를 높여주는 긍정적인 에너지를 가진 팀원입니다.\n 개발 측면에서는 AI 파트를 맡아 큰 역할을 했습니다. 특히 모두가 어렵다고 느껴 포기하려 했던 영상 합성 부분에서도 끝까지 해결 방안을 모색했고, 다양한 기법을 조합해 최종적으로 작동 가능한 솔루션을 구현해냈습니다."
  },
  {
    id: 5,
    name: "조창훈",
    role: "백엔드 개발자",
    company: "손누리",
    quote:
      "'문제를 포기하지않는 끈기있는 팀원'\n 같이 프로젝트를 진행하면서 어려운 주제인데도 불구하고, 끝까지 원인을 분석하고 해결하려는 팀원입니다.\n개발 중, 영상 프레임 생성과 같은 ai기술을 새로 도입해야할 때가 있었는데, 기술의 완성도를 위해서 깃허브와 관련 논문 수십개를 찾아보면서 해결책을 찾아내는 모습이 인상적이었습니다.\n또한, 새롭게 기술 스택을 배우는데도 빠르게 적응하여 프로젝트에 크게 도움이 되었습니다.",
  },
]

export default function AboutTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // 자동 슬라이드 기능 - 리뷰 읽을 시간을 충분히 제공하기 위해 시간 늘림
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length)
      }, 6500) // 8초마다 슬라이드 변경 (긴 리뷰를 읽을 시간)
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

  // 이전 및 다음 슬라이드 이동
  const prevSlide = () => {
    goToSlide((activeIndex - 1 + testimonials.length) % testimonials.length)
  }
  
  const nextSlide = () => {
    goToSlide((activeIndex + 1) % testimonials.length)
  }

  return (
    <div className="mt-8 relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <h3 className="mb-3 text-lg font-medium flex justify-between items-center">
        <span>팀원 리뷰</span>
        <div className="flex gap-1">
          <button 
            onClick={prevSlide} 
            className="text-gray-400 hover:text-gray-700 p-1 rounded transition-colors"
            aria-label="이전 슬라이드"
          >
            <ChevronLeft size={16} />
          </button>
          <button 
            onClick={nextSlide} 
            className="text-gray-400 hover:text-gray-700 p-1 rounded transition-colors"
            aria-label="다음 슬라이드"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </h3>
      <div className="relative">
        {/* 슬라이드 컨테이너 - 오직 하나의 슬라이드만 표시 */}
        <div className="relative overflow-hidden rounded-xl bg-white p-6 shadow-sm border border-gray-100">
          {/* 현재 슬라이드만 렌더링 */}
          <div className="flex flex-col">
            <div className="flex items-center justify-between mb-3">
            <div>
              <h4 className="text-base font-medium">
                {testimonials[activeIndex].name} · <span className="text-sm text-gray-600 font-normal">{testimonials[activeIndex].role}</span>
              </h4>
              <p className="text-sm text-gray-700">
                {testimonials[activeIndex].company}
              </p>
            </div>
            </div>
            
            <div className="mt-2 text-gray-600">
              <p className="whitespace-pre-line">{testimonials[activeIndex].quote}</p>
            </div>
          </div>
        </div>

        {/* 좌우 화살표 네비게이션 제거 - 이제 상단에 위치 */}

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