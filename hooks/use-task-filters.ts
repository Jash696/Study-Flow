"use client"

import { useState } from "react"
import type { Task } from "@/lib/types"

export function useTaskFilters(tasks: Task[]) {
  const [activeTab, setActiveTab] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch =
      task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (task.description || "").toLowerCase().includes(searchQuery.toLowerCase())

    if (activeTab === "Completed") return task.completed && matchesSearch
    if (activeTab === "all") return !task.completed && matchesSearch
    return task.category === activeTab && !task.completed && matchesSearch
  })

  return { activeTab, setActiveTab, searchQuery, setSearchQuery, filteredTasks }
}
