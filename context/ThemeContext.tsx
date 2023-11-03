"use client";

import React, { useContext, useEffect, useState } from 'react'
import type { SectionName } from "@/types/types";

type Theme = 'light' | 'dark'

type ThemeContextType = {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = React.createContext<ThemeContextType | null>(null)

export default function ThemeContextProvider({children}: {children: React.ReactNode}) {
  const [theme, setTheme] = useState<Theme>('light')

  const toggleTheme = () => {
    const currentTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(currentTheme)
    localStorage.setItem('theme', currentTheme)

    if (currentTheme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  useEffect(() => {
    const localTheme = localStorage.getItem('theme') as Theme

    if (localTheme) {
      setTheme(localTheme)

      if (localTheme === 'dark') {
        document.documentElement.classList.add('dark')
      }

    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark')
      document.documentElement.classList.add('dark')
    }
  }, [])
  
  return (
    <ThemeContext.Provider value={{
      theme,
      toggleTheme
    }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)

  if (context === null) {
    throw new Error("useTheme must be used within an ThemeContextProvider")
  }

  return context
}