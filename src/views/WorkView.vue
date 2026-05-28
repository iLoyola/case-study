<template>
  <div class="site-container py-20 md:py-28">
    <p class="section-label mb-4">Work</p>
    <h1 class="font-serif font-bold text-display text-ink mb-4 max-w-prose-wide">
      Projects, products, and problems solved.
    </h1>
    <p class="font-sans text-base md:text-lg text-muted max-w-[60ch] mb-16 leading-relaxed">
      Fifteen years of shipping — from enterprise government SPAs to AI-powered automation for local businesses.
    </p>

    <div class="section-rule"></div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 mt-12">
      <CaseStudyCard
        v-for="project in projects"
        :key="project.to"
        v-bind="project"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import CaseStudyCard from '@/components/CaseStudyCard.vue'

const projects = [
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
    description: 'Architected accessible SPAs for multi-jurisdiction government digitization projects. Authored security standards, created low-fidelity prototypes, and built onboarding modules that cut configuration time by ~80%.',
    tags: ['Vue 3', 'TypeScript', 'Azure', 'WCAG 2.0 AA', 'AngularJS'],
  },
  {
    to: '/work/ikea',
    label: 'Digital Product · 2020 – 2022',
    title: 'IKEA Canada — ikea.ca at $370M Scale',
    description: 'Built and maintained digital solutions for one of Canada\'s highest-traffic retail sites. $370.74M in online sales, 178.4M users, 30+ internal CMS users.',
    tags: ['Vue.js', 'PHP', 'MySQL', 'CSS/Sass', 'RESTful APIs'],
  },
  {
    to: '/work/intellect',
    label: 'Senior UI Developer · 2017 – 2019',
    title: 'Intellect Design Arena — Theming System for Global Fintech',
    description: 'Built a modular form application and an extendable Sass-based theming system for global banking clients — reducing stylesheet size by ~70% and page load times by ~50%.',
    tags: ['JavaScript', 'ExtJS', 'Sass', 'AWS S3', 'CloudFront'],
  },
]
</script>
