<template>
  <div class="flex">
    <img :src="blockieSrc" class="w-10 h-10"/>
    <span class="ml-2 text-2xl font-bold">
      {{ '0x8B7B2b4F7A391b6f14A81221AE0920a9735B67Fc'.substr(0,7) }}
    </span>
    <svg class="ml-2 w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"></path>
    </svg>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import * as blockies from 'blockies-ts'

@Component
export default class Address extends Vue {
  get blockieSrc(): string {
    const address = '0x8B7B2b4F7A391b6f14A81221AE0920a9735B67Fc' // TODO use prop
    return blockies.create({ seed: address }).toDataURL()
  }
}
</script>
