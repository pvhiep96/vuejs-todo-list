<template>
  <form @submit="onSubmit">
    <input type="text" v-model="content">
    <input type="submit" value="Add">
  </form>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'TodoForm',
  data() {
    return {
      content: ''
    }
  },
  methods: {
    ...mapActions(['addTodo']), // addTodo() === this.$store.dispatch('addTodo)
    onSubmit(event) {
      event.preventDefault();
      this.addTodo({
        content: this.content
      })
      this.content = ''
    }
  }
}
</script>

<style>
  form {
    padding: 10px;
  }

  input[type='text'] {
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    margin: 6px 0;
    border: 0;
  }

  input[type='submit'] {
    margin: 10px auto;
    padding: 10px;
    border: 0;
    display: block;
  }
</style>