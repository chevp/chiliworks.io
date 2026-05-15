<script setup>
import { company, images } from '../data/content.js'
</script>

<template>
  <section class="relative overflow-hidden">
    <img
      :src="images.hero"
      alt=""
      aria-hidden="true"
      class="absolute inset-0 w-full h-full object-cover"
    />
    <div class="absolute inset-0 bg-gradient-to-b from-ink-900/70 via-ink-900/80 to-ink-900"></div>
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(230,57,70,0.35),transparent_60%)]"></div>

    <div class="relative container-narrow px-6 py-32 md:py-44 text-center">
      <p class="uppercase tracking-[0.3em] text-chili-300 text-xs md:text-sm mb-4">
        <i class="fa-solid fa-bolt mr-2"></i>Veranstaltungstechnik
      </p>
      <h1 class="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6 drop-shadow-lg">
        {{ company.tagline }}
      </h1>
      <p class="text-lg md:text-xl text-white/85 max-w-2xl mx-auto mb-10">
        {{ company.subtagline }}
      </p>
      <div class="flex flex-wrap justify-center gap-4">
        <router-link to="/kontakt" class="btn-primary">
          <i class="fa-solid fa-envelope-open-text mr-2"></i>Event anfragen
        </router-link>
        <router-link to="/eventtechnik" class="btn-secondary">
          <i class="fa-solid fa-list-check mr-2"></i>Leistungen ansehen
        </router-link>
      </div>
    </div>
  </section>
</template>
