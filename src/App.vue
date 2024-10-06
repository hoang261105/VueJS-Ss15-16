<template>
  <div>
    <router-view></router-view>
    <!-- Bài 6 -->
    <router-link to="/">Home</router-link>
    <router-link to="/contact">Contact</router-link>
    <br />
    <br />
    <!-- Bài 7 -->
    <div style="display: flex; gap: 10px; text-decoration: none">
      <router-link to="/" :class="route.path === '/' ? 'active' : ''"
        >Home</router-link
      >
      <router-link
        to="/product"
        :class="route.path === '/product' ? 'active' : ''"
        >Product</router-link
      >
      <router-link
        to="/detail"
        :class="route.path === '/detail' ? 'active' : ''"
        >Detail</router-link
      >
    </div>
    <br />
    <!-- Bài 9 -->
    <ListUser />
    <br />
    <!-- Bài 10 -->
    <Employee />
  </div>
</template>
<script setup>
import { useRoute } from "vue-router";
import ListUser from "./views/B9/ListUser.vue";
import Employee from "./views/B10/Employee.vue";
const route = useRoute();
</script>
<style scoped>
.active {
  background: blue;
  color: white;
  font-weight: 700;
}
</style>
