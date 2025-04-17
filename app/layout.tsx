import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: "시니지니 포트폴리오",
  description: "AI/프론트/백엔드 개발 경험을 담은 포트폴리오입니다.",
  openGraph: {
    title: "신희진 포트폴리오",
    description: "AI/프론트/백엔드 개발 경험을 담은 포트폴리오입니다.",
    url: "https://sinijinii.github.io/SINIJINI/",
    type: "website",
    images: [
      {
        url: "https://sinijinii.github.io/SINIJINI/Thumbnail/Thumbnail.png?v=1", // public/SINIJINI/Thumbnail/Thumbnail.png 경로에 존재해야 함
        width: 1200,
        height: 630,
        alt: "포트폴리오 대표 이미지"
      }
    ]
  },
  metadataBase: new URL("https://sinijinii.github.io")
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          as="style"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.8/dist/web/static/pretendard-dynamic-subset.css"
        />
        {/* 추가 메타태그가 있다면 여기에 작성 가능 */}
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
