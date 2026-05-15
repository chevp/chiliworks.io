<script setup>
import { aboutShort, partners } from '../data/content.js'
</script>

<template>
  <section class="section">
    <div class="container-narrow">
      <p class="text-chili-400 uppercase tracking-widest text-xs mb-3">Über uns</p>
      <h1 class="text-4xl md:text-5xl font-extrabold mb-8">Wer wir sind</h1>
      <p class="text-lg text-white/80 max-w-3xl leading-relaxed mb-12">{{ aboutShort }}</p>

      <div class="grid md:grid-cols-3 gap-6 mb-16">
        <div class="bg-ink-800 border border-white/10 rounded-lg p-6">
          <div class="text-3xl mb-3">🎯</div>
          <h3 class="font-bold text-lg mb-2">Massgeschneidert</h3>
          <p class="text-white/70 text-sm">Lösungen, die zu Ihrem Event und Budget passen.</p>
        </div>
        <div class="bg-ink-800 border border-white/10 rounded-lg p-6">
          <div class="text-3xl mb-3">⚙️</div>
          <h3 class="font-bold text-lg mb-2">Erfahrung</h3>
          <p class="text-white/70 text-sm">Erfahrenes Team mit Expertise in allen Disziplinen.</p>
        </div>
        <div class="bg-ink-800 border border-white/10 rounded-lg p-6">
          <div class="text-3xl mb-3">🤝</div>
          <h3 class="font-bold text-lg mb-2">Partnerschaftlich</h3>
          <p class="text-white/70 text-sm">Wir denken mit – von der ersten Skizze bis zum Abbau.</p>
        </div>
      </div>

      <h2 class="text-2xl font-bold mb-6">Partner & Mitgliedschaften</h2>
      <ul class="flex flex-wrap gap-3">
        <li v-for="p in partners" :key="p.name"
            class="px-4 py-2 bg-ink-800 border border-white/10 rounded text-sm text-white/80">
          {{ p.name }}
        </li>
      </ul>
    </div>
  </section>
</template>
