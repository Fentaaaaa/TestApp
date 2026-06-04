"use client"

import dynamic from "next/dynamic"

const LuxuryDivider = dynamic(
  () => import("@/components/luxury-divider").then(mod => ({ default: mod.LuxuryDivider })),
  {
    ssr: false,
    loading: () => <div className="h-64 bg-gradient-to-b from-background via-primary/10 to-background" />
  }
)

export function LuxuryDividerWrapper() {
  return <LuxuryDivider />
}
