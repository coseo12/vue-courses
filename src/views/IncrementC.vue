<template>
  <div class="increment">
    <h1>Composition API</h1>
    <div class="data">data: {{ number }}</div>
    <div class="computed">computed: {{ double }}</div>
    <div class="watch">watch: {{ add }}</div>
    <div class="btn">
      <button @click="increment">Increment</button>
      <button @click="decrement">Decrement</button>
      <button @click="addFn">add</button>
    </div>
    <div>
      <button @click="vif = !vif">v-if</button>
      <div v-if="vif">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum hic
        corporis autem, quae, fuga quia itaque iste ipsam atque quis impedit
        doloremque labore nulla repellendus rem numquam cupiditate. Voluptatem,
        repellendus!
      </div>
    </div>
    <div>
      <button @click="vshow = !vshow">v-show</button>
      <div v-show="vshow">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum hic
        corporis autem, quae, fuga quia itaque iste ipsam atque quis impedit
        doloremque labore nulla repellendus rem numquam cupiditate. Voluptatem,
        repellendus!
      </div>
    </div>
    <ul class="for">
      <li v-for="(n, idx) in add" :key="idx">{{ n }}</li>
    </ul>
  </div>
</template>

<script>
import { ref, watch, computed } from "vue";

export default {
  setup() {
    const number = ref(0);
    const add = ref(0);
    const vshow = ref(false);
    const vif = ref(false);
    const double = computed(() => number.value * 2);
    const increment = () => number.value++;
    const decrement = () => number.value--;
    const addFn = () => add.value++;

    watch(add, (value, preValue) => console.log(value, preValue));

    return {
      number,
      add,
      vshow,
      vif,
      double,
      increment,
      decrement,
      addFn
    };
  }
};
</script>

<style lang="scss" scoped>
.increment {
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;

  div {
    margin: 10px;
  }
  .btn {
    button {
      margin: 10px;
    }
  }
}
</style>
