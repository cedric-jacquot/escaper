<script setup lang="ts"></script>

<template>
  <header>
    <nav>
        <div class="nav_container d-flex justify-content-between align-items-center">
            <div class="nav_left">
                <img class="logo " src="../assets/images/escaper_logo.png" alt="Logo Escaper" />
            </div>
            <div class="nav_right w-40 d-flex justify-content-between">
                <a href="#">+ Ajouter un spot</a>
                <a href="#">Créer un compte</a>
                <button type="button" class="btn btn-primary">Primary</button>
            </div>
        </div>

    </nav>
  </header>
</template>

<style lang="scss" scoped>
nav {
    background-color: grey;
    height: 60px;
}
.logo {
    width: 100px;
}
.nav_left {
    width: 70%;
}
.nav_right {
    width: 30%;
}
</style>
