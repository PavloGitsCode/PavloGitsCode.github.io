<script>
  import TerminalBar from "./TerminalBar.svelte";
</script>

<section class="contact-section" id="contact" aria-labelledby="contact-title">
  <div class="shell terminal-window contact-window">
    <TerminalBar path="~/portfolio/contact" label="LET'S TALK" />
    <div class="contact-layout">
    <div>
      <p class="section-kicker">04 / Contact</p>
      <h2 id="contact-title">Let's build<br />something<span class="name-period">.</span></h2>
      <p>
        I am open to software engineering projects, student collaborations, and technical
        conversations around systems, security, and practical tooling.
      </p>
    </div>
    <div class="contact-actions">
      <a href="https://linkedin.com/in/pavlo-puzik" target="_blank" rel="noreferrer" class="primary-action">
        Connect on LinkedIn <span aria-hidden="true">&#8599;</span>
      </a>
      <a href="https://github.com/PavloGitsCode" target="_blank" rel="noreferrer" class="secondary-action">
        Explore my GitHub <span aria-hidden="true">&#8599;</span>
      </a>
      <a href="/images/PavloPuzik_Resume.pdf" target="_blank" rel="noreferrer" class="secondary-action">My Resume <span aria-hidden="true">&#8599;</span></a>
    </div>
    </div>
    <div class="terminal-footer"><span>Thanks for stopping by.</span><a href="#top">Back to top <span aria-hidden="true">&#8593;</span></a></div>
  </div>
  <footer class="site-footer shell"><span>Pavlo Puzik</span></footer>
</section>
