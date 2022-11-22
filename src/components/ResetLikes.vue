<template>
  <div>
    <button v-on:click="resetAll()">Reset all likes</button>
  </div>
</template>

<script>
import store from '@/store/index'
  export default {
    methods: {
      resetAll(){
        for (let like in store.likeComponents) {
          like.likes = 0;
        }
      }
    }
  }
</script>

<style scoped>
  div {
    text-align: center;
  }

  button {
    padding: 10px;
    border: 10px;
    gap: 10px;
    background-color: lightgray;
    margin: 5px;
    border-radius: 8px;
  }
</style>