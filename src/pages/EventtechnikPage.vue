<script setup>
import { services, images } from '../data/content.js'
const s = services.find(x => x.key === 'eventtechnik')
</script>

<template>
  <section class="relative">
    <img :src="images.technik" alt="" class="absolute inset-0 w-full h-full object-cover" />
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
      <div class="grid md:grid-cols-2 gap-6 mb-12">
        <div class="bg-ink-800 border border-white/10 rounded-lg p-6">
          <i class="fa-solid fa-volume-high text-chili-400 text-3xl mb-3"></i>
          <h3 class="font-bold text-lg mb-2">Tontechnik</h3>
          <p class="text-white/70 text-sm">PA-Systeme, Mikrofone, Mischpulte – sauberer Sound für jede Raumgrösse.</p>
        </div>
        <div class="bg-ink-800 border border-white/10 rounded-lg p-6">
          <i class="fa-solid fa-lightbulb text-chili-400 text-3xl mb-3"></i>
          <h3 class="font-bold text-lg mb-2">Lichttechnik</h3>
          <p class="text-white/70 text-sm">Movinglights, LED-Fixtures, Steuerungen und Lichtdesign.</p>
        </div>
        <div class="bg-ink-800 border border-white/10 rounded-lg p-6">
          <i class="fa-solid fa-video text-chili-400 text-3xl mb-3"></i>
          <h3 class="font-bold text-lg mb-2">Videotechnik</h3>
          <p class="text-white/70 text-sm">LED-Wände, Beamer, Kameras und Live-Streaming.</p>
        </div>
        <div class="bg-ink-800 border border-white/10 rounded-lg p-6">
          <i class="fa-solid fa-truck-ramp-box text-chili-400 text-3xl mb-3"></i>
          <h3 class="font-bold text-lg mb-2">Vermietung & Betreuung</h3>
          <p class="text-white/70 text-sm">Equipment-Vermietung mit erfahrener technischer Betreuung vor Ort.</p>
        </div>
      </div>

      <router-link to="/kontakt" class="btn-primary">
        <i class="fa-solid fa-envelope-open-text mr-2"></i>Technik anfragen
      </router-link>
    </div>
  </section>
</template>
