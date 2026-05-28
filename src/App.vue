<template>
  <SiteNav />
  <main>
    <RouterView />
  </main>
  <SiteFooter />
</template>

<script setup lang="ts">
import SiteNav from '@/components/SiteNav.vue'
import SiteFooter from '@/components/SiteFooter.vue'
</script>
