<script>
export default {
  name: 'Root',
}
</script>

<template>
  <div id="app">
    <router-link :to="{name: 'home'}">Home</router-link>
    <router-link :to="{name: 'posts.index'}">Posts</router-link>
    <router-link :to="{name: 'users.index'}">Usuários</router-link>
    <hr>
    <router-view></router-view>
  </div>
</template>