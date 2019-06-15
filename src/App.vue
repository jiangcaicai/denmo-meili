<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  mounted() {
    // var ratio = window.devicePixelRatio;
    // var meta = document.querySelector("[name=viewport]");
    // meta.setAttribute("content",`width=device-width,initial-scale=${1/ratio},user-scalable=no`);
    document.documentElement.style.fontSize =
      (window.innerWidth / 750) * 100 + "px";
  }
};
</script>

<style lang="scss" scoped>

</style>
