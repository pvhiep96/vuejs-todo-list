import axios from 'axios'

const API_URL = 'http://localhost:3000'

const token = window.localStorage.getItem('token')

const withAuth = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  }
})

const todosModule = {
  state: {
    todos: []
  },
  getters: {
    todos: state => state.todos,
    doneTodos: state => state.todos.filter(todo => todo.is_completed),
    // progress() {
    //   return Math.round(this.$store.state.todos.filter(todo => todo.is_completed).length /
    //     this.$store.state.todos.length * 100
    //   )
    // }
    progress: (state, getters) => {
      const doneTodos = getters.doneTodos
      return Math.round(doneTodos.length / state.todos.length * 100)
    }
  },
  actions: {
    async deleteTodo({commit}, todoId) {
      try {
        await withAuth.delete(`/todos/${todoId}`)
        commit('DELETE_TODO', todoId)
      } catch (error) {
        console.log(error)
      }
    },
    async addTodo({commit}, newTodo) {
      try {
        await withAuth.post('/todos', newTodo)
        commit('ADD_TODO', newTodo)
      } catch (error) {
        console.log(error)
      }
    },
    async getTodos({commit}) {
      try {
        const response = await withAuth.get('/todos')
        commit('SET_TODOS', response.data.todos)
      } catch (error) {
        console.log(error)
      }
    },
    async markComplete({commit}, todoId) {
      try {
        await withAuth.put(`/mission_completed/${todoId}`)
        commit('MARK_COMPLETE', todoId)
      } catch (error) {
        console.log(error)
      }
    }
  },
  mutations: {
    MARK_COMPLETE(state, todoId) {
      state.todos.map(todo => {
        if (todo.id == todoId) todo.is_completed = !todo.is_completed
        return todo
      })
    },
    DELETE_TODO(state, todoId) {
      state.todos = state.todos.filter(todo => todo.id != todoId)
    },
    ADD_TODO(state, newTodo) {
      state.todos.unshift(newTodo)
    },
    SET_TODOS(state, todos) {
      state.todos = todos
    }
  }  
}

export default todosModule
