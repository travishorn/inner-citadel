<script setup>
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'
</script>

<template>
  <ParentLayout />
</template>

<style lang="css">
@font-face {
  font-family: 'Mulish Variable';
  font-style: normal;
  font-display: swap;
  font-weight: 200 1000;
  src: url(https://cdn.jsdelivr.net/fontsource/fonts/mulish:vf@latest/latin-wght-normal.woff2) format('woff2-variations');
  unicode-range: U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;
}

@font-face {
  font-family: 'Mulish Variable';
  font-style: italic;
  font-display: swap;
  font-weight: 200 1000;
  src: url(https://cdn.jsdelivr.net/fontsource/fonts/mulish:vf@latest/latin-wght-italic.woff2) format('woff2-variations');
  unicode-range: U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;
}

/* 
@font-face {
  font-family: 'Bitter Variable';
  font-style: normal;
  font-display: swap;
  font-weight: 100 900;
  src: url(https://cdn.jsdelivr.net/fontsource/fonts/bitter:vf@latest/latin-wght-normal.woff2) format('woff2-variations');
  unicode-range: U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;
}

@font-face {
  font-family: 'Bitter Variable';
  font-style: italic;
  font-display: swap;
  font-weight: 100 900;
  src: url(https://cdn.jsdelivr.net/fontsource/fonts/bitter:vf@latest/latin-wght-italic.woff2) format('woff2-variations');
  unicode-range: U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;
} */

:root {
  --vp-c-accent: #3B7BB0;
  --vp-c-accent-bg: #3B7BB0;
  --font-family: 'Mulish Variable';
  /*--font-family: 'Bitter Variable';*/
  --nprogress-c: transparent;
}

:root[data-theme=dark] {
  --vp-c-accent: #4488C1;
  --vp-c-accent-bg: #4488C1;
}

.vp-sidebar-item.vp-sidebar-heading {
  font-weight: normal;
}

.vp-page .theme-default-content {
  padding-top: 1rem;
}

.theme-default-content li {
  margin-bottom: 10px;
}

.vp-page-nav,
.git-info {
  display: none;
}

@media print {
  .vp-sidebar {
    display: none;
    width: 0;
  }

  .vp-page {
    padding: 0;
  }
}
</style>