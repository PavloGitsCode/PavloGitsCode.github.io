<script>
  import TerminalBar from "./TerminalBar.svelte";
</script>

<header class="hero shell" id="top">
  <div class="hero-prelude"><span>PERSONAL PORTFOLIO</span><span>SOFTWARE / SYSTEMS / ELECTRONICS</span></div>
  <section class="terminal-window hero-window" aria-labelledby="hero-title">
    <TerminalBar path="pavlo@portfolio: ~" label="INTRODUCTION" />
    <div class="hero-content">
      <div class="hero-copy">
        <p class="command-line"><span class="prompt-symbol" aria-hidden="true">$</span> <span class="command-typing">whoami</span></p>
        <p class="eyebrow">Hello, I'm</p>
        <h1 id="hero-title">Pavlo<br />Puzik<span class="name-period">.</span><span class="terminal-cursor" aria-hidden="true"></span></h1>
        <p class="tagline">Computer Science Student<br /> & Software Engineer</p>
        <p class="description">Passionate about systems design, embedded programming, and electronics.</p>
        <div class="cta-row">
          <a class="primary-action" href="#projects">Explore projects <span aria-hidden="true">-&gt;</span></a>
          <a class="secondary-action" href="/images/PavloPuzik_Resume.pdf" target="_blank" rel="noreferrer">View resume <span aria-hidden="true">&#8599;</span></a>
        </div>
      </div>
      <aside class="profile-panel" aria-label="Profile at a glance">
        <p class="file-label"><span aria-hidden="true">//</span> profile.conf</p>
        <dl class="profile-config">
          <div><dt>name</dt><dd>"Pavlo Puzik"</dd></div>
          <div><dt>studying</dt><dd>Computer Science</dd></div>
          <div><dt>minor</dt><dd>Business Data Analytics</dd></div>
          <div><dt>focus</dt><dd>Electronics &<br />embedded systems</dd></div>
        </dl>
        <div class="profile-note"><span aria-hidden="true">#</span> Building an understanding<br />of how things work.</div>
        <div class="profile-links">
          <a href="https://github.com/PavloGitsCode" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">&#8599;</span></a>
          <a href="https://linkedin.com/in/pavlo-puzik" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">&#8599;</span></a>
          <a href="#contact">Get in touch <span aria-hidden="true">-&gt;</span></a>
        </div>
      </aside>
    </div>
    <div class="terminal-footer"><span class="footer-prompt" aria-hidden="true">~/portfolio <span class="prompt-symbol">$</span></span></div>
  </section>
  <a href="#about" class="scroll-cue"><span aria-hidden="true">&#8595;</span> Scroll to explore <span class="scroll-rule" aria-hidden="true"></span></a>
</header>
