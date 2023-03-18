<script setup lang="ts"></script>

<template>
  <div class="search_container d-flex flex-column justify-content-center align-items-center">
    <h1>escaper</h1>
    <div class="search_form d-flex justify-content-center align-items-center">
      <input
        type="text"
        class="form-control"
        id="search-input"
        placeholder="Trouver un spot nature (ville, code postal, région, etc..)"
      />
      <button type="button" class="btn btn-primary text-white">
        <i class="bi bi-search"></i>
      </button>
    </div>
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
  background-image: url(../assets/images/pexels-rachel-claire-4992803.jpg);
  background-size: 100%;
}
.search_form {
  width: 600px;
  margin-bottom: 20%;
}
.search_form .form-control {
  width: 500px;
  margin-right: 20px;
}
</style>
