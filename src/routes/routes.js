// Importa os componentes
import Home from '../app/home/components/Home'
import Posts from '../app/blog/components/Main'
import Users from '../app/users/components/Main'

// Defini e exporta o routes
export default [
  { path: '/', component: Home, name: 'home' },
  { path: '/posts', component: Posts, name: 'posts.index' },
  { path: '/usuarios', component: Users, name: 'users.index' }
]