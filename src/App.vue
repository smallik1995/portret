<template>
  <div id="root">
      <router-view></router-view>
  </div>
</template>

<script>
    import InfoBar from './components/InfoBar.vue';
    export default {
        components: {InfoBar},
        data() {
            return {
                user: {},
                infoBar: {
                    type: null,
                    text: '',
                    delay: 2000,
                    show: false
                }
            }
        }
    }
</script>

<style src="./assets/sass/app.scss" lang="scss" ></style>
