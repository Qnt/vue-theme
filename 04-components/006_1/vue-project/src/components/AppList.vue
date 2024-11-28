<script setup></script>
<template>
  <ul>
    <li v-for="(item, i) in 5" :key="item">
      <slot :iter="item" :index="i">defailt value</slot>
    </li>
  </ul>
</template>
