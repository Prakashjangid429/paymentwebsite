"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Calendar, TrendingUp } from "lucide-react"
import Link from "next/link"
import { blogPosts, categories, tags } from "@/lib/blog-data"

export function BlogSidebar() {
  const recentPosts = blogPosts.slice(0, 5)
  const popularTags = tags.slice(0, 12)

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    })
  }

  return (
    <div className="space-y-8">
      {/* Search */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Search className="h-5 w-5" />
            <span>Search</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-2">
            <Input placeholder="Search articles..." />
            <Button size="sm">Go</Button>
          </div>
        </CardContent>
      </Card>

      {/* Categories */}
      <Card>
        <CardHeader>
          <CardTitle>Categories</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {categories.slice(1).map((category) => {
              const count = blogPosts.filter((post) => post.category === category).length
              return (
                <div key={category} className="flex items-center justify-between">
                  <Link
                    href={`/blog?category=${encodeURIComponent(category)}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {category}
                  </Link>
                  <Badge variant="secondary" className="text-xs">
                    {count}
                  </Badge>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Recent Posts */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Calendar className="h-5 w-5" />
            <span>Recent Posts</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentPosts.map((post) => (
              <div key={post.id} className="group">
                <Link href={`/blog/${post.slug}`}>
                  <h4 className="font-medium text-card-foreground group-hover:text-primary transition-colors leading-tight mb-1">
                    {post.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {formatDate(post.publishedAt)} • {post.readTime} min read
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Popular Tags */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="h-5 w-5" />
            <span>Popular Tags</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {popularTags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Newsletter Signup */}
      <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
        <CardHeader>
          <CardTitle>Stay Updated</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4 text-sm">
            Get the latest insights and updates delivered to your inbox.
          </p>
          <div className="space-y-3">
            <Input placeholder="Your email address" />
            <Button className="w-full">Subscribe</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
