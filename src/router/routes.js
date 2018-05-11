// Importa as rotas dos módulos
import { routes as app } from '../app'

// Rotas padrões do sistema, que não está definidas em módulos
const root = [
  { path: '*', redirect: '/'}
]

// Propagando dentro do array com spread operator
export default [ ...root, ...app ]