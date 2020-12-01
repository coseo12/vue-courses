<template>
  <div class="increment">
    <h1>Default</h1>
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
export default {
  data() {
    return {
      number: 0,
      add: 0,
      vif: false,
      vshow: false
    };
  },
  computed: {
    double(state) {
      return state.number * 2;
    }
  },
  watch: {
    add: function(value, preValue) {
      console.log(value, preValue);
    }
  },
  methods: {
    increment() {
      this.number++;
    },
    decrement() {
      this.number--;
    },
    addFn() {
      this.add++;
    }
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
