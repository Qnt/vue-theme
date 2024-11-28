<script setup>
import { inject } from 'vue'

const news = inject('news')
</script>

<template>
  <ul>
    <li v-for="{ id, title } in news" :key="id">{{ title }}</li>
  </ul>
</template>
