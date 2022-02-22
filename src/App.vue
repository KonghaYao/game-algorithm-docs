<template>
  <router-view class="MAIN"></router-view>
</template>

<style>
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
@import url("https://cdn.jsdelivr.net/gh/KonghaYao/chinese-free-web-font-storage/build/ipix_12px/result.css");
#app {
  font-family: ipix_12px, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  overflow: hidden;
  width: 100vw;
  height: 100vh;
}
.MAIN {
  height: 100vh;
}
</style>
