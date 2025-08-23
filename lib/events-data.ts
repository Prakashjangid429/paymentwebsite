export interface Event {
  id: string
  title: string
  slug: string
  description: string
  fullDescription: string
  type: "webinar" | "conference" | "workshop" | "meetup"
  date: string
  time: string
  duration: number // in minutes
  location: {
    type: "online" | "in-person" | "hybrid"
    venue?: string
    address?: string
    city?: string
    country?: string
  }
  speakers: {
    name: string
    role: string
    company: string
    avatar: string
    bio: string
  }[]
  agenda: {
    time: string
    title: string
    speaker?: string
    description: string
  }[]
  price: {
    type: "free" | "paid"
    amount?: number
    currency?: string
  }
  capacity: number
  registered: number
  image: string
  tags: string[]
  featured: boolean
  registrationUrl: string
  status: "upcoming" | "ongoing" | "completed"
}

export const events: Event[] = [
  {
    id: "1",
    title: "The Future of Digital Payments Summit 2024",
    slug: "future-digital-payments-summit-2024",
    description:
      "Join industry leaders for a comprehensive look at emerging payment technologies and trends shaping the future.",
    fullDescription: `
The Future of Digital Payments Summit 2024 brings together the brightest minds in fintech to explore the cutting-edge technologies and trends that will define the next decade of payment processing.

This premier event features keynote presentations from industry pioneers, interactive panel discussions, and networking opportunities with payment professionals from around the globe. Whether you're a startup founder, enterprise executive, or technology enthusiast, this summit offers invaluable insights into the future of digital commerce.

Key topics include:
- AI and machine learning in fraud detection
- Cryptocurrency and digital asset integration
- Open banking and API ecosystems
- Regulatory compliance in a global market
- The rise of embedded finance
- Next-generation payment security

Don't miss this opportunity to connect with industry leaders, discover innovative solutions, and position your business for success in the evolving payments landscape.
    `,
    type: "conference",
    date: "2024-03-15",
    time: "09:00",
    duration: 480, // 8 hours
    location: {
      type: "hybrid",
      venue: "San Francisco Convention Center",
      address: "747 Howard St",
      city: "San Francisco",
      country: "USA",
    },
    speakers: [
      {
        name: "Sarah Chen",
        role: "CEO & Co-Founder",
        company: "Spiral Pay",
        avatar: "/professional-woman-avatar.png",
        bio: "Sarah is a fintech veteran with 15+ years of experience in payment processing and digital commerce.",
      },
      {
        name: "Michael Rodriguez",
        role: "CTO & Co-Founder",
        company: "Spiral Pay",
        avatar: "/professional-man-avatar.png",
        bio: "Michael leads Spiral Pay's technical vision and has built payment infrastructure serving millions of transactions.",
      },
      {
        name: "Dr. Emily Watson",
        role: "Head of AI Research",
        company: "TechCorp",
        avatar: "/placeholder.svg?key=speaker3",
        bio: "Dr. Watson specializes in machine learning applications for financial services and fraud detection.",
      },
    ],
    agenda: [
      {
        time: "09:00",
        title: "Registration & Welcome Coffee",
        description: "Network with fellow attendees and grab refreshments",
      },
      {
        time: "09:30",
        title: "Opening Keynote: The Payment Revolution",
        speaker: "Sarah Chen",
        description: "A comprehensive overview of how payment technologies are transforming commerce",
      },
      {
        time: "10:30",
        title: "Panel: AI in Fraud Detection",
        speaker: "Dr. Emily Watson",
        description: "Exploring how artificial intelligence is revolutionizing payment security",
      },
      {
        time: "11:30",
        title: "Coffee Break & Networking",
        description: "Connect with speakers and attendees",
      },
      {
        time: "12:00",
        title: "Technical Deep Dive: API Architecture",
        speaker: "Michael Rodriguez",
        description: "Best practices for building scalable payment APIs",
      },
      {
        time: "13:00",
        title: "Lunch & Networking",
        description: "Catered lunch with networking opportunities",
      },
      {
        time: "14:00",
        title: "Workshop: Integration Best Practices",
        description: "Hands-on session for developers and technical teams",
      },
      {
        time: "15:30",
        title: "Closing Remarks & Next Steps",
        description: "Summary of key insights and future outlook",
      },
    ],
    price: {
      type: "paid",
      amount: 299,
      currency: "USD",
    },
    capacity: 500,
    registered: 387,
    image: "/placeholder.svg?key=event1",
    tags: ["Conference", "AI", "Fintech", "Payments", "Networking"],
    featured: true,
    registrationUrl: "#register",
    status: "upcoming",
  },
  {
    id: "2",
    title: "Webinar: PCI DSS Compliance Made Simple",
    slug: "pci-dss-compliance-webinar",
    description:
      "Learn the essentials of PCI DSS compliance and how to implement security best practices for your business.",
    fullDescription: `
Join our compliance experts for an in-depth webinar on PCI DSS (Payment Card Industry Data Security Standard) compliance. This session is designed for business owners, developers, and security professionals who need to understand and implement PCI DSS requirements.

In this comprehensive webinar, you'll learn:
- Overview of PCI DSS requirements and compliance levels
- Step-by-step implementation guide
- Common compliance pitfalls and how to avoid them
- Cost-effective strategies for maintaining compliance
- Q&A session with our security experts

Whether you're just starting your compliance journey or looking to optimize your existing security measures, this webinar provides practical insights and actionable strategies to ensure your business meets all PCI DSS requirements while minimizing costs and complexity.

All attendees will receive:
- Comprehensive PCI DSS compliance checklist
- Implementation timeline template
- Access to recorded session
- Follow-up consultation opportunity
    `,
    type: "webinar",
    date: "2024-02-20",
    time: "14:00",
    duration: 60,
    location: {
      type: "online",
    },
    speakers: [
      {
        name: "Emily Johnson",
        role: "VP of Security",
        company: "Spiral Pay",
        avatar: "/professional-woman-avatar-2.png",
        bio: "Emily leads Spiral Pay's security initiatives and has extensive experience in payment compliance.",
      },
    ],
    agenda: [
      {
        time: "14:00",
        title: "Welcome & Introduction",
        speaker: "Emily Johnson",
        description: "Overview of the session and PCI DSS fundamentals",
      },
      {
        time: "14:10",
        title: "Understanding PCI DSS Requirements",
        speaker: "Emily Johnson",
        description: "Deep dive into the 12 requirements and compliance levels",
      },
      {
        time: "14:30",
        title: "Implementation Strategies",
        speaker: "Emily Johnson",
        description: "Practical approaches to achieving and maintaining compliance",
      },
      {
        time: "14:45",
        title: "Q&A Session",
        speaker: "Emily Johnson",
        description: "Live questions and answers with our security expert",
      },
    ],
    price: {
      type: "free",
    },
    capacity: 1000,
    registered: 743,
    image: "/placeholder.svg?key=event2",
    tags: ["Webinar", "Security", "Compliance", "PCI DSS"],
    featured: false,
    registrationUrl: "#register",
    status: "upcoming",
  },
  {
    id: "3",
    title: "Developer Workshop: Building Payment APIs",
    slug: "developer-workshop-payment-apis",
    description:
      "Hands-on workshop for developers to learn best practices for building secure and scalable payment APIs.",
    fullDescription: `
This intensive hands-on workshop is designed for developers who want to master the art of building secure, scalable, and efficient payment APIs. Led by our senior engineering team, this workshop combines theoretical knowledge with practical implementation.

What you'll build:
- A complete payment processing API from scratch
- Authentication and authorization systems
- Webhook handling and event processing
- Error handling and retry mechanisms
- Testing strategies for payment systems

Workshop includes:
- Pre-configured development environment
- Complete source code and documentation
- Best practices guide
- Post-workshop support and resources
- Certificate of completion

Prerequisites:
- Experience with REST APIs
- Basic knowledge of JavaScript/Node.js or Python
- Understanding of HTTP protocols
- Laptop with development environment

This workshop is perfect for:
- Backend developers
- Full-stack engineers
- Technical leads
- Anyone building payment integrations

Limited to 30 participants to ensure personalized attention and hands-on support from our instructors.
    `,
    type: "workshop",
    date: "2024-02-28",
    time: "10:00",
    duration: 360, // 6 hours
    location: {
      type: "in-person",
      venue: "Spiral Pay Headquarters",
      address: "123 Tech Street",
      city: "San Francisco",
      country: "USA",
    },
    speakers: [
      {
        name: "Alex Thompson",
        role: "Senior Developer",
        company: "Spiral Pay",
        avatar: "/placeholder.svg?key=speaker4",
        bio: "Alex is a senior developer with expertise in payment systems and API architecture.",
      },
      {
        name: "Jordan Kim",
        role: "Lead Engineer",
        company: "Spiral Pay",
        avatar: "/placeholder.svg?key=speaker5",
        bio: "Jordan leads our API development team and has built payment systems at scale.",
      },
    ],
    agenda: [
      {
        time: "10:00",
        title: "Welcome & Setup",
        description: "Introduction and development environment setup",
      },
      {
        time: "10:30",
        title: "API Design Principles",
        speaker: "Alex Thompson",
        description: "Best practices for designing payment APIs",
      },
      {
        time: "11:30",
        title: "Hands-on: Building Core API",
        speaker: "Jordan Kim",
        description: "Implementing payment processing endpoints",
      },
      {
        time: "12:30",
        title: "Lunch Break",
        description: "Catered lunch and networking",
      },
      {
        time: "13:30",
        title: "Security Implementation",
        speaker: "Alex Thompson",
        description: "Adding authentication and security measures",
      },
      {
        time: "14:30",
        title: "Webhook Integration",
        speaker: "Jordan Kim",
        description: "Implementing real-time event processing",
      },
      {
        time: "15:30",
        title: "Testing & Deployment",
        description: "Testing strategies and deployment best practices",
      },
    ],
    price: {
      type: "paid",
      amount: 199,
      currency: "USD",
    },
    capacity: 30,
    registered: 28,
    image: "/placeholder.svg?key=event3",
    tags: ["Workshop", "Development", "APIs", "Hands-on"],
    featured: false,
    registrationUrl: "#register",
    status: "upcoming",
  },
  {
    id: "4",
    title: "Fintech Meetup: Payment Innovation Showcase",
    slug: "fintech-meetup-payment-innovation",
    description:
      "Monthly meetup featuring the latest payment innovations and networking with local fintech professionals.",
    fullDescription: `
Join the Bay Area's premier fintech meetup for an evening of innovation, networking, and insights into the latest payment technologies. This month's showcase features three exciting startups presenting their groundbreaking solutions.

Featured Presentations:
1. "Revolutionizing Cross-Border Payments" - A deep dive into blockchain-based international transfers
2. "AI-Powered Personal Finance" - How machine learning is transforming financial planning
3. "The Future of Merchant Services" - Next-generation point-of-sale solutions

This meetup is perfect for:
- Fintech entrepreneurs and founders
- Payment industry professionals
- Investors and VCs
- Developers and product managers
- Anyone interested in financial innovation

What to expect:
- 3 startup presentations (10 minutes each)
- Panel discussion with Q&A
- Networking reception with drinks and appetizers
- Opportunity to connect with like-minded professionals
- Demo stations to try new products

Our meetups consistently attract 100+ professionals from leading fintech companies, startups, and investment firms. It's the perfect opportunity to stay current with industry trends, discover new solutions, and expand your professional network.

Food and drinks provided. Please bring business cards for networking!
    `,
    type: "meetup",
    date: "2024-02-15",
    time: "18:00",
    duration: 180, // 3 hours
    location: {
      type: "in-person",
      venue: "TechHub San Francisco",
      address: "1 Hacker Way",
      city: "San Francisco",
      country: "USA",
    },
    speakers: [
      {
        name: "Various Speakers",
        role: "Startup Founders",
        company: "Multiple Companies",
        avatar: "/placeholder.svg?key=speakers",
        bio: "Featured presentations from innovative fintech startups and industry leaders.",
      },
    ],
    agenda: [
      {
        time: "18:00",
        title: "Registration & Networking",
        description: "Welcome drinks and networking with attendees",
      },
      {
        time: "18:30",
        title: "Opening Remarks",
        description: "Welcome and introduction to the evening's program",
      },
      {
        time: "18:45",
        title: "Startup Presentations",
        description: "Three 10-minute presentations from innovative fintech startups",
      },
      {
        time: "19:30",
        title: "Panel Discussion & Q&A",
        description: "Interactive discussion with presenters and audience",
      },
      {
        time: "20:00",
        title: "Networking Reception",
        description: "Continued networking with food, drinks, and demo stations",
      },
    ],
    price: {
      type: "free",
    },
    capacity: 120,
    registered: 95,
    image: "/placeholder.svg?key=event4",
    tags: ["Meetup", "Networking", "Startups", "Innovation"],
    featured: false,
    registrationUrl: "#register",
    status: "upcoming",
  },
  {
    id: "5",
    title: "Global Payments Masterclass",
    slug: "global-payments-masterclass",
    description:
      "Comprehensive masterclass on international payment processing, regulations, and market expansion strategies.",
    fullDescription: `
This comprehensive masterclass is designed for businesses looking to expand internationally and navigate the complex world of global payment processing. Led by our international business experts, this session covers everything you need to know about accepting payments worldwide.

Masterclass Modules:

Module 1: Global Payment Landscape
- Overview of international payment methods
- Regional preferences and cultural considerations
- Market size and growth opportunities

Module 2: Regulatory Compliance
- International compliance requirements
- Anti-money laundering (AML) regulations
- Know Your Customer (KYC) procedures
- Data protection and privacy laws

Module 3: Technical Implementation
- Multi-currency processing
- Local payment method integration
- Currency conversion strategies
- Cross-border transaction optimization

Module 4: Risk Management
- International fraud patterns
- Chargeback management across regions
- Risk assessment frameworks
- Compliance monitoring

Module 5: Market Entry Strategies
- Phased expansion approaches
- Partnership strategies
- Localization best practices
- Success metrics and KPIs

This masterclass includes:
- Comprehensive workbook and resources
- Real-world case studies
- Interactive exercises and assessments
- Access to recorded sessions
- 30-day follow-up support
- Certificate of completion

Perfect for:
- Business development managers
- International expansion teams
- Payment operations professionals
- Compliance officers
- Executive leadership
    `,
    type: "webinar",
    date: "2024-03-05",
    time: "11:00",
    duration: 120, // 2 hours
    location: {
      type: "online",
    },
    speakers: [
      {
        name: "Maria Santos",
        role: "International Business Manager",
        company: "Spiral Pay",
        avatar: "/placeholder.svg?key=speaker6",
        bio: "Maria leads Spiral Pay's global expansion efforts and has extensive experience in international payments.",
      },
      {
        name: "David Kim",
        role: "VP of Compliance",
        company: "Spiral Pay",
        avatar: "/placeholder.svg?key=speaker7",
        bio: "David oversees compliance across multiple jurisdictions and regulatory frameworks.",
      },
    ],
    agenda: [
      {
        time: "11:00",
        title: "Welcome & Global Payment Overview",
        speaker: "Maria Santos",
        description: "Introduction to international payment processing landscape",
      },
      {
        time: "11:20",
        title: "Regulatory Compliance Deep Dive",
        speaker: "David Kim",
        description: "Understanding international compliance requirements",
      },
      {
        time: "11:50",
        title: "Technical Implementation Strategies",
        speaker: "Maria Santos",
        description: "Best practices for global payment integration",
      },
      {
        time: "12:20",
        title: "Risk Management & Market Entry",
        speaker: "David Kim",
        description: "Managing risks and planning successful market entry",
      },
      {
        time: "12:45",
        title: "Q&A and Wrap-up",
        description: "Interactive Q&A session and next steps",
      },
    ],
    price: {
      type: "paid",
      amount: 149,
      currency: "USD",
    },
    capacity: 500,
    registered: 234,
    image: "/placeholder.svg?key=event5",
    tags: ["Masterclass", "Global", "Compliance", "International"],
    featured: true,
    registrationUrl: "#register",
    status: "upcoming",
  },
  {
    id: "6",
    title: "Payment Security Best Practices Workshop",
    slug: "payment-security-workshop",
    description: "Interactive workshop covering advanced payment security techniques and threat prevention strategies.",
    fullDescription: `
In today's digital landscape, payment security is more critical than ever. This intensive workshop provides hands-on training in the latest security techniques and threat prevention strategies for payment processing systems.

Workshop Highlights:

Security Fundamentals
- Understanding the threat landscape
- Common attack vectors and vulnerabilities
- Security frameworks and standards
- Risk assessment methodologies

Advanced Protection Techniques
- Multi-factor authentication implementation
- Tokenization and encryption strategies
- Fraud detection algorithms
- Real-time monitoring systems

Hands-on Labs
- Setting up secure payment environments
- Implementing fraud detection rules
- Testing security measures
- Incident response procedures

Compliance and Governance
- PCI DSS deep dive
- GDPR and data protection
- Audit preparation and management
- Security policy development

This workshop is ideal for:
- Security professionals
- Payment system administrators
- Compliance officers
- Risk management teams
- Technical architects

What's included:
- Hands-on lab environment
- Security tools and software
- Comprehensive security checklist
- Best practices documentation
- Post-workshop consultation
- Industry certification preparation

Limited to 25 participants for maximum hands-on interaction and personalized guidance from our security experts.
    `,
    type: "workshop",
    date: "2024-03-20",
    time: "09:00",
    duration: 420, // 7 hours
    location: {
      type: "hybrid",
      venue: "Security Training Center",
      address: "456 Cyber Street",
      city: "San Francisco",
      country: "USA",
    },
    speakers: [
      {
        name: "Emily Johnson",
        role: "VP of Security",
        company: "Spiral Pay",
        avatar: "/professional-woman-avatar-2.png",
        bio: "Emily is a cybersecurity expert with over 12 years of experience in payment security.",
      },
      {
        name: "Robert Chen",
        role: "Security Architect",
        company: "Spiral Pay",
        avatar: "/placeholder.svg?key=speaker8",
        bio: "Robert designs and implements security architectures for large-scale payment systems.",
      },
    ],
    agenda: [
      {
        time: "09:00",
        title: "Registration & Welcome",
        description: "Check-in and introduction to the workshop",
      },
      {
        time: "09:30",
        title: "Security Landscape Overview",
        speaker: "Emily Johnson",
        description: "Current threats and security challenges in payments",
      },
      {
        time: "10:30",
        title: "Hands-on Lab: Threat Detection",
        speaker: "Robert Chen",
        description: "Implementing real-time threat detection systems",
      },
      {
        time: "12:00",
        title: "Lunch Break",
        description: "Networking lunch with fellow participants",
      },
      {
        time: "13:00",
        title: "Advanced Security Techniques",
        speaker: "Emily Johnson",
        description: "Tokenization, encryption, and fraud prevention",
      },
      {
        time: "14:30",
        title: "Compliance Deep Dive",
        speaker: "Robert Chen",
        description: "PCI DSS, GDPR, and regulatory requirements",
      },
      {
        time: "15:30",
        title: "Coffee Break",
        description: "Networking and refreshments",
      },
      {
        time: "16:00",
        title: "Incident Response Workshop",
        description: "Hands-on incident response and recovery procedures",
      },
    ],
    price: {
      type: "paid",
      amount: 399,
      currency: "USD",
    },
    capacity: 25,
    registered: 23,
    image: "/placeholder.svg?key=event6",
    tags: ["Workshop", "Security", "Hands-on", "Compliance"],
    featured: false,
    registrationUrl: "#register",
    status: "upcoming",
  },
]

export const eventTypes = ["all", "webinar", "conference", "workshop", "meetup"]

export const eventTags = [
  "Conference",
  "Webinar",
  "Workshop",
  "Meetup",
  "AI",
  "Security",
  "Compliance",
  "Development",
  "APIs",
  "Fintech",
  "Networking",
  "Global",
  "Innovation",
  "Hands-on",
]
