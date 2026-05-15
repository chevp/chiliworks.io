<script setup>
import HeroSection from '../components/HeroSection.vue'
import ServiceCard from '../components/ServiceCard.vue'
import { services, aboutShort, contact, images } from '../data/content.js'
</script>

<template>
  <HeroSection />

  <section class="section">
    <div class="container-narrow">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-3">Unsere Leistungen</h2>
      <p class="text-white/70 text-center max-w-2xl mx-auto mb-12">
        Von der Konzeption bis zur Umsetzung – wir liefern Technik und Service
        für Events jeder Grössenordnung.
      </p>
      <div class="grid gap-6 md:grid-cols-3">
        <ServiceCard
          v-for="s in services"
          :key="s.key"
          :service="s"
          :to="`/${s.key}`"
        />
      </div>
    </div>
  </section>

  <section class="section bg-ink-800">
    <div class="container-narrow grid md:grid-cols-2 gap-12 items-center">
      <div>
        <p class="text-chili-400 uppercase tracking-widest text-xs mb-3">
          <i class="fa-solid fa-circle-info mr-2"></i>Über uns
        </p>
        <h2 class="text-3xl md:text-4xl font-bold mb-6">Wer wir sind</h2>
        <p class="text-white/80 leading-relaxed">{{ aboutShort }}</p>
        <router-link to="/ueber-uns" class="btn-secondary mt-8">
          <i class="fa-solid fa-arrow-right mr-2"></i>Mehr erfahren
        </router-link>
      </div>
      <div class="rounded-xl overflow-hidden aspect-video">
        <img :src="images.regie" alt="Regie" class="w-full h-full object-cover" loading="lazy" />
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container-narrow text-center">
      <h2 class="text-3xl md:text-4xl font-bold mb-4">Bereit für Ihr nächstes Event?</h2>
      <p class="text-white/70 mb-8">Wir freuen uns auf Ihre Anfrage.</p>
      <div class="flex flex-wrap justify-center gap-4">
        <a :href="contact.emailLink" class="btn-primary">
          <i class="fa-solid fa-envelope mr-2"></i>{{ contact.email }}
        </a>
        <a :href="contact.phoneLink" class="btn-secondary">
          <i class="fa-solid fa-phone mr-2"></i>{{ contact.phone }}
        </a>
      </div>
    </div>
  </section>
</template>
