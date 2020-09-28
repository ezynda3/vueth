<template>
  <nav class="bg-white shadow-lg">
    <div class="md:flex items-center justify-between py-2 px-8 md:px-12">
      <div class="flex justify-between items-center">
        <div class="text-2xl font-bold text-gray-800 md:text-3xl">
          <a href="#">
            🏗
            <img src="@/assets/logo.png" alt="Vue Logo" class="h-10 w-10 inline">
            Vueth
          </a>
        </div>
        <div class="md:hidden">
          <button
            type="button"
            class="block text-gray-800 hover:text-gray-700 focus:text-gray-700 focus:outline-none"
          >
            <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path
                class="hidden"
                d="M16.24 14.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 0 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12l2.83 2.83z"
              />
              <path
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              />
            </svg>
          </button>
        </div>
      </div>
      <!-- <div class="flex flex-col md:flex-row hidden md:block -mx-2">
        <router-link
          to='/'
          class="text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2"
        >
          Home
        </router-link>
      </div> -->
      <div>
        <Account />
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Account from '@/components/Account.vue'

@Component({
  components: {
    Account,
  },
})
export default class Header extends Vue {}
</script>
