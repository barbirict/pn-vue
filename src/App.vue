<template>
  <div>
  <nav-main></nav-main>
  <router-view></router-view>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import navigation from '@/components/navigation.vue'

export default {
  name: 'App',
  components: {
   'nav-main': navigation
  },/*,
  mounted(){
    this.$store.commit(12);
  }*/
  mounted() {
    this.$store.commit('updateCartFromBasket')
  }
}
</script>

<style>
</style>
