# False broken links: Astro Test repo

## How to reproduce

Clone this repo and enter cloned repo:

```sh
git clone https://github.com/deining/astro-test.git
cd astro-test/
```

Install dependencies:

```sh
npm i
```

Build site:

```sh
npm run astro build
```

Broken links are reported erroneously:

```sh
21:38:44 [astro-broken-links-checker] Checking 2 html pages for broken links
21:38:44 [astro-broken-links-checker] Broken links have been logged to broken-links.log
21:38:44 [astro-broken-links-checker] Broken link: /docs/second
  Found in:
    - /index
Broken link: /docs/
  Found in:
    - /second/
```

Preview the site:

```sh
npm run astro dev
```

You will see that these links work perfectly fine.
