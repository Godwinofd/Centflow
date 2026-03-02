
import React, { useState, useEffect, useRef } from 'react';

interface BlogProps {
  onNavigate: (page: string) => void;
}

const MOCK_BLOGS = [
  {
    id: "LOG-001",
    date: "MAR 10, 2024",
    title: "The Future of SEO: Why GEO Visibility is the New Standard",
    category: "SEARCH",
    excerpt: "Traditional keyword ranking is evolving. Discover how AI search engines are changing the landscape of local dominance.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "LOG-002",
    date: "MAR 08, 2024",
    title: "Maximize Your ROAS: Deep Dive into Ad Algorithms",
    category: "PAID MEDIA",
    excerpt: "Stop guessing your budget. Learn the mathematical protocols we use to ensure every dollar spent returns maximum capital.",
    img: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "LOG-003",
    date: "MAR 05, 2024",
    title: "Website Speed: The Invisible Conversion Killer",
    category: "PERFORMANCE",
    excerpt: "A 1-second delay can cost you thousands. We break down the technical infrastructure required for sub-second load times.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "LOG-004",
    date: "MAR 02, 2024",
    title: "AI Automations in Modern Marketing Funnels",
    category: "AUTOMATION",
    excerpt: "Automate your lead intake and follow-up protocols. Save 20+ hours a week with precision-engineered AI systems.",
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "LOG-005",
    date: "FEB 28, 2024",
    title: "E-commerce Growth: 5 Protocols for Scaling in 2025",
    category: "SCALING",
    excerpt: "From supply chain data to ad creative, explore the 5 pillars required for absolute market dominance in e-commerce.",
    img: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "LOG-006",
    date: "FEB 25, 2024",
    title: "Technical SEO: More Than Just Keywords",
    category: "SEARCH",
    excerpt: "Architecture matters more than content. Dive into schema, sitemaps, and indexing protocols for elite ranking.",
    img: "https://images.unsplash.com/photo-1504868584819-f8e905263543?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "LOG-007",
    date: "FEB 20, 2024",
    title: "Conversion Rate Optimization: Small Tweaks, Massive Capital",
    category: "UX/UI",
    excerpt: "Why red buttons don't always win. The psychological and data-driven approach to high-converting landing pages.",
    img: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "LOG-008",
    date: "FEB 15, 2024",
    title: "Building Brand Authority in a Crowded Digital Landscape",
    category: "STRATEGY",
    excerpt: "How to position your business as the only logical choice for your target audience through technical dominance.",
    img: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "LOG-009",
    date: "FEB 10, 2024",
    title: "Google Ads vs. Meta Ads: Which Infrastructure Wins?",
    category: "PAID MEDIA",
    excerpt: "Intent vs. Behavior. A comparative analysis of lead quality and scaling potential across major ad platforms.",
    img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "LOG-010",
    date: "FEB 05, 2024",
    title: "The Importance of a Performance-First Website Architecture",
    category: "DEVELOPMENT",
    excerpt: "Why standard templates are failing businesses. The case for custom-engineered growth engines built for ROI.",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800"
  }
];

export const Blog: React.FC<BlogProps> = ({ onNavigate }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-24 md:py-32 bg-black min-h-screen">
      <div className={`container mx-auto px-6 transition-all duration-[1500ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {MOCK_BLOGS.map((post, i) => (
            <article key={post.id} className="group relative bg-[#080808] border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-primary/50 transition-all duration-700 flex flex-col h-full shadow-2xl">
              <div className="aspect-[16/10] overflow-hidden relative">
                <img
                  src={post.img}
                  alt={post.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110 opacity-60"
                />
                <div className="absolute top-6 left-6 flex gap-2">
                  <span className="px-3 py-1 bg-black/80 backdrop-blur-md border border-white/10 rounded-lg text-[8px] font-bold font-jura text-white tracking-widest uppercase">
                    {post.category}
                  </span>
                </div>
                <div className="absolute bottom-6 left-6 text-[8px] font-bold font-jura text-white/50 tracking-widest uppercase">
                  {post.date}
                </div>
              </div>

              <div className="p-10 flex flex-col flex-grow">
                <div className="text-[10px] font-bold font-jura text-gray-700 tracking-[0.4em] mb-4 uppercase">System_Log: {post.id}</div>
                <h3 className="text-2xl font-bold font-jura text-white mb-6 leading-tight group-hover:text-primary transition-colors uppercase tracking-tight">
                  {post.title}
                </h3>
                <p className="text-gray-500 font-sf font-light text-sm leading-relaxed mb-10 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="mt-auto pt-8 border-t border-white/5 flex justify-between items-center">
                  <button
                    onClick={() => onNavigate(`blog-${post.id}`)}
                    className="flex items-center gap-3 text-[10px] font-bold font-jura text-white hover:text-primary transition-colors tracking-widest uppercase">
                    Read Report
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                  <div className="flex gap-1">
                    <div className="w-1 h-1 rounded-full bg-primary/20" />
                    <div className="w-1 h-1 rounded-full bg-primary/20" />
                    <div className="w-1 h-1 rounded-full bg-primary" />
                  </div>
                </div>
              </div>
              <div className="absolute -inset-px bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
