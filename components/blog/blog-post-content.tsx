"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import type { BlogPost } from "@/lib/blog-data"

interface BlogPostContentProps {
  post: BlogPost
}

export function BlogPostContent({ post }: BlogPostContentProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="py-16 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Featured Image */}
          <div className="mb-12">
            <img
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <div
              className="text-foreground leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: post.content
                  .replace(/\n/g, "<br />")
                  .replace(/#{1,6}\s/g, (match) => {
                    const level = match.trim().length
                    return `<h${level} class="text-${4 - level}xl font-bold font-heading text-foreground mt-8 mb-4">`
                  })
                  .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
              }}
            />
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-lg font-semibold font-heading text-foreground mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
