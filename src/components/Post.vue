<template>
  <div class="post">

    <ul class="post-header">
      <li style="text-align: right">{{ time }}</li>
      <li><img :src="authorImage" alt="Profile photo" style="width: 40px"></li>
    </ul>

    <div >
      {{ body }}
      <br>
      <img v-if="img" :src="img" alt="Body photo" class="post-img">
    </div>

    <Like></Like>

  </div>

</template>

<script setup>

import Like from '../components/Like.vue';

const props = defineProps({
  img: String,
  body: String,
  time: String,
  authorImage: String,
})
</script>

<style scoped>
.post {
  width: 90%;
  color: black;
  margin: 3px;
  padding: 10px;
  overflow: hidden;
  border-radius: 10px;
  background-color: lightgray;
}

.post-header {
  margin: 0;
  padding: 0;
  overflow: hidden;
  border-radius: 10px;
}

.post-img {
  padding: 10px 0 0 0;
  width: 100%;
}
</style>
