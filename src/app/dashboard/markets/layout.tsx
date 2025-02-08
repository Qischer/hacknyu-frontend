import { MarketSideBar } from "@/components/market-sidebar"
import type React from "react" // Added import for React

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen overflow-hidden">
      <MarketSideBar />
      <main className="flex-1 overflow-y-auto p-4">{children}</main>
    </div>
  )
}

