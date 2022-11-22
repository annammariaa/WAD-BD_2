

<template>
  <div class="center">
      <div id="signup"></div>
      <form id="app" @submit="checkForm" action="" method="post"   novalidate="false">
        <p>Email:</p>
        <input v-model="message" placeholder="Click to edit"/>

        <p>Password:</p>
        <input v-model="message" placeholder="Click to edit" />
        <p>
          <input type="submit" value="Submit">
        </p>
      </form>
  </div>
</template>
  
<script setup>

handleSubmit() {
      let form = target;
      if (form.checkValidity()) {
        // Add or update Car.
        window.location.href = window.location.origin + process.env['BASE_URL']
      }
      this.wasValidated = true
    }

</script>
  
  
<style scoped>
.center {
  margin-left: 10vw;
  margin-right: 10vw;
}
</style>
  