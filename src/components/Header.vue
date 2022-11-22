<template>
  <header>
    <ul id="nav-bar">
      <li class="nav-bar-element"><a href="index.html" class="nav-bar-link">Home</a></li>
      <li class="nav-bar-element"><a href="addPost.html" class="nav-bar-link">Add post</a></li>
      <div class="profile-img dropdown">
        <img src="/profile_photo.png" alt="Profile photo" style="width: 60px" onclick="dropdown()"
          class="dropbtn">
      <li class="nav-bar-element">
        <router-link class="nav-bar-link" to="/">Home</router-link>
      </li>
      <li class="nav-bar-element">
        <router-link class="nav-bar-link" to="/signup">Signup</router-link>
      </li>
      <!-- <li class="nav-bar-element"><a href="addPost.html" class="nav-bar-link">Add post</a></li> -->
      <div class="profile-img">
        <img src="res/img/profile_photo.png" alt="Profile photo" style="width: 60px">
      </div>
    </ul>
  </header>
</template>

<style scoped>

#nav-bar {
  list-style-type: none;
  margin: 0;
  padding: 10px 5px 3px 10px;
  overflow: hidden;
  border-radius: 10px;
  background-color: dimgrey;
}

.nav-bar-element {
  float: left;
  font-size: 25px;
}

.nav-bar-link {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

.nav-bar-link:hover {
  background-color: darkgrey;
  border-radius: 10px;
}

.profile-img {
  text-align: right;
  padding: 3px;
}
</style>
