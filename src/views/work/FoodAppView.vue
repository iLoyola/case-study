<template>
  <article>
    <div class="site-container pt-20 pb-12 md:pt-28 md:pb-16">
      <RouterLink to="/work" class="inline-flex items-center gap-2 font-sans text-sm text-muted hover:text-ink transition-colors mb-10">
        ← All work
      </RouterLink>
      <p class="section-label mb-4">Full-Stack · 2025</p>
      <h1 class="font-serif font-bold text-display text-ink max-w-prose-wide leading-[1.1] mb-6">
        Recipe & Household App — Supabase, Vue 3, Voice Assistant
      </h1>
      <div class="flex flex-wrap gap-2">
        <span v-for="tag in tags" :key="tag" class="font-sans text-xs text-muted border border-rule px-2 py-0.5">{{ tag }}</span>
      </div>
    </div>

    <div class="site-container"><div class="section-rule"></div></div>

    <div class="site-container py-14 md:py-20">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
        <div class="lg:col-span-2 space-y-12">

          <section>
            <h2 class="font-serif font-bold text-headline text-ink mb-4">The Idea</h2>
            <p class="font-sans text-base text-muted leading-relaxed mb-4">
              I spent over a decade cooking professionally, and I have hundreds of recipes written in notebooks.
              I wanted a proper digital home for them — something I could search, browse, scale, and add to.
              And since I was building it anyway, I decided to build it correctly: full auth, real database design, production-grade testing, and a voice assistant.
            </p>
            <p class="font-sans text-base text-muted leading-relaxed">
              The app is live at food.iloyola.com and under active personal use.
            </p>
          </section>

          <section>
            <h2 class="font-serif font-bold text-headline text-ink mb-4">What I Built</h2>
            <div class="card-accent py-1 mb-6">
              <h3 class="font-serif font-semibold text-lg text-ink mb-2">Full-Stack Architecture</h3>
              <p class="font-sans text-sm text-muted leading-relaxed">
                Vue 3 + TypeScript + Vite frontend with Pinia state management and Vue Router. Backend on Supabase —
                PostgreSQL with a relational schema design, PKCE authentication, row-level security policies,
                and Supabase Edge Functions. Deployed to Netlify with auto-deploy via GitHub.
              </p>
            </div>
            <div class="card-accent py-1 mb-6">
              <h3 class="font-serif font-semibold text-lg text-ink mb-2">Voice Assistant Integration</h3>
              <p class="font-sans text-sm text-muted leading-relaxed">
                Built a Supabase Edge Function that powers a voice assistant for the shopping list.
                Invocable via Siri (iOS Shortcuts) and Google Home (IFTTT), using API key authentication and natural-language item matching against a 641-item Canadian grocery catalog.
              </p>
            </div>
            <div class="card-accent py-1 mb-6">
              <h3 class="font-serif font-semibold text-lg text-ink mb-2">Design System</h3>
              <p class="font-sans text-sm text-muted leading-relaxed">
                Custom Tailwind design system with Playfair Display typography, dark mode, PWA manifest,
                and an Apple Reminders-style shopping list UI. Bottom navigation pattern for mobile-first use.
              </p>
            </div>
            <div class="card-accent py-1">
              <h3 class="font-serif font-semibold text-lg text-ink mb-2">Testing</h3>
              <p class="font-sans text-sm text-muted leading-relaxed">
                102 tests across Vitest (unit/integration) and Playwright (end-to-end). Lighthouse scores: 98 Performance, 98 Accessibility, 100 Best Practices, 100 SEO.
              </p>
            </div>
          </section>

          <section>
            <h2 class="font-serif font-bold text-headline text-ink mb-6">Site in Action</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <figure>
                <video
                  ref="video1"
                  autoplay
                  loop
                  muted
                  playsinline
                  aria-label="food.iloyola.com recipe view responsive layout transition from desktop to mobile"
                  class="w-full rounded-sm border border-rule"
                >
                  <source src="/video/iLoyola_food1.webm" type="video/webm" />
                  <source src="/video/iLoyola_food1.mp4" type="video/mp4" />
                </video>
                <figcaption class="font-sans text-xs text-muted mt-2">food.iloyola.com — recipe view</figcaption>
              </figure>
              <figure>
                <video
                  ref="video2"
                  autoplay
                  loop
                  muted
                  playsinline
                  aria-label="food.iloyola.com shopping list responsive layout transition from desktop to mobile"
                  class="w-full rounded-sm border border-rule"
                >
                  <source src="/video/iLoyola_food2.webm" type="video/webm" />
                  <source src="/video/iLoyola_food2.mp4" type="video/mp4" />
                </video>
                <figcaption class="font-sans text-xs text-muted mt-2">food.iloyola.com — shopping list</figcaption>
              </figure>
            </div>
          </section>

          <section>
            <h2 class="font-serif font-bold text-headline text-ink mb-4">Technical Decisions Worth Noting</h2>
            <p class="font-sans text-base text-muted leading-relaxed mb-4">
              The backend migration from Firebase to Supabase was a deliberate architectural choice — not a refactor mid-project, but a decision made to work with proper relational data and real SQL.
              Designing the schema correctly from the start (recipes, ingredients, shopping lists, user accounts, marketplaces) taught more than any tutorial.
            </p>
            <p class="font-sans text-base text-muted leading-relaxed">
              Row-level security policies mean users can only access their own data, enforced at the database level —
              not just at the application layer. That's the right way to handle it.
            </p>
          </section>

        </div>

        <aside class="space-y-8">
          <div>
            <p class="section-label mb-3">Role</p>
            <p class="font-sans text-sm text-muted">Solo — full-stack design and development</p>
          </div>
          <div>
            <p class="section-label mb-3">Duration</p>
            <p class="font-sans text-sm text-muted">2025</p>
          </div>
          <div>
            <p class="section-label mb-3">Lighthouse</p>
            <p class="font-sans text-sm text-muted">98 / 98 / 100 / 100</p>
          </div>
          <div>
            <p class="section-label mb-3">Tests</p>
            <p class="font-sans text-sm text-muted">102 (Vitest + Playwright)</p>
          </div>
          <div>
            <p class="section-label mb-3">Stack</p>
            <div class="flex flex-wrap gap-2">
              <span v-for="tag in tags" :key="tag" class="font-sans text-xs text-muted border border-rule px-2 py-0.5">{{ tag }}</span>
            </div>
          </div>
          <div>
            <p class="section-label mb-3">Live site</p>
            <a href="https://food.iloyola.com" target="_blank" rel="noopener noreferrer" class="font-sans text-sm text-accent hover:underline underline-offset-4">
              food.iloyola.com →
            </a>
          </div>
        </aside>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const tags = ['Vue 3', 'TypeScript', 'Vite', 'Supabase', 'PostgreSQL', 'Pinia', 'Tailwind CSS', 'Vitest', 'Playwright', 'Netlify']

const video1 = ref<HTMLVideoElement | null>(null)
const video2 = ref<HTMLVideoElement | null>(null)

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    video1.value?.pause()
    video2.value?.pause()
  }
})
</script>
