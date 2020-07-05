import Vue from 'vue';
import Vuex from 'vuex';

import rules from '../json/rules.json';
import signs from '../json/signs.json';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    rules,
    signs,
  },
  mutations: {
  },
  actions: {
  },
  getters: {
    ruleQuestions(state) {
      return state.rules;
    },
    signQuestions(state) {
      return state.signs;
    },
    allQuestions(state) {
      return [...state.rules, ...state.signs];
    },
    mockQuestions(state, getters) {
      const questions = getters.allQuestions;
      const shuffled = questions.sort(() => 0.5 - Math.random());
      return shuffled.slice(0, 50);
    },
  },
});
