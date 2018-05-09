<script>
import { mapState, mapActions } from 'vuex'
export default {
  mounted () {
    this.setUsers()
  },
  methods: {
    ...mapActions('Users', ['setUsers'])
  },
  computed: {
    ...mapState('Users', ['users'])
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
