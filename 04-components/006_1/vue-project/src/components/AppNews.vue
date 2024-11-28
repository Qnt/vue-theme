<script setup>
import AppButton from './AppButton.vue'
import AppNewsList from './AppNewsList.vue'
const { id, title, isOpen, isRead } = defineProps({
  id: { type: Number, required: true },
  title: { type: String, required: true },
  isOpen: { type: Boolean, required: true },
  isRead: { type: Boolean, required: true },
})
defineEmits({
  toggleNews: null,
  toggleRead(id) {
    if (id) {
      return true
    }
    return console.warn("Missing argument 'id' for 'toggleRead' function")
  },
})
</script>

<template>
  <div class="card">
    <h3>({{ id }}) {{ title }}</h3>
    <AppButton @action="$emit('toggleNews')">{{ isOpen ? 'Close' : 'Open' }}</AppButton>
    <div v-if="isOpen">
      <hr />
      <p>{{ title }}</p>
      <AppNewsList />
      <AppButton :color="isRead ? 'danger' : 'primary'" @action="$emit('toggleRead', id)">{{
        isRead ? 'Count as unread' : 'Count as read'
      }}</AppButton>
    </div>
  </div>
</template>
