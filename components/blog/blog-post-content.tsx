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
    post.content = `
# How to Reduce Payment Processing Costs for Your Business

Payment processing costs can significantly impact your bottom line. Here are proven strategies to reduce these expenses while maintaining excellent service quality.

## Understanding Payment Processing Fees

Before optimizing costs, it's crucial to understand the different types of fees:

- **Interchange fees**: Set by card networks
- **Assessment fees**: Charged by card brands
- **Processor markup**: Your payment processor's profit margin

## Optimization Strategies

### 1. Choose the Right Pricing Model
- Interchange-plus pricing offers transparency
- Flat-rate pricing provides predictability
- Tiered pricing can be costly for high-volume merchants

### 2. Optimize Your Payment Mix
- Encourage ACH and bank transfers for large transactions
- Implement surcharging where legally permitted
- Offer cash discounts to reduce card usage

### 3. Improve Authorization Rates
- Use Address Verification Service (AVS)
- Implement 3D Secure authentication
- Optimize retry logic for declined transactions

## Conclusion

By implementing these strategies, businesses can reduce payment processing costs by 15-30% while improving customer satisfaction and security.
    `,
    setIsVisible(true)
  }, [])

  return (
    <section className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
