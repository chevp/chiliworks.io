<script setup>
import { contact } from '../data/content.js'
</script>

<template>
  <section class="section">
    <div class="container-narrow grid md:grid-cols-2 gap-12">
      <div>
        <p class="text-chili-400 uppercase tracking-widest text-xs mb-3">
          <i class="fa-solid fa-envelope mr-2"></i>Kontakt
        </p>
        <h1 class="text-4xl md:text-5xl font-extrabold mb-6">Schreiben Sie uns</h1>
        <p class="text-white/80 mb-8">
          Erzählen Sie uns von Ihrem Event – wir melden uns mit einem unverbindlichen Vorschlag.
        </p>

        <ul class="space-y-4 text-white/90">
          <li class="flex items-start gap-3">
            <i class="fa-solid fa-phone text-chili-400 mt-1"></i>
            <a :href="contact.phoneLink" class="hover:text-chili-400">{{ contact.phone }}</a>
          </li>
          <li class="flex items-start gap-3">
            <i class="fa-solid fa-envelope text-chili-400 mt-1"></i>
            <a :href="contact.emailLink" class="hover:text-chili-400">{{ contact.email }}</a>
          </li>
          <li class="flex items-start gap-3">
            <i class="fa-solid fa-location-dot text-chili-400 mt-1"></i>
            <span>
              {{ contact.address.street }}<br />
              {{ contact.address.zip }} {{ contact.address.city }}, {{ contact.address.country }}
            </span>
          </li>
        </ul>
      </div>

      <form
        class="bg-ink-800 border border-white/10 rounded-xl p-6 space-y-4"
        :action="contact.emailLink"
        method="post"
        enctype="text/plain"
      >
        <div>
          <label class="block text-sm text-white/70 mb-1" for="name">
            <i class="fa-solid fa-user mr-2 text-chili-400"></i>Name
          </label>
          <input id="name" name="name" type="text" required
                 class="w-full px-3 py-2 rounded bg-ink-900 border border-white/10 focus:border-chili-500 outline-none" />
        </div>
        <div>
          <label class="block text-sm text-white/70 mb-1" for="email">
            <i class="fa-solid fa-envelope mr-2 text-chili-400"></i>E-Mail
          </label>
          <input id="email" name="email" type="email" required
                 class="w-full px-3 py-2 rounded bg-ink-900 border border-white/10 focus:border-chili-500 outline-none" />
        </div>
        <div>
          <label class="block text-sm text-white/70 mb-1" for="message">
            <i class="fa-solid fa-comment mr-2 text-chili-400"></i>Nachricht
          </label>
          <textarea id="message" name="message" rows="5" required
                    class="w-full px-3 py-2 rounded bg-ink-900 border border-white/10 focus:border-chili-500 outline-none"></textarea>
        </div>
        <button type="submit" class="btn-primary w-full">
          <i class="fa-solid fa-paper-plane mr-2"></i>Anfrage senden
        </button>
        <p class="text-xs text-white/50">
          Hinweis: Demo-Formular – öffnet Ihr Mailprogramm mit den Daten.
        </p>
      </form>
    </div>
  </section>
</template>
