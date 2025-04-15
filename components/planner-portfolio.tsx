import type React from "react"
import { ArrowRight, Briefcase, FileText, Lightbulb, Target, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function PlannerPortfolio() {
  return (
    <div className="flex h-full flex-col items-center overflow-y-auto px-4 py-20 md:px-8 lg:px-16">
      <div className="mx-auto max-w-5xl">
        {/* Hero Section */}
        <section className="mb-16 flex min-h-[60vh] flex-col items-center justify-center text-center">
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
            기획자 <span className="text-emerald-400">포트폴리오</span>
          </h1>
          <p className="mb-8 max-w-2xl text-xl text-slate-300">
            사용자 중심의 전략적 사고와 창의적인 문제 해결 능력을 갖춘 기획자입니다. 비즈니스 목표와 사용자 니즈를
            연결하는 제품 전략을 수립합니다.
          </p>
          <Button className="group bg-emerald-500 hover:bg-emerald-600">
            프로젝트 보기
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="mb-8 text-center text-3xl font-bold">핵심 역량</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <SkillCard
              icon={<Target className="h-8 w-8 text-emerald-400" />}
              title="전략적 기획"
              description="시장 분석과 사용자 니즈를 바탕으로 한 제품 전략 수립 및 로드맵 설계"
            />
            <SkillCard
              icon={<Users className="h-8 w-8 text-emerald-400" />}
              title="사용자 경험 설계"
              description="사용자 중심의 UX 설계와 사용성 테스트를 통한 제품 개선"
            />
            <SkillCard
              icon={<Lightbulb className="h-8 w-8 text-emerald-400" />}
              title="아이디어 발굴"
              description="창의적인 아이디어 발굴과 검증을 통한 혁신적인 솔루션 제안"
            />
            <SkillCard
              icon={<FileText className="h-8 w-8 text-emerald-400" />}
              title="요구사항 정의"
              description="비즈니스 요구사항 분석 및 기능 명세서 작성"
            />
            <SkillCard
              icon={<Briefcase className="h-8 w-8 text-emerald-400" />}
              title="프로젝트 관리"
              description="일정 및 리소스 관리, 이해관계자 커뮤니케이션"
            />
            <SkillCard
              icon={<Users className="h-8 w-8 text-emerald-400" />}
              title="협업 능력"
              description="디자이너, 개발자와의 원활한 협업을 통한 프로젝트 성공적 완수"
            />
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-16">
          <h2 className="mb-8 text-center text-3xl font-bold">주요 프로젝트</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <ProjectCard
              title="모바일 앱 서비스 기획"
              description="사용자 조사부터 프로토타입 제작까지 전 과정을 주도한 모바일 앱 서비스 기획 프로젝트"
              tags={["서비스 기획", "UX 설계", "프로토타이핑"]}
            />
            <ProjectCard
              title="웹 서비스 리뉴얼"
              description="사용성 개선을 위한 웹 서비스 리뉴얼 프로젝트. 사용자 만족도 35% 향상 달성"
              tags={["웹 기획", "UI/UX 개선", "데이터 분석"]}
            />
            <ProjectCard
              title="신규 비즈니스 모델 개발"
              description="시장 조사 및 경쟁사 분석을 통한 신규 비즈니스 모델 개발 및 사업계획서 작성"
              tags={["비즈니스 모델", "시장 분석", "수익 모델"]}
            />
            <ProjectCard
              title="사용자 경험 개선 프로젝트"
              description="사용자 피드백을 바탕으로 한 서비스 개선 프로젝트. 전환율 25% 증가 달성"
              tags={["UX 리서치", "A/B 테스트", "지표 분석"]}
            />
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold">함께 일해요</h2>
          <p className="mb-8 text-slate-300">새로운 프로젝트나 협업 기회에 대해 언제든지 연락주세요.</p>
          <Button className="bg-emerald-500 hover:bg-emerald-600">연락하기</Button>
        </section>
      </div>
    </div>
  )
}

function SkillCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card className="border-none bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
      <CardContent className="flex flex-col items-center p-6 text-center">
        <div className="mb-4 rounded-full bg-slate-800 p-3">{icon}</div>
        <h3 className="mb-2 text-xl font-bold">{title}</h3>
        <p className="text-slate-300">{description}</p>
      </CardContent>
    </Card>
  )
}

function ProjectCard({ title, description, tags }: { title: string; description: string; tags: string[] }) {
  return (
    <Card className="overflow-hidden border-none bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
      <CardContent className="p-6">
        <h3 className="mb-2 text-xl font-bold text-emerald-400">{title}</h3>
        <p className="mb-4 text-slate-300">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span key={index} className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-medium text-emerald-300">
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
