<template>
  <div class="flex mb-2 border rounded-md py-1">
    <input
      type="number"
      placeholder="amount"
      v-bind:value="value"
      @input="$emit('input', $event.target.value)"
      class="outline-none w-full px-3"
    />
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class EtherInput extends Vue {
    @Prop({ default: null }) value: number | undefined
}
</script>
