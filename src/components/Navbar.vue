<template>
  <div class="navbar">
    <h1>Vuex App Todos</h1>
    <ul>
      <li>Home</li>
      <li>About</li>
      <li v-if='isAuthenticated'>
        Total Todo: {{todos.length}}
        <!-- <button @click="loginOrLogout">Logout</button> -->
        <button @click="TOGGLE_AUTH">Logout</button>
      </li>
      <li v-else>
        <!-- <button @click="loginOrLogout">Login</button> -->
        <button @click="TOGGLE_AUTH">Login</button>
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
  //     this.$store.commit('TOGGLE_AUTH')
  //   }
  // }
  methods: mapMutations(['TOGGLE_AUTH'])
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