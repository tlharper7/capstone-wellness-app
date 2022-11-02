<script setup>
import HeaderNav from './components/HeaderNav.vue';
</script>

<template>
  <HeaderNav />
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/profile">Profile</router-link> |
    <router-link to="/activity">Activity</router-link>
  </nav>
  <main>
    <router-view />
  </main>
</template>

<style></style>
