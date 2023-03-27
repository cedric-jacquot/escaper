<script setup lang="ts">
import { ref } from "vue";

const isShow = ref<boolean>(false);
// search dropdown
function showDropdown(): void {
  isShow.value === false ? (isShow.value = true) : (isShow.value = false);
}
</script>

<template>
  <div
    class="search_container d-flex flex-column justify-content-center align-items-center"
    :class="{ brightness: isShow }"
  >
    <h1>escaper</h1>
    <div class="search_form d-flex justify-content-center align-items-center">
      <input
        @click="showDropdown()"
        type="text"
        class="form-control"
        id="search-input"
        placeholder="Trouver un spot nature (ville, code postal, région, etc..)"
      />
      <button type="button" class="btn btn-primary text-white">
        <i class="bi bi-search"></i>
      </button>
    </div>
    <!-- <ul class="dropdown-menu search-dropdown" :class="{ show: isShow }">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li><hr class="dropdown-divider" /></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul> -->
  </div>
</template>

<style lang="scss" scoped>
h1 {
  font-family: var(--font-script);
  color: var(--primary-color);
  font-size: 150px;
  margin-bottom: 50px;
}
.search_container {
  height: 100vh;
  width: 100vw;
  background-image: url("../../assets/images/pexels-rachel-claire-4992803.jpg");
  background-size: 100%;
}
.search_container {
  // filter: brightness(.5);
}
.search_form {
  width: 600px;
  margin-bottom: 20%;
}
.search_form .form-control {
  width: 500px;
  margin-right: 20px;
}
.search-dropdown {
  // position: sticky;
  filter: brightness(100%);
}
// test avec la barre de recherche
// .brightness {
//   filter: brightness(0.5);
// }
</style>
