<script>
  const traces = [
    "M 0 190 H 48 L 80 222 V 390 L 112 422 V 610",
    "M 0 700 H 42 L 74 668 V 530",
    "M 1440 240 H 1396 L 1364 272 V 450 L 1332 482 V 650",
    "M 1440 780 H 1392 L 1360 748 V 610",
    "M 180 1000 V 940 L 220 900 H 400",
    "M 1260 0 V 48 L 1220 88 H 1040"
  ];
</script>

<div class="circuit-background" aria-hidden="true">
  <div class="circuit-grid"></div>
  <svg viewBox="0 0 1440 1000" preserveAspectRatio="xMidYMid slice" focusable="false">
    <g class="traces">
      {#each traces as path}<path d={path} />{/each}
      <circle cx="112" cy="610" r="4" />
      <circle cx="74" cy="530" r="4" />
      <circle cx="1332" cy="650" r="4" />
      <circle cx="1360" cy="610" r="4" />
      <circle cx="400" cy="900" r="4" />
      <circle cx="1040" cy="88" r="4" />
    </g>
    <g class="signals">
      {#each [traces[0], traces[2], traces[4]] as path, index}
        <path d={path} pathLength="100" style={`--signal-delay: ${index * -5}s`} />
      {/each}
    </g>
  </svg>
</div>

<style>
  .circuit-background {
    position: fixed;
    inset: 0;
    z-index: 0;
    overflow: hidden;
    pointer-events: none;
    background:
      radial-gradient(ellipse at 8% 35%, rgba(238, 185, 116, 0.055), transparent 55%),
      radial-gradient(ellipse at 90% 75%, rgba(104, 151, 139, 0.06), transparent 55%),
      #080e13;
  }

  .circuit-grid {
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(168, 193, 190, 0.045) 1px, transparent 1px),
      linear-gradient(90deg, rgba(168, 193, 190, 0.045) 1px, transparent 1px);
    background-size: 48px 48px;
    mask-image: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.3), #000);
  }

  svg { position: absolute; width: 100%; height: 100%; }
  .traces { fill: none; stroke: rgba(238, 185, 116, 0.17); stroke-width: 1; }
  .traces circle { fill: #101619; }
  .signals path {
    fill: none;
    stroke: rgba(238, 185, 116, 0.48);
    stroke-width: 1.5;
    stroke-linecap: round;
    stroke-dasharray: 5 95;
    animation: signal-travel 18s linear var(--signal-delay) infinite;
  }

  @keyframes signal-travel {
    0% { stroke-dashoffset: 10; opacity: 0; }
    10%, 50% { opacity: 1; }
    65%, 100% { stroke-dashoffset: -100; opacity: 0; }
  }

  @media (max-width: 720px) {
    svg { width: 1440px; left: 0; opacity: 0.65; }
    .circuit-grid { background-size: 36px 36px; }
  }

  @media (prefers-reduced-motion: reduce) {
    .signals { display: none; }
    .signals path { animation: none; }
  }
</style>
