

<template>
  <div class="center">
    <div id="signup"></div>
    <form id="app" @submit.stop.prevent="handleSubmit" action="/" method="post" novalidate="false">
      <p>Email:</p>
      <input v-model="message" placeholder="Click to edit" />

      <p>Password:</p>
      <input v-model="message" placeholder="Click to edit" />
      <p>
        <input type="submit" value="Submit">
      </p>
    </form>
  </div>
</template>

<script setup>
import router from '@/router/router'

const handleSubmit = (() => {
    // Add or update Car.
    router.push("/")
})

</script>


<style scoped>
.center {
  margin-left: 10vw;
  margin-right: 10vw;
}
</style>
