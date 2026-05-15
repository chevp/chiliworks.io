<script setup>
import { services, images } from '../data/content.js'
const s = services.find(x => x.key === 'eventservice')

const gallery = [
  { src: images.planung,    label: 'Eventplanung' },
  { src: images.show,       label: 'Showdesign' },
  { src: images.gestaltung, label: 'Eventgestaltung' },
  { src: images.lichtdesign,label: 'Lichtdesign' },
  { src: images.studio,     label: 'Digital-Studio' },
]
</script>

<template>
  <section class="relative">
    <img :src="images.show" alt="" class="absolute inset-0 w-full h-full object-cover" />
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
      <div class="grid md:grid-cols-2 gap-6 mb-16">
        <div v-for="b in s.bullets" :key="b" class="bg-ink-800 border border-white/10 rounded-lg p-5 flex gap-4">
          <span class="w-10 h-10 shrink-0 rounded-full bg-chili-500/15 text-chili-400 flex items-center justify-center">
            <i class="fa-solid fa-circle-check"></i>
          </span>
          <p class="text-white/90 mt-1">{{ b }}</p>
        </div>
      </div>

      <h2 class="text-2xl font-bold mb-6">Eindrücke</h2>
      <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        <figure v-for="g in gallery" :key="g.label" class="bg-ink-800 rounded-lg overflow-hidden group">
          <div class="aspect-[4/3] overflow-hidden">
            <img :src="g.src" :alt="g.label" loading="lazy"
                 class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
          <figcaption class="px-4 py-2 text-sm text-white/80">{{ g.label }}</figcaption>
        </figure>
      </div>

      <router-link to="/kontakt" class="btn-primary mt-12">
        <i class="fa-solid fa-envelope-open-text mr-2"></i>Event anfragen
      </router-link>
    </div>
  </section>
</template>
