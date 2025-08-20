"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, BookOpen, TrendingUp, Users } from "lucide-react"

export function BlogHero() {
  const [isVisible, setIsVisible] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const blogStats = [
    { icon: BookOpen, value: "200+", label: "Articles" },
    { icon: TrendingUp, value: "50K+", label: "Monthly Readers" },
    { icon: Users, value: "100+", label: "Expert Authors" },
  ]

  return (
    <section className="relative pt-24 pb-20 gradient-bg overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/15 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="absolute top-16 left-16 opacity-10">
          <BookOpen className="h-12 w-12 text-primary animate-float" />
        </div>
        <div className="absolute bottom-20 right-20 opacity-10">
          <TrendingUp className="h-14 w-14 text-secondary animate-float delay-700" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 bg-primary/10 px-6 py-3 rounded-full border border-primary/20 mb-8">
              <BookOpen className="h-5 w-5 text-primary" />
              <span className="text-base font-semibold text-primary">Knowledge Hub</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black font-heading text-foreground mb-6 leading-tight">
              <span className="block">PayFlow</span>
              <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Blog
              </span>
            </h1>
          </div>

          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
            Insights, tips, and updates from the world of payment processing and fintech innovation
          </p>

          <div className="max-w-3xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-muted-foreground h-6 w-6" />
              <Input
                type="text"
                placeholder="Search articles, topics, or authors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-16 pr-32 py-6 text-lg bg-background/90 backdrop-blur-sm border-2 border-border hover:border-primary/50 focus:border-primary rounded-2xl shadow-lg"
              />
              <Button className="absolute right-3 top-1/2 transform -translate-y-1/2 px-8 py-3 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg">
                Search
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {blogStats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <stat.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <div className="text-3xl font-black text-primary mb-2">{stat.value}</div>
                <div className="text-base font-semibold text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
