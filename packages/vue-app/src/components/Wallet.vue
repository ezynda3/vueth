<template>
  <div class="flex">
    <svg
      @click="showModal = !showModal"
      class="w-10 h-10 text-blue-600 cursor-pointer"
      viewBox="64 64 896 896"
      focusable="false"
      data-icon="wallet"
      width="1em"
      height="1em"
      fill="currentColor"
      aria-hidden="true"
      style="transform: rotate(-90deg);"
    >
      <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 464H528V448h312v128zm0 264H184V184h656v200H496c-17.7 0-32 14.3-32 32v192c0 17.7 14.3 32 32 32h344v200zM580 512a40 40 0 1080 0 40 40 0 10-80 0z"></path>
    </svg>
    <t-modal
      v-model="showModal"
    >
      <template :v-slot="header">
        <div class="flex justify-between">
          <Address :address="address"/>
          <Balance class="mr-5"/>
        </div>
      </template>
      <div v-if="showQR" class="m-5">
        <qrcode-vue :value="address" level="H" render-as="svg" size="450" />
      </div>
      <div v-else class="mt-5">
        <AddressInput v-model="toAddress"/>
        <EtherInput v-model="amount"/>
      </div>
      <template v-slot:footer>
        <div>
          <div class="flex justify-end">
            <t-button type="button" class="mr-1" variant="simple" @click="showQR = !showQR">
              <svg class="w-6 h-6 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"></path></svg>
              {{ showQR ? 'Hide' : 'Receive' }}
            </t-button>
            <t-button type="button" variant="simple" :disabled="!validAddress" :class="{'btn-disabled': !validAddress || !amount }">
              <svg class="w-6 h-6 mr-1 transform rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
              Send
            </t-button>
          </div>
        </div>
    </template>
  </t-modal>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { isAddress } from '@ethersproject/address'
import QrcodeVue from 'qrcode.vue'
import Balance from './Balance.vue'
import Address from './Address.vue'
import AddressInput from './AddressInput.vue'
import EtherInput from './EtherInput.vue'

@Component({
  components: {
    Address,
    AddressInput,
    Balance,
    EtherInput,
    QrcodeVue,
  },
})
export default class Wallet extends Vue {
  @Prop({ required: true }) readonly address: string | undefined

  toAddress = ''

  amount = null

  showModal = false

  showQR = false

  get validAddress() {
    return isAddress(this.toAddress)
  }
}
</script>
