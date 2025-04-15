import { Card, CardContent } from "@/components/ui/card"
import { Award, FileText, BookOpen } from "lucide-react"

export default function AwardsSection() {
  return (
    <div className="flex h-full flex-col items-center overflow-y-auto px-4 py-20 md:px-8 lg:px-16">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-12 text-center text-4xl font-bold">🏆 Awards / Certificates / Paper</h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-6 flex items-center text-2xl font-bold text-purple-400">
              <Award className="mr-2 h-6 w-6" /> 수상
            </h3>
            <Card className="border-none bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
              <CardContent className="p-6">
                <ul className="space-y-4">
                  <AwardItem date="2024.11" title="공모전 장려상 (한국관광공사)" />
                  <AwardItem date="2024.11" title="프로젝트 우수상 (SSAFY)" />
                  <AwardItem date="2024.10" title="프로젝트 우수상 (SSAFY)" />
                  <AwardItem date="2024.05" title="프로젝트 우수상 (SSAFY)" />
                </ul>
              </CardContent>
            </Card>
          </div>

          <div>
            <h3 className="mb-6 flex items-center text-2xl font-bold text-purple-400">
              <FileText className="mr-2 h-6 w-6" /> 자격증
            </h3>
            <Card className="border-none bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
              <CardContent className="p-6">
                <ul className="space-y-4">
                  <AwardItem date="2023.07" title="빅데이터분석기사" />
                  <AwardItem date="2022.09" title="정보처리기사" />
                </ul>
              </CardContent>
            </Card>
          </div>

          <div>
            <h3 className="mb-6 flex items-center text-2xl font-bold text-purple-400">
              <BookOpen className="mr-2 h-6 w-6" /> 논문
            </h3>
            <Card className="border-none bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
              <CardContent className="p-6">
                <ul className="space-y-4">
                  <AwardItem
                    date="2023.05"
                    title="카메라 및 관성 측정 장치 융합을 활용한 딥러닝 기반 수작업 조립 공정 작업자 동작 인식 방법론 개발"
                  />
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

function AwardItem({ date, title }: { date: string; title: string }) {
  return (
    <li>
      <div className="text-sm font-medium text-purple-400">{date}</div>
      <div className="text-white">{title}</div>
    </li>
  )
}
