import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    hasAnniversary: true,
    hasSaleItem: false
  },
  mutations: {
    setSaleItemExistence(state) {
      state.hasSaleItem = !state.hasSaleItem;
    }
  },
  actions: {
    selectSaleItem(context) {
      context.commit("setSaleItemExistence");
    }
  },
  getters: {
    hasAnniversary: state => {
      return state.hasAnniversary;
    },
    hasSaleItem: state => {
      return state.hasSaleItem;
    }
  }
});
