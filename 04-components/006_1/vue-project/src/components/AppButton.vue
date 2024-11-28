<script setup>
const { color } = defineProps({
  color: {
    type: String,
    validator(value) {
      return ['', 'primary', 'danger'].includes(value)
    },
  },
})
defineEmits({
  action: null,
})
</script>

<template>
  <button class="btn" :class="color" @click="$emit('action')"><slot /></button>
</template>
