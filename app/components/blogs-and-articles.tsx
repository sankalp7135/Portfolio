import { ArrowRight, Linkedin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function BlogsAndArticles() {
  const articles = [
    {
      title: "Mark Zuckerberg : The redemption arc",
      subtitle: "From abyss to becoming a saviour in the tech world",
      excerpt:
        "In an industry where yesteryear's visionary is tomorrow's cautionary tale, Zuckerberg's third act is rewriting the playbook on tech leadership redemption",
      image: "/1727692599380.jpeg",
      link: "https://www.linkedin.com/pulse/mark-zuckerberg-redemption-arc-sankalp-arora-zqffc/?trackingId=XXmEjOXjNaMn3TYqz1vS%2Fg%3D%3D",
      readingTime: "3 min read",
      platform: "LinkedIn"
    },
    {
      title: "Linear - Product loved by teams: A Case Study",
      subtitle: "How Linear is gaining popularity in the space of project management",
      excerpt:
        "How Linear Disrupted Project Management: A Product Case Study ",
      image: "/homepage-2024.jpg",
      link: "https://www.linkedin.com/posts/sankalp-arora-736772189_productmanagement-saas-engineering-activity-7263435812493565952-x0rG?utm_source=share&utm_medium=member_desktop",
      readingTime: "2 min read",
      platform: "LinkedIn"
    },
    {
      title: "Newsletters: Underrated distribution marketing strategy",
      subtitle: "How newsletters are an excellent distribution strategy for budding founders",
      excerpt:
        "Breaking down the pros and cons of alternate distribution approaches to help you make the best choice for your team to scale and market.",
      image: "/Screenshot.png",
      link: "https://www.linkedin.com/posts/sankalp-arora-736772189_startups-growth-entrepreneurship-activity-7260915705930227712-hAxB?utm_source=share&utm_medium=member_desktop",
      readingTime: "2 min read",
      platform: "LinkedIn"
    },
  ]

  return (
    <section id="blogs" className="py-20 scroll-mt-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-16">Blogs & case studies</h2>
        <div className="space-y-20">
          {articles.map((article, index) => (
            <article key={index} className="group">
              <Link href={article.link} className="block space-y-8">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="relative aspect-[16/9] w-full md:w-72 overflow-hidden rounded-lg">
                    <Image
                      src={article.image}
                      alt=""
                      width={288}
                      height={162}
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex-1 space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Linkedin className="w-4 h-4" />
                        <span className="text-sm">Published on {article.platform}</span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold group-hover:text-primary transition-colors">
                        {article.title}
                        <ArrowRight className="inline-block ml-2 h-6 w-6 transition-transform group-hover:translate-x-2" />
                      </h3>
                      <p className="text-lg md:text-xl text-muted-foreground">{article.subtitle}</p>
                    </div>
                    <p className="text-base md:text-lg max-w-3xl">{article.excerpt}</p>
                    <p className="text-sm text-muted-foreground">{article.readingTime}</p>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

