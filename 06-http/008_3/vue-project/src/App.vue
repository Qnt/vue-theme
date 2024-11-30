<template>
  <div class="container column">
    <form class="card card-w30" @submit.prevent="addBlock" @keyup.exact.ctrl.enter="addBlock">
      <div class="form-control">
        <label for="type">Тип блока</label>
        <select id="type" v-model="blockType">
          <option value="title">Заголовок</option>
          <option value="subtitle">Подзаголовок</option>
          <option value="avatar">Аватар</option>
          <option value="text">Текст</option>
        </select>
      </div>

      <div class="form-control">
        <label for="value">Значение</label>
        <textarea id="value" rows="3" v-model.trim="blockText"></textarea>
      </div>

      <button class="btn primary" :disabled="!isTextValid">Добавить</button>
    </form>

    <div class="card card-w70">
      <h3 v-if="!blocks.length">Добавьте первый блок, чтобы увидеть результат</h3>
      <component
        v-else
        v-for="{ id, componentName, text, imageSrc } in blocks"
        :key="id"
        :is="componentName"
        :image-src="imageSrc"
      >
        {{ text }}
      </component>
    </div>
  </div>
  <AppCommentList :isLoading="isLoading" :comments="comments" @load-comments="loadComments" />
</template>

<script setup>
import { ref, computed, markRaw } from 'vue'
import AppTitle from './components/AppTitle.vue'
import AppAvatar from './components/AppAvatar.vue'
import AppText from './components/AppText.vue'
import AppSubtitle from './components/AppSubtitle.vue'
import AppCommentList from './components/AppCommentList.vue'

const blocks = ref([])
const blockType = ref('title')
const blockText = ref('')
const isTextValid = computed(() => blockText.value.length > 3)
const comments = ref([])
const isLoading = ref(false)

async function loadComments() {
  try {
    isLoading.value = true
    const response = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=42')
    const commentData = await response.json()
    comments.value = commentData
  } catch (error) {
    console.error(error)
  } finally {
    isLoading.value = false
  }
}

function addBlock() {
  const block = {}

  switch (blockType.value) {
    case 'title':
      block.componentName = markRaw(AppTitle)
      break
    case 'subtitle':
      block.componentName = markRaw(AppSubtitle)
      break
    case 'avatar':
      block.componentName = markRaw(AppAvatar)
      break
    case 'text':
      block.componentName = markRaw(AppText)
      break
  }

  if (blockType.value === 'avatar') {
    block.imageSrc = blockText.value
  } else {
    block.text = blockText.value
  }

  blocks.value.push({
    ...block,
    id: blocks.value.length + 1,
  })

  blockText.value = ''
  blockType.value = 'title'
}
</script>

<style>
.avatar {
  display: flex;
  justify-content: center;
}

.avatar img {
  width: 150px;
  height: auto;
  border-radius: 50%;
}
</style>
