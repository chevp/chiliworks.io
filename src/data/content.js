// Content sourced from https://www.chiliworks.ch/ as starting point.
// All images are deep-linked from the original chiliworks.ch CDN.

const CW = 'https://www.chiliworks.ch/_assets'

export const images = {
  logo:      `${CW}/icon/Logo_Chiliworks.svg`,
  favicon:   `${CW}/icon/icon_Chiliworks.png`,
  hero:      `${CW}/img/eventservice/corporate/Firmenevents.jpg`,
  show:      `${CW}/img/eventservice/corporate/show.jpg`,
  studio:    `${CW}/img/eventservice/digital/studio.png`,
  gestaltung:`${CW}/img/eventservice/eventgestaltung/eventgestaltung.png`,
  lichtdesign:`${CW}/img/eventservice/lichtdesign/Corporate_Events_4.jpg`,
  planung:   `${CW}/img/eventservice/planung/event_planung.jpg`,
  technik:   `${CW}/img/eventtechnik/eventtechnik.png`,
  install:   `${CW}/img/installation/festinstalation.jpg`,
  team:      `${CW}/img/team/Christian_Chevillat.jpg`,
  regie:     `${CW}/img/team/regie.jpeg`,
  partners: {
    svtb:        `${CW}/icon/svtb_logo.svg`,
    ausbildung:  `${CW}/icon/Ausbildung-Veranstaltungstechniker-Lehrbetrieb.png`,
    gobackstage: `${CW}/icon/go-backstage.svg`,
  },
}

export const company = {
  name: 'Chiliworks',
  headline: 'Veranstaltungstechnik',
  tagline: 'Veranstaltungstechnik Live | Hybrid | Digital',
  subtagline: 'Planen Sie Ihren nächsten Event mit uns',
  modes: [
    { label: 'Live',    icon: 'fa-solid fa-tower-broadcast' },
    { label: 'Hybrid',  icon: 'fa-solid fa-shuffle' },
    { label: 'Digital', icon: 'fa-solid fa-display' },
  ],
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
    icon: 'fa-solid fa-microphone-lines',
    image: images.planung,
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
    icon: 'fa-solid fa-lightbulb',
    image: images.technik,
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
    icon: 'fa-solid fa-building',
    image: images.install,
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

export const values = [
  { icon: 'fa-solid fa-bullseye',   title: 'Massgeschneidert', text: 'Lösungen, die zu Ihrem Event und Budget passen.' },
  { icon: 'fa-solid fa-gears',      title: 'Erfahrung',        text: 'Erfahrenes Team mit Expertise in allen Disziplinen.' },
  { icon: 'fa-solid fa-handshake',  title: 'Partnerschaftlich',text: 'Wir denken mit – von der ersten Skizze bis zum Abbau.' },
]

export const partners = [
  { name: 'SVTB',                                       src: images.partners.svtb },
  { name: 'Ausbildungsbetrieb Veranstaltungstechniker', src: images.partners.ausbildung },
  { name: 'Go Backstage',                               src: images.partners.gobackstage },
]
