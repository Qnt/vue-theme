<template>
  <li class="list-item">
    <div>
      <p>
        <strong>{{ comment.email }}</strong>
      </p>
      <small>{{ comment.body }}</small>
    </div>
  </li>
</template>

<script setup>
defineProps({
  comment: Object,
})
</script>

<style scoped></style>
