<script>
  import SiteNav from "./SiteNav.svelte";
  import SocialLinks from "./SocialLinks.svelte";
</script>

<header class="hero" id="top">
  <SiteNav />

  <section class="hero-content shell" aria-labelledby="hero-title">
    <p class="eyebrow">Hello, I'm</p>
    <h1 id="hero-title">Pavlo Puzik</h1>
    <p class="tagline">Computer Science Student & Software Engineer</p>
    <p class="description">
      Passionate about systems design, embedded programming, and electronics.
    </p>
    <div class="cta-row">
      <a class="primary-action" href="#contact">Get In Touch</a>
      <a class="secondary-action" href="/images/PavloPuzik_Resume.pdf" target="_blank" rel="noreferrer">
        View Resume
      </a>
    </div>
    <SocialLinks />
  </section>
</header>
