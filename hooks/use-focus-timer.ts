"use client"

import { useState } from "react"
import { toast } from "sonner"

export function useFocusTimer() {
  const [active, setActive] = useState(false)
  const [seconds, setSeconds] = useState(25 * 60)
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null)

  const start = () => {
    if (active) return
    setActive(true)
    const id = setInterval(() => {
      setSeconds((s) => {
        if (s <= 1) {
          clearInterval(id)
          setActive(false)
          toast.success("Focus session complete! 🎉 Take a break.")
          return 25 * 60
        }
        return s - 1
      })
    }, 1000)
    setIntervalId(id)
  }

  const pause = () => {
    if (intervalId) clearInterval(intervalId)
    setActive(false)
  }

  const reset = () => {
    if (intervalId) clearInterval(intervalId)
    setActive(false)
    setSeconds(25 * 60)
  }

  const fmt = `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`
  return { active, fmt, start, pause, reset }
}
