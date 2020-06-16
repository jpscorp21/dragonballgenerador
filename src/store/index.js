import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    personajes: [],
  },
  mutations: {
    ADD_PERSONAJE(state, personaje) {
      state.personajes = [...state.personajes, personaje];
    },
    GET_PERSONAJES(state, personajes) {
      state.personajes = [...personajes];
    },
  },
  actions: {
    getAllPersonajes({ commit }) {
      let personajes = localStorage.getItem('personajes');
      if (!personajes) {
        personajes = [];
      } else {
        personajes = JSON.parse(personajes);
      }
      commit('GET_PERSONAJES', personajes);
    },
    addPersonaje({ commit }, personaje) {
      let personajes = localStorage.getItem('personajes');
      if (!personajes) {
        personajes = [];
      } else {
        personajes = JSON.parse(personajes);
      }

      personajes.push(personaje);
      localStorage.setItem('personajes', JSON.stringify(personajes));

      commit('ADD_PERSONAJE', personaje);
    },
  },
  modules: {},
});
