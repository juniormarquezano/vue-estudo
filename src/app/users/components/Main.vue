<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'users-index',
  mounted () {
    this.setUsers()
  },
  methods: {
    ...mapActions('users', ['setUsers'])
  },
  computed: {
    ...mapState('users', ['users'])
  }
}
</script>

<template>
  <div>
    <h1>Usuários</h1>
    <ul>
      <li v-for="(user, index) in users" :key="index">
        {{ user.name }} - {{ user.email }}
      </li>
    </ul>
  </div>
</template>
