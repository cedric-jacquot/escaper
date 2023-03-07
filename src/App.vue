<script setup lang="ts">
import 'bootstrap/dist/css/bootstrap.min.css'
import TheHeader from './components/TheHeader.vue'
import Search from './components/Search.vue'
import LatestSpots from './components/LatestSpots.vue'
import TheFooter from './components/TheFooter.vue'
</script>

<template>
    <TheHeader />

  <main>
    <Search />
    <LatestSpots />
  </main>

    <TheFooter />
</template>

<style scoped></style>
