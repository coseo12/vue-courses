<template>
  <div>
    <input type="text" :value="todo" @change="changeTodo" />
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup(_, { emit }) {
    const todo = ref("");

    const changeTodo = e => {
      todo.value = e.target.value;
      emit("todo", todo.value);
      todo.value = "";
    };

    return {
      todo,
      changeTodo
    };
  }
};
</script>

<style lang="scss" scoped></style>
