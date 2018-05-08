<script>
  export default {
    data () {
      return {
        list: [
          { id: 1, product: 'TV'},
          { id: 2, product: 'Central de Ar'},
          { id: 3, product: 'Máquina de Lavar'},
          { id: 4, product: 'Cama Box'},
        ]
      }
    }
  }
</script>

<template>
  <div>
    <h1>Produtos</h1>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Produto</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(obj, index) in list" :key="index">
          <td>{{ obj.id }}</td>
          <td>{{ obj.product }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
