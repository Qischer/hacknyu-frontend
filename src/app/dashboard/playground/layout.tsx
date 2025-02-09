import { PlaygroundControl } from "@/components/pgr-control"
import { PlaygroundProvider } from "@/contexts/playground-context"
import type React from "react" // Added import for React

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <PlaygroundProvider>
      <div className="flex h-screen overflow-hidden">
        <div className="w-40 p-2">
          <PlaygroundControl/>
        </div>
        <main className="flex-1 overflow-y-auto p-4">{children}</main>
      </div>
    </PlaygroundProvider>
  )
}
