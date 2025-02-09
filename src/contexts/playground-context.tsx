"use client"

import type React from "react"
import { createContext, useState, useContext } from "react"

type AppState = {
  dropdownValue: string
  textValue: string
  numValue: number
  date1Value: string
  date2Value: string
  slider1Value: number[]
  slider2Value: number[]
}

type AppContextType = {
  currentState: AppState
  draftState: AppState
  updateDraftState: (updates: Partial<AppState>) => void
  submitChanges: () => void
}

const initialState: AppState = {
  dropdownValue: "bb",
  textValue: "",
  numValue: 0,
  date1Value: "2025-01-01",
  date2Value: "2025-01-02",
  slider1Value: [50],
  slider2Value: [50],
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export function PlaygroundProvider({ children }: { children: React.ReactNode }) {
  const [currentState, setCurrentState] = useState<AppState>(initialState)
  const [draftState, setDraftState] = useState<AppState>(initialState)

  const updateDraftState = (updates: Partial<AppState>) => {
    setDraftState((prev) => ({ ...prev, ...updates }))
  }

  const submitChanges = () => {
    setCurrentState(draftState)
  }

  return (
    <AppContext.Provider
      value={{
        currentState,
        draftState,
        updateDraftState,
        submitChanges,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export function usePgContext() {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider")
  }
  return context
}

