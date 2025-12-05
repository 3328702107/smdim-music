<template>
  <div id="page">
    <header class="hero">
      <h1 class="title">Diffusion-based Symbolic Music Generation with Structured State Space Models</h1>
      <p class="authors">Shenghua Yuan*, Xing Tang*, Jiatao Chen*, Tianming Xie¹, Jing Wang², Bing Shi¹</p>
      <p class="affiliations">¹Wuhan University of Technology, Wuhan, China · ²Hubei University of Technology, Wuhan, China · tangxing@whut.edu.cn</p>
      <div class="links">
        <a href="https://arxiv.org/abs/2507.20128" target="_blank" rel="noopener" class="link">Paper</a>
        <a href="#" class="link">Code Repo</a>
      </div>
      <nav class="topnav">
        <a href="#accompaniment">1. Accompaniment</a>
        <a href="#style">2. Style</a>
        <a href="#comparison">3. Comparison</a>
        <a href="#diy">4. DIY</a>
      </nav>
    </header>

    <main class="content">
      <section id="intro" class="section">
        <p>
          This page showcases symbolic music generation results using our diffusion-based approach with structured state spaces. Below, we provide listening examples for accompaniment generation, style-controlled synthesis, and ablation comparisons, followed by a DIY demo link.
        </p>
      </section>
      

      

      <section id="accompaniment" class="section">
        <h2>1. Accompaniment Generation given Melody and Chord</h2>
        <p>SMDIM generates coherent accompaniments conditioned on provided melodies and chords.</p>

        <div class="example-card warm">
          <div class="example-grid">
            <div class="col">
              <h3>Example 1</h3>
              <p class="sub">With the following melody as condition</p>
              <figure class="audio-block"><audio controls preload="none" class="audio" aria-label="Accompaniment Example 1 - Conditioning Melody"><source src="" /></audio><figcaption class="visually-hidden">Generated accompaniment conditioning melody - Example 1</figcaption></figure>
            </div>
            <div class="col">
              <h3>Generated Accompaniments</h3>
              <figure class="audio-block"><audio controls preload="none" class="audio" aria-label="Generated Accompaniment Example 1"><source src="" /></audio><figcaption class="visually-hidden">Generated accompaniment output - Example 1</figcaption></figure>
            </div>
          </div>
        </div>

        <div class="example-card warm">
          <div class="example-grid">
            <div class="col">
              <h3>Example 2</h3>
              <p class="sub">With the following melody as condition</p>
              <figure class="audio-block"><audio controls preload="none" class="audio" aria-label="Accompaniment Example 2 - Conditioning Melody"><source src="" /></audio><figcaption class="visually-hidden">Generated accompaniment conditioning melody - Example 2</figcaption></figure>
            </div>
            <div class="col">
              <h3>Generated Accompaniments</h3>
              <figure class="audio-block"><audio controls preload="none" class="audio" aria-label="Generated Accompaniment Example 2"><source src="" /></audio><figcaption class="visually-hidden">Generated accompaniment output - Example 2</figcaption></figure>
            </div>
          </div>
        </div>
      </section>

      <section id="style" class="section">
        <h2>2. Style-Controlled Music Generation</h2>
        <p>SMDIM enables stylization control. Sampling adheres strictly to target scales, enabling generation in specific styles even beyond training distribution.</p>
        <ul>
          <li>Dorian Mode: A-B-C-D-E-F#-G</li>
          <li>Chinese Style: C-D-E-G-A</li>
        </ul>

        <div class="example-card warm">
          <h3>Dorian Mode</h3>
          <div class="example-grid">
            <div class="col">
              <p class="sub">Example 1</p>
              <figure class="audio-block"><audio controls preload="none" class="audio" aria-label="Dorian Mode Example 1"><source src="" /></audio><figcaption class="visually-hidden">Dorian Mode style sample - Example 1</figcaption></figure>
            </div>
            <div class="col">
              <p class="sub">Example 2</p>
              <figure class="audio-block"><audio controls preload="none" class="audio" aria-label="Dorian Mode Example 2"><source src="" /></audio><figcaption class="visually-hidden">Dorian Mode style sample - Example 2</figcaption></figure>
            </div>
          </div>
        </div>

        <div class="example-card cool">
          <h3>Chinese Style</h3>
          <div class="example-grid">
            <div class="col">
              <p class="sub">Example 1</p>
              <figure class="audio-block"><audio controls preload="none" class="audio" aria-label="Chinese Style Example 1"><source src="" /></audio><figcaption class="visually-hidden">Chinese Style sample - Example 1</figcaption></figure>
            </div>
            <div class="col">
              <p class="sub">Example 2</p>
              <figure class="audio-block"><audio controls preload="none" class="audio" aria-label="Chinese Style Example 2"><source src="" /></audio><figcaption class="visually-hidden">Chinese Style sample - Example 2</figcaption></figure>
            </div>
          </div>
        </div>
      </section>

      <section id="comparison" class="section">
        <h2>3. Demonstrating the Effectiveness by Comparison</h2>
        <p>
          We compare different ablative conditions using the same random seed to isolate the effect of sampling control on accompaniment generation.
        </p>
        <ol>
          <li>Only Training Control</li>
          <li>Training Control + Remove Out-of-Key Notes (last step)</li>
          <li>Training Control + Round Out-of-Key Notes to Nearest (last step)</li>
          <li>Inpainting Method</li>
        </ol>

        <div class="example-card warm">
          <h3>Example 1</h3>
          <div class="abl-grid">
            <div class="abl-col image">
              <div class="img-placeholder">Melody + Chord (score image)</div>
            </div>
            <div class="abl-col audios">
              <div class="audio-row"><span class="tag primary">Ours</span><audio controls preload="none" class="audio" aria-label="Ablation Example 1 - Ours"><source src="" /></audio></div>
              <div class="audio-row"><span class="tag">Only Training</span><audio controls preload="none" class="audio" aria-label="Ablation Example 1 - Only Training"><source src="" /></audio></div>
              <div class="audio-row"><span class="tag">Remove OOK</span><audio controls preload="none" class="audio" aria-label="Ablation Example 1 - Remove Out-of-Key"><source src="" /></audio></div>
              <div class="audio-row"><span class="tag">Round OOK</span><audio controls preload="none" class="audio" aria-label="Ablation Example 1 - Round Out-of-Key"><source src="" /></audio></div>
              <div class="audio-row"><span class="tag">Inpainting</span><audio controls preload="none" class="audio" aria-label="Ablation Example 1 - Inpainting"><source src="" /></audio></div>
            </div>
          </div>
        </div>

        <div class="example-card warm">
          <h3>Example 2</h3>
          <div class="abl-grid">
            <div class="abl-col image">
              <div class="img-placeholder">Melody + Chord (score image)</div>
            </div>
            <div class="abl-col audios">
              <div class="audio-row"><span class="tag primary">Ours</span><audio controls preload="none" class="audio" aria-label="Ablation Example 2 - Ours"><source src="" /></audio></div>
              <div class="audio-row"><span class="tag">Only Training</span><audio controls preload="none" class="audio" aria-label="Ablation Example 2 - Only Training"><source src="" /></audio></div>
              <div class="audio-row"><span class="tag">Remove OOK</span><audio controls preload="none" class="audio" aria-label="Ablation Example 2 - Remove Out-of-Key"><source src="" /></audio></div>
              <div class="audio-row"><span class="tag">Round OOK</span><audio controls preload="none" class="audio" aria-label="Ablation Example 2 - Round Out-of-Key"><source src="" /></audio></div>
              <div class="audio-row"><span class="tag">Inpainting</span><audio controls preload="none" class="audio" aria-label="Ablation Example 2 - Inpainting"><source src="" /></audio></div>
            </div>
          </div>
        </div>
      </section>

      <section id="diy" class="section">
        <h2>4. DIY in Real Time!</h2>
        <p>Try our interactive tool to generate accompaniments from your own melody and chords.</p>
        <p><a class="cta" href="#" target="_blank" rel="noopener">Try the Interactive Demo →</a></p>
      </section>
    </main>
    <button
      v-show="showTop"
      class="back-to-top"
      @click="scrollToTop"
      aria-label="Back to top"
      title="Back to top"
    >↑ Top</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data() {
    return {
      showTop: false,
    }
  },
  mounted() {
    this.onScroll()
    window.addEventListener('scroll', this.onScroll, { passive: true })
  },
  unmounted() {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll() {
      const y = window.scrollY || document.documentElement.scrollTop
      this.showTop = y > 400
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
}
</script>

<style>
:root {
  --text: #1a1a1a;
  --muted: #5b5b5b;
  --maxw: 960px;
  --warm-bg: #fde8c9;
  --cool-bg: #d9f5f0;
  --card-radius: 16px;
}

#page {
  color: var(--text);
}

.hero {
  max-width: var(--maxw);
  margin: 48px auto 24px;
  text-align: center;
}

.title {
  font-size: 40px;
  font-weight: 700;
  line-height: 1.2;
  margin: 0 0 12px;
}

.topnav {
  position: sticky;
  top: 0;
  display: inline-flex;
  gap: 12px;
  background: #fff;
  padding: 8px 12px;
  border-radius: 999px;
  box-shadow: 0 1px 6px rgba(0,0,0,0.08);
}
.topnav a { color: #111; text-decoration: none; padding: 4px 10px; border-radius: 999px; }
.topnav a:hover { background: #f3f4f6; }

.authors {
  color: var(--muted);
  margin: 6px 0 10px;
}
.affiliations { color: var(--muted); font-size: 14px; margin-top: -2px; }

.links { margin-top: 6px; }
.link { color: #3b82f6; text-decoration: none; margin: 0 8px; }
.link:hover { text-decoration: underline; }

.content { max-width: var(--maxw); margin: 0 auto 80px; }
.section { margin: 28px 0; }
.section h2 { font-size: 28px; margin: 18px 0; }
.section p { color: var(--text); line-height: 1.7; }
/* Limit paragraph line length for readability */
.section p, .section ul { max-width: 760px; }
/* Accessible visually-hidden utility */
.visually-hidden { position:absolute; width:1px; height:1px; padding:0; margin:-1px; overflow:hidden; clip:rect(0 0 0 0); white-space:nowrap; border:0; }
.section ul { margin: 8px 0 16px 18px; }

.example-card {
  border-radius: var(--card-radius);
  padding: 18px;
  margin: 18px 0;
}
.example-card.warm { background: var(--warm-bg); }
.example-card.cool { background: var(--cool-bg); }

.example-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
}
.col h3 { margin: 0 0 6px; }
.sub { color: var(--muted); margin: 8px 0; }
.audio { width: 100%; }

.abl-grid { display: grid; grid-template-columns: 320px 1fr; gap: 18px; align-items: start; }
.img-placeholder { background: #fff7ed; border: 1px dashed #f59e0b; color:#a16207; padding: 24px; border-radius: 12px; text-align:center; }
.audio-row { display: grid; grid-template-columns: 140px 1fr; gap: 10px; align-items: center; margin: 8px 0; }
.tag { display:inline-block; padding: 4px 8px; background:#e5e7eb; border-radius:999px; font-size:12px; color:#374151; }
.tag.primary { background:#dbeafe; color:#1e40af; }
.cta { display:inline-block; background:#111827; color:#fff; text-decoration:none; padding:10px 14px; border-radius:10px; }
.cta:hover { opacity:.9; }

.back-to-top {
  position: fixed;
  right: 18px;
  bottom: 18px;
  z-index: 1000;
  padding: 10px 12px;
  border-radius: 999px;
  border: 1px solid #e5e7eb;
  background: #111827;
  color: #fff;
  box-shadow: 0 8px 20px rgba(0,0,0,0.15);
  cursor: pointer;
}
.back-to-top:hover { opacity: .92; }
.back-to-top:focus { outline: 2px solid #93c5fd; }

/* Responsive breakpoints */
@media (max-width: 900px) {
  .title { font-size: 32px; }
  .hero { margin: 32px auto 16px; }
  .content { margin-bottom: 64px; padding: 0 12px; }
  .example-grid { grid-template-columns: 1fr; }
  .abl-grid { grid-template-columns: 1fr; }
  .audio-row { grid-template-columns: 1fr; }
  .topnav { display:flex; flex-wrap: wrap; gap: 8px; padding: 6px 10px; }
}

@media (max-width: 640px) {
  .title { font-size: 26px; }
  .example-card { padding: 14px; border-radius: 12px; }
  .img-placeholder { padding: 16px; }
}

html, body, #app { height: 100%; }
body { font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif; margin: 0; }
.title { letter-spacing: .5px; font-weight:600; }
h2 { letter-spacing:.3px; font-weight:600; }
/* Tag focus & link focus styles */
.link:focus, .topnav a:focus, .cta:focus, .tag:focus { outline:2px solid #2563eb; outline-offset:2px; }
</style>
