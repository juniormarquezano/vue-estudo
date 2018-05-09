<script>
import { mapState, mapActions, mapGetters } from 'vuex'
export default {
  name: 'post-index',
  mounted () {
    this.setList()
  },
  methods: {
    ...mapActions('posts', ['setList'])
  },
  computed: {
    ...mapState('posts', ['posts']),
    ...mapGetters('posts', ['leanList'])
  }
}
</script>

<template>
  <div>
    <h1>Posts</h1>
    <ul>
      <li v-for="(obj, index) in posts" :key="index">
        {{ obj.id }} - {{ obj.body }}
      </li>
    </ul>
  </div>
</template>
