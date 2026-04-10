// Mock AI analysis engine — replace with real Claude/OpenAI API calls in production.

export interface AnalysisResult {
  score: number;
  ats: number;
  clarity: number;
  impact: number;
  formatting: number;
  keywords: number;
  suggestions: Array<{ type: 'strength' | 'warning' | 'error'; title: string; detail: string }>;
  missingSkills: string[];
  strengths: string[];
  rewrittenResume: string;
}

export interface MatchResult {
  score: number;
  matchedKeywords: string[];
  missingKeywords: string[];
  suggestions: string[];
}

/** Simulates reading file text (mock) */
async function extractText(file: File): Promise<string> {
  // In production: use pdf.js for PDFs, mammoth.js for DOCX
  return `John Smith
Email: john.smith@email.com | Phone: 07700 900000 | LinkedIn: linkedin.com/in/johnsmith
Location: Birmingham, UK

PERSONAL STATEMENT
Motivated graduate with experience in project management and customer service.
Seeking a role in business development or marketing.

WORK EXPERIENCE
Marketing Assistant — ABC Company (2022–2024)
- Assisted with social media posts
- Helped organise events
- Responded to customer emails

Retail Assistant — XYZ Store (2020–2022)
- Served customers
- Restocked shelves
- Handled cash

EDUCATION
BA Business Management — University of Birmingham (2017–2020) — 2:1

SKILLS
Microsoft Office, Communication, Teamwork, Social Media

INTERESTS
Reading, football, travel`;
}

/** Delay helper to simulate async AI processing */
const delay = (ms: number) => new Promise(r => setTimeout(r, ms));

export async function analyzeResume(file: File): Promise<AnalysisResult> {
  await delay(2200); // simulate processing

  return {
    score: 68,
    ats: 72,
    clarity: 65,
    impact: 55,
    formatting: 80,
    keywords: 60,
    suggestions: [
      {
        type: 'warning',
        title: 'Weak bullet points',
        detail: 'Bullet points use passive language ("helped", "assisted"). Rewrite with strong action verbs and quantified outcomes (e.g. "Grew Instagram engagement by 34% in 3 months").',
      },
      {
        type: 'error',
        title: 'No quantified achievements',
        detail: 'None of your experience bullets include numbers or metrics. Recruiters and ATS systems rank CVs higher when achievements are quantified.',
      },
      {
        type: 'warning',
        title: 'Personal statement too vague',
        detail: 'Your personal statement lacks specificity. Tailor it to the exact role and company you\'re applying to.',
      },
      {
        type: 'error',
        title: 'Skills section underdeveloped',
        detail: 'List specific tools and platforms (e.g. HubSpot, Google Analytics, Canva) not just generic soft skills.',
      },
      {
        type: 'warning',
        title: 'No LinkedIn URL on profile',
        detail: 'Include a clickable LinkedIn URL to make it easier for recruiters to verify your profile.',
      },
    ],
    missingSkills: ['Google Analytics', 'HubSpot', 'SEO', 'Data Analysis', 'CRM', 'Canva', 'Email Marketing', 'A/B Testing'],
    strengths: [
      'Clear chronological structure — easy to scan',
      'Relevant degree for business/marketing roles',
      'Good date formatting (no gaps identified)',
      'Contact information is complete and professional',
    ],
    rewrittenResume: `JOHN SMITH
john.smith@email.com | 07700 900000 | linkedin.com/in/johnsmith | Birmingham, UK

──────────────────────────────────────────
PROFESSIONAL SUMMARY
──────────────────────────────────────────
Results-driven marketing professional with 4+ years of experience in digital marketing, event management, and customer engagement. Proven track record of growing social media audiences and delivering high-impact campaigns. Seeking a Business Development or Marketing Manager role where I can leverage data-driven strategies to drive measurable growth.

──────────────────────────────────────────
PROFESSIONAL EXPERIENCE
──────────────────────────────────────────

Marketing Assistant | ABC Company | Birmingham, UK | Jan 2022 – Dec 2024
• Grew company Instagram following by 41% (3,200 → 4,500 followers) through targeted content strategy and consistent A/B testing of post formats.
• Managed end-to-end delivery of 12 corporate events (50–300 attendees), achieving 98% positive attendee satisfaction scores.
• Reduced average customer email response time from 48hrs to 6hrs by implementing a new inbox triage system, improving CSAT by 22%.
• Produced weekly performance reports using Google Analytics and HubSpot, providing actionable insights to the senior marketing team.

Retail Sales Assistant | XYZ Store | Birmingham, UK | Jun 2020 – Dec 2021
• Consistently exceeded monthly sales targets by an average of 18%, ranking in the top 10% of store associates.
• Trained and mentored 5 new team members in customer service standards and POS system operation.
• Identified a stockroom inefficiency that reduced restocking time by 30 minutes per shift when resolved.

──────────────────────────────────────────
EDUCATION
──────────────────────────────────────────
BA (Hons) Business Management — 2:1
University of Birmingham | 2017 – 2020
Relevant modules: Digital Marketing, Strategic Management, Consumer Behaviour, Data Analytics

──────────────────────────────────────────
SKILLS & TOOLS
──────────────────────────────────────────
Digital Marketing: Google Analytics 4, HubSpot CRM, Mailchimp, Meta Business Suite
Design & Content: Canva Pro, Adobe Express, Hootsuite
Productivity: Microsoft 365 (Excel, PowerPoint), Google Workspace, Notion
Soft Skills: Project management, stakeholder communication, team leadership, data analysis

──────────────────────────────────────────
ACHIEVEMENTS
──────────────────────────────────────────
• "Employee of the Quarter" — ABC Company, Q3 2023
• Completed Google Digital Marketing & E-commerce Certificate (2023)
• Volunteer Marketing Lead — Birmingham Youth Charity, 2021–present`,
  };
}

export async function rewriteResume(file: File | null, currentText: string): Promise<string> {
  await delay(1800);
  // In production: send currentText to Claude API for a targeted rewrite
  return currentText || 'No resume text available to rewrite.';
}

export async function matchJob(resumeText: string, jobDescription: string): Promise<MatchResult> {
  await delay(1500);

  // Simple mock keyword matching
  const jdLower = jobDescription.toLowerCase();
  const allKeywords = [
    'marketing', 'digital', 'social media', 'analytics', 'seo', 'content',
    'email', 'crm', 'hubspot', 'salesforce', 'data', 'strategy', 'campaign',
    'google analytics', 'canva', 'copywriting', 'brand', 'ppc', 'b2b', 'b2c',
    'project management', 'leadership', 'communication', 'stakeholder', 'budget',
  ];

  const matched = allKeywords.filter(k => jdLower.includes(k));
  const missing = allKeywords.filter(k => !jdLower.includes(k)).slice(0, 8);
  const score = Math.min(95, Math.max(30, Math.round((matched.length / allKeywords.length) * 100 * 1.3)));

  return {
    score,
    matchedKeywords: matched,
    missingKeywords: missing,
    suggestions: [
      'Add a tailored professional summary that mirrors the job title and key responsibilities.',
      'Include specific metrics for your marketing achievements (e.g. "Increased traffic by X%").',
      `Mirror the exact language used in the job description — especially "${matched[0] || 'leadership'}" and "${matched[1] || 'strategy'}".`,
      'Move your most relevant experience to the top of each role\'s bullet points.',
      'Consider adding a "Key Achievements" section to quickly highlight your impact.',
    ],
  };
}

export function downloadAsText(text: string, filename = 'improved-cv.txt') {
  const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
