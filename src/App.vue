<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
  export default {
    created() {
      let appLoading = document.getElementById("appLoading");

      if (appLoading) {
        document.body.removeChild(appLoading);
      }
    }
  };
</script>

<style lang="scss">
  #app {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
</style>