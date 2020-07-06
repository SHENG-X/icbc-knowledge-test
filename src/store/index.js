import Vue from 'vue';
import Vuex from 'vuex';

import rules from '../json/rules.json';
import signs from '../json/signs.json';

Vue.use(Vuex);

const ARCHIVE_KEY = 'icbc_question_archived';

export default new Vuex.Store({
  state: {
    rules,
    signs,
    archived: localStorage.getItem(ARCHIVE_KEY)
      ? JSON.parse(localStorage.getItem(ARCHIVE_KEY)) : [],
  },
  mutations: {
    archiveQuestion(state, question) {
      const exit = state.archived.find((q) => JSON.stringify(q) === JSON.stringify(question));
      if (!exit) {
        state.archived.push(question);
      }
      localStorage.setItem(ARCHIVE_KEY, JSON.stringify(state.archived));
    },
    removeArchived(state, question) {
      const questionIdx = state.archived
        .findIndex((q) => JSON.stringify(q) === JSON.stringify(question));
      state.archived.splice(questionIdx, 1);
      localStorage.setItem(ARCHIVE_KEY, JSON.stringify(state.archived));
    },
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
    archivedQuestions(state) {
      return state.archived;
    },
  },
});
