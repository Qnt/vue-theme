<script setup>
import { computed, ref, defineAsyncComponent } from 'vue'
import AppButton from './components/AppButton.vue'
// import AppTabOne from './components/AppTabOne.vue'
// import AppTabTwo from './components/AppTabTwo.vue'
const AppTabOne = defineAsyncComponent(() => import('./components/AppTabOne.vue'))
const AppTabTwo = defineAsyncComponent(() => import('./components/AppTabTwo.vue'))
const tab = ref('one')
const componentName = computed(() => {
  switch (tab.value) {
    case 'one':
      return AppTabOne
    case 'two':
      return AppTabTwo
    default:
      return AppTabOne
  }
})
const tabOneColor = computed(() => (tab.value === 'one' ? 'primary' : ''))
const tabTwoColor = computed(() => (tab.value === 'two' ? 'primary' : ''))
</script>

<template>
  <div class="container">
    <div class="card">
      <h2>Dynamic and Async Components</h2>
      <AppButton :color="tabOneColor" @action="tab = 'one'">One</AppButton>
      <AppButton :color="tabTwoColor" @action="tab = 'two'">Two</AppButton>
    </div>
    <KeepAlive>
      <component :is="componentName"></component>
    </KeepAlive>
  </div>
</template>

<style scoped></style>
