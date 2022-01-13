<script setup lang="ts">
import { useStore } from '@/store'
useHead({
  title: 'Votion | Notion like application',
})

const store = useStore()
const { t } = useI18n()
</script>

<template>
  <div class="">
    <main-editor />
  </div>
</template>

<route lang="yaml">
name: home
</route>
