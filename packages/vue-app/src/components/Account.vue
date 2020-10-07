<template>
  <div class="flex">
    <Address :address="$store.state.Eth.userAddress"/>
    <Balance class="ml-2" />
    <Wallet class="ml-2" :address="$store.state.Eth.userAddress"/>
    <button v-if="!web3Modal.cachedProvider" @click="clickedConnect" class="ml-5 bg-blue-600 p-2 text-white font-bold rounded-full w-32 focus:outline-none">
      Connect
    </button>
    <button v-if="web3Modal.cachedProvider" @click="clickedDisconnect" class="ml-5 bg-blue-600 p-2 text-white font-bold rounded-full w-32">
      Logout
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Address from './Address.vue'
import Balance from './Balance.vue'
import Wallet from './Wallet.vue'

@Component({
  components: {
    Address,
    Balance,
    Wallet,
  },
  props: ['web3Modal'],
  methods: {
    clickedConnect() {
      this.$emit('clicked', 'connect')
    },
    clickedDisconnect() {
      this.$emit('clicked', 'disconnect')
    },
  },
})
export default class Account extends Vue {}
</script>
