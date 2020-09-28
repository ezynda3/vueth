<template>
  <div class="flex">
    <Address />
    <Balance class="ml-2" />
    <Wallet class="ml-2" />
    <button class="ml-5 bg-blue-600 p-2 text-white font-bold rounded-full w-32">
      Connect
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import * as blockies from 'blockies-ts'
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
export default class Account extends Vue {
  get blockieSrc(): string {
    const address = '0x8B7B2b4F7A391b6f14A81221AE0920a9735B67Fc' // TODO use prop
    return blockies.create({ seed: address }).toDataURL()
  }
}
</script>
