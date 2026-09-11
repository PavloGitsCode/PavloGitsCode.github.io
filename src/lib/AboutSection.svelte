<script>
  import { aboutItems } from "./portfolio.js";
  import TerminalBar from "./TerminalBar.svelte";

  const photos = [
    { src: "/images/about-3617.webp", alt: "Pavlo sitting on a bench in the forest" },
    { src: "/images/about-6041.webp", alt: "Pavlo beside a mountain river and wooden footbridge" }
  ];
  let photoIndex = $state(0);

  function changePhoto(direction) {
    photoIndex = (photoIndex + direction + photos.length) % photos.length;
  }
</script>

<section class="section about-section" id="about" aria-labelledby="about-title">
  <div class="shell two-column-layout">
    <section class="portrait-wrap" aria-label="About photos" aria-roledescription="carousel">
      <div class="portrait-frame">
        <TerminalBar path="~/about/life-outside-code" label="PHOTOS" />
        {#each photos as photo, index}
          <img src={photo.src} alt={photo.alt} class="portrait" hidden={index !== photoIndex} width="1200" height="1600" />
        {/each}
      </div>
      <div class="portrait-controls">
        <button type="button" onclick={() => changePhoto(-1)} aria-label="Previous photo">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m14 6-6 6 6 6" /></svg>
        </button>
        <span aria-live="polite" aria-atomic="true">Photo {photoIndex + 1} of {photos.length}</span>
        <button type="button" onclick={() => changePhoto(1)} aria-label="Next photo">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m10 6 6 6-6 6" /></svg>
        </button>
      </div>
    </section>
    <div class="section-copy">
      <p class="section-kicker"><span>01 / About</span> <span class="section-command" aria-hidden="true">cat about.md</span></p>
      <h2 id="about-title">Building an understanding of how things work</h2>
      <p>
        I am a computer science student currently building a strong foundation in electronics and embedded systems.
        I am also pursuing a minor in Business Data Analytics.
      </p>
      <p>
        I really enjoy working with all parts of technology and my main interests right now is working closer to the hardware layer.
      </p>
      <div class="stack-grid" aria-label="Core strengths">
        {#each aboutItems as item, index}
          <article class="feature-card">
            <div class="card-title">
              <span class="feature-index" aria-hidden="true">0{index + 1}</span>
              <span>{item.title}</span>
            </div>
            <p>{item.text}</p>
          </article>
        {/each}
      </div>
    </div>
  </div>
</section>
