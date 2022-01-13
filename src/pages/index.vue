<script setup lang="ts">
import { useStore } from '@/store'
useHead({
  title: 'Votion | Notion like application',
})

const store = useStore()
const { t } = useI18n()
</script>

<template>
  <div class="grid place-items-center min-h-[80vh]">
    <router-link
      :to="{ name: 'other-page' }"
      class="
				mt-5
				text-center
				hover:text-gray-200
				dark:hover:text-gray-500
				hover:underline
			"
    >
      {{ t('pages.other.menu') }}
    </router-link>
  </div>
</template>

<route lang="yaml">
name: home
</route>
