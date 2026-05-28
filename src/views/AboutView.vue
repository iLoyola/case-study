<template>
  <div class="site-container py-20 md:py-28">
    <p class="section-label mb-4">About</p>
    <h1 class="font-serif font-bold text-display text-ink max-w-prose-wide leading-[1.1] mb-16">
      Frontend Developer & AI Builder
    </h1>

    <div class="section-rule"></div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-14 lg:gap-20 mt-14">
      <div class="lg:col-span-2 space-y-10">

        <section>
          <p class="font-sans text-base md:text-lg text-muted leading-relaxed mb-5">
            I've been building for the web for over 15 years — enterprise UIs at IKEA and Electronic Arts,
            government services at GHD, fintech at Intellect, and now AI-powered tools through
            <a href="https://fondaai.com" target="_blank" rel="noopener noreferrer" class="link-underline text-ink">Fonda AI</a>,
            the AI implementation practice I founded in 2026.
          </p>
          <p class="font-sans text-base md:text-lg text-muted leading-relaxed mb-5">
            I use AI coding agents the way a good developer uses any sharp tool: to build faster and better.
            Not as a shortcut around understanding — as a force multiplier for the understanding I've spent 15 years building.
          </p>
          <p class="font-sans text-base md:text-lg text-muted leading-relaxed">
            Currently completing the University of Waterloo's Back-End Development Certification — Python, Flask, Docker, PostgreSQL.
            Adding depth on the backend side to complement a frontend foundation that's been battle-tested at scale.
          </p>
        </section>

        <section>
          <h2 class="font-serif font-bold text-headline text-ink mb-6">Background</h2>
          <p class="font-sans text-base text-muted leading-relaxed mb-4">
            Before I wrote a line of code I cooked professionally for over a decade — Four Seasons Hotel Toronto,
            Canoe Restaurant, and kitchens in Montreal and the Cayman Islands. The transition to web wasn't as strange as it sounds.
          </p>
          <p class="font-sans text-base text-muted leading-relaxed">
            Both require craft, precision, and performing under pressure. Both involve systems thinking —
            understanding how components interact, where things break, and how to make something reliable
            enough that someone else can count on it. The kitchen taught me to take quality seriously
            before I had the vocabulary to describe why.
          </p>
        </section>

        <section>
          <h2 class="font-serif font-bold text-headline text-ink mb-6">Certifications</h2>
          <div class="space-y-4">
            <div v-for="cert in certs" :key="cert.title" class="card-accent py-1">
              <p class="font-sans text-sm font-medium text-ink">{{ cert.title }}</p>
              <p class="font-sans text-sm text-muted mt-0.5">{{ cert.detail }}</p>
            </div>
          </div>
        </section>

      </div>

      <aside class="space-y-10">
        <div>
          <p class="section-label mb-4">Proficient</p>
          <div class="flex flex-wrap gap-2">
            <span v-for="skill in proficient" :key="skill" class="font-sans text-xs text-muted border border-rule px-2 py-0.5">{{ skill }}</span>
          </div>
        </div>
        <div>
          <p class="section-label mb-4">Familiar</p>
          <div class="flex flex-wrap gap-2">
            <span v-for="skill in familiar" :key="skill" class="font-sans text-xs text-muted border border-rule px-2 py-0.5">{{ skill }}</span>
          </div>
        </div>
        <div>
          <p class="section-label mb-4">AI & Automation</p>
          <div class="flex flex-wrap gap-2">
            <span v-for="skill in ai" :key="skill" class="font-sans text-xs text-muted border border-rule px-2 py-0.5">{{ skill }}</span>
          </div>
        </div>
        <div>
          <p class="section-label mb-4">Location</p>
          <p class="font-sans text-sm text-muted">Waterdown, Ontario, Canada</p>
        </div>
        <div>
          <p class="section-label mb-4">Connect</p>
          <div class="flex flex-col gap-2">
            <a href="mailto:ivan@iloyola.com" class="font-sans text-sm text-accent hover:underline underline-offset-4">ivan@iloyola.com</a>
            <a href="https://linkedin.com/in/ivanloyola" target="_blank" rel="noopener noreferrer" class="font-sans text-sm text-muted hover:text-ink transition-colors">linkedin.com/in/ivanloyola</a>
            <a href="https://github.com/iLoyola" target="_blank" rel="noopener noreferrer" class="font-sans text-sm text-muted hover:text-ink transition-colors">github.com/iLoyola</a>
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>

<script setup lang="ts">
const proficient = ['JavaScript', 'Vue.js', 'TypeScript', 'HTML', 'CSS/Sass', 'Git', 'RESTful APIs', 'Tailwind', 'Bootstrap', 'Photoshop']
const familiar = ['Python', 'Flask', 'MySQL', 'PostgreSQL', 'PHP', 'Docker', 'Azure', 'AWS', 'Playwright', 'Vitest', 'WordPress']
const ai = ['Retell AI', 'GoHighLevel', 'n8n', 'Zapier', 'Claude', 'Cursor', 'Supabase Edge Functions']

const certs = [
  {
    title: 'Back-End Development Certification — University of Waterloo (WatSPEED)',
    detail: 'Python · Flask · Jinja · TypeScript · MySQL · Pytest · Playwright · Docker — Completed 2025',
  },
  {
    title: 'Microsoft Certified: Azure Fundamentals (AZ-900)',
    detail: 'Cloud architecture, Azure services, pricing, and compliance',
  },
  {
    title: 'Certified Entry-Level Python Programmer (PCEP)',
    detail: 'Python fundamentals and core programming concepts',
  },
  {
    title: 'International Academy of Design and Technology',
    detail: 'Design Multimedia Digital Certification',
  },
]
</script>
