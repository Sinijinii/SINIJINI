import type React from "react"
import { ArrowRight, Brain, BarChartIcon as ChartBar, Database, FileCode, GitBranch, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function AIPortfolio() {
  return (
    <div className="flex h-full flex-col items-center overflow-y-auto px-4 py-20 md:px-8 lg:px-16">
      <div className="mx-auto max-w-5xl">
        {/* Hero Section */}
        <section className="mb-16 flex min-h-[60vh] flex-col items-center justify-center text-center">
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
            AI <span className="text-purple-400">포트폴리오</span>
          </h1>
          <p className="mb-8 max-w-2xl text-xl text-slate-300">
            인공지능과 머신러닝을 활용하여 혁신적인 솔루션을 개발하는 AI 엔지니어입니다. 데이터를 통해 비즈니스 가치를
            창출하고 실제 문제를 해결합니다.
          </p>
          <Button className="group bg-purple-500 hover:bg-purple-600">
            AI 프로젝트 보기
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="mb-8 text-center text-3xl font-bold">전문 분야</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <SkillCard
              icon={<Brain className="h-8 w-8 text-purple-400" />}
              title="머신러닝"
              description="지도학습, 비지도학습, 강화학습 알고리즘 개발 및 최적화"
            />
            <SkillCard
              icon={<Sparkles className="h-8 w-8 text-purple-400" />}
              title="자연어 처리"
              description="텍스트 분석, 감성 분석, 챗봇 개발 및 LLM 파인튜닝"
            />
            <SkillCard
              icon={<ChartBar className="h-8 w-8 text-purple-400" />}
              title="데이터 분석"
              description="대규모 데이터셋 분석, 시각화 및 인사이트 도출"
            />
            <SkillCard
              icon={<Database className="h-8 w-8 text-purple-400" />}
              title="데이터 엔지니어링"
              description="ETL 파이프라인 구축 및 빅데이터 처리 시스템 설계"
            />
            <SkillCard
              icon={<FileCode className="h-8 w-8 text-purple-400" />}
              title="AI 애플리케이션 개발"
              description="AI 모델을 활용한 실제 애플리케이션 개발 및 배포"
            />
            <SkillCard
              icon={<GitBranch className="h-8 w-8 text-purple-400" />}
              title="MLOps"
              description="AI 모델 배포, 모니터링 및 지속적 통합/배포 파이프라인 구축"
            />
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-16">
          <h2 className="mb-8 text-center text-3xl font-bold">AI 프로젝트</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <ProjectCard
              title="자연어 처리 챗봇"
              description="GPT 기반 자연어 처리 챗봇 개발. 사용자 질문에 대한 정확한 응답과 맥락 이해 능력을 갖춘 대화형 AI 시스템"
              tags={["NLP", "GPT", "Transformer", "Python"]}
            />
            <ProjectCard
              title="이미지 분류 시스템"
              description="CNN을 활용한 이미지 분류 시스템 개발. 98.5%의 정확도로 다양한 객체를 인식하고 분류하는 컴퓨터 비전 모델"
              tags={["Computer Vision", "CNN", "PyTorch", "Transfer Learning"]}
            />
            <ProjectCard
              title="추천 시스템"
              description="협업 필터링과 콘텐츠 기반 필터링을 결합한 하이브리드 추천 시스템 개발. 사용자 만족도 42% 향상 달성"
              tags={["Recommendation Systems", "Collaborative Filtering", "TensorFlow"]}
            />
            <ProjectCard
              title="이상 탐지 시스템"
              description="금융 거래 데이터에서 이상 거래를 탐지하는 AI 시스템 개발. 사기 탐지율 95% 달성으로 비용 절감 효과"
              tags={["Anomaly Detection", "Time Series", "Scikit-learn", "XGBoost"]}
            />
          </div>
        </section>

        {/* Research Section */}
        <section className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold">연구 및 발표</h2>
          <p className="mb-8 text-slate-300">
            AI 분야의 최신 연구 동향을 파악하고 학술 논문 및 컨퍼런스 발표를 통해 지식을 공유합니다.
          </p>
          <Button className="bg-purple-500 hover:bg-purple-600">연구 자료 보기</Button>
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
        <h3 className="mb-2 text-xl font-bold text-purple-400">{title}</h3>
        <p className="mb-4 text-slate-300">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span key={index} className="rounded-full bg-purple-500/20 px-3 py-1 text-xs font-medium text-purple-300">
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
