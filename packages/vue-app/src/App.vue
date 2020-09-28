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
export default class App extends Vue {
  mounted() {
    console.log(process.env.VUE_APP_FOO)
  }
}
</script>

<style src="@/assets/css/tailwind.css">
