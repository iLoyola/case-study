<template>
  <article>
    <!-- Header -->
    <div class="site-container pt-20 pb-12 md:pt-28 md:pb-16">
      <RouterLink to="/work" class="inline-flex items-center gap-2 font-sans text-sm text-muted hover:text-ink transition-colors mb-10">
        ← All work
      </RouterLink>
      <p class="section-label mb-4">AI Implementation · 2026 – Present</p>
      <h1 class="font-serif font-bold text-display text-ink max-w-prose-wide leading-[1.1] mb-6">
        Fonda AI — Voice AI & Automation for Local Service Businesses
      </h1>
      <div class="flex flex-wrap gap-2">
        <span v-for="tag in tags" :key="tag" class="font-sans text-xs text-muted border border-rule px-2 py-0.5">{{ tag }}</span>
      </div>
    </div>

    <div class="site-container">
      <div class="section-rule"></div>
    </div>

    <!-- Body -->
    <div class="site-container py-14 md:py-20">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
        <div class="lg:col-span-2 space-y-12">

          <section>
            <h2 class="font-serif font-bold text-headline text-ink mb-4">The Problem</h2>
            <p class="font-sans text-base text-muted leading-relaxed mb-4">
              Local service businesses — contractors, clinics, law firms, cleaning companies — are overwhelmed.
              They miss calls. They lose leads after hours. They spend hours on admin work that should run itself.
              They know AI could help, but they don't have time to figure out what to buy or how to set it up.
            </p>
            <p class="font-sans text-base text-muted leading-relaxed">
              I founded Fonda AI to solve that. Not as a reseller, not as a consultant giving advice —
              as an implementation partner who builds the thing, deploys it, and makes sure it works.
            </p>
          </section>

          <section>
            <h2 class="font-serif font-bold text-headline text-ink mb-4">What I Built</h2>
            <div class="card-accent py-1 mb-6">
              <h3 class="font-serif font-semibold text-lg text-ink mb-2">fondaai.com</h3>
              <p class="font-sans text-sm text-muted leading-relaxed">
                Full-stack marketing and product site built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4.
                Includes Framer Motion animated product demonstrations, schema.org structured data (FAQ and Service schemas),
                App Router page architecture, and full SEO optimization — canonical URLs, OpenGraph tags, Twitter cards, and sitemap generation.
              </p>
            </div>
            <div class="card-accent py-1 mb-6">
              <h3 class="font-serif font-semibold text-lg text-ink mb-2">Voice AI Agents</h3>
              <p class="font-sans text-sm text-muted leading-relaxed">
                Deployed Retell AI voice agents that handle inbound calls 24/7 — booking appointments, capturing lead info,
                and routing conversations. Integrated with GoHighLevel CRM and calendar systems so every interaction
                flows directly into the client's existing workflow.
              </p>
            </div>
            <div class="card-accent py-1">
              <h3 class="font-serif font-semibold text-lg text-ink mb-2">Workflow Automation</h3>
              <p class="font-sans text-sm text-muted leading-relaxed">
                Built end-to-end automations using n8n, bridging 15+ platforms via REST APIs and webhooks:
                GoHighLevel, HubSpot, Salesforce, Calendly, ServiceTitan, Jobber, Twilio, Zapier, and more.
                Voice, SMS, CRM, and calendar workflows connected into a single pipeline — reducing missed leads and eliminating manual handoffs.
              </p>
            </div>
          </section>

          <section>
            <h2 class="font-serif font-bold text-headline text-ink mb-4">End-to-End Delivery</h2>
            <p class="font-sans text-base text-muted leading-relaxed mb-4">
              Every client engagement runs the full cycle: discovery interviews, requirements translation,
              solution design, implementation, deployment, onboarding documentation, staff training, and ongoing support.
              Not "here's the tool, good luck" — actual delivery.
            </p>
            <p class="font-sans text-base text-muted leading-relaxed">
              I manage multiple live client environments simultaneously, each at different stages of deployment and iteration.
            </p>
          </section>

          <section>
            <h2 class="font-serif font-bold text-headline text-ink mb-4">Why It Matters</h2>
            <p class="font-sans text-base text-muted leading-relaxed">
              Fonda AI sits at a specific intersection: businesses that are too busy to figure out AI on their own,
              and technology that genuinely works when it's set up correctly. Closing that gap is the whole point.
              The work requires both technical depth — building and connecting systems that actually hold up in production —
              and the ability to communicate clearly with people who just want their phone answered when they can't get to it.
            </p>
          </section>

        </div>

        <!-- Sidebar -->
        <aside class="space-y-8">
          <div>
            <p class="section-label mb-3">Role</p>
            <p class="font-sans text-sm text-muted leading-relaxed">Founder & AI Implementation Developer</p>
          </div>
          <div>
            <p class="section-label mb-3">Duration</p>
            <p class="font-sans text-sm text-muted">2026 – Present</p>
          </div>
          <div>
            <p class="section-label mb-3">Stack</p>
            <div class="flex flex-wrap gap-2">
              <span v-for="tag in tags" :key="tag" class="font-sans text-xs text-muted border border-rule px-2 py-0.5">{{ tag }}</span>
            </div>
          </div>
          <div>
            <p class="section-label mb-3">Live site</p>
            <a href="https://fondaai.com" target="_blank" rel="noopener noreferrer" class="font-sans text-sm text-accent hover:underline underline-offset-4">
              fondaai.com →
            </a>
          </div>
        </aside>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
const tags = ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS v4', 'Framer Motion', 'Retell AI', 'GoHighLevel', 'n8n', 'Zapier', 'Twilio', 'REST APIs']
</script>
