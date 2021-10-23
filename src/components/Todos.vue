<template>
  <div class="todo-list">
    <ul v-if="isAuthenticated">
      <TodoForm />
      <li v-for="todo in todos" :key="todo.id" :class="todo.is_completed ? 'is_completed' : ''">
        {{ todo.content }}
        <input type="checkbox" :checked="todo.is_completed" @change="markComplete(todo.id)" />
        <button @click="deleteTodo(todo.id)">Delete</button>
      </li>
    </ul>
    <FormLogin v-else />
  </div>
</template>

<script>

import {mapActions, mapGetters} from 'vuex'
import TodoForm from './TodoForm.vue'
import FormLogin from './FormLogin.vue'
export default {
  name: 'Todos',
  components: {TodoForm, FormLogin},
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
  computed: {
    ...mapGetters(['isAuthenticated', 'todos'])
  },
  created() {
    this.getTodos()
  },
  // ############### Dung mapState #######################
  // methods: {
  //   markTodois_completed(todo) {
  //     this.$store.commit('MARK_COMPLETE', todo.id)
  //   }
  // }
  methods: {
    // ...mapMutations(['MARK_COMPLETE']),
    ...mapActions(['getTodos', 'deleteTodo', 'markComplete'])
  }
} 
</script>

<style>
  .todo-list {
    padding-top: 20px; 
  }
  .todo-list ul {
    padding: 0 10px 10px 10px;
    list-style-type: none;
  }

  .todo-list li {
    padding: 10px;
    cursor: pointer;
    margin: 10px 0;
    border-radius: 4px;
    background: rgb(240, 240, 240);
    color: black;
  }

  .todo-list li input[type='checkbox'] {
    -ms-transform: scale(2); /* IE */
    -moz-transform: scale(2); /* FF */
    -webkit-transform: scale(2); /* Safari and Chrome */
    -o-transform: scale(2); /* Opera */
    transform: scale(2);
    padding: 10px;
    float: right;
  }

  .todo-list li button {
    float: right;
    margin-right: 20px;
  }

  .todo-list li button:hover {
    cursor: pointer;
    background: red;
    color: white;
  }

  .todo-list li.is_completed {
    background: rgb(119, 218, 243);
  }
</style>
