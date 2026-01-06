// @ts-check
import { defineConfig } from 'astro/config';
import astroBrokenLinksChecker from 'astro-broken-links-checker';

// https://astro.build/config
export default defineConfig({
    base: '/docs',
    integrations: [
        astroBrokenLinksChecker({
            logFilePath: 'broken-links.log',
            checkExternalLinks: false,
            throwError: true
        }),
  ],
});
