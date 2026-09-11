<script>
  let { path, label = "" } = $props();
</script>

<div class="terminal-bar">
  <span class="window-dots" aria-hidden="true"><i></i><i></i><i></i></span>
  <span class="terminal-path">{path}</span>
  {#if label}<span class="terminal-label">{label}</span>{/if}
</div>
