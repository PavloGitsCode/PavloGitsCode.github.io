<script>
  import { experience, projectFocus, projects } from "./portfolio.js";
</script>

<section class="section projects-section" id="projects" aria-labelledby="projects-title">
  <div class="shell">
    <div class="section-heading">
      <p class="section-kicker">Projects & Experience</p>
      <h2 id="projects-title">Selected work and current path.</h2>
    </div>
    <div class="project-experience-grid">
      <div>
        <h3 class="column-title">Projects</h3>
        <div class="stack-grid">
          {#each projects as project}
            <article class="project-card">
              {#if project.image}
                <div class="project-media">
                  <img src={project.image} alt={`${project.title} screenshot`} />
                </div>
              {/if}
              <div class="project-info">
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <div class="tech-list" aria-label={`${project.title} technologies`}>
                  {#each project.technologies as technology}
                    <span>{technology}</span>
                  {/each}
                </div>
                {#if project.link}
                  <a href={project.link} target="_blank" rel="noreferrer">View project</a>
                {/if}
              </div>
            </article>
          {/each}
        </div>
      </div>

      <div>
        <h3 class="column-title">Experience & Education</h3>
        <div class="stack-grid">
          {#each experience as item}
            <article class="experience-card">
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
    </div>
  </div>
</section>
