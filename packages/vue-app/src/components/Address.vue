<template>
  <div class="flex">
    <Blockie :address="address" />
    <span class="ml-2 text-2xl font-bold">
      {{ address.substr(0,7) }}
    </span>
    <svg
      @click="copy"
      v-if="!copying"
      class="ml-2 w-10 h-10 text-blue-600 cursor-pointer"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"></path>
    </svg>
    <svg v-else class="ml-2 w-10 h-10 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
    </svg>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import Blockie from './Blockie.vue'

@Component({
  components: {
    Blockie,
  },
})
export default class Address extends Vue {
  @Prop({ default: '' }) readonly address: string

  copying = false

  async copy() {
    this.copying = true
    setTimeout(() => { this.copying = false }, 1000)
  }
}
</script>
