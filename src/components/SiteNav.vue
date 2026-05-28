<template>
  <header class="site-header" :class="{ scrolled: isScrolled }">
    <nav class="site-container flex items-center justify-between py-5">
      <RouterLink to="/" class="nav-logo font-serif font-bold text-xl text-ink hover:text-accent transition-colors">
        Ivan Loyola
      </RouterLink>

      <!-- Desktop nav -->
      <ul class="hidden md:flex items-center gap-8 list-none m-0 p-0">
        <li v-for="link in links" :key="link.to">
          <RouterLink
            :to="link.to"
            class="nav-link font-sans text-sm font-medium text-muted hover:text-ink transition-colors"
            :class="{ active: isActive(link.to) }"
          >
            {{ link.label }}
          </RouterLink>
        </li>
        <li>
          <a
            href="mailto:ivan@iloyola.com"
            class="btn-primary text-sm"
          >Get in touch</a>
        </li>
      </ul>

      <!-- Mobile menu toggle -->
      <button
        class="md:hidden flex flex-col gap-1.5 p-2"
        @click="mobileOpen = !mobileOpen"
        :aria-expanded="mobileOpen"
        aria-label="Toggle menu"
      >
        <span class="block w-6 h-0.5 bg-ink transition-all" :class="{ 'rotate-45 translate-y-2': mobileOpen }"></span>
        <span class="block w-6 h-0.5 bg-ink transition-all" :class="{ 'opacity-0': mobileOpen }"></span>
        <span class="block w-6 h-0.5 bg-ink transition-all" :class="{ '-rotate-45 -translate-y-2': mobileOpen }"></span>
      </button>
    </nav>

    <!-- Mobile menu -->
    <div v-if="mobileOpen" class="md:hidden border-t border-rule bg-surface">
      <ul class="site-container flex flex-col py-6 gap-5 list-none m-0 p-0 px-6">
        <li v-for="link in links" :key="link.to">
          <RouterLink
            :to="link.to"
            class="font-sans text-base font-medium text-ink"
            @click="mobileOpen = false"
          >
            {{ link.label }}
          </RouterLink>
        </li>
        <li class="pt-2">
          <a href="mailto:ivan@iloyola.com" class="btn-primary text-sm">Get in touch</a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const mobileOpen = ref(false)
const isScrolled = ref(false)

const links = [
  { to: '/work', label: 'Work' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

function isActive(path: string) {
  if (path === '/') return route.path === '/'
  return route.path.startsWith(path)
}

function onScroll() {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 50;
  background-color: #0d0d0d;
  transition: box-shadow 0.2s ease;
}
.site-header.scrolled {
  box-shadow: 0 1px 0 #252525;
}
.nav-link.active {
  color: #e5e2dc;
  border-bottom: 2px solid #16a34a;
  padding-bottom: 2px;
}
</style>
