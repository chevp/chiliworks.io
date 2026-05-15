<script setup>
import { contact } from '../data/content.js'
</script>

<template>
  <section class="section">
    <div class="container-narrow grid md:grid-cols-2 gap-12">
      <div>
        <p class="text-chili-400 uppercase tracking-widest text-xs mb-3">Kontakt</p>
        <h1 class="text-4xl md:text-5xl font-extrabold mb-6">Schreiben Sie uns</h1>
        <p class="text-white/80 mb-8">
          Erzählen Sie uns von Ihrem Event – wir melden uns mit einem unverbindlichen Vorschlag.
        </p>

        <ul class="space-y-3 text-white/90">
          <li><span class="text-chili-400">Telefon: </span>
            <a :href="contact.phoneLink" class="hover:text-chili-400">{{ contact.phone }}</a>
          </li>
          <li><span class="text-chili-400">E-Mail: </span>
            <a :href="contact.emailLink" class="hover:text-chili-400">{{ contact.email }}</a>
          </li>
          <li><span class="text-chili-400">Adresse: </span>
            {{ contact.address.street }}, {{ contact.address.zip }} {{ contact.address.city }}, {{ contact.address.country }}
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
          <label class="block text-sm text-white/70 mb-1" for="name">Name</label>
          <input id="name" name="name" type="text" required
                 class="w-full px-3 py-2 rounded bg-ink-900 border border-white/10 focus:border-chili-500 outline-none" />
        </div>
        <div>
          <label class="block text-sm text-white/70 mb-1" for="email">E-Mail</label>
          <input id="email" name="email" type="email" required
                 class="w-full px-3 py-2 rounded bg-ink-900 border border-white/10 focus:border-chili-500 outline-none" />
        </div>
        <div>
          <label class="block text-sm text-white/70 mb-1" for="message">Nachricht</label>
          <textarea id="message" name="message" rows="5" required
                    class="w-full px-3 py-2 rounded bg-ink-900 border border-white/10 focus:border-chili-500 outline-none"></textarea>
        </div>
        <button type="submit" class="btn-primary w-full">Anfrage senden</button>
        <p class="text-xs text-white/50">
          Hinweis: Demo-Formular – öffnet Ihr Mailprogramm mit den Daten.
        </p>
      </form>
    </div>
  </section>
</template>
