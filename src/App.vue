<script setup lang="ts">
import 'bootstrap/dist/css/bootstrap.min.css'
import TheHeader from './components/TheHeader.vue'
import TheSearch from './components/TheSearch.vue'
import TheSpots from './components/TheSpots.vue'
import TheFooter from './components/TheFooter.vue'
</script>

<template>
    <TheHeader />

  <main>
    <TheSearch />
    <TheSpots />
  </main>

    <TheFooter />
</template>

<style scoped></style>
