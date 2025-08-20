"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock } from "lucide-react"
import Link from "next/link"
import { blogPosts, type BlogPost } from "@/lib/blog-data"

interface RelatedPostsProps {
  currentPost: BlogPost
}

export function RelatedPosts({ currentPost }: RelatedPostsProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Get related posts based on category and tags
  const relatedPosts = blogPosts
    .filter((post) => post.id !== currentPost.id)
    .filter((post) => post.category === currentPost.category || post.tags.some((tag) => currentPost.tags.includes(tag)))
    .slice(0, 3)

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    })
  }

  if (relatedPosts.length === 0) return null

  return (
    <section className="py-16 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-card-foreground mb-4">Related Articles</h2>
          <p className="text-xl text-muted-foreground">Continue reading with these related posts</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedPosts.map((post, index) => (
            <Card
              key={post.id}
              className={`group hover:shadow-lg transition-all duration-500 delay-${index * 200} ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm text-foreground">
                  {post.category}
                </Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold font-heading text-card-foreground mb-3 leading-tight group-hover:text-primary transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <img
                      src={post.author.avatar || "/placeholder.svg"}
                      alt={post.author.name}
                      className="w-6 h-6 rounded-full object-cover"
                    />
                    <span>{post.author.name}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{formatDate(post.publishedAt)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}m</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
