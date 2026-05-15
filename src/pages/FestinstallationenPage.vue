<script setup>
import { services, images } from '../data/content.js'
const s = services.find(x => x.key === 'festinstallationen')
</script>

<template>
  <section class="relative">
    <img :src="images.install" alt="" class="absolute inset-0 w-full h-full object-cover" />
    <div class="absolute inset-0 bg-gradient-to-b from-ink-900/60 via-ink-900/80 to-ink-900"></div>
    <div class="relative container-narrow px-6 py-24">
      <p class="text-chili-400 uppercase tracking-widest text-xs mb-3">
        <i :class="s.icon" class="mr-2"></i>Leistung
      </p>
      <h1 class="text-4xl md:text-5xl font-extrabold mb-6">{{ s.title }}</h1>
      <p class="text-lg text-white/85 max-w-3xl">{{ s.summary }}</p>
    </div>
  </section>

  <section class="section">
    <div class="container-narrow">
      <div class="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div class="rounded-xl overflow-hidden">
          <img :src="images.install" alt="Festinstallation" loading="lazy"
               class="w-full h-auto object-cover" />
        </div>
        <div class="space-y-4">
          <div v-for="b in s.bullets" :key="b" class="flex gap-3 items-start">
            <span class="w-9 h-9 shrink-0 rounded-full bg-chili-500/15 text-chili-400 flex items-center justify-center">
              <i class="fa-solid fa-circle-check"></i>
            </span>
            <p class="text-white/90 mt-1">{{ b }}</p>
          </div>
        </div>
      </div>

      <router-link to="/kontakt" class="btn-primary">
        <i class="fa-solid fa-envelope-open-text mr-2"></i>Beratung anfragen
      </router-link>
    </div>
  </section>
</template>
