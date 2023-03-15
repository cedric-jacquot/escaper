<script setup lang="ts">
import SpotCard from './SpotCard.vue';
</script>

<template>
    <div class="spots_container">
        <div class="spots_filters d-flex justify-content-end align-items-center">
            <p>Spots Nature</p>
            <button type="button" class="btn btn-primary btn-sm text-white" data-bs-toggle="button" autocomplete="off">Toggle button</button>
            <button type="button" class="btn btn-primary btn-sm text-white active" data-bs-toggle="button" autocomplete="off" aria-pressed="true">Active toggle button</button>
        </div>
        <div class="spots_list d-flex justify-content-around flex-wrap">
            <!-- foreach... -->
            <SpotCard />
            <SpotCard />
            <SpotCard />
            <SpotCard />
            <SpotCard />
            <SpotCard />
            <SpotCard />
            <SpotCard />
            <SpotCard />
            <SpotCard />
            <SpotCard />
            <SpotCard />
            <SpotCard />
            <SpotCard />
            <SpotCard />
            <SpotCard />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.spots_container {
    margin: auto;
    padding: 20px;
    width: 80%;
    background-color: rgb(218, 218, 218);
}
.spots_filters {
    margin: 10px;
}
.spots_filters > p {
    margin: 0;
    color: var(--primary-color);
}
.spots_filters > * {
    margin-left: 20px;
}
.spots_list {
    // margin: 20px 30px;
}
</style>
