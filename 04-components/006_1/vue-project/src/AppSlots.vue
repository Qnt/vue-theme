<script setup>
import AppBlock from './components/AppBlock.vue'
import AppList from './components/AppList.vue'
</script>

<template>
  <div class="container">
    <div class="card">
      <h2>Slots</h2>
      <AppList>
        <template #default="{ iter, index }">
          <span style="color: red">
            <strong>({{ index + 1 }})</strong>&nbsp; <span>Item: {{ iter }}</span></span
          >
        </template>
      </AppList>
      <AppBlock>
        <p>Some important text</p>
        <template #header>
          <h3>Slot Title</h3>
        </template>
        <template #footer>
          <hr />
          <small>This is a footer</small>
        </template>
      </AppBlock>
    </div>
  </div>
</template>

<style scoped></style>
