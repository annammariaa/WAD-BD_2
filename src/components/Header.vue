<template>
  <header>
    <ul id="nav-bar">
      <li class="nav-bar-element">
        <router-link class="nav-bar-link" to="/">Home</router-link>
        <router-link class="nav-bar-link" to="/signup">Signup</router-link>

      </li>
      <!-- <li class="nav-bar-element"><a href="addPost.html" class="nav-bar-link">Add post</a></li> -->
      <div class="profile-img dropdown">
        <img src="res/img/profile_photo.png" alt="Profile photo" style="width: 60px" onclick="dropdown()"
          class="dropbtn">
      </div>
    </ul>
    <div id="picDropdown" class="dropdown-content">
      <a href="#">Cat Cattington</a>
      <a href="#">fluffypaws@me.ow</a>
      <a href="#">Logout</a>
    </div>
  </header>
</template>

<style scoped>
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  border-radius: 10px;
}

.dropdown-content {
  display: none;
  position: absolute;
  right: 5px;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  z-index: 1;
  border-radius: 10px;
  width: min-content;
  text-align: left;
}

.dropdown-content a:hover {
  background-color: #ddd;
}

.dropbtn {
  cursor: pointer;
  padding: 5px;
  border-radius: 5px
}

/* Dropdown button on hover & focus */
.dropbtn:hover,
.dropbtn:focus {
  background-color: lightgray;
  border-radius: 10px;
}

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

.flex-item {
  border-radius: 10px;
}

.profile-img {
  text-align: right;
  padding: 3px;
}
</style>
