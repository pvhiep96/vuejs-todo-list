<template>
  <v-dialog
    v-model="dialog"
    persistent
    max-width="600px"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="primary" dark v-bind="attrs" v-on="on">
        New TODO
      </v-btn>
    </template>
    <v-card>
      <form @submit="onSubmit">
        <v-card-title>
          <span class="text-h5">Todo</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field v-model="content" label="Content*" required ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-datetime-picker label="Select Deadline" v-model="deadline" required></v-datetime-picker>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Close
          </v-btn>
          <v-btn color="blue darken-1" text type="submit" @click="dialog = false">
            Save
          </v-btn>
        </v-card-actions>
      </form>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'TodoForm',
  data() {
    return {
      content: '',
      deadline: '',
      dialog: false
    }
  },
  methods: {
    ...mapActions(['addTodo']), // addTodo() === this.$store.dispatch('addTodo)
    onSubmit(event) {
      event.preventDefault();
      this.addTodo({
        content: this.content,
        deadline: this.deadline
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