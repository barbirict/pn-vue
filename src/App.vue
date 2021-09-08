<template>
  <nav-main></nav-main>
    <router-view></router-view>
</template>

<script>
import navigation from '@/components/navigation.vue'

export default {
  name: 'App',
  components: {
    'nav-main': navigation,
  },
  mounted(){
    this.$store.commit(null);
  }
}
</script>

<style>
</style>
