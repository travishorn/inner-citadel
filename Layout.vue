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

:root {
  --vp-c-accent: #4E5DD0;
  --vp-c-accent-bg: #4E5DD0;
  --font-family: 'Mulish Variable';
}

.vp-sidebar-item.vp-sidebar-heading {
  font-weight: normal;
}

.theme-default-content li {
  margin-bottom: 10px;
}

.vp-page-nav {
  display: none;
}
</style>