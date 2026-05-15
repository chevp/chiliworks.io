<script setup>
import { services } from '../data/content.js'
const s = services.find(x => x.key === 'festinstallationen')
</script>

<template>
  <section class="section">
    <div class="container-narrow">
      <p class="text-chili-400 uppercase tracking-widest text-xs mb-3">Leistung</p>
      <h1 class="text-4xl md:text-5xl font-extrabold mb-6">{{ s.title }}</h1>
      <p class="text-lg text-white/80 max-w-3xl mb-10">{{ s.summary }}</p>

      <div class="grid md:grid-cols-2 gap-6">
        <div v-for="b in s.bullets" :key="b" class="bg-ink-800 border border-white/10 rounded-lg p-5">
          <div class="text-chili-500 text-2xl mb-2">▸</div>
          <p class="text-white/90">{{ b }}</p>
        </div>
      </div>

      <router-link to="/kontakt" class="btn-primary mt-12">Beratung anfragen</router-link>
    </div>
  </section>
</template>
