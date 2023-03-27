<script setup lang="ts">
import 'bootstrap/dist/css/bootstrap.min.css';
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';
</script>

<template>
  <TheHeader />
  <main>
    <router-view></router-view>
  </main>
  <TheFooter />
</template>

<style scoped></style>
