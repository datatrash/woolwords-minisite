(() => {
  const choices = {en:'English', es:'Español', fr:'Français', nl:'Nederlands', de:'Deutsch'};
  const added = window.WoolwordsLocales || {};
  Object.entries(added).forEach(([code, locale]) => { choices[code] = locale.label; });
  const translations = {
    es: ['Cómo jugar','Los detalles','UN PEQUEÑO JUEGO DIARIO DE PALABRAS','Encuentra un poco de<br><em>espacio</em> para jugar.','Un puñado de letras y un momento para ti. Sigue las palabras y desenreda el lío.','Próximamente para Android','Descubre cómo jugar','Hecho para pequeñas pausas','Tómate tu tiempo y disfruta.','ENCUENTRA LAS PALABRAS','DESENREDA EL TABLERO','VUELVE MAÑANA','UN PEQUEÑO RITUAL','Una palabra a la vez','Sin prisas. Solo tú, una cuadrícula y el placer de ver cómo todo encaja.','01 / OBSERVA','Encuentra una palabra','Observa las letras. Las palabras pueden girar entre letras vecinas.','02 / TRAZA','Sigue las letras','Desliza por las fichas o toca las letras una a una. Descubre palabras ocultas.','03 / DESENREDA','Desenreda todo','Encuentra todas las palabras y despeja el tablero. Mañana te espera otro reto.','UN RETO A TU RITMO','Acogedor, con<br><em>un toque ingenioso.</em>','Disfruta de un tablero Clásico de <span class="board-size">4 × 4</span> o del reto Difícil de <span class="board-size">5 × 5</span>.','Dos retos diarios','Clásico y Difícil, con un tablero nuevo cada día.','A tu manera','Modo claro, oscuro o el de tu dispositivo.','Un pequeño extra','Desbloquea retos adicionales viendo un anuncio opcional o quita los anuncios para siempre con una compra única.','HASTA MAÑANA','Haz un hueco<br>para <em>jugar.</em>','Woolwords llegará a Android.','Contactar','Un pequeño lío de letras de datatrash.','Política de privacidad','Contacto','El juego'],
    fr: ['Comment jouer','Les détails','UN PETIT JEU DE MOTS QUOTIDIEN','Trouvez un peu<br>d’<em>espace</em> pour jouer.','Quelques lettres, un moment pour vous. Suivez les mots et démêlez le tout.','Bientôt sur Android','Découvrir le jeu','Pour les petites pauses','Prenez votre temps et profitez.','TROUVEZ LES MOTS','DÉMÊLEZ LA GRILLE','À DEMAIN','UN PETIT RITUEL','Un mot à la fois','Pas de précipitation. Juste vous, une grille et le plaisir de tout remettre en place.','01 / OBSERVEZ','Repérez un mot','Observez les lettres. Les mots serpentent entre les lettres voisines.','02 / TRACEZ','Suivez les lettres','Glissez sur les cases ou touchez les lettres une à une. Découvrez des mots cachés.','03 / DÉMÊLEZ','Démêlez le tout','Trouvez tous les mots pour vider la grille. Un nouveau défi vous attend demain.','UN DÉFI À VOTRE RYTHME','Doux, avec<br><em>un brin d’astuce.</em>','Profitez d’une grille Classique de <span class="board-size">4 × 4</span> ou Difficile de <span class="board-size">5 × 5</span>.','Deux défis quotidiens','Classique et Difficile, avec une nouvelle grille chaque jour.','À votre façon','Clair, sombre ou selon votre appareil.','Un petit supplément','Débloquez des jeux bonus avec une publicité facultative, ou supprimez les publicités pour de bon avec un achat unique.','À DEMAIN','Faites une place<br>au <em>jeu.</em>','Woolwords arrive sur Android.','Nous contacter','Un petit jeu de mots par datatrash.','Politique de confidentialité','Contact','Le jeu'],
    nl: ['Zo speel je','De details','EEN KLEIN DAGELIJKS WOORDSPEL','Maak een beetje<br><em>ruimte</em> om te spelen.','Een handvol letters, een moment voor jezelf. Volg de woorden en ontrafel de knoop.','Binnenkort voor Android','Bekijk hoe het werkt','Voor kleine pauzes','Neem de tijd en kom tot rust.','VIND DE WOORDEN','ONTWAR HET BORD','KOM MORGEN TERUG','EEN KLEIN RITUEEL','Eén woord tegelijk','Geen haast. Alleen jij, een raster en het fijne gevoel dat alles op zijn plek valt.','01 / KIJK','Zoek een woord','Bekijk de letters. Woorden kunnen langs aangrenzende letters draaien.','02 / VOLG','Volg de letters','Veeg langs de tegels of tik letters één voor één aan. Vind ook verborgen woorden.','03 / ONTWAR','Ontwar alles','Vind alle doelwoorden en maak het bord leeg. Morgen wacht een nieuwe puzzel.','EEN PUZZEL OP JOUW TEMPO','Gezellig, met<br><em>een slimme twist.</em>','Speel een klassieke puzzel van <span class="board-size">4 × 4</span> of een pittige puzzel van <span class="board-size">5 × 5</span>.','Twee dagelijkse puzzels','Klassiek en Pittig, elke dag een nieuw bord.','Gezellig op jouw manier','Licht, donker of volgens je apparaat.','Iets extra’s','Speel optionele bonuspuzzels vrij met een advertentie, of verwijder advertenties voorgoed met een eenmalige aankoop.','TOT MORGEN','Maak wat ruimte<br>voor <em>woordspel.</em>','Woolwords komt naar Android.','Neem contact op','Een kleine woordknoop van datatrash.','Privacybeleid','Contact','Het spel'],
    de: ['Spielanleitung','Die Details','EIN KLEINES TÄGLICHES WORTSPIEL','Finde ein wenig<br><em>Raum</em> zum Spielen.','Eine Handvoll Buchstaben, ein Moment für dich. Folge den Wörtern und löse den Knoten.','Bald für Android','So funktioniert’s','Für kleine Pausen','Lass dir Zeit und genieße den Moment.','FINDE DIE WÖRTER','ENTWIRRE DAS FELD','KOMM MORGEN WIEDER','EIN KLEINES RITUAL','Ein Wort nach dem anderen','Keine Eile. Nur du, ein kleines Raster und das schöne Gefühl, wenn alles passt.','01 / SCHAUEN','Entdecke ein Wort','Sieh dir die Buchstaben an. Wörter schlängeln sich über benachbarte Buchstaben.','02 / FOLGEN','Folge den Buchstaben','Wische über die Steine oder tippe Buchstaben einzeln an. Entdecke versteckte Wörter.','03 / ENTWIRREN','Entwirre alles','Finde alle Zielwörter und leere das Feld. Morgen wartet ein neues Rätsel.','EIN RÄTSEL IN DEINEM TEMPO','Gemütlich, mit<br><em>einem cleveren Dreh.</em>','Spiele ein klassisches Rätsel mit <span class="board-size">4 × 4</span> oder ein kniffliges mit <span class="board-size">5 × 5</span>.','Zwei tägliche Rätsel','Klassisch und Knifflig, jeden Tag ein neues Feld.','Gemütlich auf deine Art','Hell, dunkel oder wie dein Gerät eingestellt ist.','Ein kleines Extra','Optionale Bonusrätsel werden durch eine Werbung freigeschaltet, oder du entfernst die Werbung mit einem einmaligen Kauf dauerhaft.','BIS MORGEN','Schaffe etwas Raum<br>für <em>Wortspiele.</em>','Woolwords kommt für Android.','Kontakt aufnehmen','Ein kleiner Wortknoten von datatrash.','Datenschutzerklärung','Kontakt','Das Spiel']
  };
  const selectors = ['nav a[href="#how"]','nav a[href="#features"]','.hero-copy .eyebrow','.hero-copy h1','.hero-copy > p','.pill','.text-link','.art-label strong','.art-label small','.ribbon-item:nth-child(1)','.ribbon-item:nth-child(3)','.ribbon-item:nth-child(5)','.section-intro .eyebrow','.section-intro h2','.section-intro p','.steps article:nth-child(1) .step-num','.steps article:nth-child(1) h3','.steps article:nth-child(1) p','.steps article:nth-child(2) .step-num','.steps article:nth-child(2) h3','.steps article:nth-child(2) p','.steps article:nth-child(3) .step-num','.steps article:nth-child(3) h3','.steps article:nth-child(3) p','.mode-copy .eyebrow','.mode-copy h2','.mode-copy > p','.feature-list > div:nth-child(1) strong','.feature-list > div:nth-child(1) p','.feature-list > div:nth-child(2) strong','.feature-list > div:nth-child(2) p','.feature-list > div:nth-child(3) strong','.feature-list > div:nth-child(3) p','.last .eyebrow','.last h2','.last p','.contact-button','.footer > p','.footer a[href="/privacy/"]','.footer a[href^="mailto:"]','nav a[href="/"]'];
  const initial = selectors.map(s => document.querySelector(s)?.innerHTML || '');
  const metadata = {
    en: {nav:'Main navigation', classic:"Woolwords’s Classic word puzzle on an Android screen", tough:"Woolwords’s Tough puzzle", privacy:'Privacy policy — Woolwords'},
    es: {nav:'Navegación principal', classic:'Reto Clásico de Woolwords en una pantalla de Android', tough:'Reto Difícil de Woolwords', privacy:'Política de privacidad — Woolwords'},
    fr: {nav:'Navigation principale', classic:'Jeu Classique de Woolwords sur un écran Android', tough:'Jeu Difficile de Woolwords', privacy:'Politique de confidentialité — Woolwords'},
    nl: {nav:'Hoofdnavigatie', classic:'Klassieke Woolwords-puzzel op een Android-scherm', tough:'Pittige Woolwords-puzzel', privacy:'Privacybeleid — Woolwords'},
    de: {nav:'Hauptnavigation', classic:'Klassisches Woolwords-Rätsel auf einem Android-Bildschirm', tough:'Kniffliges Woolwords-Rätsel', privacy:'Datenschutzerklärung — Woolwords'}
  };
  const streakCopy = {
  "en": {
    "values": [
      "ONE DAY. ONE STITCH.",
      "A little streak.<br><em>A lasting bloom.</em>",
      "Classic, Tough or bonus: finish any puzzle each day to add one stitch to your streak. Each day counts once, even if you finish a whole handful.",
      "A reason to come back",
      "Watch your garland bloom, count down to your next milestone, and follow your yarn trail from “See your progress”.",
      "Little treasures, yours to keep",
      "Earn flowers, ribbons, embroidered frames and golden details. Reach 100 days for a gold Woolwords title. Every cosmetic reward stays unlocked, even if you miss a day.",
      "A thread without an end",
      "Your streak keeps growing beyond every milestone. Finish an older puzzle and it counts for the day you play, without filling missed dates.",
      "Streaks & rewards"
    ],
    "alt": "A finished Woolwords puzzle with a 25-day streak garland and earned sage stitching"
  },
  "nl": {
    "values": [
      "ÉÉN DAG. ÉÉN STEEKJE.",
      "Een kleine reeks.<br><em>Blijvende bloei.</em>",
      "Klassiek, Pittig of bonus: maak elke dag een puzzel af voor één steekje in je reeks. Elke dag telt één keer, ook als je meerdere puzzels afmaakt.",
      "Een reden om terug te komen",
      "Zie je slinger bloeien, tel af naar je volgende mijlpaal en volg je draad via “Bekijk je voortgang”.",
      "Kleine schatten, voor altijd van jou",
      "Verdien bloemen, linten, geborduurde randen en gouden details. Bij 100 dagen wordt de Woolwords-titel goud. Elke versiering blijft van jou, ook als je een dag overslaat.",
      "Een draad zonder einde",
      "Je reeks groeit door na elke mijlpaal. Een oudere puzzel telt voor de dag waarop je speelt en vult geen gemiste dagen aan.",
      "Reeksen & beloningen"
    ],
    "alt": "Een voltooide Woolwords-puzzel met een reeks van 25 dagen en verdiende saliegroene steken"
  },
  "es": {
    "values": [
      "UN DÍA. UNA PUNTADA.",
      "Una pequeña racha.<br><em>Flores que perduran.</em>",
      "Clásico, Difícil o extra: completa cualquier puzle cada día para añadir una puntada a tu racha. Cada día cuenta una vez, aunque completes varios puzles.",
      "Un motivo para volver",
      "Mira florecer tu guirnalda, cuenta los días hasta el próximo hito y sigue tu hilo desde “Ver tu progreso”.",
      "Pequeños tesoros para siempre",
      "Gana flores, lazos, marcos bordados y detalles dorados. A los 100 días, el título de Woolwords se vuelve dorado. Conservas cada adorno aunque te saltes un día.",
      "Un hilo sin final",
      "Tu racha sigue creciendo después de cada hito. Los puzles antiguos cuentan el día que juegas y no rellenan fechas perdidas.",
      "Rachas y recompensas"
    ],
    "alt": "Un puzle de Woolwords completado con una racha de 25 días y puntadas salvia conseguidas"
  },
  "fr": {
    "values": [
      "UN JOUR. UNE MAILLE.",
      "Une petite série.<br><em>Des fleurs durables.</em>",
      "Classique, Difficile ou bonus : terminez une grille chaque jour pour ajouter une maille à votre série. Chaque journée compte une fois, même si vous terminez plusieurs grilles.",
      "Une raison de revenir",
      "Regardez fleurir votre guirlande, comptez les jours avant la prochaine étape et suivez votre fil depuis « Voir votre progression ».",
      "De petits trésors à garder",
      "Gagnez des fleurs, rubans, cadres brodés et détails dorés. À 100 jours, le titre Woolwords devient doré. Chaque ornement reste acquis, même si vous manquez un jour.",
      "Un fil sans fin",
      "Votre série continue après chaque étape. Les anciennes grilles comptent le jour où vous jouez, sans combler les jours manqués.",
      "Séries et récompenses"
    ],
    "alt": "Une grille Woolwords terminée avec une série de 25 jours et des points de sauge acquis"
  },
  "de": {
    "values": [
      "EIN TAG. EIN STICH.",
      "Eine kleine Serie.<br><em>Bleibende Blüten.</em>",
      "Klassisch, Knifflig oder Bonus: Beende jeden Tag ein Rätsel für einen Stich in deiner Serie. Jeder Tag zählt einmal, auch wenn du mehrere Rätsel löst.",
      "Ein Grund zum Wiederkommen",
      "Sieh deine Girlande blühen, zähle die Tage bis zum nächsten Meilenstein und folge deinem Faden über „Fortschritt ansehen“.",
      "Kleine Schätze zum Behalten",
      "Verdiene Blumen, Bänder, gestickte Rahmen und goldene Details. Bei 100 Tagen wird der Woolwords-Titel golden. Jedes Schmuckstück bleibt dein, auch wenn du einen Tag auslässt.",
      "Ein Faden ohne Ende",
      "Deine Serie wächst über jeden Meilenstein hinaus. Ältere Rätsel zählen an deinem Spieltag und füllen keine verpassten Tage auf.",
      "Serien und Belohnungen"
    ],
    "alt": "Ein abgeschlossenes Woolwords-Rätsel mit einer Serie von 25 Tagen und verdienten salbeigrünen Stichen"
  }
};
  Object.entries(added).forEach(([code, locale]) => {
    translations[code] = locale.values;
    metadata[code] = locale.meta;
    streakCopy[code] = locale.streak;
  });
  const originalTitle = document.title;
  const description = document.querySelector('meta[name="description"]');
  const originalDescription = description?.content || '';
  function render(lang) {
    const values=translations[lang];
    selectors.forEach((s,i) => {
      const element=document.querySelector(s); if (!element) return;
      if (!values) { element.innerHTML=initial[i]; return; }
      if ([28,30,32].includes(i)) { element.innerHTML=`<strong>${values[i-1]}</strong><br>${values[i]}`; return; }
      if ([27,29,31].includes(i)) return;
      element.innerHTML=values[i];
    });
    const streak = streakCopy[lang];
    [".streak-copy .eyebrow", "#streak-heading", ".streak-intro", ".streak-details article:nth-child(1) h3", ".streak-details article:nth-child(1) p", ".streak-details article:nth-child(2) h3", ".streak-details article:nth-child(2) p", ".streak-details article:nth-child(3) h3", ".streak-details article:nth-child(3) p", ".streak-nav"].forEach((selector, index) => { const element=document.querySelector(selector); if (element) element.innerHTML=streak.values[index]; });
    document.querySelector(".streak-art img")?.setAttribute("alt",streak.alt);
    // Screenshots are generated per language by tools/build_minisite_screens.py in the app repository.
    [['.hero-art .phone img','classic'],['.phone-dark img','tough'],['.streak-art img','streak']].forEach(([selector,name]) =>
      document.querySelector(selector)?.setAttribute('src',`/assets/screens/${lang}/${name}.webp`));
    const meta=metadata[lang];
    document.querySelector('.header .brand')?.setAttribute('aria-label',meta.home || 'Woolwords home');
    document.querySelector('.ribbon')?.setAttribute('aria-label',meta.highlights || 'Game highlights');
    document.querySelector('.streak-milestones')?.setAttribute('aria-label',meta.milestones || 'Streak milestones');
    document.querySelector('.language-select')?.setAttribute('aria-label',meta.language || 'Language');
    document.querySelector('nav')?.setAttribute('aria-label',meta.nav);
    document.querySelector('.phone img')?.setAttribute('alt',meta.classic);
    document.querySelector('.phone-dark img')?.setAttribute('alt',meta.tough);
    if (document.querySelector('.policy')) {
      document.title=meta.privacy;
      const contact=document.querySelector('nav .nav-contact');
      if (contact) contact.textContent=meta.contact || ({en:'Get in touch ↗',es:'Contactar ↗',fr:'Nous contacter ↗',nl:'Neem contact op ↗',de:'Kontakt aufnehmen ↗'})[lang];
    } else {
      document.title = meta.title || originalTitle;
    }
    if (description) description.content = document.querySelector('.policy') ? (meta.privacyDescription || originalDescription) : (meta.description || originalDescription);
    document.documentElement.lang=lang;
    document.querySelector('.language-select').value=lang;
  }
  const select=document.createElement('select'); select.className='language-select'; select.setAttribute('aria-label','Language / Idioma / Langue / Taal / Sprache');
  const languageNames = new Intl.Collator('en', {sensitivity:'base'});
  for (const [code,label] of Object.entries(choices).sort((a,b) => languageNames.compare(a[1],b[1]))) {
    const option=document.createElement('option'); option.value=code; option.textContent=`${code.toUpperCase()} · ${label}`; select.append(option);
  }
  document.querySelector('.header').append(select);
  let lang; try { lang=localStorage.getItem('letterloom-language'); } catch (_) {}
  function resolve(value) {
    const tag = String(value || '').toLowerCase();
    if (tag === 'pt' || tag.startsWith('pt-')) return tag === 'pt-br' ? 'pt-BR' : 'pt-PT';
    const base = tag.split('-')[0];
    if (base === 'no' || base === 'nb') return 'nb';
    return choices[base] ? base : null;
  }
  if (!choices[lang]) lang=resolve(lang) || (navigator.languages || [navigator.language]).map(resolve).find(Boolean);
  if (!choices[lang]) lang='en';
  select.addEventListener('change', () => { try { localStorage.setItem('letterloom-language',select.value); } catch (_) {} render(select.value); });
  render(lang);
})();
