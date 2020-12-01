import { createStore } from "vuex";

export default createStore({
  state: {
    todos: []
  },
  mutations: {
    addTodos(state, payload) {
      state.todos = payload;
    }
  },
  actions: {
    addTodos({ commit }, payload) {
      commit("addTodos", payload);
    }
  }
});
