<template>
  <article>
    <div class="site-container pt-20 pb-12 md:pt-28 md:pb-16">
      <RouterLink to="/work" class="inline-flex items-center gap-2 font-sans text-sm text-muted hover:text-ink transition-colors mb-10">
        ← All work
      </RouterLink>
      <p class="section-label mb-4">Senior UI Developer · 2017 – 2019</p>
      <h1 class="font-serif font-bold text-display text-ink max-w-prose-wide leading-[1.1] mb-6">
        Intellect Design Arena — Theming System for Global Fintech
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
              Intellect Design Arena is a global fintech company — their clients are banks and insurance providers worldwide.
              I was Senior UI Developer on a modular, form-driven application that let financial clients scaffold the
              data capture workflows they needed for their customers.
            </p>
            <p class="font-sans text-base text-muted leading-relaxed">
              The challenge in fintech UI isn't usually the features — it's doing the same thing reliably
              for clients with very different branding requirements, at scale, without your codebase turning into a maintenance problem.
            </p>
          </section>

          <section>
            <h2 class="font-serif font-bold text-headline text-ink mb-4">What I Built</h2>
            <div class="card-accent py-1 mb-6">
              <h3 class="font-serif font-semibold text-lg text-ink mb-2">Modular Form Application</h3>
              <p class="font-sans text-sm text-muted leading-relaxed">
                The core product was a configurable form system: clients defined what data they needed to capture,
                and the application scaffolded the appropriate workflow. Built using JavaScript and ExtJS,
                with reusable, accessible UI components designed to hold up across different client configurations and edge cases.
              </p>
            </div>
            <div class="card-accent py-1 mb-6">
              <h3 class="font-serif font-semibold text-lg text-ink mb-2">Extendable Theming System</h3>
              <p class="font-sans text-sm text-muted leading-relaxed">
                Designed and built a theming system using cascading Sass variables, mixins, and inclusion flags in ExtJS.
                A client's brand — colours, typography, styling — could be expressed by overriding the right variables at the right level.
                No duplicate CSS. No one-off hacks. The compiled stylesheets were served via AWS S3 + CloudFront CDN.
              </p>
              <div class="mt-4 grid grid-cols-2 gap-4">
                <div class="border border-rule p-3">
                  <p class="font-serif font-bold text-xl text-accent">~70%</p>
                  <p class="font-sans text-xs text-muted mt-1">Reduction in stylesheet size</p>
                </div>
                <div class="border border-rule p-3">
                  <p class="font-serif font-bold text-xl text-accent">~50%</p>
                  <p class="font-sans text-xs text-muted mt-1">Faster page load times</p>
                </div>
              </div>
            </div>
            <div class="card-accent py-1">
              <h3 class="font-serif font-semibold text-lg text-ink mb-2">Reference Documentation</h3>
              <p class="font-sans text-sm text-muted leading-relaxed">
                Developed a reference document for the theming system — do's and don'ts, annotated screenshots, and code snippets —
                so other developers could implement it correctly without starting from scratch.
                This significantly reduced research and ramp-up time for new client deployments.
              </p>
            </div>
          </section>

          <section>
            <h2 class="font-serif font-bold text-headline text-ink mb-4">Why It Was Hard</h2>
            <p class="font-sans text-base text-muted leading-relaxed">
              Theming systems are deceptively hard to get right. Done wrong, they create more complexity than they solve —
              edge cases compound, overrides break things upstream, and the "flexible" system becomes rigid in different ways.
              Done right, they disappear: the developer sets the variables, and the brand shows up correctly everywhere.
              Getting it right required designing the variable hierarchy first — deciding what should cascade and what shouldn't —
              before writing a line of CSS.
            </p>
          </section>

        </div>

        <aside class="space-y-8">
          <div>
            <p class="section-label mb-3">Role</p>
            <p class="font-sans text-sm text-muted">Senior UI Developer</p>
          </div>
          <div>
            <p class="section-label mb-3">Duration</p>
            <p class="font-sans text-sm text-muted">July 2017 – June 2019</p>
          </div>
          <div>
            <p class="section-label mb-3">Stack</p>
            <div class="flex flex-wrap gap-2">
              <span v-for="tag in tags" :key="tag" class="font-sans text-xs text-muted border border-rule px-2 py-0.5">{{ tag }}</span>
            </div>
          </div>
          <div>
            <p class="section-label mb-3">Note</p>
            <p class="font-sans text-xs text-muted leading-relaxed">Intellect's client-facing applications are proprietary financial software — screenshots are not available.</p>
          </div>
        </aside>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
const tags = ['JavaScript', 'ExtJS', 'Sass', 'CSS', 'AWS S3', 'CloudFront CDN', 'HTML']
</script>
