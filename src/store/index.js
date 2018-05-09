import Vue from 'vue'
import Vuex from 'vuex'

import products from './products'
import posts from './posts'
import Users from './Users'

Vue.use(Vuex)

const modules = {
  products,
  posts,
  Users
}

export default new Vuex.Store({
  modules
})