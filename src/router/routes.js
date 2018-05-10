// Importa as rotas dos módulos
import { routes as home } from '../app/home'
import { routes as blog } from '../app/blog'
import { routes as users} from '../app/users'

// Rotas padrões do sistema, que não está definidas em módulos
const root = [
  { path: '*', redirect: '/'}
]

// Propagando dentro do array com spread operator
export default [ ...root, ...home, ...blog, ...users ]