import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BlogHero } from "@/components/blog/blog-hero"
import { BlogGrid } from "@/components/blog/blog-grid"
import { BlogSidebar } from "@/components/blog/blog-sidebar"

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <main>
        <BlogHero />
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
              <div className="lg:col-span-3">
                <BlogGrid />
              </div>
              <div className="lg:col-span-1">
                <BlogSidebar />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
