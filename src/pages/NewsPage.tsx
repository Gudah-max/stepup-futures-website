import React from 'react';
import { motion } from 'motion/react';
import { Calendar, ArrowRight, Megaphone } from 'lucide-react';
import { Button } from '../components/shared';

const newsItems = [
  {
    type: "Press Release",
    date: "2025-03-20",
    title: "StepUp Futures CIC Launches New Step-Up to Work Community Programme",
    excerpt: "StepUp Futures CIC has announced the official launch of its Step-Up to Work community programme, targeting NEET young people aged 16–30 across Coventry and the West Midlands with free employability support.",
    image: "https://lh3.googleusercontent.com/pw/AP1GczP3shMukQTy8RSSBGye__6WwyOL3X61qw3P3gu3IVJ50PyXmGmQJJinjg18wKWhaAebO9PGCF-7s4g9bG4JM0LEThCqg0joG2ShtRL39RlKClxF0BTKb_2MUUBdvdfZwfXPZu5ksAHNvCzTVbfP5yHS=w1228-h923-s-no-gm?authuser=0",
    featured: true,
  },
  {
    type: "Partnership",
    date: "2025-02-14",
    title: "StepUp Futures Partners with New West Midlands Secondary Schools for 2025",
    excerpt: "We are delighted to announce new school partnerships for the 2024–25 academic year, expanding our careers provision reach to thousands more students across Birmingham and Coventry.",
    image: "https://lh3.googleusercontent.com/pw/AP1GczMxcNVdASuVuZ2cG29YjKPqYi-qK49xLxOx9ii2RHC0e5hZWncZTboWmGHmRi3VmIvsWtqFGPAUl6bfEKUCfMUq86q7sJ2d2ecpldn_LQDKcu24yVBK3AHEomyXF670bKoV7RAVDpKsSW_oL-4-ztcu=w1269-h923-s-no-gm?authuser=0",
    featured: false,
  },
  {
    type: "Innovation",
    date: "2025-01-30",
    title: "AI-Powered CV Tool in Development — Coming in 2025",
    excerpt: "StepUp Futures CIC is developing an AI-powered CV and resume optimisation tool to help students and young job seekers craft job-ready CVs that pass Applicant Tracking Systems.",
    image: "https://lh3.googleusercontent.com/pw/AP1GczOlYHH3Pz4N6-rthBxl6VrVh-EeFinO1XjUL_AOeQ1_DX6yk6QZzaaxpcpAAN6uaWi95Q8Y6Nj8YQXbgxPh7ppgLxu99z0_mPosz7-3UHOrmb6BXby71P5llhgXGosaLKAB2LoCvRgqYs2RxRO0fKxR=w1284-h790-s-no-gm?authuser=0",
    featured: false,
  },
  {
    type: "Achievement",
    date: "2024-12-05",
    title: "10,000 Young People Reached — A Major Milestone for StepUp Futures",
    excerpt: "We are proud to announce that StepUp Futures CIC has now guided over 10,000 young people through our programmes, workshops, and 1:1 coaching sessions since our founding in 2019.",
    image: "https://lh3.googleusercontent.com/pw/AP1GczMza2rZ3dz93tZVY89fC9sOdS2nFYlseAB2ddpVLU1X5RdDb4noEZFWfA2fRZyyD4p_jVkTmmkFAe38azfjE_WI64Ast37395oOWZPCJ6Nx1vFR-InRVmGJ_7o4f53I917JSBHjhTZaS2zP_jCSfR96=w1230-h923-s-no-gm?authuser=0",
    featured: false,
  },
  {
    type: "Event",
    date: "2024-11-18",
    title: "StepUp Futures Hosts Successful Apprenticeship Awareness Day",
    excerpt: "Over 200 students from across Birmingham attended our annual Apprenticeship Awareness Day, gaining direct insights from employers and apprentices about pathways available to them.",
    image: "https://lh3.googleusercontent.com/pw/AP1GczPXr3T32iVc4PhxnHTP4zygCYtTK1onINgAOJUYiMIGRl1kRl6Z8OvRuMy0FMdk77CxeBBdEa2ZAjysVd_viT-1bqT0dqUvTQiJI1yIHlAXbaMiQSAVeLa4k6NjV_jS91sIp4wezsDL2ngrJDD1URce=w1276-h923-s-no-gm?authuser=0",
    featured: false,
  },
  {
    type: "Community",
    date: "2024-10-09",
    title: "Francis Page Speaks at West Midlands Youth Employment Summit",
    excerpt: "StepUp Futures CIC Director Francis Page was invited to speak at the West Midlands Youth Employment Summit, sharing insights on breaking down barriers to employment for young people.",
    image: "https://lh3.googleusercontent.com/pw/AP1GczOEFQ2SMk44Al8NnxC311xN-AvcAZ2VynQiKndoE7-BeXDRh087nB1X3-oGAt6RDmrQ_iIKd2BIAejHFj_UN5s1A44yejIT51W55gMZld6q2k5cBkbRKDb7Ktl5EpUBiiUKI_D1-WQk9UgK_aJdeCVr=w935-h923-s-no-gm?authuser=0",
    featured: false,
  },
];

const tagColors: Record<string, string> = {
  "Press Release": "bg-blue-100 text-blue-700",
  "Partnership": "bg-purple-100 text-purple-700",
  "Innovation": "bg-orange/10 text-orange",
  "Achievement": "bg-green-100 text-green-700",
  "Event": "bg-pink-100 text-pink-700",
  "Community": "bg-teal-100 text-teal-700",
};

function formatDate(d: string) {
  return new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
}

export default function NewsPage() {
  const featured = newsItems.find(n => n.featured);
  const rest = newsItems.filter(n => !n.featured);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"><div className="absolute bottom-0 left-0 w-96 h-96 bg-orange rounded-full blur-[150px]" /></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-orange/20 text-orange font-medium text-sm mb-6 border border-orange/30">
              <Megaphone className="w-4 h-4" /> Latest News
            </span>
            <h1 className="text-5xl md:text-6xl font-bold font-heading mb-6">News &amp; Announcements</h1>
            <p className="text-xl text-white/80 max-w-2xl leading-relaxed">
              Stay up to date with the latest from StepUp Futures CIC — new partnerships, programme launches, milestones, and community news.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured */}
      {featured && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-bold uppercase tracking-wider text-orange mb-6">Latest Story</p>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-0 bg-light-grey rounded-3xl overflow-hidden border border-navy/5 shadow-sm">
              <div className="h-72 md:h-auto overflow-hidden">
                <img src={featured.image} alt={featured.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <span className={`inline-block text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4 self-start ${tagColors[featured.type] || 'bg-navy/10 text-navy'}`}>{featured.type}</span>
                <div className="flex items-center gap-2 text-navy/50 text-sm mb-4"><Calendar className="w-4 h-4" />{formatDate(featured.date)}</div>
                <h2 className="text-3xl font-bold text-navy font-heading mb-4 leading-snug">{featured.title}</h2>
                <p className="text-navy/70 leading-relaxed mb-8">{featured.excerpt}</p>
                <Button variant="primary" className="gap-2 self-start">Read Full Story <ArrowRight className="w-4 h-4" /></Button>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* News Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy font-heading mb-10">More News</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((item, i) => (
              <motion.article key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="bg-light-grey rounded-3xl overflow-hidden border border-navy/5 group hover:shadow-md transition-shadow flex flex-col">
                <div className="h-48 overflow-hidden relative">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" referrerPolicy="no-referrer" />
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full ${tagColors[item.type] || 'bg-navy/10 text-navy'}`}>{item.type}</span>
                    <span className="flex items-center gap-1.5 text-navy/50 text-xs"><Calendar className="w-3.5 h-3.5" />{formatDate(item.date)}</span>
                  </div>
                  <h3 className="text-xl font-bold text-navy font-heading mb-3 leading-snug group-hover:text-orange transition-colors">{item.title}</h3>
                  <p className="text-navy/60 text-sm leading-relaxed flex-1">{item.excerpt}</p>
                  <button className="mt-6 flex items-center gap-2 text-orange font-semibold text-sm hover:gap-3 transition-all self-start">
                    Read More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Media Contact */}
      <section className="py-20 bg-light-grey border-t border-navy/5">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-navy font-heading mb-4">Media Enquiries</h2>
          <p className="text-navy/60 mb-8 text-lg">For press enquiries, interview requests, or to be added to our media mailing list, please get in touch.</p>
          <Button variant="primary" href="mailto:hello@stepupfutures.org" className="gap-2">
            Contact the Press Team <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </section>
    </div>
  );
}
