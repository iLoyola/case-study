<template>
  <article>
    <div class="site-container pt-20 pb-12 md:pt-28 md:pb-16">
      <RouterLink to="/work" class="inline-flex items-center gap-2 font-sans text-sm text-muted hover:text-ink transition-colors mb-10">
        ← All work
      </RouterLink>
      <p class="section-label mb-4">Digital Product Specialist · 2020 – 2022</p>
      <h1 class="font-serif font-bold text-display text-ink max-w-prose-wide leading-[1.1] mb-6">
        IKEA Canada — ikea.ca at $370M Scale
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
              IKEA Canada's digital team is responsible for one of the country's most-used retail websites.
              ikea.ca accounted for $370.74 million in online sales in 2021 and served 178.4 million users.
              The work covered two tracks running in parallel: the customer-facing website and the internal CMS
              that over 30 content developers used daily to manage it.
            </p>
          </section>

          <section>
            <h2 class="font-serif font-bold text-headline text-ink mb-4">What I Built</h2>
            <div class="card-accent py-1 mb-6">
              <h3 class="font-serif font-semibold text-lg text-ink mb-2">ikea.ca — Customer-Facing Web</h3>
              <p class="font-sans text-sm text-muted leading-relaxed">
                Built and maintained accessible, responsive single-page applications using Vue.js, HTML, CSS/Sass, JavaScript, PHP, and MySQL.
                Working with both the Canadian domestic team and IKEA's international web teams, features were scoped, built, and shipped
                in short agile cycles with close collaboration across multiple countries.
                Performance and reliability had a direct line to revenue — bugs at this scale have real consequences.
              </p>
            </div>
            <div class="card-accent py-1">
              <h3 class="font-serif font-semibold text-lg text-ink mb-2">Internal CMS</h3>
              <p class="font-sans text-sm text-muted leading-relaxed">
                Maintained and improved a proprietary CMS that 30+ co-workers depended on daily to manage the site's content.
                Optimized performance, fixed bugs, and built on it to keep pace with the team's evolving needs.
                Working on a CMS that non-technical users depend on every day develops a feel for how software
                should behave when the person using it isn't thinking about the software at all.
              </p>
            </div>
          </section>

          <section>
            <h2 class="font-serif font-bold text-headline text-ink mb-4">Scale & Context</h2>
            <p class="font-sans text-base text-muted leading-relaxed">
              $370.74M in online sales. 178.4M users. 30+ internal CMS users daily.
              These aren't portfolio numbers — they're the actual stakes of the work.
              A bug in the wrong place meant real consequences for real people at real scale.
              That context shapes how you approach quality, testing, and the responsibility of shipping.
            </p>
          </section>

        </div>

        <aside class="space-y-8">
          <div>
            <p class="section-label mb-3">Role</p>
            <p class="font-sans text-sm text-muted">Digital Product Specialist</p>
          </div>
          <div>
            <p class="section-label mb-3">Duration</p>
            <p class="font-sans text-sm text-muted">February 2020 – May 2022</p>
          </div>
          <div>
            <p class="section-label mb-3">Online Sales (2021)</p>
            <p class="font-sans text-sm text-muted">$370.74M CAD</p>
          </div>
          <div>
            <p class="section-label mb-3">Annual Users</p>
            <p class="font-sans text-sm text-muted">178.4M</p>
          </div>
          <div>
            <p class="section-label mb-3">Stack</p>
            <div class="flex flex-wrap gap-2">
              <span v-for="tag in tags" :key="tag" class="font-sans text-xs text-muted border border-rule px-2 py-0.5">{{ tag }}</span>
            </div>
          </div>
          <div>
            <p class="section-label mb-3">Note</p>
            <p class="font-sans text-xs text-muted leading-relaxed">IKEA Canada's web properties are proprietary — screenshots of internal development work are not available.</p>
          </div>
        </aside>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
const tags = ['Vue.js', 'JavaScript', 'HTML', 'CSS/Sass', 'PHP', 'MySQL', 'RESTful APIs', 'Insomnia']
</script>
