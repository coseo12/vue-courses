<template>
  <ul class="list">
    <li v-for="(todo, idx) in todos" :key="idx">
      {{ todo.text }}
      <span class="delete" @click="delTodo(todo.id)">❌</span>
    </li>
  </ul>
</template>

<script>
import { ref, watch } from "vue";

export default {
  props: {
    todo: {
      type: String,
      required: false
    }
  },
  setup(props) {
    const todos = ref([]);

    watch(props, () => {
      const obj = {
        id: new Date().getTime(),
        text: props.todo
      };
      todos.value.push(obj);
    });

    const delTodo = id => {
      todos.value = todos.value.filter(todo => todo.id !== id);
    };

    return { todos, delTodo };
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
