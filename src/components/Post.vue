<template>
  <ul class="post-header">
    <li style="text-align: right">{{ time }}</li>
    <li><img :src="authorImage" alt="Profile photo" style="width: 40px"></li>
  </ul>
  <div class="post-text">
    {{ body }}
    <br>

    <img v-if="img" :src="img" alt="Body photo" class="post-img">
  </div>
  <img src="res/img/like.png" alt="Profile photo" style="width: 30px">
</template>

<script setup>
const props = defineProps({
  img: String,
  body: String,
  time: String,
  authorImage: String
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

.post-text {
  padding: 10px;
  margin: 0;
}

.post-img {
  padding: 10px 0 0 0;
  width: 100%;
}
</style>
