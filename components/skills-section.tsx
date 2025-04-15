import { Card, CardContent } from "@/components/ui/card"

export default function SkillsSection() {
  return (
    <div className="flex h-full flex-col items-center overflow-y-auto px-4 py-20 md:px-8 lg:px-16">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-12 text-center text-4xl font-bold">👨‍💻 SKILLS</h2>

        <div className="mb-16">
          <h3 className="mb-6 text-2xl font-bold text-purple-400">Backend</h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <SkillCard
              name="Python"
              level={4}
              description={[
                "Python 언어의 기본 구조를 이해하고 관련 프레임워크를 활용한 소규모 프로젝트 진행 가능",
                "다양한 라이브러리 사용으로 알고리즘 관련 코드 작성가능",
              ]}
            />
            <SkillCard
              name="Django"
              level={3}
              description={[
                "서버 사이드 렌더링(SSR)을 통해 동적인 웹 페이지 구현 가능",
          
                "URL 패턴을 활용하여 API 엔드포인트를 설계하고, 데이터 처리 로직 구현 가능",
              ]}
            />
            <SkillCard
              name="Flask"
              level={3}
              description={[
                "경량 웹 프레임워크를 활용한 API 설계 및 구현 가능",
                "URL 패턴을 활용하여 API 엔드포인트를 설계하고, 데이터 처리 로직 구현 가능",
              ]}
            />
            <SkillCard
              name="FastAPI"
              level={3}
              description={[
                "비동기 기반의 RESTful API 설계 및 고성능 애플리케이션 개발 가능",
                "URL 패턴을 활용하여 API 엔드포인트를 설계하고, 데이터 처리 로직 구현 가능",
              ]}
            />
          </div>
        </div>

        <div className="mb-16">
          <h3 className="mb-6 text-2xl font-bold text-purple-400">Frontend</h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <SkillCard
              name="Figma"
              level={4}
              description={[
                "컴포넌트 기능을 이해하고, 재사용하여 빠르고 효율적인 와이어프레임 작업 가능",
                "UI/UX 를 고려한 앱 디자인 설계 가능",
              ]}
            />
            <SkillCard
              name="JavaScript"
              level={4}
              description={[
                "ES6+ 를 이해하고 이를 활용하여 소규모 프로젝트 진행가능",
                "JS기반 프레임워크와 라이브러리 사용가능",
              ]}
            />
            <SkillCard
              name="React.JS"
              level={4}
              description={[
                "Life Cycle을 이해하고, 프로젝트 설정부터 개발까지 효율적으로 상태 관리 가능",
                "React Router를 활용하여 페이지 간 네비게이션을 구현하고, 다양한 화면 전환 기능 적용 가능",
                "컴포넌트 기반의 개발 방식을 숙지하여, 재사용 가능한 모듈형 컴포넌트를 개발 가능",
              ]}
            />
            <SkillCard
              name="Vue.JS"
              level={3}
              description={[
                "Life Cycle을 이해하고, Vuex, Vue-router를 활용하여 소규모 프로젝트 진행 가능",
                "컴포넌트 개념을 이해하고, 재사용을 위한 개발 가능",
              ]}
            />
            <SkillCard
              name="Flutter"
              level={3}
              description={[
                "Dart 언어의 기본을 이해하고 이를 활용하여 소규모 프로젝트 진행 가능",
                "컴포넌트 개념을 이해하고, 재사용을 위한 개발 가능",
              ]}
            />
          </div>
        </div>

        <div>
          <h3 className="mb-6 text-2xl font-bold text-purple-400">Others</h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <SkillCard
              name="Git"
              level={3}
              description={[
                "효율적인 브랜치 전략을 통해 안정적인 협업 관리",
                "Pull Request 기반 코드 리뷰로 품질 향상",
              ]}
            />
            <SkillCard
              name="Jira"
              level={4}
              description={[
                "애자일 방식을 통한 효율적인 프로젝트 관리 및 MVP 달성",
                "스프린트와 백로그 관리를 통해 우선순위 설정 및 작업 추적 가능",
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

function SkillCard({
  name,
  level,
  description,
}: {
  name: string
  level: number
  description: string[]
}) {
  return (
    <Card className="border-none bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
      <CardContent className="p-6">
        <div className="mb-2 flex items-center justify-between">
          <h4 className="text-xl font-bold">{name}</h4>
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className={`h-5 w-5 rounded-sm ${i < level ? "bg-purple-500" : "bg-white/20"} mr-1`}></div>
            ))}
          </div>
        </div>
        <ul className="list-inside list-disc text-slate-300">
          {description.map((item, index) => (
            <li key={index} className="mb-1">
              {item}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
