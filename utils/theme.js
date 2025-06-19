// ai-travel-companion/utils/theme.js
export const initTheme = () => {
  const savedTheme = localStorage.getItem(import.meta.env.VITE_THEME_STORAGE_KEY) || 
  import.meta.env.VITE_DEFAULT_THEME;
  document.documentElement.setAttribute('data-theme', savedTheme);
  return savedTheme;
};

export const toggleTheme = () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem(import.meta.env.VITE_THEME_STORAGE_KEY, newTheme);
  
  return newTheme;
};


</script>

<button 
  on:click={handleToggle}
  aria-label={`Switch to ${currentTheme === 'dark' ? 'light' : 'dark'} mode`}
  class="theme-toggle"
>
  {#if currentTheme === 'dark'}
    <span class="sun-icon">☀️</span>
  {:else}
    <span class="moon-icon">🌙</span>
  {/if}
</button>

<style>
  .theme-toggle {
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 1.5rem;
    padding: 0.5rem;
    transition: transform 0.3s ease;
  }

  .theme-toggle:hover {
    transform: scale(1.1);
  }
</style>
```

