export const projects = [
  {
    id: "gangwon-travel",
    title: "모두의 취향을 고려한 강원도 여행 코스 추천 서비스",
    description: "개인과 그룹의 여행 성향을 분석하여 최적화된 강원도 여행 코스를 추천하는 서비스입니다.",
    image: "/project/maumkkut/main.PNG?height=300&width=500",
    images:["/project/maumkkut/result.PNG"],
    overview: "개인 및 그룹 여행자의 성향을 분석해 최적의 여행지를 추천하고 동선을 최적화하는 AI 기반 코스 추천 서비스입니다.",
    planning:
      "여행 계획을 세울 때 개인의 취향과 그룹 구성원들의 다양한 선호도를 모두 고려하는 것은 어려운 과제입니다. 이 문제를 해결하기 위해 사용자 성향 분석과 그룹 추천 알고리즘을 결합한 서비스를 기획했습니다. 강원도 관광 데이터를 활용하여 지역별 특성과 사용자 선호도를 매칭하고, 최적의 이동 경로를 제안하는 것을 목표로 했습니다.",
    challenge:
      "다양한 사용자의 취향을 고려하면서도 그룹 내 모든 구성원이 만족할 수 있는 여행 코스를 추천하는 알고리즘을 개발하는 것이 주요 도전 과제였습니다. 또한 최적의 이동 경로를 계산하여 효율적인 여행 일정을 제안해야 했습니다.",
    solution:
      "K-평균 클러스터링과 코사인 유사도를 활용하여 사용자의 여행 성향을 분석하고, 그룹 구성원들의 선호도를 종합적으로 고려한 추천 시스템을 개발했습니다. 또한 이동 경로 최적화 알고리즘을 적용하여 지역별 최적 동선을 계산했습니다.",
    result:
      "공모전 장려상",
    backendTech: ["Django REST Framework", "MySQL", "Kakao Maps API"],
    aiTech: ["K-평균 클러스터링", "Cosine Similarity", "경로 최적화 알고리즘"],
    backend: {
      images:["/project/maumkkut/002.PNG"],
      architectureImage: "",
      architectureImageCaption: "",
      description: "여행 성향 분석 및 코스 추천 알고리즘의 실행을 위한 서버를 구축하고, API 및 DB를 설계했습니다.",
      responsibilities: [
        "RESTful 구조 기반으로 사용자, 그룹, 코스 추천, 관광지 필터링 등의 API 총 10여 개 설계 및 구현",
        "Swagger를 통한 API 명세 문서 자동화로 프론트엔드와의 협업 간소화",
        "ERD 기반으로 개인/그룹별 추천, 관광지, 코스 계획 데이터를 연동하는 관계형 데이터베이스 구조 설계 및 구축",
        "Kakao Maps API를 활용한 여행지 간 거리 데이터 수집 및 처리",
        "추천 결과와 여행 동선 데이터를 반환하는 API 개발"
      ],
      tech: ["Python", "Django REST Framework", "MySQL", "Kakao Maps API", "REST API"],
      troubleshooting: [
        {
			    problem: "Kakao Maps API 호출 횟수가 많아지면 요청 제한(rate limit)에 걸리거나, 예기치 않은 위치 오류가 발생했습니다.",
			    solution: "요청 제한 상황을 대비해 캐시된 거리 데이터를 우선 활용하고, 실패 시 재시도 로직을 구현하여 사용자 경험을 방해하지 않도록 처리했습니다.",
			  }
      ],
      growth: [
        "관광지 추천과 경로 계산 시, 캐시 서버(redis) 적용을 고려하여 반복 요청 최적화 방안을 검토함",
        "위치 기반 추천 결과가 사용자 성향과 잘 매칭되도록 추천 결과와 성향 유사도(Cosine Similarity) 기반 데이터 분석 구조를 정립함"
      ]
    },
    ai: {
      images:["/project/maumkkut/001.PNG"],
      description: "여행 성향 기반 캐릭터 매칭, 그룹 통합 성향 분석, 최적 경로 계산 등을 위한 AI 알고리즘을 개발했습니다.",
      responsibilities: [
        "사용자 설문 데이터를 바탕으로 주요 여행 성향(10개 항목)에 대한 중요도를 수치화하고, K-평균 클러스터링으로 8가지 여행 캐릭터 군집 생성",
        "각 클러스터별 성향에 맞는 지역 및 콘텐츠를 연결하여 캐릭터 설명 및 추천지 매핑",
        "그룹 내 구성원들의 성향 데이터를 가중 평균한 뒤, 기존 추천 DB 내 유사 그룹과의 코사인 유사도를 계산해 추천 코스를 자동 매칭",
        "여행지 간 거리 및 예상 이동 시간을 기반으로, 사용자 선호도를 고려한 최소 이동 동선 우선 경로 추천 알고리즘 설계",
        "초기 거리 우선 추천에서 벗어나 사용자 평가 및 장소 평점까지 반영하여 복합 기준 경로 최적화"
      ],
      tech: ["Python", "Scikit-learn", "Pandas", "NumPy"],
      troubleshooting: [
        {
          problem: "특정 캐릭터가 과도하게 추천되어 결과 다양성이 저하되는 문제가 발생했습니다.",
          solution: "성향별 추천 분포를 분석하고, 빈도 기반 역가중치(Inverse Frequency Weight)를 적용해 캐릭터 추천 확률 보정했습니다.",
        },
        {
          problem: "그룹 구성원 중 일부의 성향이 왜곡되어 통합 결과가 한쪽으로 치우치는 현상 발생했습니다.",
          solution: "그룹 성향 분석 시 개별 구성원의 성향 기여도를 조정하여, 소수 의견이 무시되지 않도록 가중치 조정 로직을 개선했습니다.",
        }
      ],
      growth: [
        "클러스터링 결과의 불균형을 정량적으로 진단하고, 후처리를 통해 추천 시스템의 다양성과 성능을 조절하는 경험을 할 수 있었습니다.",
        "추천 모델 개선을 위한 사용자 피드백 기반 정량 평가 및 반영 프로세스 경험을 할 수 있었습니다.",
        "위치 기반 API 데이터를 활용한 여행 경로 최적화 로직 설계 및 복합 조건 추천 알고리즘 설계 경험했습니다."
      ]
    },
    categories: ["backend", "ai"]
  },
  
  {
  id: "sign-language-translator",
  title: "손누리: 웹서핑이 힘든 청각장애인들을 위한 한국어-수어 통역 서비스",
  description: "GPT와 형태소 분석기 기반 한국어-수어 번역 알고리즘을 구현하고, 수어 사전 확장과 실시간 성능 최적화를 통해 웹 접근성을 향상시킨 AI 기반 수어 통역 서비스입니다.",
  image: "/project/sonuri/main.PNG?height=300&width=500",
  images:["/project/sonuri/result.PNG"],
  aiTech: ["GPT", "형태소 분석기", "벡터 데이터베이스", "Semantic Search"],
  overview:
    "청각장애인을 위한 웹 접근성 개선을 목표로, 한국어 문장을 수어 문법으로 번역하고, 새로운 수어 표현을 생성하는 AI 기반 서비스입니다.",
  planning:
    "청각장애인들이 웹 서비스를 이용할 때 겪는 어려움을 해소하기 위해 한국어 텍스트를 수어로 번역하는 서비스를 기획했습니다. 특히 금융, 의료, 교육 등 중요한 정보를 제공하는 웹사이트에서의 접근성 향상을 목표로 했습니다. 사용자 인터뷰와 설문조사를 통해 실제 청각장애인들의 니즈를 파악하고, 이를 바탕으로 서비스의 핵심 기능을 정의했습니다.",
  challenge:
    "한국어와 수어는 문법 구조가 다르기 때문에 단순 단어 대 단어 번역으로는 자연스러운 수어 표현이 어렵습니다. 또한 수어 사전에 없는 단어를 처리하고, 실시간으로 자연스러운 수어 영상을 생성하는 것이 주요 도전 과제였습니다.",
  solution:
    "GPT와 형태소 분석기를 결합하여 한국어-수어 번역 알고리즘을 개발하고, 수어 사전에 없는 단어의 뜻을 해석하여 수어 영상을 제작했습니다. 또한 벡터 데이터베이스를 활용하여 빠른 응답 시간을 구현했습니다.",
  result:
    "프로젝트 우수상",
   
  ai: {
    images:["/project/sonuri/sonuri1.PNG","/project/sonuri/sonuri2.PNG","/project/sonuri/sonuri3.PNG","/project/sonuri/sonuri4.PNG"],
    description:
      "한국어 문법을 수어 문법으로 자연스럽게 변환하고, 수어 사전에 없는 단어에 대해 새로운 수어 영상을 생성하는 알고리즘을 개발했습니다.",
    responsibilities: [
      "GPT 기반 한국어-수어 문법 변환 모델 설계 및 프롬프트 최적화",
      "형태소 분석기(Kiwi) 연동으로 복합어 분리 및 문법 전처리 자동화",
      "시맨틱 서치를 통해 유사 수어 단어 자동 매핑 및 지문자 대체 로직 구현",
      "Viggle 기반 수어 영상 생성 및 RIFE를 활용한 보간 처리 적용",
      "클라이언트 캐싱과 병렬 처리를 통한 실시간 번역 속도 최적화",
      "FastAPI 기반 번역 API 서버 개발 및 영상 결과 서빙 기능 구현",
      "수어 영상 결과물을 AWS S3에 저장하고 URL 기반으로 클라이언트 전달"
    ],
    tech: ["GPT", "Kiwi", "Viggle", "RIFE", "Semantic Search", "Python", "FastAPI","AWS S3"],
    troubleshooting: [
      {
        problem: "수어 사전에 없는 단어 번역 시 문장이 비정상적으로 출력됨",
        solution: ["금융 도메인 특화 단어(예: '이체' = '돈+보내다', '대출' = '돈+빌리다')를 직접 정의하고, 해당 단어에 맞는 수어 영상 데이터를 수작업 생성 및 DB에 추가",
        "해당 단어를 시맨틱 서치 기반 유사도 매칭으로 대체하고, 매칭 실패 시 지문자로 변환 처리 로직을 추가"],
        result: "수어 문장 연속성 향상"
      },
      {
        problem: ["반복적으로 입력되는 단어의 매번 재처리로 번역 속도 지연 발생","문장이 길어지면 단어의 양이 많아져서 속도 지연 발생"],
        solution: "빈번히 입력되는 단어는 클라이언트 캐싱을 통해 응답 시간 단축, 병렬 처리로 번역 시간 최적화",
        result: "전체 번역 속도 37초 → 19초로 개선"
      },
      {
        problem: ["한국어와 수어 간 문법 차이를 구조적으로 이해하고 자연어처리 알고리즘으로 해결"],
        solution: "수어 영상 파일은 S3에 저장하고, API 응답으로 영상 URL만 전달하도록 개선",
        result: "응답 시간 단축 및 서버 부하 감소"
      }
    ],
    growth: [
      "한국어와 수어 간 문법 차이를 구조적으로 이해하고 자연어처리 알고리즘으로 해결하는 경험",
      "형태소 분석, 시맨틱 매칭, 텍스트-비디오 생성 등 복합 NLP+멀티미디어 AI 시스템 통합 경험",
      "실시간 번역 결과를 FastAPI 서버에서 S3 기반으로 효율적으로 서빙하며, AI 서비스를 실제 사용자에게 제공하는 운영 경험 확보"
    ]
  },
  categories: ["ai"]
},

  {
    id: "zoozoo-fin",
    title: "주주핀 ZooZooFin - 금융 교육 게임 앱",
    description: "LSTM과 감정 분석 기반의 주가 힌트 제공, 금융 퀴즈 학습, 재무제표 기반 투자 이해를 돕는 금융 교육 게임 서비스입니다.",
    image: "/project/zoozoofin/main.PNG?height=300&width=500",
    images:["/project/zoozoofin/result.PNG"],
    frontendTech: ["React.js", "Recharts", "CSS Modules"],
    aiTech: ["LSTM", "KR-FinBERT-SC","Flask"],
    overview: "주가 예측, 감정 분석, 재무제표 분석을 결합한 AI 기반 금융 힌트 시스템과 퀴즈 학습을 통해 금융 지식을 쉽게 습득할 수 있도록 구성된 게임 서비스입니다.",
    planning:
      "금융 교육의 진입 장벽을 낮추고 젊은 세대의 금융 이해도를 높이기 위해 게임 요소를 활용한 교육 서비스를 기획했습니다. 사용자 조사 결과, 많은 사람들이 금융 지식의 필요성은 인식하지만 학습 과정이 지루하고 어렵다고 느끼는 것을 확인했습니다. 이에 캐릭터 육성, 퀘스트 수행, 보상 시스템 등 게임적 요소를 통해 금융 학습 동기를 부여하는 서비스를 설계했습니다.",
    challenge:
      "금융 지식이 부족한 사용자들에게 복잡한 금융 개념을 쉽고 재미있게 전달하는 것이 주요 도전 과제였습니다. 또한 게임적 요소와 교육적 가치를 균형 있게 결합하여 사용자의 지속적인 참여를 유도해야 했습니다.",
    solution:
      "LSTM 모델을 활용하여 주가 패턴 힌트를 생성하고, 재무제표 및 감정 분석 결과를 연계하여 힌트를 제공했습니다. 또한 게임 내 퀘스트와 보상 시스템을 통해 사용자의 학습 동기를 유지하도록 설계했습니다.",
    result:
      "프로젝트 우수상",
    
    ai: {
      images:["/project/zoozoofin/zo0.PNG"],
      description: "감정 분석을 시계열 모델에 융합한 AI 기반 힌트 제공 시스템을 구현했습니다. 주가 예측뿐만 아니라 사용자에게 직관적인 투자 힌트를 제공하기 위해, 정성(뉴스 감정)과 정량 데이터를 통합한 멀티소스 기반 LSTM 모델을 설계하고 실제 서비스 흐름에 적용하였습니다.",
      responsibilities: [
        "LSTM 기반 시계열 주가 예측 모델 설계 및 11년치 데이터 학습",
        "산업군별 모델 구성 및 멀티태스크 러닝 적용으로 모델 수 감소 및 효율 개선",
        "KR-FinBERT-SC 모델로 주식 뉴스 감정 분석 및 결과 통합",
        "Multi-head Attention 및 Bidirectional LSTM 도입으로 중요 시점 반영",
        "재무제표 시각화 및 뉴스-재무제표-예측 연계 힌트 구성",
        "Flask 기반 AI 결과 API 서버 설계 및 연결",
        "Gunicorn-Nginx 서버 구조 이해 및 배포 연계",
        "예측 결과는 JSON 형식으로 반환되어 힌트 화면에 시각적으로 반영"
      ],
      tech: ["Python", "TensorFlow", "Pandas", "KR-FinBERT-SC", "LSTM", "Flask","Multi-head Attention", "Gunicorn", "Nginx"],
      troubleshooting: [
        {
          problem: "각 기업마다 별도 모델을 학습하기엔 리소스 소모가 과다하고, 산업군 내 기업 수가 많아 관리가 어렵고, 유지보수가 부담되었습니다.",
          solution: "산업군별 멀티태스크 모델을 도입해 동일 산업군의 여러 기업을 하나의 모델에서 동시에 예측했습니다.",
          result: "모델 수 70% 감소 및 유지보수 효율성 향상, 산업군별 흐름 학습으로 금융 구조적 이해도도 향상했습니다."
        },
        {
          problem: "재무제표와 뉴스 데이터 간 상관관계 반영이 어려움이 있었습니다.",
          solution: "감정 분석 점수, 재무 변수 각각의 중요도를 조정하여 LSTM 입력에 가중치를 반영했습니다.",
          result: "정성/정량 정보 통합 힌트 생성"
        },
        {
          problem: "초기 예측 성능이 저조한 문제가 있었습니다.(초기 R² < 0)",
          solution: "데이터 전처리 개선 (Volume 로그 변환, MinMax 정규화 등),기술적 지표 추가 (RSI, MACD 등), Bidirectional LSTM + Attention + Dense 조합으로 성능 향상",
          result: "일부 섹터에서 R² ≈ 0.29 이상으로 상승, RMSE·MAE도 감소 추세"
        }
      ],
      growth: [
        "시계열 예측에 감정/재무 데이터를 융합하는 구조적 설계 및 모델링을 경험했습니다. ",
        "멀티소스 데이터를 결합한 입력 구조를 설계하고, 이를 통해 예측 성능을 개선할 수 있었습니다.",
        "도메인 특화 감정 분석 결과를 AI 서비스에 실제로 통합한 실전 경험을 통해 이해도를 높였습니다.",
        "AI 모델 서빙부터 프론트엔드 UI 연계까지 End-to-End 시스템을 직접 설계하고 운영한 경험을 쌓았습니다."
      ]
    },
    frontend: {
      images:["/project/zoozoofin/001.PNG","/project/zoozoofin/002.PNG","/project/zoozoofin/003.PNG"],
      description: "게임 내 화면 UI/UX 구성, 퀴즈 및 힌트 인터페이스 개발을 React 기반으로 구현했습니다. 사용자 경험과 교육 효과를 고려해 금융 정보를 직관적으로 시각화하고, 게임 흐름에 맞춘 UI 상태 설계를 중점적으로 수행했습니다.",
      responsibilities: [
        "React.js 기반 주식 힌트, 금융 퀴즈, 사용자 바, 포트폴리오 화면 설계 및 구현 ",
        "React ApexCharts를 활용한 주가 예측 차트 시각화 및 사용자 인터랙션 요소 적용 (Zoom, Swipe, 이동평균선 등)",
        "금융 용어 설명 및 퀴즈 정답 처리 흐름 설계 및 애니메이션 피드백 적용",
        "상태 관리를 위해 useContext 및 useEffect 기반 구조 최적화"
      ],
      tech: ["React.js", "ApexCharts","Recharts", "CSS Modules", "Axios"],
      troubleshooting: [
        {
			    problem: "컴포넌트 간 상태 공유가 어려워 금융 퀴즈 정답 여부, 자산 변화, 힌트 노출 타이밍 등의 UI 동기화에 혼선 발생",
			    solution: "React의 useContext를 도입해 퀴즈 상태, 자산 정보, 턴 수 등을 전역에서 관리하도록 구조 통합. 또한, 조건부 렌더링 로직을 분리해 각 컴포넌트가 의존하는 상태만 감지하도록 리팩토링.",
			    result: "컴포넌트 간 데이터 불일치 이슈 해소, 상태 변화에 따른 화면 업데이트 정확도 향상, 리렌더링 횟수 40% 감소로 성능 개선"
			  }
      ],
      growth: [
        "게임형 인터페이스 설계 경험 및 UI 상태 흐름 최적화 학습",
        "금융 정보를 시각화하고 교육 효과를 고려한 화면 구성 역량 강화"
      ]
    },
    categories: ["ai", "frontend"]
  },
  
  {
    id: "clothes-memory",
    title: "기웃기옷 - 옷 기억도 분석 서비스",
    description:
      "사용자가 입으려는 옷이 주변 사람들에게 얼마나 기억에 남는지 분석하고, 더 나은 스타일 선택을 지원하는 서비스입니다.",
    image: "/project/giutgiot/main.PNG?height=300&width=500",
    images:["/project/giutgiot/result.PNG"],
    frontendTech: ["Flutter", "OAuth", "Chart library"],
    aiTech: ["CNN-LSTM", "Pyannote", "SVM", "아이트래킹", "Naive Bayes","Flask"],
    overview:
      "기웃기옷은 사용자의 의상이 타인에게 얼마나 기억에 남는지를 분석하여 더 효과적인 스타일링을 지원하는 서비스입니다. 특히 중요한 미팅이나 면접 등 인상이 중요한 상황에서 최적의 의상 선택을 돕는 것이 목표입니다.",
    planning:
      "의상 선택이 타인에게 미치는 인상과 기억도에 관한 연구를 바탕으로, 사용자가 자신의 의상이 얼마나 기억에 남는지 객관적으로 분석할 수 있는 서비스를 기획했습니다. 특히 매일 같은 곳에 출근해야하는 직장인, 타인에게 노출되는 발표, 중요한 미팅 등 옷에 대한 고민이 있는 상황에서 의상 선택을 돕는 것을 목표로 했습니다. 사용자 조사를 통해 의상 선택 시 고려사항과 어려움을 파악하고, 이를 해결할 수 있는 기능을 설계했습니다.",
    challenge:
      `
        1) 옷의 '기억도'라는 정성적 개념을 정량화해야 했습니다.
        2) 대화 상황에서 움직임, 음성, 시선 데이터를 종합적으로 분석해야 했습니다. 
        3) 실생활 속에서 자연스럽게 사용할 수 있도록, UI/UX 간소화가 요구되었습니다.
      `,
    solution:
      "CNN-LSTM 모델을 사용하여 사용자의 움직임을 감지하고, Pyannote과 블루투스를 결합해 대화 상대를 분석했습니다.\n 음성 기반 옷 정보 입력과 시선 기반 기억도 분석을 결합해 옷의 노출도, 주목도, 기억도를 종합 판단했습니다.",
    result:
      "기억도라는 생소한 개념을 실제 사용자 경험으로 구현할 수 있었으며, 음성 입력, 시선 추적, AI 분석 등 다양한 기술을 융합한 데이터 기반 패션 피드백 서비스의 가능성을 실험했습니다.",
    ai: {
      images:["/project/giutgiot/ai1.GIF","/project/giutgiot/ai2.GIF","/project/giutgiot/ai3.GIF","/project/giutgiot/ai4.PNG"],
      description: "사용자의 움직임, 시선, 음성 및 대화 데이터를 기반으로 옷의 기억도를 분석하는 멀티모달 AI 모델을 개발했습니다.",
      responsibilities: [
        "CNN-LSTM 모델을 활용한 움직임 감지 및 특정 타이밍의 음성 녹음 트리거 개발",
        "Pyannote 기반 화자 분석 모델과 블루투스 센서를 융합한 대화 상대 탐지",
        "SVM/Naive Bayes 기반 음성 분석 및 옷 정보 추출 알고리즘 구현",
        "기억도 산출을 위한 아이트래킹 패턴 분석"
      ],
      tech: ["CNN-LSTM", "SVM", "Naive Bayes", "Pyannote", "Bluetooth", "Eye-tracking"],
      troubleshooting: [
        {
          problem: "센서 초기화와 Flame 물리엔진 동시 실행 시 충돌로 메인화면 진입 전에 블랙스크린 발생",
          solution: "센서 데이터 수집 패키지의 초기화를 Flame 엔진보다 선행되도록 비동기 분리 및 랜딩 화면을 통해 초기화 순서 제어",
          result: "초기화 타이밍 충돌 해결, 메인화면 진입 안정성 확보"
        },
        {
          problem: "센서와 블루투스가 항상 활성화되어 배터리 소모 과다",
          solution: "사용자의 행동 패턴을 분석하여 필요 시에만 센서와 블루투스 활성화되도록 조건부 트리거 구현",
          result: "불필요한 센서 작동 방지로 배터리 소모 절감"
        }
      ],
      growth: [
        "센서 및 영상 데이터를 활용한 학습 설계 및 최적화 경험",
        "Pyannote와 음성 분류 모델을 융합하여 사용자 맥락 분석 알고리즘 설계 역량 강화",
      ]
    },
    frontend: {
      images:["/project/giutgiot/f1.GIF","/project/giutgiot/ai4.PNG"],
      description:
        "사용자의 옷 정보를 음성으로 간편하게 등록하고, 백엔드 API와 연동되는 데이터 흐름을 관리하며 안정적인 사용자 경험을 제공했습니다.",
      responsibilities: [
        "음성 입력 기반 코디 등록 인터페이스 구현",
        "소셜 로그인(OAuth) 및 사용자 설정 페이지 개발",
        "백엔드에서 전달받은 데이터, AI 분석 결과(기억도, 시선 추적 결과 등)를 관리하는 전역 상태 관리 구조(Store) 설계 및 적용"
      ],
      tech: ["Flutter", "OAuth", "Chart library"],
      troubleshooting: [
        {
          problem: "복잡한 입력 방식으로 사용자 불편 발생",
          solution: "SVM 기반 음성 명령 분석과 UI 연동을 통해 대화형 입력 시스템 구현",
          result: "사용자 불편함 감소"
        }
      ],
      growth: [
        "Flutter를 활용한 반응형 UI 설계 및 OAuth 인증 처리를 경험하며 학습할 수 있었습니다.",
        "AI 모델 결과를 프론트로 연동하는 구조를 직접 설계하고, 상태 변화에 따른 UI 반응을 최적화하는 경험을 통해 AI 기반 서비스의 데이터 흐름 전체 구조에 대한 이해를 할 수 있었습니다.",
        "단순한 뷰 설계를 넘어, AI 결과 → 데이터 Store → UI 연동 흐름 전체를 주도적으로 설계하며, 재사용 가능한 설계 패턴을 학습하였습니다."
      ]
    },
    categories: ["ai", "frontend"]
  },

  {
    id: "ott-movie-recommender",
    title: "OTT 정보 및 커뮤니티 기반 영화 추천 서비스",
    description: "OTT별 영화 정보를 제공하고, 코사인 유사도 기반 추천, CNN 닮은꼴 배우 추천, 생성형 AI 포스터 제작을 결합한 영화 추천 커뮤니티 플랫폼입니다.",
    image: "/project/motis/main.PNG?height=300&width=500",
    images:["/project/motis/result.PNG"],
    frontendTech: ["Flutter", "OAuth", "Chart library"],
    backendTech: ["Django"],
    aiTech: ["Tensorflow", "Django", "Pandas", "NumPy", "OpenCV", "Cosine Similarity", "CNN"],
    overview: "OTT 플랫폼별 영화 정보를 한눈에 제공하고, 사용자 취향 기반의 영화 추천 기능과 커뮤니티 참여를 통해 더 풍부한 영화 경험을 제공하는 웹 기반 영화 추천 서비스입니다.",
    planning: "OTT 사용자들의 다양한 취향과 니즈를 반영한 개인화 영화 추천 서비스가 부족하다는 점에 착안하여, 커뮤니티 기반 추천과 시각적으로 흥미로운 콘텐츠를 함께 제공하는 서비스를 기획하게 되었습니다.",
    challenge: "사용자 취향을 수치화해 정확히 추천하는 알고리즘 구현과 함께, 추천 결과의 설명 가능성과 시각적 매력을 동시에 고려해야 했습니다. 또한 닮은꼴 배우 추천 및 포스터 생성이라는 창의적 요소를 기술적으로 실현하는 것이 도전이었습니다.",
    solution: "코사인 유사도 기반의 추천 알고리즘에 사용자 선호 장르 가중치를 적용해 직관성과 다양성을 확보했으며, CNN 기반 얼굴 유사도 모델을 통해 닮은꼴 배우 추천 기능을 구현했습니다. 생성형 AI를 통해 입력 키워드 기반의 커스텀 포스터를 제공해 사용자 흥미를 유도했습니다.",
    result: "기존 추천 서비스보다 시각적 매력과 인터랙션 요소가 강화되었고, 사용자 피드백을 통해 만족도와 콘텐츠 참여율이 높아졌습니다. 추천 결과에 대한 설명이 가능해 사용자 신뢰도도 증가했습니다.",
    ai: {
      images:["/project/motis/ai1.PNG","/project/motis/ai2.PNG","/project/motis/ai3.PNG"],
      description: "코사인 유사도 기반 추천, CNN 모델 기반 닮은꼴 배우 추천, 생성형 AI 포스터 생성 기능을 개발하고 Django로 모델 서빙을 담당했습니다.",
      responsibilities: [
        "장르, 감독, 배우 메타데이터를 활용한 영화 간 유사도 계산 및 추천 알고리즘 설계",
        "CNN 기반 얼굴 특징 추출 및 배우 데이터셋 매칭을 통한 닮은꼴 배우 추천 모델 개발",
        "사용자 키워드 기반의 생성형 AI 포스터 생성 기능 구현",
        "Django 기반 AI 서빙 서버 구성 및 Vue와 연동되는 API 응답 구조 설계"
      ],
      tech: ["Tensorflow", "Django", "Pandas", "NumPy", "OpenCV", "Cosine Similarity", "CNN"],
      troubleshooting: [
        {
          problem: "사용자 얼굴 입력 이미지의 해상도 및 배경 다양성으로 인해 CNN 특성 추출 정확도가 저하되었습니다.",
          solution: "이미지 전처리 단계에서 얼굴 탐지 및 정렬, 밝기 정규화 과정을 도입하여 입력 통일시켰습니다.",
        
        },
        {
          problem: "추천 로직에서 유사도 기반 추천 결과가 반복되거나 직관적이지 않은 문제가 발생했습니다.",
          solution: "코사인 유사도 외에 선호 장르 기반 가중치를 추가 적용해 복합 유사도 계산했습니다.",
   
        }
      ],
      growth: [
        "CNN 기반 얼굴 유사도 추정 모델을 설계하고, 다양한 입력 데이터의 정규화를 경험하며 딥러닝 실전 적용 역량을 높였습니다.",
        "Django 내에서 AI 모델 결과를 Vue.js 프론트와 연동하는 API 구조를 설계하며 엔드-투-엔드 시스템 개발 경험을 확장할 수 있었습니다.",
        "영화 메타데이터 기반 추천 시스템의 다양성과 정밀도를 개선하기 위해 피처 엔지니어링과 유사도 가중치 보정을 적용하였고, 이를 통해 추천 알고리즘에 대한 실질적 이해도를 향상시켰습니다."
      ]
    },
    frontend: {
      images:["/project/motis/fr1.PNG","/project/motis/back.PNG"],
      description: "Vue.js를 활용한 전체 UI 구현과 비동기 기반 댓글/좋아요 기능을 포함한 커뮤니티 기능 개발을 담당했습니다.",
      responsibilities: [
        "Vue.js 기반 영화 목록, 추천 결과, 닮은꼴 배우, 포스터 공유 등 주요 페이지 구현",
        "Django REST API와 연결된 좋아요, 댓글 기능 비동기 처리 구현",
        "Serializer 기반 데이터 구조에 맞춰 Vue 컴포넌트 상태 설계 및 업데이트 흐름 구성",
        "영화 상세 → 좋아요/댓글 → 커뮤니티 소통으로 이어지는 사용자 흐름을 고려해, 각 화면 간 연계 동선을 설계하고 구현"
      ],
      tech: ["Vue.js", "Axios", "Scoped CSS", "Django REST Framework"],
      troubleshooting: [
        {
          problem: "비동기 좋아요/댓글 기능에서 사용자 상태와 UI 반영 타이밍 불일치가 발생했습니다.",
          solution: "Axios 요청 후 응답을 기반으로 상태 업데이트를 분리하고, optimistic UI 방식으로 처리했습니다.",
          result: "반영 속도가 개선되어 좋아요와 댓글이 바로 적용되었습니다."
        }
      ],
      growth: [
        "Vue.js를 활용한 SPA 구조 설계와 Django 백엔드와의 API 연동 경험을 통해, 프론트엔드 아키텍처 및 데이터 흐름에 대한 실질적 이해를 높일 수 있었습니다.",
        "비동기 처리 로직에서 사용자 반응성과 UI 상태의 일관성을 함께 고려하는 설계를 경험하며, 실무 수준의 UI 개발 역량을 강화할 수 있었습니다"
      ]
    },
    backend: {
      description: "Django 기반 RESTful API를 설계하고 AI 모델 결과를 프론트엔드에 안정적으로 전달하기 위한 데이터 흐름과 연동 구조를 구축하였습니다.",
      responsibilities: [
        "Django 기반 RESTful API 설계 및 모델 서빙 구조 구축",
        "Vue 프론트엔드와 연동되는 영화 추천, 배우 유사도, 포스터 생성 API 개발",
        "데이터베이스 스키마 설계 및 영화, 사용자 메타데이터 모델링",
        "인증, 요청 유효성 검사, 예외처리 로직 처리"
      ],
      tech: ["Django", "Django REST Framework", "SQLite"],
      features: [
        "유저 인증 및 세션 관리 기능 구현",
        "추천, 배우 분석, 포스터 생성에 대한 AI 결과 반환 API 개발",
        "관리자 페이지를 통한 추천 로그 및 유저 행동 분석 관리 기능"
      ],
      troubleshooting: [
        {
          problem: "AI 모델 추론 시간이 길어, 응답 대기 중 사용자 인터페이스가 멈춘 듯한 인상을 주는 문제가 발생함",
          solution: "프론트엔드와 연동 시 로딩 UI를 추가하고, 요청 상태에 따라 사용자에게 진행 상황을 안내하는 메시지를 구현함",
        }
      ],
      growth: [
        "Django와 외부 AI 모델 간의 데이터 연동 및 비동기 흐름을 구조적으로 설계하며, 백엔드-ML 파이프라인 통합 설계 역량을 키울 수 있었습니다.",
        "REST API 성능 개선과 프론트엔드(Vue)와의 비동기 연동 경험을 통해 엔드 투 엔드 서비스 아키텍처 설계 능력을 강화할 수 있었습니다."
      ]
    },
    categories: ["ai", "frontend","backend"]
  },
  
  

  {
    id: "assembly-motion-recognition",
    title: "멀티모달 딥러닝 기반 작업자 동작 인식 시스템",
    description: "센서 데이터와 영상 데이터를 융합한 멀티모달 딥러닝으로 작업자 동작 인식 및 패턴 분석을 수행하는 시스템입니다.",
    image: "/project/cn1/main.PNG?height=300&width=500",
    images:["/project/cn1/result.PNG"],
    backendTech: ["Android Studio", "SensorManager", "File I/O, Timestamp"],
    aiTech: ["CNN", "LSTM", "PrefixSpan", "TensorFlow"],
    overview: "작업자들의 조립 공정 동작순서와 패턴, 숙련도를 분석하는 멀티모달 딥러닝 기반 동작 인식 시스템입니다. 센서와 영상 데이터를 융합하여 93%의 인식 정확도를 달성했습니다.",
    planning: "작업자별 동작 순서와 숙련도 차이를 분석하여 작업 효율성과 안전성을 향상시키기 위한 시스템을 기획했습니다. 반복 작업 환경에서 발생할 수 있는 비효율적 동작이나 리스크를 사전에 분석하고, 이를 기반으로 공정 개선에 활용할 수 있도록 멀티모달 AI 기반 접근 방식을 채택하였습니다.",
    challenge: "작업자의 다양한 동작 패턴을 분류하고, 시간 축 기반의 정확한 인식을 위해 센서와 영상 데이터를 동기화 처리하는 것이 핵심 과제였습니다. 특히 작업자의 움직임이 유사하더라도 속도·정확도 등의 미세 차이를 인식하는 정교한 모델링이 요구되었습니다.",
    solution: "Android Studio와 갤럭시 워치를 활용하여 데이터를 수집하고, CNN-LSTM 기반 멀티모달 모델을 개발했습니다. PrefixSpan 알고리즘을 활용하여 작업 패턴을 분석하고, 데이터 전처리를 통해 센서와 영상 데이터를 효과적으로 융합했습니다.",
    result: "정확도 93%의 멀티모달 모델을 통해 작업자 동작 자동 분석과 숙련도 평가 시스템의 실현 가능성을 확인했습니다. 분석 결과는 작업 교육, 품질관리, 이상 행동 탐지 등 다양한 산업 현장에 확장 가능성이 있습니다.",
    ai: {
      images:["/project/cn1/ai1.PNG","/project/cn1/ai2.PNG"],
      description: "센서와 영상 데이터를 융합한 멀티모달 딥러닝 모델을 설계하고, 작업 패턴 분석을 위한 알고리즘을 개발했습니다.",
      responsibilities: [
        "CNN 및 LSTM을 활용한 멀티모달 딥러닝 모델 설계 및 학습",
        "센서 데이터와 영상 데이터 융합 및 최적화",
        "작업자의 행동 순서를 시퀀스로 변환한 후, PrefixSpan으로 반복 패턴 및 효율성 높은 동작 시퀀스를 도출",
        "작업자 숙련도 및 효율성 분석 알고리즘 개발"
      ],
      tech: ["CNN", "LSTM", "PrefixSpan", "Python", "TensorFlow", "OpenCV"],
      troubleshooting: [
        {
          problem: "센서와 영상 데이터의 동기화 문제로 인한 정확도 저하",
          solution: "시간 단위 동기화와 보간법을 활용하여 두 데이터 소스를 정확히 매칭했습니다.",
          result: "융합 데이터의 품질 향상으로 인식 정확도가 개선되었습니다."
        },
        {
          problem: "작업자별 패턴 차이로 인한 모델 일반화 어려움",
          solution: "개인별 특성을 고려한 데이터 전처리와 모델 파라미터 최적화를 진행했습니다.",
          result: "다양한 작업자 패턴에 대한 견고한 인식 성능을 확보했습니다."
        }
      ],
      growth: [
        "센서와 영상 데이터 동기화를 통해 모델 정확도를 93%까지 향상시키는 경험을 통해, 데이터 전처리의 중요성과 멀티모달 처리 역량을 강화하였습니다.",
        "시계열 데이터와 영상 데이터의 동기화 중요성을 이해했습니다.",
        "작업 패턴 분석 알고리즘 설계 역량을 강화했습니다.",
        "본 프로젝트 결과는 OO 학술대회 논문으로 발표되었으며, 실제 산업 현장의 데이터 기반 모델링 사례로 인정받았습니다."
      ]
    },
    backend: {
      images:["/project/cn1/fr1.PNG"],
      "description": "Android Studio를 활용하여 센서 데이터 수집 앱을 개발하고 유지보수했습니다.",
      "responsibilities": [
        "Android Studio 기반 센서 데이터 수집 앱 개발",
        "Galaxy Watch 연동 센서(가속도, 자이로 등) 데이터를 실시간 수집",
        "영상 데이터와의 동기화를 위한 시간 스탬프 기반 구조 설계"
      ],
      tech: ["Android Studio", "SensorManager", "File I/O, Timestamp"],
      troubleshooting: [
        {
          "problem": "센서 수집 주기 불일치로 타임스탬프 정렬이 어긋나 데이터 동기화 정확도 저하",
          "solution": "센서 수집 간격을 고정하고, 초단위 타임스탬프 로깅 및 라벨링 구조를 설계했습니다.",
        }
      ],
      growth: [
        "센서 데이터를 효율적으로 수집하고 안정적으로 저장하는 로직을 설계하며, 모바일 환경에서의 실시간 데이터 처리 구조에 대한 이해도를 높였습니다.",
      ]
    },
    categories: ["ai", "backend"]
  },
  {
    id: "posture-recognition-app",
    title: "멀티모달 딥러닝 기반 실시간 자세 인식 앱",
    description: "핸드폰 센서와 영상 데이터를 융합하여 사용자의 자세를 93.65% 정확도로 인식하고, RabbitMQ 서버를 통해 실시간으로 데이터를 전송하는 Flutter 기반 앱입니다.",
    image: "/project/cn2/main.PNG?height=300&width=500",
    images:["/project/cn2/result.PNG"],
    frontendTech: ["Flutter", "Dart", "RabbitMQ", "Firebase"],
    backendTech: [],
    aiTech: ["3D CNN", "LSTM", "1D CNN", "TensorFlow"],
    overview: "이 프로젝트는 스마트폰 센서와 카메라 영상을 활용하여 사용자의 자세를 정밀하게 인식하고, 이를 기반으로 올바른 자세 유지와 작업 효율 향상을 지원하는 멀티모달 딥러닝 기반 실시간 자세 인식 앱입니다. Flutter 앱으로 센서와 영상 데이터를 수집하고, 디바이스 내 모델을 통해 분석 후 RabbitMQ 서버에 실시간 전송합니다.",
    planning: "자세 인식의 정확도를 높이기 위해 센서와 영상 데이터를 결합하는 멀티모달 딥러닝 접근 방식을 기획하였습니다. 특히 앉는 자세와 눕는 자세처럼 유사한 패턴의 구분, 데이터 부족 문제, 그리고 실시간 인식 및 전송 기능을 해결하기 위한 통합 시스템 설계를 목표로 하였습니다.",
    challenge: "기존 유니모달 모델은 유사한 자세를 구분하는 데 어려움이 있었고, 80% 이하의 낮은 인식 정확도를 보였습니다. 또한 센서와 영상 데이터를 실시간으로 동기화하고 처리하는 구조를 구현하는 데 기술적 복잡성이 있었습니다.",
    solution: "3D CNN, LSTM, 1D CNN을 조합한 멀티모달 딥러닝 모델을 설계하고, 센서와 영상 데이터를 시간 단위로 동기화하여 정확도를 개선하였습니다. Flutter 앱 내 디바이스에 모델을 탑재하고, RabbitMQ를 통해 실시간으로 데이터를 전송하여 안정적인 서비스 구조를 구현하였습니다.",
    result: "최종적으로 멀티모달 딥러닝 모델을 통해 93.65%의 자세 인식 정확도를 달성하였고, 유니모달 대비 약 15% 이상의 성능 개선을 이루었습니다. 실시간 전송 및 안정적인 UI 구현으로 산업 현장 적용 가능성을 확인할 수 있었습니다.",
    ai: {
      images:["/project/cn2/ai3.PNG","/project/cn2/ai2.PNG","/project/cn2/ai4.PNG","/project/cn2/ai5.PNG"],
      description: "시간 기반 동기화와 증강 기법으로 고품질 데이터셋을 구축하였고, 멀티모달 모델로 최종 93.65%의 자세 인식 정확도를 달성했습니다.",
      responsibilities: [
        "3D CNN, LSTM, 1D CNN 등 다양한 딥러닝 모델 설계 및 학습",
        "센서 데이터와 영상 데이터의 효과적인 융합 방식 연구",
        "데이터 증강 기법을 통한 학습 데이터 다양화",
        "실시간 자세 인식을 위한 모델 최적화"
      ],
      tech: ["3D CNN", "LSTM", "1D CNN", "TensorFlow", "Data Augmentation", "Python"],
      troubleshooting: [
        {
          problem: "영상 및 센서 데이터 동기화 어려움",
          solution: "시간 기반 동기화 알고리즘 개발 및 직접 라벨링을 통한 데이터 매칭을 수행했습니다.",
          result: "높은 정확도의 융합 데이터셋을 구축했습니다."
        },
        {
          problem: "유사 자세(앉기, 눕기) 구분 어려움",
          solution: "영상 프레임 간의 움직임 분포 및 자세 변화량 분석을 통해 보완적 인식 구조를 도입했습니다.",
          result: "유사 자세 간 구분 정확도를 향상시켰습니다."
        }
      ],
      growth: [
        "멀티모달 데이터 융합과 실시간 처리 중심의 모델 설계, CNN+LSTM 구조 최적화 경험을 통해 실무 활용 가능한 AI 시스템 구축 역량을 향상시켰습니다.",
        "또한 데이터 증강(회전, 스케일링, 노이즈 삽입 등)과 디바이스 탑재 최적화를 통해 현장 중심 AI 개발 능력을 강화했습니다.",
      ]
    },
    frontend: {
      images:["/project/cn2/f3.PNG","/project/cn2/f1.PNG","/project/cn2/f2.PNG"],
      "description": "Flutter 기반 실시간 자세 인식 앱을 개발하고, RabbitMQ 서버와 연동하여 데이터를 전송하는 시스템을 구현했습니다.",
      "responsibilities": [
        "Flutter 기반 자세 인식 앱 개발",
        "실시간 자세 데이터 시각화 UI 구현",
        "RabbitMQ 서버 연동 및 데이터 전송 로직 개발",
        "센서 데이터 수집 및 전처리 모듈 구현"
      ],
      tech: ["Flutter", "Dart", "RabbitMQ"],
      troubleshooting: [
        {
          problem: "앱 장시간 사용 시 불필요한 화면 출력으로 인한 리소스 소모 및 발열 가능성이 있었습니다.",
          solution: "일정 시간 경과 후 화면을 검정 배경으로 전환하여 GPU 렌더링과 밝기 출력을 최소화했습니다.",
          result: "앱을 종료하지 않고도 리소스 효율을 개선하며, 장시간 실행 안정성을 확보했습니다."
        },
      ],
      growth: [
        "실시간 데이터 처리 및 시각화 앱 개발 역량을 강화했습니다.",
        "메시지 큐 기반 데이터 전송 아키텍처 설계 경험을 쌓았습니다.",
      ]
    },
    categories: ["ai", "frontend"]
  },
  {
    id: "infant-health-monitoring",
    title: "영유아 스마트 밴드 데이터 기반 건강 분석 및 웹 보고서",
    description: "스마트 밴드로 수집한 영유아 활동 데이터를 K-means와 Z-Score 기반으로 분석하고, 맞춤형 권장 운동량을 제공하는 웹 보고서 서비스입니다.",
    image: "/project/kids/main.PNG?height=300&width=500",
    images:["/project/kids/result.PNG"],
    frontendTech: ["HTML/CSS", "JavaScript", "Chart.js"],
    aiTech: ["K-Means", "Z-Score", "Scikit-learn", "Pandas"],
    overview: "스마트 밴드를 활용해 영유아의 활동 데이터를 수집하고, 이를 분석하여 학부모와 선생님에게 아이들의 건강 상태를 시각적으로 제공하는 웹 보고서 서비스입니다.",
    planning: "영유아의 건강 상태를 객관적으로 측정하고 관리하기 위해 스마트 밴드 데이터 기반 분석 시스템을 기획했습니다. 특히 데이터를 학부모와 선생님이 쉽게 이해할 수 있도록 직관적인 웹 보고서 형태로 제공하는 것을 목표로 했습니다.",
    challenge: "영유아의 데이터 수집이 어렵고, 수집된 데이터를 의미 있는 정보로 변환하여 학부모와 선생님에게 직관적으로 전달하는 것이 주요 도전 과제였습니다.",
    solution: "워치 밴드를 아이들이 흥미를 느끼도록 제작하여 데이터 수집을 유도하고, K-Means로 활동량을 유사한 군집으로 분류하고, Z-Score를 통해 통계적으로 유의미한 이상치를 탐지했습니다. 또한 Django 웹 프레임워크를 활용하여 월·주·일 단위 활동량, 이상 탐지 결과, 권장 운동량 등을 시각화하여 보고서 형태로 제공했습니다.",
    result: "설문조사에서 학부모 및 선생님 만족도 70%를 기록했으며, 월별/주별 활동량과 권장 운동량 비교를 통해 아동 개별 건강 상태를 효과적으로 관리할 수 있었습니다.",
    ai: {
      images:["/project/kids/ml.PNG"],
      description: "K-Means 군집화와 Z-Score 기반 이상 탐지를 활용하여 영유아 활동 데이터를 분석하고, 나이별 평균 활동량과 주간 추이를 기반으로 권장 운동량을 계산하고, 개인별 편차를 반영한 추천 로직을 설계했습니다.",
      responsibilities: [
        "K-Means 기반 활동 패턴 군집화 알고리즘 개발",
        "Z-Score 기반 이상 탐지 시스템 구현",
        "나이별, 반별, 개별 활동 패턴 분석",
        "권장 운동량 계산 및 추천 알고리즘 설계"
      ],
      tech: ["Python", "Scikit-learn", "K-Means", "Z-Score", "Pandas", "NumPy"],
      troubleshooting: [
        {
          problem: "영유아의 착용 거부 및 수집 환경 조성의 어려움",
          solution: "아이들이 자발적으로 착용하도록 워치 밴드를 친근한 디자인으로 꾸미고 스티커를 활용해 흥미를 유도했습니다.",
          result: "안정적인 데이터 수집 환경을 구축했습니다."
        },
        {
          problem: "같은 나이여도 개월 수에 따른 발달 차이 반영 필요",
          solution: "개인별 평균 데이터 중심의 분석 방식을 도입했습니다.",
          result: "개인 맞춤형 활동 패턴 분석 및 권장 운동량을 제공했습니다."
        }
      ],
      growth: [
        "영유아 데이터 기반 건강 관리 시스템 개발 경험을 쌓았습니다.",
        "군집화 및 이상 탐지 알고리즘의 실질적 적용 역량을 강화했습니다.",
        "분석 결과를 Django 웹페이지에 시각적으로 연동하며, 사용자 대상 데이터 전달 경험도 함께 축적했습니다."
      ]
    },
    frontend: {
      images:["/project/kids/f1.PNG","/project/kids/f2.PNG"],
      description: "Django 웹 프레임워크를 활용하여 영유아 활동 데이터를 시각화하고, 학부모와 선생님이 쉽게 이해할 수 있는 보고서 페이지를 개발했습니다.",
      responsibilities: [
        "Django 기반 웹 보고서 페이지 개발",
        "활동 데이터 시각화 컴포넌트 구현",
        "월간, 주간, 일간 보고서 인터페이스 설계",
        "반별 및 나이별 비교 기능 개발"
      ],
      tech: ["HTML/CSS", "Chart.js", "Bootstrap"],
      troubleshooting: [
        {
          "problem": "복잡한 데이터를 직관적으로 표현하는 어려움",
          "solution": "사용자 경험을 고려한 시각화 방식 선택 및 설명 요소를 보강했습니다.",
          "result": "학부모와 선생님의 데이터 이해도를 향상시켰습니다."
        }
      ],
      growth: [
        "교육 도메인 데이터의 시각화 기획 및 프론트엔드 구현 역량을 강화했습니다.",
        "사용자 중심 인터페이스 설계 경험을 쌓았습니다."
      ]
    },
    "categories": ["ai", "frontend"]
  }
  
]
