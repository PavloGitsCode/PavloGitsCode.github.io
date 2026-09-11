<script>
  import AboutSection from "./lib/AboutSection.svelte";
  import ContactSection from "./lib/ContactSection.svelte";
  import HeroSection from "./lib/HeroSection.svelte";
  import ProjectsSection from "./lib/ProjectsSection.svelte";
  import SkillsSection from "./lib/SkillsSection.svelte";
  import CircuitBackground from "./lib/CircuitBackground.svelte";
  import SiteNav from "./lib/SiteNav.svelte";
</script>

<svelte:head>
  <meta property="og:title" content="Pavlo Puzik | Portfolio" />
  <meta
    property="og:description"
    content="Computer science portfolio focused on software engineering, systems design, embedded programming, and cybersecurity."
  />
</svelte:head>

<CircuitBackground />
<a class="skip-link" href="#main-content">Skip to content</a>
<SiteNav />
<HeroSection />

<main id="main-content">
  <AboutSection />
  <SkillsSection />
  <ProjectsSection />
  <ContactSection />
</main>
