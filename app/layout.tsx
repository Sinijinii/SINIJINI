import "./globals.css"
import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: "시니지니 포트폴리오",
  description: "AI/프론트/백엔드 개발 경험을 담은 포트폴리오입니다.",
  openGraph: {
    title: "시니지니 포트폴리오",
    description: "AI/프론트/백엔드 개발 경험을 담은 포트폴리오입니다.",
    url: "https://sinijinii.github.io/SINIJINI/",
    siteName: "신희진 포트폴리오",
    images: [
      {
        url: "https://sinijinii.github.io/SINIJINI/Thumbnail/Thumbnail.png?v=5", // v=5 캐시 우회용
        width: 1200,
        height: 630,
        alt: "신희진 포트폴리오 섬네일",
      },
    ],
    type: "website",
  },
  metadataBase: new URL("https://sinijinii.github.io"),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        {/* Pretendard 폰트 */}
        <link
          rel="stylesheet"
          as="style"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.8/dist/web/static/pretendard-dynamic-subset.css"
        />
        {/* 명시적으로 OG 메타 태그를 직접 삽입 (Next.js가 놓칠 경우 대비) */}
        <meta property="og:title" content="신희진 포트폴리오" />
        <meta property="og:description" content="AI/프론트/백엔드 개발 경험을 담은 포트폴리오입니다." />
        <meta property="og:image" content="https://sinijinii.github.io/SINIJINI/Thumbnail/Thumbnail.png?v=5" />
        <meta property="og:url" content="https://sinijinii.github.io/SINIJINI/" />
        <meta property="og:type" content="website" />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
