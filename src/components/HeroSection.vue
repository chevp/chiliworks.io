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
      <p class="uppercase tracking-[0.4em] text-chili-300 text-xs md:text-sm mb-6">
        <i class="fa-solid fa-bolt mr-2"></i>Chiliworks
      </p>

      <h1 class="hero-headline">
        <span class="block">{{ company.headline }}</span>
      </h1>

      <ul class="flex flex-wrap justify-center items-center gap-x-3 gap-y-3 mt-8 mb-10">
        <li v-for="(m, i) in company.modes" :key="m.label" class="flex items-center gap-3">
          <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/15 backdrop-blur text-white font-semibold tracking-wide">
            <i :class="m.icon" class="text-chili-400"></i>{{ m.label }}
          </span>
          <i v-if="i < company.modes.length - 1" class="fa-solid fa-circle text-chili-500 text-[6px]" aria-hidden="true"></i>
        </li>
      </ul>

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
