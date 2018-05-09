<script>
export default {
  name: 'app',
}
</script>

<template>
  <div id="app">
    <router-link :to="{name: 'home'}">Home</router-link>
    <router-link :to="{name: 'products'}">Produtos</router-link>
    <router-link :to="{name: 'posts'}">Posts</router-link>
    <router-link :to="{name: 'users.index'}">Usuários</router-link>
    <hr>
    <router-view></router-view>
  </div>
</template>