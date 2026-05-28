<template>
  <RouterLink :to="to" class="group block card-accent py-1 hover:no-underline">
    <div class="flex flex-col gap-2">
      <span class="section-label">{{ label }}</span>
      <h3 class="font-serif font-bold text-subhead text-ink group-hover:text-accent transition-colors leading-snug">
        {{ title }}
      </h3>
      <p class="font-sans text-sm text-muted leading-relaxed">{{ description }}</p>
      <div class="flex flex-wrap gap-2 mt-1">
        <span
          v-for="tag in tags"
          :key="tag"
          class="font-sans text-xs text-muted border border-rule px-2 py-0.5"
        >{{ tag }}</span>
      </div>
      <span class="font-sans text-sm font-medium text-accent mt-2 group-hover:underline underline-offset-4">
        Read case study →
      </span>
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
defineProps<{
  to: string
  label: string
  title: string
  description: string
  tags: string[]
}>()
</script>
