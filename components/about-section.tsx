import type React from "react"
import { ArrowRight, Code, Database, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutSection() {
  return (
    <div className="flex h-full flex-col items-center justify-center px-4 py-20 md:px-8 lg:px-16">
      <div className="mx-auto max-w-5xl text-center">
        <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
          <span className="text-purple-400">Portfolio</span> Presentation
        </h1>
        <p className="mb-8 text-xl text-slate-300">AI 개발자 & 프론트엔드 개발자 & 백엔드 개발자</p>

        <div className="mb-12 flex flex-wrap justify-center gap-6">
          <FeatureCard
            icon={<Code className="h-8 w-8 text-purple-400" />}
            title="프론트엔드"
            description="React, Vue, Flutter를 활용한 사용자 중심 인터페이스 개발"
          />
          <FeatureCard
            icon={<Database className="h-8 w-8 text-purple-400" />}
            title="백엔드"
            description="Python, Django, Flask, FastAPI를 활용한 서버 개발"
          />
          <FeatureCard
            icon={<Lightbulb className="h-8 w-8 text-purple-400" />}
            title="AI/ML"
            description="딥러닝 기반 모델 설계 및 데이터 분석"
          />
        </div>

        <Button className="group bg-purple-500 hover:bg-purple-600">
          프로젝트 살펴보기
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="flex max-w-xs flex-col items-center rounded-xl bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
      <div className="mb-4 rounded-full bg-slate-800 p-3">{icon}</div>
      <h3 className="mb-2 text-xl font-bold">{title}</h3>
      <p className="text-center text-slate-300">{description}</p>
    </div>
  )
}
