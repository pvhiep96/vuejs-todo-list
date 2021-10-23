<template>
  <div class="navbar">
    <h1>Vuex App Todos</h1>
    <ul>
      <li>Total Todo: {{todos.length}}</li>
      <li v-if='isAuthenticated'>
        <v-btn @click="LOGOUT">Logout</v-btn>
      </li>
    </ul>
  </div>
</template>

<script>

import {mapMutations, mapGetters} from 'vuex'
export default {
  name: 'Navbar',
  // ############### Khong dung mapState #######################
  // computed: {
  //   totalTodos() {
  //     return this.$store.state.todos.length
  //   }
  // }
  // ############### Khong dung mapState #######################
  computed: {...mapGetters(['isAuthenticated', 'todos'])},
  // methods: {
  //   loginOrLogout() {
  //     this.$store.commit('LOGOUT')
  //   }
  // }
  methods: mapMutations(['LOGOUT'])
}
</script>

<style>
  .navbar {
  padding: 5px;
  text-align: center;
  background: rgb(240, 240, 240);
  color: black;
  }

  .navbar ul {
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  padding: 0;
  }
</style>