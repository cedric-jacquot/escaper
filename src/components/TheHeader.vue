<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

let navBar = ref<HTMLElement | null>(null)

function scroll(event: Event) {
  const scrollYWindow = window.scrollY
  // console.log(navBar.value?.offsetTop);
  console.log(scrollYWindow)
  // console.log(event.target as HTMLElement);

  if (scrollYWindow > 60) {
    console.log('scroll aboce 60 !')
  }
}

onMounted(() => {
  window.addEventListener('scroll', scroll)
})

// onBeforeUnmount(() => {
//   window.removeEventListener('scroll', scroll)
// })
</script>

<template>
  <header>
    <nav ref="navBar" class="d-flex flex-row justify-content-between align-items-center">
      <div class="nav_left">
        <a href="#">
          <img class="logo" src="../assets/images/mountains.png" alt="Logo Escaper" />
        </a>
      </div>
      <div class="nav_right w-40 d-flex justify-content-end align-items-center">
        <a href="#">+ Ajouter un spot</a>
        <a href="#">Créer un compte</a>
        <button type="button" class="btn btn-primary btn-sm text-white">Se connecter</button>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
nav {
  //   background-color: rgba(128, 128, 128, 0.063);
  height: 60px;
  padding: 20px;
  position: fixed;
  width: 100vw;
}
.logo {
  width: 100px;
}
.nav_left {
  width: 50%;
}
.nav_right {
  width: 50%;
}
.nav_right > * {
  margin-left: 20px;
}
</style>
