<template>
  <div class="todo-list">
    <ul v-if="auth.isAuthenticated">
      <li v-for="todo in todos" :key="todo.id">
        {{ todo.title }}
      </li>
    </ul>
    <p v-else style="text-align:center">Not authorised</p>
  </div>
</template>

<script>

import {mapState} from 'vuex'
export default {
  name: 'Todos',
  // ############### Khong dung mapState #######################
  // computed: {
  //   todos() {
  //     return this.$store.state.todos
  //   },
  //   isAuthenticated() {
  //     return this.$store.state.auth.isAuthenticated
  //   }
  // }
  // ############### Khong dung mapState #######################

  // ############### Dung mapState #######################
  // computed: mapState({
  //   todos: state => state.todos,
  //   isAuthenticated: state => state.auth.isAuthenticated
  // })

  computed: mapState(['todos', 'auth'])
  // ############### Dung mapState #######################
}
</script>

<style>
  .todo-list ul {
    padding: 0 10px 10px 10px;
    list-style-type: none;
  }

  .todo-list li {
    padding: 10px;
    cursor: pointer;
    margin: 10px 0;
    border-radius: 4px;
    background: rbg(240, 240, 240);
    color: black
  }
</style>