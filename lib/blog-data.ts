export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  author: {
    name: string
    avatar: string
    role: string
  }
  publishedAt: string
  readTime: number
  category: string
  tags: string[]
  image: string
  featured: boolean
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Future of Digital Payments: Trends to Watch in 2024",
    slug: "future-digital-payments-2024",
    excerpt: "Explore the latest trends shaping the digital payments landscape, from AI-powered fraud detection to cryptocurrency integration.",
    content: "Full content here...",
    author: {
      name: "Sarah Chen",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      role: "CEO & Co-Founder"
    },
    publishedAt: "2024-01-15",
    readTime: 8,
    category: "Industry Insights",
    tags: ["Digital Payments", "AI", "Cryptocurrency", "Fintech"],
    image: "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true
  },
  {
    id: "2",
    title: "How to Reduce Payment Processing Costs for Your Business",
    slug: "reduce-payment-processing-costs",
    excerpt: "Learn practical strategies to minimize payment processing fees while maintaining security and customer experience.",
    content: "Full content here...",
    author: {
      name: "Michael Rodriguez",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      role: "CTO & Co-Founder"
    },
    publishedAt: "2024-01-10",
    readTime: 6,
    category: "Business Tips",
    tags: ["Cost Optimization", "Payment Processing", "Business Strategy"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: false
  },
  {
    id: "3",
    title: "PCI DSS Compliance: A Complete Guide for Merchants",
    slug: "pci-dss-compliance-guide",
    excerpt: "Everything you need to know about PCI DSS compliance requirements and how to maintain security standards.",
    content: "Full content here...",
    author: {
      name: "Emily Johnson",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      role: "VP of Security"
    },
    publishedAt: "2024-01-05",
    readTime: 12,
    category: "Security",
    tags: ["PCI DSS", "Compliance", "Security", "Data Protection"],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true
  },
  {
    id: "4",
    title: "Mobile Payment Trends: What Consumers Want in 2024",
    slug: "mobile-payment-trends-2024",
    excerpt: "Discover the latest mobile payment preferences and how businesses can adapt to meet consumer expectations.",
    content: "Full content here...",
    author: {
      name: "David Kim",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      role: "VP of Product"
    },
    publishedAt: "2023-12-28",
    readTime: 7,
    category: "Mobile Payments",
    tags: ["Mobile Payments", "Consumer Trends", "UX", "Technology"],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: false
  },
  {
    id: "5",
    title: "API Integration Best Practices for Payment Systems",
    slug: "api-integration-best-practices",
    excerpt: "Technical guide for developers on implementing secure and efficient payment API integrations.",
    content: "Full content here...",
    author: {
      name: "Alex Thompson",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      role: "Senior Developer"
    },
    publishedAt: "2023-12-20",
    readTime: 10,
    category: "Development",
    tags: ["API", "Integration", "Security", "Best Practices"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: false
  },
  {
    id: "6",
    title: "Global Payment Methods: Expanding Your Business Internationally",
    slug: "global-payment-methods-guide",
    excerpt: "A comprehensive guide to international payment methods and strategies for global expansion.",
    content: "Full content here...",
    author: {
      name: "Maria Santos",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      role: "International Business Manager"
    },
    publishedAt: "2023-12-15",
    readTime: 9,
    category: "Global Expansion",
    tags: ["International", "Global Payments", "Expansion", "Localization"],
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: false
  },
  {
    id: "7",
    title: "Understanding Payment Gateways: How They Work and Why They Matter",
    slug: "understanding-payment-gateways",
    excerpt: "A deep dive into payment gateway technology and its critical role in modern e-commerce.",
    content: "Full content here...",
    author: {
      name: "James Wilson",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      role: "Technical Architect"
    },
    publishedAt: "2023-12-10",
    readTime: 11,
    category: "Technical",
    tags: ["Payment Gateways", "E-commerce", "Technology"],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true
  },
  {
    id: "8",
    title: "The Rise of Contactless Payments: Post-Pandemic Trends",
    slug: "rise-of-contactless-payments",
    excerpt: "How the pandemic accelerated contactless payment adoption and what it means for the future.",
    content: "Full content here...",
    author: {
      name: "Lisa Zhang",
      avatar: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      role: "Market Analyst"
    },
    publishedAt: "2023-12-05",
    readTime: 7,
    category: "Industry Insights",
    tags: ["Contactless Payments", "Post-Pandemic", "Trends"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: false
  },
  {
    id: "9",
    title: "Building a Secure Payment Infrastructure: Best Practices",
    slug: "secure-payment-infrastructure",
    excerpt: "Key considerations for building a robust and secure payment processing system.",
    content: "Full content here...",
    author: {
      name: "Robert Miller",
      avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      role: "Security Lead"
    },
    publishedAt: "2023-11-28",
    readTime: 14,
    category: "Security",
    tags: ["Security", "Infrastructure", "Best Practices"],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true
  },
  {
    id: "10",
    title: "Optimizing Checkout Experience for Higher Conversion Rates",
    slug: "optimizing-checkout-experience",
    excerpt: "Strategies to reduce cart abandonment and improve conversion through better checkout flows.",
    content: "Full content here...",
    author: {
      name: "Amanda Foster",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      role: "UX Designer"
    },
    publishedAt: "2023-11-20",
    readTime: 9,
    category: "Business Tips",
    tags: ["Checkout", "Conversion", "UX"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: false
  },
  {
    id: "11",
    title: "The Impact of Open Banking on Payment Innovation",
    slug: "open-banking-payment-innovation",
    excerpt: "How open banking regulations are driving innovation in the payments industry.",
    content: "Full content here...",
    author: {
      name: "Thomas Wright",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      role: "Regulatory Affairs"
    },
    publishedAt: "2023-11-15",
    readTime: 10,
    category: "Industry Insights",
    tags: ["Open Banking", "Innovation", "Regulation"],
    image: "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: false
  },
  {
    id: "12",
    title: "Cryptocurrency Payments: Opportunities and Challenges",
    slug: "cryptocurrency-payments-opportunities",
    excerpt: "Exploring the potential and pitfalls of accepting cryptocurrency as a payment method.",
    content: "Full content here...",
    author: {
      name: "Brian Carter",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      role: "Blockchain Specialist"
    },
    publishedAt: "2023-11-10",
    readTime: 12,
    category: "Industry Insights",
    tags: ["Cryptocurrency", "Blockchain", "Payments"],
    image: "https://images.unsplash.com/photo-1620336655055-bd87ca8f1370?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true
  },
  {
    id: "13",
    title: "Fraud Prevention Strategies for E-commerce Businesses",
    slug: "fraud-prevention-ecommerce",
    excerpt: "Effective techniques to detect and prevent fraudulent transactions in online stores.",
    content: "Full content here...",
    author: {
      name: "Natalie Brooks",
      avatar: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      role: "Fraud Prevention Analyst"
    },
    publishedAt: "2023-11-05",
    readTime: 8,
    category: "Security",
    tags: ["Fraud Prevention", "E-commerce", "Security"],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: false
  },
  {
    id: "14",
    title: "Subscription Billing: Best Practices for Recurring Payments",
    slug: "subscription-billing-best-practices",
    excerpt: "How to optimize your subscription billing process for better retention and reduced churn.",
    content: "Full content here...",
    author: {
      name: "Kevin Patel",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      role: "Product Manager"
    },
    publishedAt: "2023-10-28",
    readTime: 7,
    category: "Business Tips",
    tags: ["Subscription", "Billing", "Recurring Payments"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: false
  },
  {
    id: "15",
    title: "The Role of AI in Modern Payment Processing",
    slug: "ai-modern-payment-processing",
    excerpt: "How artificial intelligence is transforming payment processing and fraud detection.",
    content: "Full content here...",
    author: {
      name: "Sophia Williams",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      role: "AI Research Lead"
    },
    publishedAt: "2023-10-20",
    readTime: 11,
    category: "Industry Insights",
    tags: ["AI", "Machine Learning", "Payment Processing"],
    image: "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true
  },
  {
    id: "16",
    title: "Cross-Border Payments: Challenges and Solutions",
    slug: "cross-border-payments-challenges",
    excerpt: "Navigating the complexities of international payments and currency conversion.",
    content: "Full content here...",
    author: {
      name: "Daniel Lee",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      role: "International Payments Specialist"
    },
    publishedAt: "2023-10-15",
    readTime: 9,
    category: "Global Expansion",
    tags: ["Cross-Border", "International", "Currency"],
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: false
  },
  {
    id: "17",
    title: "Mobile Wallet Adoption: Statistics and Trends",
    slug: "mobile-wallet-adoption-trends",
    excerpt: "Current statistics on mobile wallet usage and what to expect in the coming years.",
    content: "Full content here...",
    author: {
      name: "Olivia Martinez",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      role: "Data Analyst"
    },
    publishedAt: "2023-10-10",
    readTime: 6,
    category: "Mobile Payments",
    tags: ["Mobile Wallets", "Statistics", "Trends"],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: false
  },
  {
    id: "18",
    title: "Payment Reconciliation: Automating Your Financial Processes",
    slug: "payment-reconciliation-automation",
    excerpt: "How to streamline payment reconciliation and reduce manual accounting work.",
    content: "Full content here...",
    author: {
      name: "Jason Brown",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      role: "Financial Systems Architect"
    },
    publishedAt: "2023-10-05",
    readTime: 8,
    category: "Business Tips",
    tags: ["Reconciliation", "Automation", "Accounting"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: false
  },
  {
    id: "19",
    title: "The Evolution of Payment Security Standards",
    slug: "evolution-payment-security-standards",
    excerpt: "A historical look at how payment security has evolved to meet new threats.",
    content: "Full content here...",
    author: {
      name: "Rachel Green",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      role: "Security Historian"
    },
    publishedAt: "2023-09-28",
    readTime: 10,
    category: "Security",
    tags: ["Security Standards", "History", "Compliance"],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true
  },
  {
    id: "20",
    title: "Choosing the Right Payment Provider for Your Business",
    slug: "choosing-right-payment-provider",
    excerpt: "Key factors to consider when selecting a payment processing partner.",
    content: "Full content here...",
    author: {
      name: "Mark Taylor",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      role: "Business Consultant"
    },
    publishedAt: "2023-09-20",
    readTime: 7,
    category: "Business Tips",
    tags: ["Payment Providers", "Selection", "Business"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: false
  }
];

export const categories = [
  "All",
  "Industry Insights",
  "Business Tips",
  "Security",
  "Mobile Payments",
  "Development",
  "Global Expansion",
]

export const tags = [
  "Digital Payments",
  "AI",
  "Cryptocurrency",
  "Fintech",
  "Cost Optimization",
  "Payment Processing",
  "Business Strategy",
  "PCI DSS",
  "Compliance",
  "Security",
  "Data Protection",
  "Mobile Payments",
  "Consumer Trends",
  "UX",
  "Technology",
  "API",
  "Integration",
  "Best Practices",
  "International",
  "Global Payments",
  "Expansion",
  "Localization",
]
