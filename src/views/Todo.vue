<template>
  <h1>Todo</h1>
  <TodoInput @todo="addTodo" />
  <TodoList :todo="todo" />
</template>

<script>
import TodoInput from "../components/todo/TodoInput";
import TodoList from "../components/todo/TodoList";
import { ref } from "vue";

export default {
  components: {
    TodoInput,
    TodoList
  },
  setup() {
    const todo = ref("");
    const addTodo = add => (todo.value = add);

    return {
      todo,
      addTodo
    };
  }
};
</script>
