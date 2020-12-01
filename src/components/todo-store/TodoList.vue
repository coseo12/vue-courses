<template>
  <ul class="list">
    <li v-for="(todo, idx) in getTodos" :key="idx">
      {{ todo.text }}
      <span class="delete" @click="delTodo(todo.id)">❌</span>
    </li>
  </ul>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();

    const getTodos = computed(() => {
      return store.state.todos;
    });

    const delTodo = id => {
      const todos = store.state.todos;
      store.dispatch(
        "addTodos",
        todos.filter(todo => todo.id !== id)
      );
    };

    return { getTodos, delTodo };
  }
};
</script>

<style lang="scss" scoped>
.list {
  list-style: none;
  li {
    margin: 5px;
  }
  .delete {
    cursor: pointer;
  }
}
</style>
