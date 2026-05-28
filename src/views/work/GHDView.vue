<template>
  <article>
    <div class="site-container pt-20 pb-12 md:pt-28 md:pb-16">
      <RouterLink to="/work" class="inline-flex items-center gap-2 font-sans text-sm text-muted hover:text-ink transition-colors mb-10">
        ← All work
      </RouterLink>
      <p class="section-label mb-4">Senior Frontend Developer · 2022 – 2024</p>
      <h1 class="font-serif font-bold text-display text-ink max-w-prose-wide leading-[1.1] mb-6">
        GHD Govstack — Digitizing Government Services at Scale
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
            <h2 class="font-serif font-bold text-headline text-ink mb-4">The Work</h2>
            <p class="font-sans text-base text-muted leading-relaxed mb-4">
              GHD Digital's Govstack platform helps governments digitize their services — moving paper-based processes
              online for multiple jurisdictions. As Senior Frontend Developer, I architected the SPAs and modules that
              powered that digitization, working in a fully remote, global cross-functional team across three-week agile sprints.
            </p>
            <p class="font-sans text-base text-muted leading-relaxed">
              The work covered both product development and organizational infrastructure: building the software,
              setting the standards, and making sure other developers could follow them.
            </p>
          </section>

          <section>
            <h2 class="font-serif font-bold text-headline text-ink mb-4">What I Built</h2>
            <div class="card-accent py-1 mb-6">
              <h3 class="font-serif font-semibold text-lg text-ink mb-2">Data-Driven SPAs</h3>
              <p class="font-sans text-sm text-muted leading-relaxed">
                Architected single-page applications in Vue 3 — Composition API, Pinia, Vue Router, Suspense, vue-i18n, Vite, TypeScript, and the Syncfusion component library.
                Each module had to handle complex data flows, multiple jurisdictions, and varying configuration requirements across clients.
              </p>
            </div>
            <div class="card-accent py-1 mb-6">
              <h3 class="font-serif font-semibold text-lg text-ink mb-2">Client Onboarding Module</h3>
              <p class="font-sans text-sm text-muted leading-relaxed">
                Built onboarding modules that streamlined the configuration process for new government clients by approximately 80%.
                Before the module, setup required significant manual engineering time per jurisdiction. After: guided, self-service configuration.
              </p>
            </div>
            <div class="card-accent py-1 mb-6">
              <h3 class="font-serif font-semibold text-lg text-ink mb-2">Prototyping & Architecture</h3>
              <p class="font-sans text-sm text-muted leading-relaxed">
                Created low-fidelity prototypes in Confluence and draw.io to map data flow between the UI and backend,
                define system architecture, and align stakeholders before development began. Authored internal technical
                documentation and training standards.
              </p>
            </div>
            <div class="card-accent py-1">
              <h3 class="font-serif font-semibold text-lg text-ink mb-2">Security & Accessibility Standards</h3>
              <p class="font-sans text-sm text-muted leading-relaxed">
                GovStack Accessibility Team representative. Authored internal frontend coding standards covering
                secure form handling, input validation, XSS mitigation, and ARIA/WCAG 2.0 AA compliance.
                Delivered training sessions to developers and non-technical stakeholders.
              </p>
            </div>
          </section>

          <section>
            <h2 class="font-serif font-bold text-headline text-ink mb-4">Scale & Context</h2>
            <p class="font-sans text-base text-muted leading-relaxed">
              Government software is unforgiving. Accessibility isn't optional — it's a legal requirement.
              Security vulnerabilities affect public infrastructure. Stakeholder alignment spans technical teams,
              project managers, and government clients in multiple countries.
              Working at this intersection — complex technical requirements, strict compliance standards, global teams, tight sprint cycles —
              is what sharpened the habits that show up in every project since.
            </p>
          </section>

        </div>

        <aside class="space-y-8">
          <div>
            <p class="section-label mb-3">Role</p>
            <p class="font-sans text-sm text-muted">Senior Frontend Developer</p>
          </div>
          <div>
            <p class="section-label mb-3">Duration</p>
            <p class="font-sans text-sm text-muted">May 2022 – January 2024</p>
          </div>
          <div>
            <p class="section-label mb-3">Location</p>
            <p class="font-sans text-sm text-muted">Remote · Waterloo, Ontario</p>
          </div>
          <div>
            <p class="section-label mb-3">Stack</p>
            <div class="flex flex-wrap gap-2">
              <span v-for="tag in tags" :key="tag" class="font-sans text-xs text-muted border border-rule px-2 py-0.5">{{ tag }}</span>
            </div>
          </div>
          <div>
            <p class="section-label mb-3">Note</p>
            <p class="font-sans text-xs text-muted leading-relaxed">Govstack is proprietary government software — screenshots are not available.</p>
          </div>
        </aside>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
const tags = ['Vue 3', 'TypeScript', 'Vite', 'Pinia', 'Vue Router', 'AngularJS', 'Syncfusion', 'Azure DevOps', 'Azure App Service', 'WCAG 2.0 AA']
</script>
