<template>
  <div class="flex">
    <Address />
    <Balance class="ml-2" />
    <Wallet class="ml-2" />
    <button v-if="!web3Modal.cachedProvider" @click="clickedConnect" class="ml-5 bg-blue-600 p-2 text-white font-bold rounded-full w-32">
      Connect
    </button>
    <button v-if="web3Modal.cachedProvider" @click="clickedDisconnect" class="ml-5 bg-blue-600 p-2 text-white font-bold rounded-full w-32">
      Logout
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
export default class Account extends Vue {
  get blockieSrc(): string {
    const address = '0x8B7B2b4F7A391b6f14A81221AE0920a9735B67Fc' // TODO use prop
    return blockies.create({ seed: address }).toDataURL()
  }
}
</script>
