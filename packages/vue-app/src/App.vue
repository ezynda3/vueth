<template>
  <div id="app">
    <Header
    @clicked="onHeaderClicked"
    />
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { JsonRpcProvider } from '@ethersproject/providers'
import Header from '@/components/Header.vue'
import Web3Modal from 'web3modal'
import WalletConnectProvider from '@walletconnect/web3-provider'
import { INFURA_ID, ETHERSCAN_KEY } from './constants'

const PROVIDER = process.env.VUE_APP_PROVIDER

/*
  Web3 modal helps us "connect" external wallets:
*/
const web3Modal = new Web3Modal({
  // network: "mainnet", // optional
  cacheProvider: true, // optional
  providerOptions: {
    walletconnect: {
      package: WalletConnectProvider, // required
      options: {
        infuraId: INFURA_ID,
      },
    },
  },
})

const logoutOfWeb3Modal = async () => {
  await web3Modal.clearCachedProvider()
  setTimeout(() => {
    window.location.reload()
  }, 1)
}

@Component({
  components: {
    Header,
  },
  methods: {
    onHeaderClicked(evt) {
      console.log('clicked', evt)
      if (evt === 'connect') {
        this.loadWeb3Modal()
      }
    },
    async loadWeb3Modal() {
      const provider = await web3Modal.connect()
    },
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
