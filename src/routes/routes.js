// Importa os componentes
import Home from '../components/Home'
import Products from '../components/Products'
import Posts from '../components/Posts'
import Users from '../components/Users'

// Defini e exporta o routes
export default [
  { path: '/', component: Home, name: 'home' },
  { path: '/produtos', component: Products, name: 'products' },
  { path: '/posts', component: Posts, name: 'posts' },
  { path: '/usuarios', component: Users, name: 'users.index' }
]