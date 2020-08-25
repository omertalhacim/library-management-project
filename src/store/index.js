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
      let selectedBook = {
        ...state.bookList[payload.bookIndex],
      };
      selectedBook.isAtUser = true;
      selectedBook.user = {
        ...payload.user,
      };
      state.bookList.splice(payload.bookIndex, 1, selectedBook);
    },
    getFromUser(state, payload) {
      let selectedBook = {
        author: state.bookList[payload].author,
        bookImgUrl: state.bookList[payload].bookImgUrl,
        bookName: state.bookList[payload].bookName,
        isAtUser: false,
      };
      state.bookList.splice(payload, 1, selectedBook);
    },
    deleteBookFromStore(state, payload) {
      let indexOfBook = state.bookList.findIndex((item) => item == payload);
      console.log(indexOfBook);
      state.bookList.splice(indexOfBook, 1);
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
    getBookFromUserAction({ commit }, payload) {
      commit("getFromUser", payload);
    },
    deleteBookFromStoreAction({ commit }, payload) {
      commit("deleteBookFromStore", payload);
    },
  },
  getters: {
    getBookList: (state) => state.bookList,
  },
  plugins: [vuexLocal.plugin],
});
