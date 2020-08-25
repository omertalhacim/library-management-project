<template>
  <div class="container">
    <div class="card p-3" style="background-color:#a7eb5b">
      <div class="d-flex justify-content-between">
        <h4 class>Set To User</h4>
        <router-link to="/" class>return to home</router-link>
      </div>
      <div class="form-group">
        <label class="text-dark">Select Book</label>
        <br />
        <select class="col-12 btn btn-secondary text-white" v-model="selectedBook">
          <option value disabled selected hidden>Please Select a Book</option>
          <option
            v-for="(book, index) in getBooksAtUser"
            :value="book"
            :key="index"
          >{{book.bookName}}</option>
        </select>
        <template v-if="selectedBook.isAtUser">
          <div class="text-center">
            <br />
            <div>
              <label>
                <b>User ID:</b>
              </label>
              {{selectedBook.user.userID}}
            </div>

            <br />
            <div>
              <label>
                <b>User Name:</b>
              </label>
              {{selectedBook.user.userFullName}}
            </div>

            <br />
            <div>
              <label>
                <b>User Address:</b>
              </label>
              {{selectedBook.user.userAddress}}
            </div>
          </div>
        </template>
        <br />
        <button
          v-if="selectedBook!=''"
          @click="getBookFromUser()"
          class="col-12 btn bg-primary"
        >Get the book from user</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "GetFromUserView",
  data() {
    return {
      selectedBook: "",
    };
  },
  methods: {
    ...mapActions(["getBookFromUserAction"]),
    getBookFromUser() {
      let selectedBookIndex = this.getBookList.findIndex(
        (item) => item == this.selectedBook
      );
      this.getBookFromUserAction(selectedBookIndex);
      this.clearData();
    },
    clearData() {
      this.selectedBook = "";
    },
  },
  computed: {
    ...mapGetters(["getBookList"]),
    getBooksAtUser() {
      console.log(this.getBookList);
      return this.getBookList.filter((item) => item.isAtUser == true);
    },
  },
  watch: {
    selectedBook: {
      handler: function (newValue) {},
      deep: true,
    },
  },
};
</script>

<style>
</style>