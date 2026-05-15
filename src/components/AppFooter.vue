<script setup>
import { nav, contact, company } from '../data/content.js'
const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-white/10 bg-ink-800 text-white/70">
    <div class="container-narrow px-6 py-12 grid gap-10 md:grid-cols-3">
      <div>
        <div class="flex items-center gap-2 mb-3">
          <span class="text-2xl">🌶️</span>
          <span class="text-lg font-bold text-white">{{ company.name }}</span>
        </div>
        <p class="text-sm">{{ company.tagline }}</p>
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
          <li>{{ contact.address.street }}</li>
          <li>{{ contact.address.zip }} {{ contact.address.city }}</li>
          <li><a :href="contact.phoneLink" class="hover:text-chili-400">{{ contact.phone }}</a></li>
          <li><a :href="contact.emailLink" class="hover:text-chili-400">{{ contact.email }}</a></li>
        </ul>
      </div>
    </div>

    <div class="border-t border-white/10 px-6 py-4 text-center text-xs text-white/50">
      © {{ year }} {{ company.name }} · Demo-Site auf Basis von chiliworks.ch
    </div>
  </footer>
</template>
