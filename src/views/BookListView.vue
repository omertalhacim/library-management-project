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
            data-toggle="modal"
            data-target="#exampleModalCenter"
            class="btn bg-white text-danger mt-3"
            @click="setSelectedBook(item)"
          >
            <b>Delete</b>
          </button>
          <div
            class="modal fade"
            id="exampleModalCenter"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLongTitle">Delete the book from store</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div
                  class="modal-body"
                >Are you sure you want to delete "{{selectedBook.bookName}}"" from store?</div>
                <div class="modal-footer">
                  <button class="btn btn-secondary" data-dismiss="modal">No, Return</button>
                  <button
                    @click="deleteSelectedBook()"
                    class="btn btn-danger"
                    data-dismiss="modal"
                  >Yes, Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "BookListView",
  data() {
    return {
      selectedBook: "",
    };
  },
  computed: {
    getBookList() {
      return this.$store.getters.getBookList;
    },
  },
  methods: {
    ...mapActions(["deleteBookFromStoreAction"]),
    setSelectedBook(book) {
      this.selectedBook = book;
    },
    deleteSelectedBook() {
      this.deleteBookFromStoreAction(this.selectedBook);
    },
  },
};
</script>

<style>
</style>