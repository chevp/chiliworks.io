<script setup>
import { aboutShort, partners, values, images } from '../data/content.js'
</script>

<template>
  <section class="section">
    <div class="container-narrow">
      <p class="text-chili-400 uppercase tracking-widest text-xs mb-3">
        <i class="fa-solid fa-circle-info mr-2"></i>Über uns
      </p>
      <h1 class="text-4xl md:text-5xl font-extrabold mb-8">Wer wir sind</h1>

      <div class="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div class="rounded-xl overflow-hidden">
          <img :src="images.team" alt="Christian Chevillat" loading="lazy"
               class="w-full h-auto object-cover" />
        </div>
        <p class="text-lg text-white/85 leading-relaxed">{{ aboutShort }}</p>
      </div>

      <div class="grid md:grid-cols-3 gap-6 mb-16">
        <div v-for="v in values" :key="v.title" class="bg-ink-800 border border-white/10 rounded-lg p-6">
          <i :class="v.icon" class="text-chili-400 text-3xl mb-3"></i>
          <h3 class="font-bold text-lg mb-2">{{ v.title }}</h3>
          <p class="text-white/70 text-sm">{{ v.text }}</p>
        </div>
      </div>

      <h2 class="text-2xl font-bold mb-6">Partner & Mitgliedschaften</h2>
      <div class="bg-ink-800 border border-white/10 rounded-xl p-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
        <img v-for="p in partners" :key="p.name" :src="p.src" :alt="p.name"
             class="h-14 w-auto opacity-90 hover:opacity-100 transition-opacity" loading="lazy" />
      </div>
    </div>
  </section>
</template>
