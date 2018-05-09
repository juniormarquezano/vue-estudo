import axios from 'axios'

const setUsers = ({ commit }, obj) => {
  axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => {
      //console.log(res)
      const users = res.data
      commit('SET_USERS', { users })
    })
}

export default {
  setUsers
}