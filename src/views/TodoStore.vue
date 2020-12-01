<template>
  <h1>Todo Store</h1>
  <TodoInput />
  <TodoList />
</template>

<script>
import TodoInput from "../components/todo-store/TodoInput";
import TodoList from "../components/todo-store/TodoList";

export default {
  components: {
    TodoInput,
    TodoList
  }
};
</script>
