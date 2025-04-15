"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(0)

  const projects = [
    {
      id: 1,
      title: "모두의 취향을 고려한 강원도 여행 코스 추천 서비스",
      period: "2024.04 ~ 2024.11",
      role: "추천 알고리즘 설계 및 구현",
      description:
        "개인과 그룹의 여행 성향을 분석하여 최적화된 강원도 여행 코스를 추천하는 서비스입니다. K-평균 클러스터링과 Cosine Similarity를 활용하여 개인 및 그룹 여행 성향을 분석하고, 이동 경로 최적화 알고리즘을 적용하여 지역별 최적 동선을 계산했습니다.",
      achievements: ["장려상 수상", "개인 성향 분석 만족도 87% 확인", "그룹 여행 계획 시 사용자 만족도 30% 증가"],
      tech: ["Python", "Django REST Framework", "MySQL", "Kakao Maps API", "Sklearn"],
    },
    {
      id: 2,
      title: "웹서핑이 힘든 청각장애인들을 위한 한국어-수어 통역 서비스",
      period: "2024.10 ~ 2024.11",
      role: "AI 기반 번역 알고리즘 설계 및 구현",
      description:
        "청각장애인의 웹 서비스 접근성을 개선하기 위해 실시간 한국어-수어 번역과 자연스러운 수어 영상을 제공하는 서비스입니다. GPT와 형태소 분석기를 결합하여 한국어-수어 번역 알고리즘을 개발하고, 수어 사전에 없는 단어의 뜻을 해석하여 수어 영상을 제작했습니다.",
      achievements: [
        "번역 정확도 개선: 사용자 피드백에서 85% 긍정 반응",
        "단어 응답 시간: 0.1초 이내",
        "지원 단어 수: 약 19,000개 (금융 특화 단어 500개 포함)",
      ],
      tech: ["GPT", "형태소 분석기", "벡터 데이터베이스", "Viggle", "RIFE"],
    },
    {
      id: 3,
      title: "주주핀 ZooZooFin - 핀테크 게임 앱 서비스",
      period: "2024.08 ~ 2024.10",
      role: "LSTM 기반 주식 힌트 설계 및 구현",
      description:
        "금융 지식이 부족한 사용자가 육성형 게임을 통해 자산 관리와 투자 전략을 재미있고 효과적으로 배울 수 있는 핀테크 게임 앱 서비스입니다. LSTM 모델을 활용하여 주가 패턴 힌트를 생성하고, 재무제표 및 감정 분석 결과를 연계하여 힌트를 제공했습니다.",
      achievements: [
        "금융 퀴즈와 용어 설명을 통해 사용자 피드백 긍정률 향상",
        "사용자들이 재무제표, 뉴스 분석 결과를 통해 주식 시장을 학습하며 재미를 느꼈다고 평가",
      ],
      tech: ["LSTM", "React", "KR-FinBERT-SC", "D3.js"],
    },
    {
      id: 4,
      title: "기웃기옷 - 옷 기억도 분석 서비스",
      period: "2024.07 ~ 2024.08",
      role: "AI/ML 모델 설계 및 구현",
      description:
        "사용자가 입으려는 옷이 주변 사람들에게 얼마나 기억에 남는지 분석하고, 더 나은 스타일 선택을 지원하는 서비스입니다. CNN-LSTM 모델을 사용하여 사용자의 움직임을 감지하고, 블루투스 기술을 활용하여 대화 상대를 분석했습니다.",
      achievements: [
        "Pyannote과 블루투스를 결합해 대화 감지 정확도 향상",
        "음성 입력을 통해 옷 정보를 기록하는 데 걸리는 시간 단축",
        "직관적인 기억도 시각화로 사용자 만족도 증가",
      ],
      tech: ["CNN-LSTM", "Pyannote", "SVM", "Naive Bayes", "블루투스"],
    },
    {
      id: 5,
      title: "OTT 정보 및 커뮤니티 기반 영화 추천 서비스",
      period: "2024.05 ~ 2024.05",
      role: "영화 데이터 및 추천 시스템 개발",
      description:
        "영화 정보를 기반으로 OTT 플랫폼에서 볼 수 있는 영화를 한눈에 확인하고, 취미가 비슷한 사람들끼리 소통할 수 있는 커뮤니티를 제공하는 서비스입니다. 코사인 유사도를 활용한 영화 추천 시스템과 CNN 모델로 사용자의 닮은꼴 배우를 추천하는 기능을 개발했습니다.",
      achievements: [
        "프로젝트 우수상 수상",
        "사용자가 쉽게 OTT 플랫폼별 영화 정보를 확인하고, 커뮤니티에서 소통하며 만족도 증가",
      ],
      tech: ["Django", "Vue.js", "CNN", "코사인 유사도", "생성형 AI"],
    },
    {
      id: 6,
      title: "작업자 조립 공정 동작순서 분석 시스템",
      period: "2022.08 ~ 2023.04",
      role: "데이터 수집 및 전처리, 데이터 모델링",
      description:
        "작업자들의 조립 공정 동작순서 분석 및 작업 패턴과 숙련도를 분석하는 딥러닝 기반 동작 인식 시스템입니다. 멀티모달 딥러닝을 통해 작업자 동작 인식 정확도를 향상시키고, PrefixSpan 알고리즘을 활용하여 다차원 순차패턴 마이닝으로 작업 패턴을 분석했습니다.",
      achievements: [
        "멀티모달 딥러닝 정확도: 93% (유니모달 대비 6.7% 개선)",
        "PrefixSpan 알고리즘 기반 다차원 순차패턴 분석 정확도 향상",
        "논문 출판",
      ],
      tech: ["CNN-LSTM", "PrefixSpan", "Android Studio", "멀티모달 딥러닝"],
    },
    {
      id: 7,
      title: "자세 인식 앱 개발",
      period: "2023.04 ~ 2023.11",
      role: "데이터 수집 및 전처리, 딥러닝 모델링",
      description:
        "핸드폰 센서와 영상 데이터를 활용하여 사용자의 자세를 정밀하게 인식하고, 이를 통해 일상 및 작업 환경에서의 올바른 자세 유지와 효율성을 증진시키는 앱입니다. 멀티모달 딥러닝 기반의 자세 인식 모델과 Flutter 기반의 앱을 개발했습니다.",
      achievements: [
        "멀티모달 딥러닝 모델의 자세 인식 정확도: 93.65%",
        "유니모달 딥러닝 대비 약 15% 이상의 성능 개선",
        "실시간 데이터 전송 및 처리 구현",
      ],
      tech: ["3D CNN", "LSTM", "Flutter", "RabbitMQ"],
    },
    {
      id: 8,
      title: "영유아 스마트 밴드 데이터 기반 건강 분석 및 웹 보고서",
      period: "2021.10 ~ 2022.06",
      role: "데이터 수집 및 전처리, 데이터 분석",
      description:
        "스마트 밴드를 활용해 영유아의 활동 데이터를 수집하고, 이를 분석하여 학부모와 선생님에게 아이들의 건강 상태를 시각적으로 제공하는 웹 보고서입니다. K-Means와 Z-Score를 활용한 이상 탐지 및 군집화 분석을 수행했습니다.",
      achievements: [
        "영유아 발달 관련 설문조사에서 학부모 및 선생님 만족도 70% 달성",
        "개인별 평균 활동량과 권장 운동량 데이터를 통해 아이들의 건강 상태를 보다 효과적으로 관리",
      ],
      tech: ["K-Means", "Z-Score", "Django", "스마트 밴드"],
    },
    {
      id: 9,
      title: "맞춤형 화장품 추천 서비스",
      period: "2021.03 ~ 2021.06",
      role: "데이터 수집 및 전처리, 감정 분석",
      description:
        "코로나 시기 이후 증가한 피부 예민도를 해결하고, 개인 맞춤형 화장품 추천 서비스를 통해 사용자의 피부 관리 경험을 개선하는 서비스입니다. Selenium을 활용한 데이터 크롤링과 감정 분석을 통해 화장품의 신뢰도를 평가했습니다.",
      achievements: [
        "설문조사 응답자 40여 명 중 약 88%의 만족도 확인",
        "캡스톤 디자인 프로젝트에서 1등 수상",
        "코로나 전후 화장품 관심도 변화 분석",
      ],
      tech: ["Selenium", "감정 분석", "코사인 유사도", "KNN"],
    },
  ]

  const handleNext = () => {
    if (activeProject < projects.length - 1) {
      setActiveProject(activeProject + 1)
    }
  }

  const handlePrev = () => {
    if (activeProject > 0) {
      setActiveProject(activeProject - 1)
    }
  }

  return (
    <div className="flex h-full flex-col items-center overflow-y-auto px-4 py-20 md:px-8 lg:px-16">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-12 text-center text-4xl font-bold">✨ Project List</h2>

        <div className="relative">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-2xl font-bold text-purple-400">
              {activeProject + 1}/{projects.length}: {projects[activeProject].title}
            </h3>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={handlePrev}
                disabled={activeProject === 0}
                className="rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={handleNext}
                disabled={activeProject === projects.length - 1}
                className="rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <Card className="border-none bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
            <CardContent className="p-6">
              <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <h4 className="text-sm font-medium text-purple-400">기간</h4>
                  <p className="text-white">{projects[activeProject].period}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-purple-400">역할</h4>
                  <p className="text-white">{projects[activeProject].role}</p>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="mb-2 text-sm font-medium text-purple-400">프로젝트 개요</h4>
                <p className="text-white">{projects[activeProject].description}</p>
              </div>

              <div className="mb-4">
                <h4 className="mb-2 text-sm font-medium text-purple-400">주요 성과</h4>
                <ul className="list-inside list-disc text-white">
                  {projects[activeProject].achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="mb-2 text-sm font-medium text-purple-400">사용 기술</h4>
                <div className="flex flex-wrap gap-2">
                  {projects[activeProject].tech.map((tech, index) => (
                    <span
                      key={index}
                      className="rounded-full bg-purple-500/20 px-3 py-1 text-xs font-medium text-purple-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
