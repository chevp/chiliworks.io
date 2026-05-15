<script setup>
import { company } from '../data/content.js'
</script>

<template>
  <section class="relative overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-br from-chili-700 via-ink-900 to-ink-900 opacity-90"></div>
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(230,57,70,0.35),transparent_55%)]"></div>

    <div class="relative container-narrow px-6 py-32 md:py-44 text-center">
      <p class="uppercase tracking-[0.3em] text-chili-300 text-xs md:text-sm mb-4">
        Veranstaltungstechnik
      </p>
      <h1 class="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
        {{ company.tagline }}
      </h1>
      <p class="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10">
        {{ company.subtagline }}
      </p>
      <div class="flex flex-wrap justify-center gap-4">
        <router-link to="/kontakt" class="btn-primary">Event anfragen</router-link>
        <router-link to="/eventtechnik" class="btn-secondary">Leistungen ansehen</router-link>
      </div>
    </div>
  </section>
</template>
