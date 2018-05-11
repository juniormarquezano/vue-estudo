<script>
export default {
  name: 'Cyber',
}
</script>

<template>
  <div id="app">
    <div id="menu">
      <router-link :to="{name: 'home'}" exact>Home</router-link>
      <router-link :to="{name: 'posts.index'}">Blog</router-link>
      <router-link :to="{name: 'users.index'}">Usuários</router-link>
    </div>
    <hr>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<style>
#menu {
  margin: 25px 0px 25px 10px;
}

.container {
  padding: 0px 10px;
}

a {
  border: 1px solid #ccc;
  padding: 10px;
  text-decoration: none;
}

.active {
  border: 1px solid green;
  background: green;
  color: white;
}
</style>
