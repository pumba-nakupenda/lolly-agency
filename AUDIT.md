# Audit Technique — LOLLY Agency (lolly.sn)

**Date** : 13 mars 2026
**Stack** : Next.js 16 / React 19 / TypeScript / Tailwind CSS 4 / Sanity.io / Framer Motion

---

## 1. PERFORMANCE

### 1.1 Images — CRITIQUE

| Problème | Détail | Sévérité |
|----------|--------|----------|
| **Images non optimisées dans /public** | Le dossier `/public/portfolio/` pèse **214 Mo** pour 396 fichiers. Plusieurs images dépassent 10 Mo (une à 23 Mo). | **Critique** |
| **Pas de next.config** | Aucun fichier `next.config.ts/js` n'existe — impossible de configurer les domaines d'images, les headers de cache, ou les redirections. | **Haute** |
| **Images portfolio servies en brut** | Les images JPEG/PNG du portfolio sont servies sans compression ni redimensionnement côté serveur. | **Critique** |

**Top 5 des images les plus lourdes :**
- `portfolio/luxia/branding boutique-01.jpg` — **23 Mo**
- `portfolio/investiment advice/investiment advice.jpg` — **22 Mo**
- `portfolio/ndi/KAKEMONO.jpg` — **16 Mo**
- `portfolio/investiment advice/investiment advice (1).jpg` — **15 Mo**
- `portfolio/luxia/branding boutique-02.jpg` — **14 Mo**

**Recommandations :**
- Compresser toutes les images à < 500 Ko (WebP ou AVIF)
- Utiliser `next/image` avec `sizes` et `quality` pour le portfolio
- Créer un `next.config.ts` avec `images.remotePatterns` pour Sanity et Unsplash
- Mettre en place un pipeline d'optimisation automatique (Sharp/Squoosh)

### 1.2 Fonts — MOYENNE

| Problème | Détail | Sévérité |
|----------|--------|----------|
| **Google Fonts via @import CSS** | `globals.css:1` charge les fonts via `@import url('https://fonts.googleapis.com/...')` au lieu de `next/font` | **Moyenne** |
| **Render-blocking** | L'import CSS bloque le rendu tant que les fonts ne sont pas chargées. | **Moyenne** |

**Recommandations :**
- Migrer vers `next/font/google` pour Montserrat et MuseoModerno
- Cela active automatiquement le `font-display: swap`, le self-hosting, et le preload

### 1.3 Bundle / Client Components — MOYENNE

| Problème | Détail | Sévérité |
|----------|--------|----------|
| **28 composants "use client"** | La quasi-totalité des composants sont client-side, réduisant les bénéfices du SSR. | **Moyenne** |
| **Framer Motion sur chaque page** | Toutes les pages importent Framer Motion (~30 Ko gzippé). | **Basse** |
| **`sanity` (full SDK) en dépendance** | Le package `sanity` (le Studio complet) est en `dependencies` au lieu de `devDependencies`. Il n'est pas utilisé côté frontend. | **Moyenne** |

**Recommandations :**
- Déplacer `sanity` et `@sanity/vision` dans `devDependencies`
- Extraire les parties statiques des composants client en Server Components
- Utiliser `next/dynamic` avec `ssr: false` pour les composants lourds (CustomCursor, Preloader)

### 1.4 Animations Mobile — BONNE PRATIQUE

Le site désactive les animations CSS sur mobile via une media query globale (`globals.css:55-71`). C'est une bonne pratique. **Mais** : `prefers-reduced-motion` n'est pas supporté — les utilisateurs qui ont activé cette préférence d'accessibilité ne bénéficient pas de cette réduction.

---

## 2. SEO

### 2.1 Metadata — HAUTE

| Page | OG Image | Twitter Card | Keywords | Sévérité |
|------|----------|-------------|----------|----------|
| **About** | Manquante | Manquante | Manquants | Haute |
| **Contact** | Manquante | Manquante | Manquants | Haute |
| **Blog** | Manquante | Manquante | Manquants | Haute |
| **Blog/[slug]** | Manquante | Manquante | Manquants | Haute |
| **Portfolio** | Manquante | Manquante | Manquants | Haute |
| **Legal** | Manquante | Manquante | Manquants | Basse |
| **CGV** | Manquante | Manquante | Manquants | Basse |
| **VCard / VCard Pro** | Manquante | Manquante | Manquants | Basse |

**Note** : Le layout root définit des OG/Twitter par défaut, mais les pages enfants ne les héritent pas toujours correctement car elles écrasent `metadata` sans inclure les images.

**Recommandations :**
- Ajouter `openGraph.images` et `twitter` à chaque page
- Compléter les metadata dynamiques du blog (`generateMetadata`)

### 2.2 URLs d'images externes dans les metadata

- `services/design/page.tsx:15` — URL Unsplash externe
- `services/social/page.tsx:15` — URL Unsplash externe

→ Héberger les images OG en local pour la fiabilité.

### 2.3 Structured Data (JSON-LD)

| Problème | Détail | Sévérité |
|----------|--------|----------|
| **ID fixe "json-ld"** | `JsonLd.tsx:8` utilise `id="json-ld"` — si plusieurs composants JsonLd sont sur une page, seul le dernier sera rendu. | **Haute** |
| **FAQPage schema manquant** | La page services a des FAQ mais pas de schema FAQPage. | **Moyenne** |
| **BlogPosting schema manquant** | Les articles de blog n'ont pas de schema Article/BlogPosting. | **Moyenne** |

### 2.4 Hiérarchie des titres (H1/H2/H3)

| Problème | Page | Sévérité |
|----------|------|----------|
| **Double H1** | Homepage : Hero.tsx + contenu = 2 balises `<h1>` | **Haute** |
| **Saut H1 → H3** | Portfolio : passe de H1 à H3 sans H2 intermédiaire | **Moyenne** |

### 2.5 Sitemap

Le sitemap (`src/app/sitemap.ts`) est correct et complet. Les routes dynamiques du blog sont incluses.

### 2.6 Robots.txt ✓

Correct. `Sitemap: https://lolly.sn/sitemap.xml` est bien défini.

### 2.7 Internationalisation

- `<html lang="fr">` est correctement défini ✓
- Pas de `hreflang` (acceptable si pas de version multilingue prévue)

---

## 3. ACCESSIBILITÉ (a11y)

### 3.1 Problèmes identifiés

| Problème | Détail | Sévérité |
|----------|--------|----------|
| **`prefers-reduced-motion` non supporté** | Les utilisateurs avec cette préférence OS ne voient aucune réduction d'animation. Framer Motion et CSS continuent d'animer. | **Haute** |
| **Focus trap manquant sur le modal** | Le modal de contact ne piège pas le focus — le tab peut sortir du modal. | **Haute** |
| **Bouton fermer modal sans aria-label** | `ContactModal.tsx:105-110` — le bouton `<X>` n'a pas d'`aria-label`. | **Moyenne** |
| **Labels de formulaire non associés** | Les `<label>` du modal contact et de `ContactClient.tsx` ne sont pas liés aux inputs via `htmlFor`/`id`. | **Moyenne** |
| **Skip-to-content manquant** | Aucun lien "Aller au contenu" pour la navigation au clavier. | **Moyenne** |
| **Messages d'erreur non annoncés** | `ContactClient.tsx:309-317` — les erreurs de formulaire n'ont pas de `role="alert"` ou `aria-live="polite"` pour les lecteurs d'écran. | **Moyenne** |
| **Marquee sans pause** | `Marquee.tsx` — animation infinie sans mécanisme de pause (risque pour utilisateurs photosensibles). | **Moyenne** |
| **Focus indicators manquants** | `WhatsAppButton.tsx` et `ScrollToTop` — boutons custom sans `focus-visible` visible. | **Moyenne** |
| **Contraste texte muted** | `--color-text-muted: #A3A3A3` sur fond `#050505` — ratio ~5.5:1 (limite WCAG AA). Les placeholders de formulaires en `text-gray-600` sont en dessous du seuil. | **Moyenne** |
| **Custom cursor sans fallback** | `CustomCursor` remplace le curseur natif — les utilisateurs avec des besoins spécifiques perdent leur curseur personnalisé. | **Basse** |
| **Iframe Google Maps sans sandbox** | `ContactClient.tsx:421` — l'iframe Google Maps n'a pas d'attribut `sandbox`. | **Basse** |

### 3.2 Bonnes pratiques observées ✓
- `aria-label` sur le bouton hamburger de la Navbar
- `aria-label` sur les liens sociaux du Footer
- Attributs `target="_blank"` avec `rel="noopener noreferrer"`
- Utilisation de balises sémantiques (`<nav>`, `<main>`, `<footer>`, `<section>`)
- Iframe Google Maps avec attribut `title`

---

## 4. SÉCURITÉ

### 4.1 Problèmes identifiés

| Problème | Détail | Sévérité |
|----------|--------|----------|
| **URL de webhook hardcodée** | `ContactModal.tsx:13` et `ContactClient.tsx:9` exposent l'URL du webhook n8n en dur dans le code client. N'importe qui peut l'appeler directement. | **CRITIQUE** |
| **Pas de protection CSRF** | Le formulaire de contact envoie directement au webhook sans token CSRF. | **Haute** |
| **Pas de rate limiting** | Aucune protection contre le spam sur les formulaires. | **Haute** |
| **Pas de validation côté serveur** | Les données du formulaire sont envoyées directement au webhook sans validation ni sanitization côté serveur. | **Haute** |
| **Project ID Sanity exposé** | `sanityClient.ts:4` — `projectId: 'u9vbpezv'` est exposé, mais c'est normal pour un client en lecture seule avec `useCdn: true`. | **Info** |
| **XSS via Google Analytics** | `GoogleAnalytics.tsx:22` — `GA_MEASUREMENT_ID` est injecté via `dangerouslySetInnerHTML` sans sanitization. Si la variable env est compromise, XSS possible. | **Basse** |
| **Pas de Content Security Policy** | Aucun header CSP configuré (pas de `next.config`). | **Moyenne** |
| **API version Sanity obsolète** | `sanityClient.ts:8` — `apiVersion: '2023-05-03'` date de 3 ans. | **Basse** |

**Recommandations prioritaires :**
1. **Créer une API Route** (`/api/contact`) pour proxifier les appels au webhook
2. Ajouter un rate limiter (ex: `next-rate-limit`)
3. Ajouter une validation des données côté serveur
4. Configurer les headers CSP via `next.config.ts`

---

## 5. QUALITÉ DU CODE

### 5.1 Problèmes identifiés

| Problème | Détail | Sévérité |
|----------|--------|----------|
| **Type `any` utilisé (22 fichiers)** | `ClientLayout.tsx:26`, `ContactModal.tsx:80`, `HomeClient.tsx:18,31`, `sanityClient.ts:13`, `JsonLd.tsx:5`, etc. | **Moyenne** |
| **Code dupliqué** | L'URL du webhook et la logique de soumission sont dupliquées entre `ContactModal.tsx` et `ContactClient.tsx`. | **Moyenne** |
| **Pas de `next.config`** | Impossible de configurer les optimisations Next.js, les headers, les rewrites, etc. | **Haute** |
| **Composants trop volumineux** | `ContactClient.tsx` (455 lignes), `HomeClient.tsx` (228+ lignes) — à découper en sous-composants. | **Basse** |
| **`console.error` en production** | `page.tsx:73`, `blog/[slug]/page.tsx:26,47` — les erreurs sont loguées en console en production. | **Basse** |
| **Pas de lib/ pour les utilitaires** | Le dossier `src/lib/` n'existe pas. `sanityClient.ts` est à la racine de `src/`. | **Basse** |
| **Composant inutilisé** | `PageLoader.tsx` — importé nulle part, code mort. | **Basse** |

---

## 6. RÉSUMÉ EXÉCUTIF

### Score par catégorie

| Catégorie | Score | Verdict |
|-----------|-------|---------|
| **Performance** | 4/10 | Images non optimisées, fonts render-blocking, trop de client components |
| **SEO** | 6/10 | Bon socle (sitemap, robots, layout metadata) mais lacunes sur les pages enfants |
| **Accessibilité** | 4/10 | Manque de support reduced-motion, focus trap, labels de formulaire |
| **Sécurité** | 3/10 | Webhook exposé, pas de CSRF, pas de rate limiting, pas de CSP |
| **Qualité du code** | 6/10 | TypeScript correct dans l'ensemble, mais duplication et types `any` |
| **GLOBAL** | **4.6/10** | |

### Top 5 des actions prioritaires

1. **Créer un `next.config.ts`** — Configurer images, headers CSP, rewrites
2. **Optimiser les images** — Compresser les 396 images du portfolio (214 Mo → ~20 Mo cible)
3. **Sécuriser les formulaires** — API Route pour le webhook, rate limiting, validation serveur
4. **Migrer les fonts** — Passer de `@import` CSS à `next/font/google`
5. **Compléter les metadata SEO** — OG images et Twitter cards sur toutes les pages
