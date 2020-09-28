<template>
  <div id="app">
    <Header />
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Header from '@/components/Header.vue'

@Component({
  components: {
    Header,
  },
})
export default class Home extends Vue {}
</script>

<style src="@/assets/css/tailwind.css">
