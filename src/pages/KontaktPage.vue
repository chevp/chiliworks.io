<script setup>
import { contact, images } from '../data/content.js'

const mapHref =
  `https://www.google.com/maps/search/?api=1&query=` +
  encodeURIComponent(`${contact.address.street}, ${contact.address.zip} ${contact.address.city}, ${contact.address.country}`)

const mailtoHref =
  `${contact.emailLink}?subject=${encodeURIComponent('Eventanfrage über chiliworks.io')}` +
  `&body=${encodeURIComponent('Hallo Chiliworks,\n\nich plane folgendes Event:\n\n- Datum:\n- Ort:\n- Teilnehmerzahl:\n- Was wir brauchen:\n\nFreundliche Grüsse,\n')}`
</script>

<template>
  <section class="relative">
    <img :src="images.regie" alt="" class="absolute inset-0 w-full h-full object-cover" />
    <div class="absolute inset-0 bg-gradient-to-b from-ink-900/70 via-ink-900/85 to-ink-900"></div>
    <div class="relative container-narrow px-6 py-24 text-center">
      <p class="text-chili-400 uppercase tracking-[0.3em] text-xs mb-3">
        <i class="fa-solid fa-envelope mr-2"></i>Kontakt
      </p>
      <h1 class="text-4xl md:text-5xl font-extrabold mb-4">Reden wir über Ihr Event</h1>
      <p class="text-white/85 max-w-2xl mx-auto">
        Erzählen Sie uns von Ihrem Vorhaben — wir antworten in der Regel innerhalb eines Werktages.
      </p>
    </div>
  </section>

  <section class="section">
    <div class="container-narrow grid md:grid-cols-3 gap-6">
      <a :href="mailtoHref"
         class="group bg-ink-800 border border-white/10 rounded-xl p-8 hover:border-chili-500 transition-colors">
        <i class="fa-solid fa-envelope text-chili-400 text-4xl mb-4 block"></i>
        <h2 class="font-bold text-xl mb-2">E-Mail</h2>
        <p class="text-white/70 text-sm mb-4">
          Schreiben Sie uns mit ein paar Eckdaten zu Ihrem Event – wir melden uns mit Vorschlag.
        </p>
        <span class="inline-flex items-center gap-2 text-chili-400 group-hover:text-chili-300 font-semibold">
          {{ contact.email }} <i class="fa-solid fa-arrow-right"></i>
        </span>
      </a>

      <a :href="contact.phoneLink"
         class="group bg-ink-800 border border-white/10 rounded-xl p-8 hover:border-chili-500 transition-colors">
        <i class="fa-solid fa-phone text-chili-400 text-4xl mb-4 block"></i>
        <h2 class="font-bold text-xl mb-2">Telefon</h2>
        <p class="text-white/70 text-sm mb-4">
          Direkter Draht für kurzfristige Anfragen und persönliche Beratung.
        </p>
        <span class="inline-flex items-center gap-2 text-chili-400 group-hover:text-chili-300 font-semibold">
          {{ contact.phone }} <i class="fa-solid fa-arrow-right"></i>
        </span>
      </a>

      <a :href="mapHref" target="_blank" rel="noopener"
         class="group bg-ink-800 border border-white/10 rounded-xl p-8 hover:border-chili-500 transition-colors">
        <i class="fa-solid fa-location-dot text-chili-400 text-4xl mb-4 block"></i>
        <h2 class="font-bold text-xl mb-2">Standort</h2>
        <p class="text-white/70 text-sm mb-4">
          Besuchen Sie uns nach Vereinbarung in unserem Lager und Showroom in Arlesheim.
        </p>
        <span class="not-italic inline-flex flex-col gap-0 text-chili-400 group-hover:text-chili-300 font-semibold">
          <span>{{ contact.address.street }}</span>
          <span>{{ contact.address.zip }} {{ contact.address.city }}</span>
        </span>
      </a>
    </div>

    <div class="container-narrow mt-12 bg-ink-800 border border-white/10 rounded-xl p-8">
      <h3 class="font-bold text-lg mb-4">
        <i class="fa-solid fa-circle-info text-chili-400 mr-2"></i>Damit es schnell geht
      </h3>
      <p class="text-white/70 text-sm mb-4">
        Falls Sie uns schreiben, helfen uns folgende Angaben bei einer raschen Rückmeldung:
      </p>
      <ul class="grid sm:grid-cols-2 gap-2 text-sm text-white/80">
        <li><i class="fa-solid fa-calendar text-chili-400 mr-2"></i>Datum / Zeitraum</li>
        <li><i class="fa-solid fa-location-pin text-chili-400 mr-2"></i>Veranstaltungsort</li>
        <li><i class="fa-solid fa-users text-chili-400 mr-2"></i>Erwartete Teilnehmerzahl</li>
        <li><i class="fa-solid fa-list-check text-chili-400 mr-2"></i>Benötigte Leistungen (Ton, Licht, Video, …)</li>
      </ul>
    </div>
  </section>
</template>
