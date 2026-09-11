<script>
  import { experience, projectFocus, projects } from "./portfolio.js";
  import TerminalBar from "./TerminalBar.svelte";
</script>

<section class="section projects-section" id="projects" aria-labelledby="projects-title">
  <div class="shell">
    <div class="section-heading">
      <p class="section-kicker"><span>03 / Projects</span> <span class="section-command" aria-hidden="true">ls ./projects</span></p>
      <h2 id="projects-title">Things I've built.</h2>
      <p class="section-intro">From terminal emulators to full-stack applications. Each project is a chance to figure something out.</p>
    </div>
    <div class="project-grid">
          {#each projects as project, index}
            <article class="project-card" class:featured={index === 0}>
              <TerminalBar path={`~/projects/${project.title.toLowerCase().replaceAll(" ", "-")}`} label={index === 0 ? "FEATURED PROJECT" : `0${index + 1}`} />
              <div class="project-body">
              {#if project.image}
                <div class="project-media">
                  <img src={project.image} alt={`${project.title} screenshot`} loading="lazy" />
                </div>
              {/if}
              <div class="project-info">
                {#if index === 0}<p class="file-label">A CLOSER LOOK AT THE TERMINAL</p>{/if}
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div class="tech-list" aria-label={`${project.title} technologies`}>
                  {#each project.technologies as technology}
                    <span>{technology}</span>
                  {/each}
                </div>
                {#if project.link}
                  <a href={project.link} target="_blank" rel="noreferrer" aria-label={`View ${project.title} on GitHub`}>View source <span aria-hidden="true">&#8599;</span></a>
                {/if}
              </div>
              </div>
            </article>
          {/each}
    </div>
    <div class="experience-heading">
      <p class="file-label" aria-hidden="true">cat experience.log</p>
      <h3>Experience & Education</h3>
    </div>
        <div class="experience-grid">
          {#each experience as item, index}
            <article class="experience-card">
              <span class="experience-number" aria-hidden="true">[0{index + 1}]</span>
              {#if item.meta}
                <span class="experience-meta">{item.meta}</span>
              {/if}
              <h4>{item.title}</h4>
              <p>{item.text}</p>
              {#if item.highlights}
                <ul class="experience-highlights">
                  {#each item.highlights as highlight}
                    <li>{highlight}</li>
                  {/each}
                </ul>
              {/if}
            </article>
          {/each}
        </div>

        <div class="focus-panel" aria-labelledby="focus-title">
          <h3 id="focus-title">What the projects show</h3>
          <div class="focus-list">
            {#each projectFocus as item}
              <article>
                <strong>{item.label}</strong>
                <p>{item.text}</p>
              </article>
            {/each}
          </div>
        </div>
  </div>
</section>
