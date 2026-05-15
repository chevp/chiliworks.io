<script setup>
import { ref } from 'vue'
import { nav, company, images } from '../data/content.js'

const open = ref(false)
</script>

<template>
  <header class="sticky top-0 z-40 bg-ink-900/85 backdrop-blur border-b border-white/10">
    <div class="container-narrow flex items-center justify-between py-4 px-6">
      <router-link to="/" class="flex items-center gap-3 group">
        <img :src="images.logo" :alt="company.name" class="h-9 w-auto" />
        <span class="sr-only">{{ company.name }}</span>
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
        <i :class="open ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'" class="text-xl"></i>
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
