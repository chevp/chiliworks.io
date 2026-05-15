<script setup>
import { ref } from 'vue'
import { nav, company } from '../data/content.js'

const open = ref(false)
</script>

<template>
  <header class="sticky top-0 z-40 bg-ink-900/85 backdrop-blur border-b border-white/10">
    <div class="container-narrow flex items-center justify-between py-4 px-6">
      <router-link to="/" class="flex items-center gap-3 group">
        <span class="text-2xl">🌶️</span>
        <span class="text-xl font-bold tracking-tight group-hover:text-chili-400 transition-colors">
          {{ company.name }}
        </span>
      </router-link>

      <nav class="hidden md:flex items-center gap-7">
        <router-link
          v-for="item in nav"
          :key="item.to"
          :to="item.to"
          class="text-sm font-medium text-white/80 hover:text-chili-400 transition-colors"
          active-class="text-chili-400"
        >
          {{ item.label }}
        </router-link>
      </nav>

      <button
        class="md:hidden p-2 rounded hover:bg-white/10"
        @click="open = !open"
        aria-label="Menü"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            :d="open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'" />
        </svg>
      </button>
    </div>

    <div v-if="open" class="md:hidden border-t border-white/10 bg-ink-900">
      <nav class="flex flex-col px-6 py-4 gap-3">
        <router-link
          v-for="item in nav"
          :key="item.to"
          :to="item.to"
          class="text-sm font-medium text-white/80 hover:text-chili-400"
          active-class="text-chili-400"
          @click="open = false"
        >
          {{ item.label }}
        </router-link>
      </nav>
    </div>
  </header>
</template>
