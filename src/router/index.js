// ARQUIVO DE CONFIGURAÇÃO DAS ROTAS
// Importa o vue
import Vue from 'vue'
// Importa o Vue Router
import VueRouter from 'vue-router'
// Importa as rotas definidas no arquivo routes.js
import routes from './routes'

// Instrui o vue a utilizar o Vue Router
Vue.use(VueRouter)

// Inicia uma nova instância do Vue Router
const router = new VueRouter({
  mode: 'history', // Remove o /#/ da url
  linkActiveClass: 'active',
  routes // Defini o routes importado acima
})

// exporta o router
export default router
