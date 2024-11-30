<template>
  <div class="avatar">
    <img :src="imageSrc" />
  </div>
</template>

<script setup>
defineProps({ imageSrc: String })
</script>
