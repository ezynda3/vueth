<template>
  <div id="app">
    <Header />
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { JsonRpcProvider } from '@ethersproject/providers'
import Header from '@/components/Header.vue'

const PROVIDER = process.env.VUE_APP_PROVIDER

@Component({
  components: {
    Header,
  },
})
export default class App extends Vue {
  monitorBalance: NodeJS.Timeout = {} as NodeJS.Timeout

  async mounted() {
    const provider = new JsonRpcProvider(PROVIDER || 'http://localhost:8545')
    await this.$store.dispatch('Eth/setUserAddress', provider)
    const address = this.$store.state.Eth.userAddress
    this.monitorBalance = setInterval(() => {
      this.$store.dispatch('Eth/setUserBalance', provider, address)
    }, 3000)
  }

  beforeDestroy() {
    clearInterval(this.monitorBalance)
  }
}
</script>

<style src="@/assets/css/tailwind.css">
