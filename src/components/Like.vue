<template>
  <div>
    <input type="image" src="/like.png" v-on:click="likes++" alt="Like">
    <div class="likes">
      {{ likes }} likes
    </div>
  </div>
</template>

<script>
  import store from '@/store/index'

  export default {
    data(){
      return{
        likes: 0,
      }
    },
    created() {
      store.commit('addLike', this.likes);
    }
  }
</script>

<style scoped>
  div {
    display: flex;
    align-items: center;
    flex-direction: row;
  }

  input {
    width: 30px;
    vertical-align: center;
  }

  .likes {
    float:right;
    display: inline-block;
    text-align: right;
  }

</style>