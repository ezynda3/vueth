<template>
  <div class="flex">
    <img :src="blockieSrc" class="w-10 h-10"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import * as blockies from 'blockies-ts'

@Component
export default class Blockie extends Vue {
  @Prop({ default: '' }) readonly address: string

  copying = false

  get blockieSrc(): string {
    return blockies.create({ seed: this.address }).toDataURL()
  }

  async copy() {
    this.copying = true
    setTimeout(() => { this.copying = false }, 1000)
  }
}
</script>
