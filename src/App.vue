<script setup lang="ts">
import 'bootstrap/dist/css/bootstrap.min.css'
import TheHeader from './components/TheHeader.vue'
import Search from './components/Search.vue'
import Spots from './components/Spots.vue'
import TheFooter from './components/TheFooter.vue'
</script>

<template>
  <TheHeader />

  <main>
    <Search />
    <Spots />
  </main>

  <TheFooter />
</template>

<style scoped></style>
