<template>
  <div class="form-control" :class="{ invalid: error }">
    <label :for="id">{{ label }}</label>
    <input v-model.trim="model" type="text" :id="id" :placeholder="placeholder" />
    <small v-if="error">{{ error }}</small>
  </div>
</template>

<script setup>
import { ref } from 'vue'
defineProps({
  error: String,
  label: String,
  placeholder: String,
})
const model = defineModel()

const id = ref('input-' + Math.random())
</script>

<style lang="scss" scoped></style>
