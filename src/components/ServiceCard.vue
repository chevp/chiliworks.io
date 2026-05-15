<script setup>
defineProps({
  service: { type: Object, required: true },
  to: { type: String, default: null },
})
</script>

<template>
  <component
    :is="to ? 'router-link' : 'div'"
    :to="to"
    class="block bg-ink-800 border border-white/10 rounded-xl p-6 hover:border-chili-500 transition-colors"
  >
    <div class="text-4xl mb-4">{{ service.icon }}</div>
    <h3 class="text-xl font-bold text-white mb-2">{{ service.title }}</h3>
    <p class="text-white/70 text-sm mb-4">{{ service.summary }}</p>
    <ul class="space-y-1 text-sm text-white/80">
      <li v-for="b in service.bullets" :key="b" class="flex items-start gap-2">
        <span class="text-chili-500 mt-1">▸</span>
        <span>{{ b }}</span>
      </li>
    </ul>
  </component>
</template>
