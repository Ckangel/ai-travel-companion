import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), 'VITE_');
    
    return {
        define: {
            'import.meta.env.VITE_DEEPSEEK_API_KEY': JSON.stringify(env.VITE_DEEPSEEK_API_KEY),
            'import.meta.env.VITE_OPENWEATHER_API_KEY': JSON.stringify(env.VITE_OPENWEATHER_API_KEY)
        },
        server: {
            port: 3000
        }
    };
});

import { defineConfig } from 'vite';
import { loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV),
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            $default-theme: ${env.VITE_DEFAULT_THEME};
            $theme-storage-key: ${env.VITE_THEME_STORAGE_KEY};
          `,
        },
      },
    },
  };
});
```

```
