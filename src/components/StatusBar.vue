<template>
  <div class="status-bar" v-if="auth.auth.isAuthenticated">
    <p>Done</p>
    <ul>
      <li v-for="todo in doneTodos" :key="todo.id">
        {{ todo.content }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'StatusBar',
  // computed: {
  //   doneTodos() {
  //     return this.$store.getter.doneTodos
  //   }
  // }
  computed: { ...mapGetters(['doneTodos']), ...mapState(['auth']) }
}
</script>

<style>
  .status-bar {
    padding: 5px;
    text-align: center;
    background: rgb(240, 240, 240);
    color: black;
  }
</style>
