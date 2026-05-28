<template>
  <footer class="mt-24 border-t-2 border-ink py-12">
    <div class="site-container flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
      <div>
        <p class="font-serif font-bold text-lg text-ink">Ivan Loyola</p>
        <p class="font-sans text-sm text-muted mt-1">Frontend Developer & AI Builder · Waterdown, Ontario</p>
      </div>
      <nav class="flex flex-wrap gap-x-8 gap-y-3">
        <RouterLink to="/work" class="font-sans text-sm text-muted hover:text-ink transition-colors">Work</RouterLink>
        <RouterLink to="/about" class="font-sans text-sm text-muted hover:text-ink transition-colors">About</RouterLink>
        <RouterLink to="/contact" class="font-sans text-sm text-muted hover:text-ink transition-colors">Contact</RouterLink>
        <a href="https://linkedin.com/in/ivanloyola" target="_blank" rel="noopener noreferrer" class="font-sans text-sm text-muted hover:text-ink transition-colors">LinkedIn</a>
        <a href="https://github.com/iLoyola" target="_blank" rel="noopener noreferrer" class="font-sans text-sm text-muted hover:text-ink transition-colors">GitHub</a>
        <a href="https://fondaai.com" target="_blank" rel="noopener noreferrer" class="font-sans text-sm text-muted hover:text-ink transition-colors">Fonda AI</a>
      </nav>
    </div>
  </footer>
</template>
