<template>
  <div>
    <!-- Hero -->
    <section class="site-container pt-20 pb-16 md:pt-28 md:pb-24">
      <div class="max-w-prose-wide">
        <p class="section-label mb-5">Frontend Developer & AI Builder</p>
        <h1 class="font-serif font-bold text-display text-ink leading-[1.08] mb-8">
          I spent 15 years mastering the&nbsp;frontend.<br class="hidden md:block" />
          Then I started building AI with&nbsp;it.
        </h1>
        <p class="font-sans text-base md:text-lg text-muted leading-relaxed max-w-[60ch] mb-10">
          Senior frontend engineer turned AI builder — enterprise UIs at IKEA and EA,
          now shipping agentic web apps and real AI deployments through
          <a href="https://fondaai.com" target="_blank" rel="noopener noreferrer" class="link-underline text-ink">Fonda AI</a>.
          I use coding agents the way a good developer uses any sharp tool: to build faster and better.
          Currently adding Python, Flask, and Docker at University of Waterloo, WatSpeed. Based in Waterdown, Ontario.
        </p>
        <div class="flex flex-wrap gap-4">
          <RouterLink to="/work" class="btn-primary">View my work</RouterLink>
          <a href="mailto:ivan@iloyola.com" class="btn-ghost">Get in touch</a>
        </div>
      </div>
    </section>

    <div class="site-container">
      <div class="section-rule"></div>
    </div>

    <!-- Work -->
    <section class="site-container py-16 md:py-20">
      <div class="flex items-baseline justify-between mb-10">
        <h2 class="font-serif font-bold text-headline text-ink">Selected work</h2>
        <RouterLink to="/work" class="font-sans text-sm font-medium text-accent hover:underline underline-offset-4">
          All work →
        </RouterLink>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
        <CaseStudyCard
          v-for="project in featured"
          :key="project.to"
          v-bind="project"
        />
      </div>
    </section>

    <div class="site-container">
      <div class="section-rule"></div>
    </div>

    <!-- About strip -->
    <section class="site-container py-16 md:py-20">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
        <div class="md:col-span-2">
          <p class="section-label mb-4">About</p>
          <h2 class="font-serif font-bold text-headline text-ink mb-6">
            Builder first. Developer second. Chef third — but that part explains a lot.
          </h2>
          <p class="font-sans text-base text-muted leading-relaxed mb-6">
            Before I wrote a line of code I cooked professionally for over a decade — Four Seasons Toronto, Canoe, kitchens in Montreal and the Cayman Islands.
            That taught me craft, precision, and how to perform under pressure. It also taught me that the work is never done until it's on the plate.
          </p>
          <RouterLink to="/about" class="font-sans text-sm font-medium text-accent hover:underline underline-offset-4">
            More about me →
          </RouterLink>
        </div>
        <div class="flex flex-col gap-5">
          <div v-for="stat in stats" :key="stat.label" class="card-accent py-1">
            <p class="font-serif font-bold text-2xl text-ink">{{ stat.value }}</p>
            <p class="font-sans text-sm text-muted mt-1">{{ stat.label }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import CaseStudyCard from '@/components/CaseStudyCard.vue'

const featured = [
  {
    to: '/work/fonda-ai',
    label: 'AI Implementation · 2026 – Present',
    title: 'Fonda AI — Voice AI & Automation for Local Service Businesses',
    description: 'Founded and built an AI implementation practice deploying voice agents, workflow automations, and agentic web apps for Ontario SMBs. Built fondaai.com with Next.js 16, React 19, TypeScript, and Tailwind v4.',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'Retell AI', 'n8n'],
  },
  {
    to: '/work/food-app',
    label: 'Full-Stack · 2025',
    title: 'Recipe & Household App — Supabase, Vue 3, Voice Assistant',
    description: 'Full-stack household app with PKCE auth, relational schema design, 102 tests, and a voice assistant integration via Siri and Google Home. Lighthouse 98/98/100/100.',
    tags: ['Vue 3', 'TypeScript', 'Supabase', 'Pinia', 'Playwright', 'Vitest'],
  },
  {
    to: '/work/ghd',
    label: 'Senior Frontend · 2022 – 2024',
    title: 'GHD Govstack — Digitizing Government Services at Scale',
    description: 'Architected accessible SPAs for multi-jurisdiction government digitization projects. Authored security standards, created low-fidelity prototypes, built onboarding modules that cut configuration time by ~80%.',
    tags: ['Vue 3', 'TypeScript', 'Azure', 'AngularJS', 'WCAG 2.0 AA'],
  },
  {
    to: '/work/ikea',
    label: 'Digital Product · 2020 – 2022',
    title: 'IKEA Canada — ikea.ca at $370M Scale',
    description: 'Built and maintained digital solutions for one of Canada\'s highest-traffic retail sites. $370.74M in online sales, 178.4M users, 30+ internal CMS users.',
    tags: ['Vue.js', 'PHP', 'MySQL', 'CSS/Sass', 'RESTful APIs'],
  },
]

const stats = [
  { value: '15+', label: 'Years of production web development' },
  { value: '5', label: 'Enterprise teams & live client environments' },
  { value: '102', label: 'Tests on the food app at Lighthouse 98' },
]
</script>
