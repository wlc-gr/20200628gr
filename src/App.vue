<template>
  <div id="app">
    <router-view/>
    <footer-guide v-show="$route.meta.showFooter"></footer-guide>
  </div>
</template>

<script>
  import FooterGuide from "./components/FooterGuide/FooterGuide";
export default {
  name: 'App',
  components: {FooterGuide},
}
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
