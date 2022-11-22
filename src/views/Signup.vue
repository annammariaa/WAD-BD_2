<template>
  <div class="container">
  <form class="flex-item" id="app" @submit.stop.prevent="handleSubmit" action="/" method="post" novalidate="false">
    <div id = "email">
      <p>Email:</p>
      <input v-model="message" placeholder="email" type="email"/>
    </div>

    <div id ="password">
      <p>Password:</p >
      <input v-model="message" placeholder="password" />
    </div>
    <p>
      <input class="submit-button" type="submit" value="Submit">
    </p>
  </form>
  </div>
</template>

<script setup>
import router from '@/router/router'

const handleSubmit = (() => {
    router.push("/")
})

</script>


<style scoped>

.flex-item {
  border-radius: 10px;
}

form {
  display: flex;
  flex-direction: column;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  margin-bottom: 20px;
  margin-top: 20px;
}

a {
  text-decoration: none;
  text-align: center;
}

.container form {
  background-color: dimgrey;
  display: flex;
  flex-direction: column;
  width: max-content;
  padding: 10px 10px 10px 10px;
}

input {
  background-color: lightgray;
  margin: 5px;
  padding: 5px;
  border-radius: 8px;
}

@media (max-width: 450px) {
  .container form {
    flex-grow: 1;
    width: 75%;
  }
}

</style>
