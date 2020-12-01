<template>
  <div>
    <input type="text" @change="changeTodo" />
  </div>
</template>

<script>
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();

    const changeTodo = e => {
      const todos = store.state.todos;
      todos.push({
        id: new Date().getTime(),
        text: e.target.value
      });
      store.dispatch("addTodos", todos);
      e.target.value = "";
    };

    return {
      changeTodo
    };
  }
};
</script>

<style lang="scss" scoped></style>
