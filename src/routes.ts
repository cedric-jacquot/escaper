import type { RouteRecordRaw } from 'vue-router';
import TheHome from "./components/home/TheHome.vue";
import OneSpot from "./components/onespot/OneSpot.vue";

export const routes: RouteRecordRaw[] = [
    { path: '/', component: TheHome },
    { path: '/spot', component: OneSpot },
];
