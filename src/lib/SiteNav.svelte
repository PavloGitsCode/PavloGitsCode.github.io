<script>
  import { onMount } from "svelte";

  const links = [
    { id: "top", title: "Overview" },
    { id: "about", title: "About" },
    { id: "skills", title: "Skills" },
    { id: "projects", title: "Projects" },
    { id: "contact", title: "Contact" }
  ];
  let activeSection = $state("top");

  onMount(() => {
    let frame;
    const update = () => {
      activeSection = links.reduce((active, link) => {
        const section = document.getElementById(link.id);
        return section && section.getBoundingClientRect().top <= 180 ? link.id : active;
      }, "top");
      // A short final section cannot reach the top of a tall viewport.
      if (window.scrollY > 0 && window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) {
        activeSection = "contact";
      }
      frame = undefined;
    };
    const onScroll = () => {
      if (frame === undefined) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  });
</script>

<div class="nav-shell">
  <nav class="top-nav shell" aria-label="Primary navigation">
    <span class="session-path" aria-hidden="true"><span class="prompt-symbol">&gt;_</span> ~/portfolio</span>
    <div class="nav-links">
      {#each links as link, index}
        <a href={`#${link.id}`} aria-current={activeSection === link.id ? "location" : undefined}>
          <span class="nav-index" aria-hidden="true">0{index}</span>{link.title}
        </a>
      {/each}
    </div>
  </nav>
</div>
