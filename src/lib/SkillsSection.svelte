<script>
  import { skills } from "./portfolio.js";
  import TerminalBar from "./TerminalBar.svelte";
</script>

<section class="section" id="skills" aria-labelledby="skills-title">
  <div class="shell">
    <div class="section-heading">
      <p class="section-kicker"><span>02 / Skills</span> <span class="section-command" aria-hidden="true">ls ./toolbox</span></p>
      <h2 id="skills-title">Tools and areas of focus.</h2>
    </div>
    <div class="terminal-window skills-window">
      <TerminalBar path="~/portfolio/toolbox" label="SKILLS & INTERESTS" />
      <div class="skills-grid">
      {#each skills as category, index}
        <article class="skill-card">
          <span class="file-label" aria-hidden="true">0{index + 1} /</span>
          <h3>{category.title}</h3>
          <ul>
            {#each category.items as item}
              <li>{item}</li>
            {/each}
          </ul>
        </article>
      {/each}
      </div>
    </div>
  </div>
</section>
