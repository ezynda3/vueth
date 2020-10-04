<template>
  <div class="flex">
    <Address :address="$store.state.Eth.userAddress"/>
    <Balance class="ml-2" />
    <Wallet class="ml-2" :address="$store.state.Eth.userAddress"/>
    <button class="ml-5 bg-blue-600 p-2 text-white font-bold rounded-full w-32 focus:outline-none">
      Connect
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
})
export default class Account extends Vue {}
</script>
