<script setup>
import { ref, provide, readonly } from 'vue'
import AppNews from './components/AppNews.vue'

const now = ref(new Date().toLocaleDateString())
const openRate = ref(0)
const readRate = ref(0)
const news = ref([
  { id: 1, title: 'Something happend', isOpen: false, isRead: false },
  { id: 2, title: 'Another news', isOpen: false, isRead: false },
])

provide('news', readonly(news))

function toggleNews(id) {
  const item = news.value.find((item) => item.id === id)
  item.isOpen = !item.isOpen
  if (item.isOpen) {
    openRate.value += 1
  }
}

function toggleRead(id) {
  const item = news.value.find((item) => item.id === id)
  item.isRead = !item.isRead
  if (item.isRead) {
    readRate.value += 1
  } else {
    readRate.value -= 1
  }
}
</script>

<template>
  <div class="container">
    <div class="card">
      <h2>News {{ now }}</h2>
      <span
        >Open rate: {{ openRate }} | <strong>Read rate: {{ readRate }}</strong></span
      >
    </div>
    <AppNews
      v-for="{ id, title, isOpen, isRead } in news"
      :key="id"
      :id="id"
      :title="title"
      :is-open="isOpen"
      :is-read="isRead"
      @toggle-news="toggleNews(id)"
      @toggle-read="toggleRead(id)"
    />
  </div>
</template>

<style scoped></style>
