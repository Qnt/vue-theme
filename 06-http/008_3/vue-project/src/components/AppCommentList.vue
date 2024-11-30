<template>
  <div class="container">
    <div class="card" v-if="!isCommentsEmpty">
      <h2>Комментарии</h2>
      <ul class="list" v-for="comment in comments" :key="comment.id">
        <AppCommentItem :comment="comment" />
      </ul>
    </div>
    <p v-else>
      <button class="btn primary" @click="$emit('loadComments')">Загрузить комментарии</button>
    </p>
    <div class="loader" v-if="isLoading"></div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import AppCommentItem from './AppCommentItem.vue'

const { comments, isLoading } = defineProps({
  comments: Array,
  isLoading: Boolean,
})
defineEmits(['loadComments'])

const isCommentsEmpty = computed(() => comments.length === 0)
</script>

<style scoped></style>
