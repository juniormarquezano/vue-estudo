// o action fica encarregado de fazer as chamadas ajax
import axios from 'axios'

const setList = ({ commit }, obj) => {
  axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
      //console.log(res.data);
      const posts = res.data
      commit('SET_LIST', { posts })
    })
}

export default {
  setList
}