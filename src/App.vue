<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import PostView from './views/PostView.vue';
</script>

<template>
  <Header></Header>
  <router-view></router-view>
  <Footer></Footer>
</template>
