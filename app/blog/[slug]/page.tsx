import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BlogPostHeader } from "@/components/blog/blog-post-header"
import { BlogPostContent } from "@/components/blog/blog-post-content"
import { RelatedPosts } from "@/components/blog/related-posts"
import { blogPosts } from "@/lib/blog-data"
import { notFound } from "next/navigation"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <main>
        <BlogPostHeader post={post} />
        <BlogPostContent post={post} />
        <RelatedPosts currentPost={post} />
      </main>
    </div>
  )
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}
