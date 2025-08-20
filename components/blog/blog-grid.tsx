"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User, ArrowRight } from "lucide-react"
import Link from "next/link"
import { blogPosts, categories } from "@/lib/blog-data"

export function BlogGrid() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [displayedPosts, setDisplayedPosts] = useState(6)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const filteredPosts =
    selectedCategory === "All" ? blogPosts : blogPosts.filter((post) => post.category === selectedCategory)

  const visiblePosts = filteredPosts.slice(0, displayedPosts)
  const featuredPost = blogPosts.find((post) => post.featured)

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <div className="space-y-12">
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory(category)}
            className="transition-all duration-200"
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Featured Post */}
      {featuredPost && selectedCategory === "All" && (
        <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative h-64 lg:h-auto">
              <img
                src={featuredPost.image || "/placeholder.svg"}
                alt={featuredPost.title}
                className="w-full h-full object-cover"
              />
              <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">Featured</Badge>
            </div>
            <CardContent className="p-8 flex flex-col justify-center">
              <Badge variant="outline" className="w-fit mb-3">
                {featuredPost.category}
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold font-heading text-card-foreground mb-4 leading-tight">
                {featuredPost.title}
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">{featuredPost.excerpt}</p>
              <div className="flex items-center space-x-6 text-sm text-muted-foreground mb-6">
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>{featuredPost.author.name}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>{formatDate(featuredPost.publishedAt)}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>{featuredPost.readTime} min read</span>
                </div>
              </div>
              <Button asChild className="w-fit group">
                <Link href={`/blog/${featuredPost.slug}`}>
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </CardContent>
          </div>
        </Card>
      )}

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {visiblePosts.map((post, index) => (
          <Card
            key={post.id}
            className={`group hover:shadow-lg transition-all duration-500 delay-${index * 100} ${
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
              <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                <div className="flex items-center space-x-2">
                  <img
                    src={post.author.avatar || "/placeholder.svg"}
                    alt={post.author.name}
                    className="w-6 h-6 rounded-full object-cover"
                  />
                  <span>{post.author.name}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime} min</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">{formatDate(post.publishedAt)}</span>
                <Button variant="ghost" size="sm" asChild className="group/btn">
                  <Link href={`/blog/${post.slug}`}>
                    Read More
                    <ArrowRight className="ml-1 h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Load More Button */}
      {displayedPosts < filteredPosts.length && (
        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            onClick={() => setDisplayedPosts((prev) => prev + 6)}
            className="text-lg px-8 py-4"
          >
            Load More Articles
          </Button>
        </div>
      )}
    </div>
  )
}
