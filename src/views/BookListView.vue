<template>
  <div class="card container mb-5" style="background-color:#a7eb5b">
    <div class="d-flex justify-content-between">
      <h4 class="pl-2 pt-2">Book List</h4>
      <router-link to="/" class="mr-3 mt-2">return to home</router-link>
    </div>
    <template>
      <div class="row m-2 border bg-white" v-for="(item, index) in getBookList" :key="index">
        <div class="p-2">
          <img :src="item.bookImgUrl" style="width:100px; height:140px" />
        </div>
        <div class="p-2 flex-grow-1">
          <h2>{{item.bookName}}</h2>
          <p class="font-italic">{{item.author}}</p>
        </div>
        <div class="p-2 ml-auto">
          <label
            :style="item.isAtUser ? 'background-color:lightcoral' : 'background-color:lightgreen'"
            class="p-2 mt-1 rounded d-flex text-center font-weight-bold"
          >{{item.isAtUser ? 'At User' : 'In Store' }}</label>
          <br />
          <button
            v-if="!item.isAtUser"
            @click="deleteSelectedBook(item)"
            class="btn bg-white text-danger mt-3"
          >
            <b>Delete</b>
          </button>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "BookListView",
  computed: {
    getBookList() {
      return this.$store.getters.getBookList;
    },
  },
  methods: {
    ...mapActions(["deleteBookFromStoreAction"]),
    deleteSelectedBook(book) {
      this.deleteBookFromStoreAction(book);
    },
  },
};
</script>

<style>
</style>