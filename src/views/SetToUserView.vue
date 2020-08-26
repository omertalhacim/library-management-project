<template>
  <div class="container">
    <div class="card">
      <ValidationObserver v-slot="{ invalid }">
        <form
          @submit.prevent="setBookToUser()"
          class="card p-3 text-white"
          style="background-color:#a7eb5b"
        >
          <div class="d-flex justify-content-between">
            <h4 class="text-dark">Set To User</h4>
            <router-link to="/" class>return to home</router-link>
          </div>
          <div class="form-group">
            <label class="text-dark">Select Book</label>
            <br />
            <ValidationProvider rules="required" v-slot="{ errors }">
              <select class="col-12 btn btn-secondary text-white" v-model="selectedBook">
                <option value disabled selected hidden>Please Select a Book</option>
                <option
                  v-for="(book, index) in getAvailableBooksForUser"
                  :value="book"
                  :key="index"
                >{{book.bookName}}</option>
              </select>
              <span class="text-danger">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
          <div class="form-group">
            <label class="text-dark">User ID</label>
            <ValidationProvider rules="required" v-slot="{ errors }">
              <input
                type="text"
                v-model="formModel.userInfo.userID"
                class="form-control text-dark"
                placeholder="Please enter user ID"
              />
              <span class="text-danger">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
          <div class="form-group">
            <label class="text-dark">User Name and Surname</label>
            <ValidationProvider rules="required" v-slot="{ errors }">
              <input
                type="text"
                v-model="formModel.userInfo.userFullName"
                class="form-control text-dark"
                placeholder="Please enter user name and surname"
              />
              <span class="text-danger">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
          <div class="form-group">
            <label class="text-dark">User Address</label>
            <ValidationProvider rules="required" v-slot="{ errors }">
              <textarea
                type="text"
                v-model="formModel.userInfo.userAddress"
                rows="3"
                class="form-control text-dark"
                placeholder="Please enter user address"
              />
              <span class="text-danger">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
          <button :disabled="invalid" type="submit" class="btn bg-primary">Save</button>
        </form>
      </ValidationObserver>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { ValidationProvider, extend, ValidationObserver } from "vee-validate";
import { required } from "vee-validate/dist/rules";

extend("required", {
  ...required,
  message: "*This field is required",
});

export default {
  name: "SetToUserView",
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      formModel: {
        selectedBookIndex: "",
        userInfo: {
          userID: "",
          userFullName: "",
          userAddress: "",
        },
      },
      selectedBook: "",
    };
  },
  methods: {
    ...mapActions(["setBookToUserAction"]),
    setBookToUser() {
      this.formModel.selectedBookIndex = this.getBookList.findIndex(
        (item) => item == this.selectedBook
      );
      let payload = {
        bookIndex: this.formModel.selectedBookIndex,
        user: {
          ...this.formModel.userInfo,
        },
      };
      let toastBookName = this.selectedBook.bookName;
      this.setBookToUserAction(payload);
      this.$toasted.show(`${toastBookName} has been SET to user`, {
        theme: "outline",
        position: "top-center",
        duration: 2500,
        className: "bg-secondary text-white p-3",
      });
      this.clearForm();
    },
    clearForm() {
      this.formModel.selectedBookIndex = "";
      this.formModel.userInfo.userID = "";
      this.formModel.userInfo.userFullName = "";
      this.formModel.userInfo.userAddress = "";
      this.selectedBook = "";
    },
  },
  computed: {
    ...mapGetters(["getBookList"]),
    getAvailableBooksForUser() {
      return this.getBookList.filter((item) => item.isAtUser == false);
    },
  },
};
</script>

<style>
</style>