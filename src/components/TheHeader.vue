<script setup lang="ts">
import { onMounted, ref } from 'vue'

let navBar = ref<HTMLElement>(null)

function scroll() {
  const scrollYWindow = window.scrollY
  if (scrollYWindow > 60) {
    navBar.value.style.backgroundColor = 'white'
  } else {
    navBar.value.style.backgroundColor = 'unset'
  }
}

onMounted(() => {
  window.addEventListener('scroll', scroll)
})
</script>

<template>
  <header>
    <Transition>
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
    </Transition>
  </header>
</template>

<style lang="scss" scoped>
nav {
  //   background-color: rgba(128, 128, 128, 0.063);
  height: 60px;
  padding: 20px;
  position: fixed;
  width: 100vw;
  opacity: 90%;
  transition: background-color 1s ease;
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
