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
    class="block bg-ink-800 border border-white/10 rounded-xl overflow-hidden hover:border-chili-500 transition-colors group"
  >
    <div class="aspect-[16/9] overflow-hidden bg-ink-900">
      <img
        v-if="service.image"
        :src="service.image"
        :alt="service.title"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />
    </div>
    <div class="p-6">
      <div class="flex items-center gap-3 mb-3">
        <span class="w-10 h-10 rounded-full bg-chili-500/15 text-chili-400 flex items-center justify-center">
          <i :class="service.icon"></i>
        </span>
        <h3 class="text-xl font-bold text-white">{{ service.title }}</h3>
      </div>
      <p class="text-white/70 text-sm mb-4">{{ service.summary }}</p>
      <ul class="space-y-1 text-sm text-white/80">
        <li v-for="b in service.bullets" :key="b" class="flex items-start gap-2">
          <i class="fa-solid fa-chevron-right text-chili-500 mt-1 text-xs"></i>
          <span>{{ b }}</span>
        </li>
      </ul>
    </div>
  </component>
</template>
