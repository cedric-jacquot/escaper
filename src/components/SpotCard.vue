<script setup lang="ts"></script>

<template>
  <div
    class="spot_card d-flex flex-column justify-content-between"
    style="background-image: url('src/assets/images/pexels-jaime-reimer-2662116.jpg')"
  >
    <div class="card_top d-flex flex-row justify-content-between">
      <!-- <div class="card_heart"> -->
      <i class="bi bi-heart align-self-start"></i>
      <!-- </div> -->
      <div class="card_stars align-self-end">
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star"></i>
      </div>
    </div>

    <div class="card_bottom">
      <div>
        <p>Lac Blanc, Vosges (88)</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.spot_card {
  width: 300px;
  height: 200px;
  border: solid 1px white;
  border-radius: 4px;
  margin: 20px;
  padding: 10px;
  background-size: 100%;
  color: white;
  // opacity: 50%;
  font-size: large;
  font-weight: 500;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.618);
  transition: opacity .5s ease;
}
.spot_card:hover {
  opacity: 70%;
  transition: opacity .5s ease;
}
.card_bottom p {
  margin: 0;
}
</style>
