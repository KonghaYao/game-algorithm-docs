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
/*定义滚动条高宽及背景
 高宽分别对应横竖滚动条的尺寸*/
::-webkit-scrollbar {
  width: 4px;
  height: 16px;
  background-color: #f5f5f5;
}
/*定义滚动条轨道
 内阴影+圆角*/
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 2px;
  background-color: #f5f5f5;
}
/*定义滑块
 内阴影+圆角*/
::-webkit-scrollbar-thumb {
  border-radius: 2px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #555;
}
.MAIN {
  height: 100vh;
}
</style>
