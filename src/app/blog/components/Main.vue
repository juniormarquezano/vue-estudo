<script>
import { mapState, mapActions, mapGetters } from 'vuex'
export default {
  name: 'blog-index',
  mounted () {
    this.setList()
  },
  methods: {
    ...mapActions('blog', ['setList'])
  },
  computed: {
    ...mapState('blog', ['posts']),
    ...mapGetters('blog', ['leanList'])
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
