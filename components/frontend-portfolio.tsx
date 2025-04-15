import type React from "react"
import { ArrowRight, Code, Database, Layout, Palette, Server, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function FrontendPortfolio() {
  return (
    <div className="flex h-full flex-col items-center overflow-y-auto px-4 py-20 md:px-8 lg:px-16">
      <div className="mx-auto max-w-5xl">
        {/* Hero Section */}
        <section className="mb-16 flex min-h-[60vh] flex-col items-center justify-center text-center">
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
            프론트엔드 <span className="text-blue-400">포트폴리오</span>
          </h1>
          <p className="mb-8 max-w-2xl text-xl text-slate-300">
            사용자 경험을 최우선으로 생각하는 프론트엔드 개발자입니다. 최신 기술과 디자인 트렌드를 활용하여 아름답고
            기능적인 웹 애플리케이션을 구현합니다.
          </p>
          <Button className="group bg-blue-500 hover:bg-blue-600">
            프로젝트 살펴보기
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="mb-8 text-center text-3xl font-bold">기술 스택</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <SkillCard
              icon={<Code className="h-8 w-8 text-blue-400" />}
              title="프론트엔드 개발"
              description="React, Next.js, TypeScript를 활용한 모던 웹 애플리케이션 개발"
            />
            <SkillCard
              icon={<Palette className="h-8 w-8 text-blue-400" />}
              title="UI/UX 구현"
              description="Tailwind CSS, Framer Motion을 활용한 반응형 인터페이스 구현"
            />
            <SkillCard
              icon={<Zap className="h-8 w-8 text-blue-400" />}
              title="성능 최적화"
              description="웹 성능 최적화 및 사용자 경험 향상을 위한 기술 적용"
            />
            <SkillCard
              icon={<Layout className="h-8 w-8 text-blue-400" />}
              title="컴포넌트 설계"
              description="재사용 가능한 컴포넌트 설계 및 상태 관리 시스템 구축"
            />
            <SkillCard
              icon={<Server className="h-8 w-8 text-blue-400" />}
              title="API 통합"
              description="RESTful API 및 GraphQL을 활용한 백엔드 시스템 연동"
            />
            <SkillCard
              icon={<Database className="h-8 w-8 text-blue-400" />}
              title="상태 관리"
              description="Redux, Zustand, React Query를 활용한 효율적인 상태 관리"
            />
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-16">
          <h2 className="mb-8 text-center text-3xl font-bold">주요 프로젝트</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <ProjectCard
              title="반응형 웹 애플리케이션"
              description="Next.js와 Tailwind CSS를 활용한 완전 반응형 웹 애플리케이션 개발. 모바일부터 데스크탑까지 최적화된 사용자 경험 제공"
              tags={["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]}
            />
            <ProjectCard
              title="대시보드 UI 개발"
              description="데이터 시각화 라이브러리를 활용한 실시간 대시보드 UI 개발. 복잡한 데이터를 직관적으로 표현하는 인터페이스 구현"
              tags={["React", "D3.js", "Recharts", "Styled Components"]}
            />
            <ProjectCard
              title="e커머스 플랫폼"
              description="상품 검색, 장바구니, 결제 시스템을 갖춘 완전한 e커머스 플랫폼 프론트엔드 개발"
              tags={["React", "Redux", "Next.js", "Stripe API"]}
            />
            <ProjectCard
              title="SaaS 애플리케이션"
              description="구독 기반 SaaS 애플리케이션의 프론트엔드 아키텍처 설계 및 개발. 사용자 인증 및 권한 관리 시스템 구현"
              tags={["React", "TypeScript", "Auth0", "Zustand"]}
            />
          </div>
        </section>

        {/* GitHub Section */}
        <section className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold">GitHub 활동</h2>
          <p className="mb-8 text-slate-300">오픈 소스 프로젝트 기여 및 개인 프로젝트를 GitHub에서 확인해보세요.</p>
          <Button className="bg-blue-500 hover:bg-blue-600">GitHub 방문하기</Button>
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
        <h3 className="mb-2 text-xl font-bold text-blue-400">{title}</h3>
        <p className="mb-4 text-slate-300">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span key={index} className="rounded-full bg-blue-500/20 px-3 py-1 text-xs font-medium text-blue-300">
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
