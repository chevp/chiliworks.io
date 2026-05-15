<script setup>
import { nav, contact, company, partners, images } from '../data/content.js'
const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-white/10 bg-ink-800 text-white/70">
    <div class="container-narrow px-6 py-12 grid gap-10 md:grid-cols-4">
      <div class="md:col-span-2">
        <img :src="images.logo" :alt="company.name" class="h-10 w-auto mb-4" />
        <p class="text-sm max-w-sm">{{ company.tagline }}</p>
      </div>

      <div>
        <h4 class="text-white font-semibold mb-3">Navigation</h4>
        <ul class="space-y-2 text-sm">
          <li v-for="item in nav" :key="item.to">
            <router-link :to="item.to" class="hover:text-chili-400">{{ item.label }}</router-link>
          </li>
        </ul>
      </div>

      <div>
        <h4 class="text-white font-semibold mb-3">Kontakt</h4>
        <ul class="space-y-2 text-sm">
          <li>
            <i class="fa-solid fa-location-dot mr-2 text-chili-400"></i>
            {{ contact.address.street }}, {{ contact.address.zip }} {{ contact.address.city }}
          </li>
          <li>
            <i class="fa-solid fa-phone mr-2 text-chili-400"></i>
            <a :href="contact.phoneLink" class="hover:text-chili-400">{{ contact.phone }}</a>
          </li>
          <li>
            <i class="fa-solid fa-envelope mr-2 text-chili-400"></i>
            <a :href="contact.emailLink" class="hover:text-chili-400">{{ contact.email }}</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="border-t border-white/10 bg-ink-900">
      <div class="container-narrow px-6 py-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
        <img
          v-for="p in partners"
          :key="p.name"
          :src="p.src"
          :alt="p.name"
          class="h-10 w-auto opacity-80 hover:opacity-100 transition-opacity"
          loading="lazy"
        />
      </div>
    </div>

    <div class="px-6 py-4 text-center text-xs text-white/50">
      © {{ year }} {{ company.name }} · Demo-Site auf Basis von chiliworks.ch
    </div>
  </footer>
</template>
