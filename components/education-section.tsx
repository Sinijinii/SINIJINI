import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Briefcase } from "lucide-react"

export default function EducationSection() {
  return (
    <div className="flex h-full flex-col items-center overflow-y-auto px-4 py-20 md:px-8 lg:px-16">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-12 text-center text-4xl font-bold">🎓 Education / Experience</h2>

        <div className="relative space-y-8 before:absolute before:inset-0 before:left-16 before:ml-px before:h-full before:w-0.5 before:bg-purple-400">
          <ExperienceCard
            icon={<GraduationCap className="h-6 w-6" />}
            period="2024.01 ~ 2024.12"
            title="삼성 청년 SW 아카데미 11기"
            description=""
          />
          <ExperienceCard
            icon={<Briefcase className="h-6 w-6" />}
            period="2021.10 ~ 2023.11"
            title="차세대융합기술연구원"
            description={[
              "인공지능 기반 영유아 안전보육 시스템 개발",
              "작업자 동작 분석 및 이상 탐지 시스템 개발",
              "작업자 위험 감지를 위한 멀티모달 딥러닝 기반 자세 인식 모델 개발",
            ]}
          />
        </div>
      </div>
    </div>
  )
}

function ExperienceCard({
  icon,
  period,
  title,
  description,
}: {
  icon: React.ReactNode
  period: string
  title: string
  description: string | string[]
}) {
  return (
    <div className="relative flex items-start">
      <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/20 text-purple-400">
        {icon}
      </div>
      <Card className="ml-20 w-full border-none bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
        <CardContent className="p-6">
          <div className="mb-2 text-sm font-medium text-purple-400">{period}</div>
          <h3 className="mb-3 text-xl font-bold">{title}</h3>
          {typeof description === "string" ? (
            <p className="text-slate-300">{description}</p>
          ) : (
            <ul className="list-inside list-disc text-slate-300">
              {description.map((item, index) => (
                <li key={index} className="mb-1">
                  {item}
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
