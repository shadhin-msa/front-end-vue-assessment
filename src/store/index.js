import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    coffeeMachineChoice: [],
    coffeeTypeChoice: [],
  },
  getters: {
    getCoffeeMachineChoice: (state) => state.coffeeMachineChoice,
    getCoffeeTypeChoice: (state) => state.coffeeTypeChoice,
  },
  mutations: {
    updateCoffeeMachineChoice(state, payload) {
      state.coffeeMachineChoice = payload;
    },
    updateCoffeeTypeChoice(state, payload) {
      state.coffeeTypeChoice = payload;
    },
  },
  actions: {
    addCoffeeMachineChoice({ commit, getters }, payload) {
      const machineChoice = getters.getCoffeeMachineChoice;
      machineChoice.push(payload);
      commit('updateCoffeeMachineChoice', machineChoice);
    },

    removeCoffeeMachineChoice({ commit, getters }, payload) {
      const machineChoice = getters.getCoffeeMachineChoice;
      const keyIndex = machineChoice.indexOf(payload);
      if (keyIndex !== -1) {
        machineChoice.splice(keyIndex, 1);
        commit('updateCoffeeMachineChoice', machineChoice);
      }
    },

    addCoffeeTypeChoice({ commit, getters }, payload) {
      const typeChoice = getters.getCoffeeTypeChoice;
      typeChoice.push(payload);
      commit('updateCoffeeTypeChoice', typeChoice);
    },

    removeCoffeeTypeChoice({ commit, getters }, payload) {
      const typeChoice = getters.getCoffeeTypeChoice;
      const keyIndex = typeChoice.indexOf(payload);
      if (keyIndex !== -1) {
        typeChoice.splice(keyIndex, 1);
        commit('updateCoffeeTypeChoice', typeChoice);
      }
    },
  },
  modules: {},
});
