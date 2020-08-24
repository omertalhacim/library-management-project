import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    bookList: [],
  },
  mutations: {
    addBook(state, payload) {
      state.bookList.splice(state.bookList.length, 1, payload);
    },
    setToUser(state, payload) {
      let selectedBook = state.bookList[payload.selectedBookIndex];
      selectedBook.isAtUser = true;
      selectedBook.userInfo = payload.userInfo;
      state.bookList.splice(payload.selectedBookIndex, 1, selectedBook);
    },
  },
  actions: {
    addBookAction({ commit }, payload) {
      let updatedPayload = {
        ...payload,
        isAtUser: false,
      };
      commit("addBook", updatedPayload);
    },
    setBookToUserAction({ commit }, payload) {
      commit("setToUser", payload);
    },
  },
  getters: {
    getBookList: (state) => state.bookList,
  },
  plugins: [vuexLocal.plugin],
});
