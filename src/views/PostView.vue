<template>
  <div class="center">
    <Post v-for="post in posts" :img="post.img" :body="post.body" :time="post.time" :author-image="post.author"></Post>
  </div>

  <ResetLikes></ResetLikes>

</template>

<script setup>
import Post from '../components/Post.vue';
import ResetLikes from '../components/ResetLikes.vue';
import { computed } from 'vue';
import store from '@/store/index'

const posts = computed(() => {
  return store.state.record
})
</script>

<style scoped>

  .center {
    margin-left: 10vw;
    margin-right: 10vw;
  }
</style>
