// Importa os componentes
import Home from '../components/Home'
import Products from '../components/Products'

// Defini e exporta o routes
export default [
  { path: '/', component: Home, name: 'home' },
  { path: '/produtos', component: Products, name: 'products' }
]