<template>
  <div class="flex">
    <svg class="w-10 h-10 text-blue-600" viewBox="64 64 896 896" focusable="false" data-icon="wallet" width="1em" height="1em" fill="currentColor" aria-hidden="true" style="transform: rotate(-90deg);">
      <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 464H528V448h312v128zm0 264H184V184h656v200H496c-17.7 0-32 14.3-32 32v192c0 17.7 14.3 32 32 32h344v200zM580 512a40 40 0 1080 0 40 40 0 10-80 0z"></path>
    </svg>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Wallet extends Vue {}
</script>
