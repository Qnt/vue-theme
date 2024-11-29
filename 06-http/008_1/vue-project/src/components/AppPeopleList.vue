<template>
  <div v-if="people.length">
    <div class="card inline" v-for="{ id, firstName } in people" :key="id">
      <h3>{{ firstName }}</h3>
      <button class="btn danger" @click="$emit('remove', id)">Удалить</button>
    </div>
  </div>
  <div class="card center" v-else>
    <h4>Людей пока нет.</h4>
    <button class="btn" @click="$emit('load')">Загрузить</button>
  </div>
</template>

<script setup>
defineProps({
  people: {
    type: Array,
  },
})
defineEmits(['load', 'remove'])
</script>

<style scoped>
.inline {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
