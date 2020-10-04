<template>
  <div class="flex mb-2 border rounded-md py-1">
    <Blockie v-if="validAddress" :address='value' size="6" class="mx-2"/>
    <input
      type="text"
      placeholder="to address"
      v-bind:value="value"
      @input="$emit('input', $event.target.value)"
      class="outline-none w-full px-3"
    />
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { isAddress } from '@ethersproject/address'
import Blockie from './Blockie.vue'

@Component({
  components: {
    Blockie,
  },
})
export default class AddressInput extends Vue {
    @Prop({ default: null }) value: string | undefined

    get validAddress() {
      return isAddress(this.value as string)
    }
}
</script>
