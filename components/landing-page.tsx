"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { AuthModal } from "@/components/auth-modal"
import { ThemeToggle } from "@/components/theme-toggle"
import { useRouter } from "next/navigation"
import {
  CheckCircle2,
  BarChart3,
  Clock,
  Zap,
  GraduationCap,
  ArrowRight,
  Bot,
} from "lucide-react"

export function LandingPage() {
  const [authOpen, setAuthOpen] = useState(false)
  const router = useRouter()

  const handleAuthSuccess = () => {
    setAuthOpen(false)
    router.push("/dashboard")
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Nav */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-border/50">
        <div className="flex items-center gap-2">
          <div className="size-8 rounded-lg bg-primary flex items-center justify-center">
            <Zap className="size-4 text-primary-foreground" />
          </div>
          <span className="font-bold text-xl text-foreground tracking-tight">
            studyFlow
          </span>
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button variant="outline" size="sm" onClick={() => setAuthOpen(true)}>
            Sign In
          </Button>
        </div>
      </header>

      {/* Hero */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        <div className="max-w-2xl mx-auto flex flex-col items-center gap-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-primary">
            <GraduationCap className="size-4" />
            Built for students, by students
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance text-foreground leading-tight">
            Study smarter with{" "}
            <span className="text-primary">studyFlow</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-lg leading-relaxed text-pretty">
            Organize your academic tasks, track exam prep, manage coding
            practice, and hit every deadline — powered by AI prioritization
            designed for student life.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <Button
              size="lg"
              className="text-base px-8"
              onClick={() => setAuthOpen(true)}
            >
              Get Started
              <ArrowRight className="ml-2 size-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base px-8"
              onClick={() => setAuthOpen(true)}
            >
              View Demo
            </Button>
          </div>

          {/* Feature pills */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-2xl mt-4">
            <div className="flex items-center gap-3 rounded-xl border border-border bg-card p-4">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-red-500/10">
                <CheckCircle2 className="size-5 text-red-500" />
              </div>
              <div className="text-left">
                <p className="text-sm font-medium text-card-foreground">Task Tracking</p>
                <p className="text-xs text-muted-foreground">
                  Color-coded categories
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-border bg-card p-4">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/10">
                <BarChart3 className="size-5 text-blue-500" />
              </div>
              <div className="text-left">
                <p className="text-sm font-medium text-card-foreground">Analytics</p>
                <p className="text-xs text-muted-foreground">
                  Visual productivity
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-border bg-card p-4">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-orange-500/10">
                <Clock className="size-5 text-orange-500" />
              </div>
              <div className="text-left">
                <p className="text-sm font-medium text-card-foreground">Deadlines</p>
                <p className="text-xs text-muted-foreground">
                  Never miss a due date
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-border bg-card p-4">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-violet-500/10">
                <Bot className="size-5 text-violet-500" />
              </div>
              <div className="text-left">
                <p className="text-sm font-medium text-card-foreground">AI Assistant</p>
                <p className="text-xs text-muted-foreground">
                  Llama 3.3 powered
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 py-4 text-center text-sm text-muted-foreground">
        studyFlow &mdash; Stay on top of your studies.
      </footer>

      <AuthModal
        open={authOpen}
        onOpenChange={setAuthOpen}
        onSuccess={handleAuthSuccess}
      />
    </div>
  )
}
