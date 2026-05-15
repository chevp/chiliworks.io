// Content sourced from https://www.chiliworks.ch/ as starting point.
// Edit this file to update text across the site.

export const company = {
  name: 'Chiliworks',
  tagline: 'Veranstaltungstechnik Live | Hybrid | Digital',
  subtagline: 'Planen Sie Ihren nächsten Event mit uns',
}

export const contact = {
  phone: '+41 (0)61 751 50 37',
  phoneLink: 'tel:+41617515037',
  email: 'info@chiliworks.ch',
  emailLink: 'mailto:info@chiliworks.ch',
  address: {
    street: 'Schorenweg 10',
    zip: '4144',
    city: 'Arlesheim',
    country: 'Schweiz',
  },
}

export const nav = [
  { to: '/eventservice', label: 'Eventservice' },
  { to: '/eventtechnik', label: 'Eventtechnik' },
  { to: '/festinstallationen', label: 'Festinstallationen' },
  { to: '/ueber-uns', label: 'Über uns' },
  { to: '/kontakt', label: 'Kontakt' },
]

export const services = [
  {
    key: 'eventservice',
    title: 'Eventservice',
    icon: '🎤',
    summary: 'Planung, Konzeption und Umsetzung Ihres Events – von der ersten Idee bis zum Abbau.',
    bullets: [
      'Konzeption und Eventplanung',
      'Bühnen- und Showdesign',
      'Logistik und Personalmanagement',
      'Live-, Hybrid- und Digital-Events',
    ],
  },
  {
    key: 'eventtechnik',
    title: 'Eventtechnik',
    icon: '💡',
    summary: 'Audio, Licht, Video, Multimedia – moderne Technik in höchster Qualität.',
    bullets: [
      'Tontechnik (PA, Mikrofone, Mischpulte)',
      'Lichttechnik (Movinglights, LED, Steuerung)',
      'Videotechnik (LED-Wände, Beamer, Streaming)',
      'Vermietung und technische Betreuung',
    ],
  },
  {
    key: 'festinstallationen',
    title: 'Festinstallationen',
    icon: '🏛️',
    summary: 'Fest installierte AV-Lösungen für Säle, Hotels, Restaurants und Konferenzräume.',
    bullets: [
      'Konzeption und Beratung',
      'Installation und Inbetriebnahme',
      'Wartung und Service',
      'Schulung der Anwender',
    ],
  },
]

export const aboutShort = `Chiliworks verbindet die Anforderungen unserer Kundinnen und Kunden mit kreativen Lösungen — innerhalb des vorgegebenen Budgets. Unsere Expertise umfasst Veranstaltungstechnik in allen Disziplinen sowie visuelles Design.`

export const partners = [
  { name: 'SVTB', file: 'svtb_logo.svg' },
  { name: 'Ausbildungsbetrieb Veranstaltungstechniker', file: 'Ausbildung-Veranstaltungstechniker-Lehrbetrieb.png' },
  { name: 'Go Backstage', file: 'go-backstage.svg' },
]
