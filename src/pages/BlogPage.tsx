import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { Button } from '../components/shared';

const posts = [
  {
    slug: "gatsby-benchmarks-guide-2025",
    title: "A School Leader's Guide to Meeting All 8 Gatsby Benchmarks in 2025",
    excerpt: "The Gatsby Benchmarks remain the gold standard for careers education in England. Here's a practical, step-by-step guide for schools looking to achieve full compliance this academic year.",
    category: "Careers Education",
    date: "2025-03-18",
    readTime: "8 min read",
    image: "https://lh3.googleusercontent.com/pw/AP1GczMF8t_3AVm4vuy7N4qT_peiK_tJgp3ZhQfwEt8mAx89tumsW4_ibwK-B6wInUI5fO-xnH9S8YDeoJ7FbPMF_NhjxM5fXWVn1N_uYcgP9JBlG-vWbGBKEM9fdn0i_-pHBQotiZLWVlW5q4K9-GaITWLY=w1280-h720-s-no-gm?authuser=0",
    featured: true,
  },
  {
    slug: "neet-young-people-support-2025",
    title: "Supporting NEET Young People: What Works and Why",
    excerpt: "With NEET rates remaining a persistent challenge across the West Midlands, we explore evidence-based approaches to re-engaging young people and supporting them into sustainable employment.",
    category: "Employability",
    date: "2025-02-27",
    readTime: "6 min read",
    image: "https://lh3.googleusercontent.com/pw/AP1GczP3shMukQTy8RSSBGye__6WwyOL3X61qw3P3gu3IVJ50PyXmGmQJJinjg18wKWhaAebO9PGCF-7s4g9bG4JM0LEThCqg0joG2ShtRL39RlKClxF0BTKb_2MUUBdvdfZwfXPZu5ksAHNvCzTVbfP5yHS=w1228-h923-s-no-gm?authuser=0",
    featured: false,
  },
  {
    slug: "apprenticeships-vs-university-2025",
    title: "Apprenticeships vs University: Helping Students Make the Right Choice",
    excerpt: "For Year 11 and Year 12 students, the choice between university and an apprenticeship can feel overwhelming. Here's how to guide young people through this decision with confidence.",
    category: "Student Guidance",
    date: "2025-02-10",
    readTime: "5 min read",
    image: "https://lh3.googleusercontent.com/pw/AP1GczMza2rZ3dz93tZVY89fC9sOdS2nFYlseAB2ddpVLU1X5RdDb4noEZFWfA2fRZyyD4p_jVkTmmkFAe38azfjE_WI64Ast37395oOWZPCJ6Nx1vFR-InRVmGJ_7o4f53I917JSBHjhTZaS2zP_jCSfR96=w1230-h923-s-no-gm?authuser=0",
    featured: false,
  },
  {
    slug: "cv-writing-tips-young-people",
    title: "10 CV Writing Tips Every Young Person Needs to Know",
    excerpt: "A strong CV can be the difference between landing an interview and being overlooked. We share the top 10 tips our careers coaches give every student to make their CV stand out.",
    category: "Employability",
    date: "2025-01-22",
    readTime: "7 min read",
    image: "https://lh3.googleusercontent.com/pw/AP1GczMVSUrfa4xIryhgQrjwdgUySwyvSFg3HPU6CK226j4qOX-ekp3_-itsNTWrIRfSzAaCT4cX4G5W1SFitlik3OuVTe6Mq5JrxEWVxvIqKYvjjo6ejo1Qbo1UzU-99S-FH2xjsCQ3rJlXp5bw4coY5cL3=w1284-h829-s-no-gm?authuser=0",
    featured: false,
  },
  {
    slug: "careers-education-primary-transition",
    title: "Why Careers Education Should Start Before Secondary School",
    excerpt: "Research increasingly shows that aspirations and attitudes to work are shaped in early childhood. We look at why introducing careers awareness at primary level leads to better outcomes.",
    category: "Careers Education",
    date: "2025-01-08",
    readTime: "6 min read",
    image: "https://lh3.googleusercontent.com/pw/AP1GczPXr3T32iVc4PhxnHTP4zygCYtTK1onINgAOJUYiMIGRl1kRl6Z8OvRuMy0FMdk77CxeBBdEa2ZAjysVd_viT-1bqT0dqUvTQiJI1yIHlAXbaMiQSAVeLa4k6NjV_jS91sIp4wezsDL2ngrJDD1URce=w1276-h923-s-no-gm?authuser=0",
    featured: false,
  },
  {
    slug: "mock-interviews-confidence-builder",
    title: "Why Mock Interviews Are the Most Underused Tool in Schools",
    excerpt: "Mock interviews are one of the most high-impact, low-cost careers interventions available to schools. Yet many institutions still don't prioritise them. Here's why they should.",
    category: "Student Guidance",
    date: "2024-12-15",
    readTime: "5 min read",
    image: "https://lh3.googleusercontent.com/pw/AP1GczOlYHH3Pz4N6-rthBxl6VrVh-EeFinO1XjUL_AOeQ1_DX6yk6QZzaaxpcpAAN6uaWi95Q8Y6Nj8YQXbgxPh7ppgLxu99z0_mPosz7-3UHOrmb6BXby71P5llhgXGosaLKAB2LoCvRgqYs2RxRO0fKxR=w1284-h790-s-no-gm?authuser=0",
    featured: false,
  },
];

const categories = ["All", "Careers Education", "Employability", "Student Guidance"];

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
}

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filtered = activeCategory === "All" ? posts : posts.filter(p => p.category === activeCategory);
  const featured = posts.find(p => p.featured);
  const rest = filtered.filter(p => !p.featured || activeCategory !== "All");

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"><div className="absolute top-0 right-0 w-96 h-96 bg-orange rounded-full blur-[150px]" /></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block py-1 px-3 rounded-full bg-orange/20 text-orange font-medium text-sm mb-6 border border-orange/30">Blog</span>
            <h1 className="text-5xl md:text-6xl font-bold font-heading mb-6">Insights &amp; Resources</h1>
            <p className="text-xl text-white/80 max-w-2xl leading-relaxed">
              Expert perspectives on careers education, employability, and youth development — for educators, employers, and young people alike.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {featured && activeCategory === "All" && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-xs font-bold uppercase tracking-wider text-orange mb-6">Featured Article</div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12 items-center bg-light-grey rounded-3xl overflow-hidden">
              <div className="h-80 md:h-full overflow-hidden">
                <img src={featured.image} alt={featured.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="p-8 md:p-12">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-orange bg-orange/10 px-3 py-1 rounded-full mb-4">
                  <Tag className="w-3 h-3" />{featured.category}
                </span>
                <h2 className="text-3xl font-bold text-navy font-heading mb-4 leading-snug">{featured.title}</h2>
                <p className="text-navy/70 leading-relaxed mb-6">{featured.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-navy/50 mb-8">
                  <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />{formatDate(featured.date)}</span>
                  <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />{featured.readTime}</span>
                </div>
                <Button variant="primary" className="gap-2">Read Article <ArrowRight className="w-4 h-4" /></Button>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Filter + Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full font-medium text-sm transition-all ${activeCategory === cat ? 'bg-navy text-white' : 'bg-light-grey text-navy hover:bg-navy/10'}`}>
                {cat}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((post, i) => (
              <motion.article key={post.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="bg-light-grey rounded-3xl overflow-hidden border border-navy/5 group hover:shadow-md transition-shadow flex flex-col">
                <div className="relative h-52 overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" referrerPolicy="no-referrer" />
                  <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-white bg-navy/80 backdrop-blur-sm px-3 py-1 rounded-full">
                    <Tag className="w-3 h-3" />{post.category}
                  </span>
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-4 text-xs text-navy/50 mb-4">
                    <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />{formatDate(post.date)}</span>
                    <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-navy font-heading mb-3 leading-snug group-hover:text-orange transition-colors">{post.title}</h3>
                  <p className="text-navy/60 text-sm leading-relaxed flex-1">{post.excerpt}</p>
                  <button className="mt-6 flex items-center gap-2 text-orange font-semibold text-sm hover:gap-3 transition-all self-start">
                    Read More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>

          {rest.length === 0 && (
            <div className="text-center py-20 text-navy/50">
              <p className="text-lg">No articles in this category yet. Check back soon.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-light-grey border-t border-navy/5">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-navy font-heading mb-4">Never Miss an Article</h2>
          <p className="text-navy/60 mb-8">Subscribe to our newsletter and get the latest careers education insights delivered to your inbox.</p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input type="email" placeholder="Your email address" className="flex-1 px-5 py-3 rounded-full border border-navy/10 focus:outline-none focus:ring-2 focus:ring-orange/50 bg-white" />
            <Button variant="primary">Subscribe</Button>
          </form>
        </div>
      </section>
    </div>
  );
}
