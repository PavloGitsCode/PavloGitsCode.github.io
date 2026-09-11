<script>
  import { aboutItems } from "./portfolio.js";
</script>

<section class="section about-section" id="about" aria-labelledby="about-title">
  <div class="shell two-column-layout">
    <div class="portrait-wrap">
      <img src="/images/ZooLights.jpg" alt="Portrait of Pavlo Puzik" class="portrait" />
    </div>
    <div class="section-copy">
      <p class="section-kicker">About</p>
      <h2 id="about-title">Building practical systems with care.</h2>
      <p>
        I am a computer science student currently building a strong foundation in electronics and embedded systems.
        I am also pursuing a minor in Business Data Analytics.
      </p>
      <p>
        I have strong interests in cybersecurity and motorsport engineering, which is why I
        enjoy systems design, problem solving, and data-driven thinking.
      </p>
      <div class="stack-grid" aria-label="Core strengths">
        {#each aboutItems as item}
          <article class="feature-card">
            <div class="card-title">
              <img src={item.icon} alt="" class="card-icon" />
              <span>{item.title}</span>
            </div>
            <p>{item.text}</p>
          </article>
        {/each}
      </div>
    </div>
  </div>
</section>
