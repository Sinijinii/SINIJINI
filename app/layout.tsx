import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: "시니지니 포트폴리오",
  description: "개발자 포트폴리오",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
      <link rel="manifest" href="/site.webmanifest" />
        {/* Pretendard 폰트 */}
        <link
          rel="stylesheet"
          as="style"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.8/dist/web/static/pretendard-dynamic-subset.css"
        />

        {/* open Graph 메타 태그 */}
        <meta property="og:title" content="신희진 포트폴리오" />
        <meta property="og:description" content="AI/프론트/백엔드 개발 경험을 담은 포트폴리오입니다." />
        <meta property="og:image" content="https://sinijinii.github.io/SINIJINI/Thumbnail/Thumbnail.png" />
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
