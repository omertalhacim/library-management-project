<template>
  <div class="container">
    <div class="card">
      <ValidationObserver v-slot="{ invalid }">
        <form
          @submit.prevent="submitOperation()"
          class="card p-3 text-white"
          style="background-color:#a7eb5b"
        >
          <div class="d-flex justify-content-between">
            <h4 class="text-dark">Add New Book</h4>
            <router-link to="/">return to home</router-link>
          </div>
          <div class="form-group">
            <label class="text-dark">Book Name</label>
            <ValidationProvider rules="required" v-slot="{ errors }">
              <input
                type="text"
                v-model="formModel.bookName"
                class="form-control text-dark"
                placeholder="Please enter book name"
              />
              <span class="text-danger">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
          <div class="form-group">
            <label class="text-dark">Author</label>
            <ValidationProvider rules="required" v-slot="{ errors }">
              <input
                type="text"
                v-model="formModel.author"
                class="form-control text-dark"
                placeholder="Please enter author"
              />
              <span class="text-danger">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
          <div class="form-group">
            <label class="text-dark">Image URL</label>
            <ValidationProvider rules="required" v-slot="{ errors }">
              <input
                type="text"
                v-model="formModel.bookImgUrl"
                class="form-control text-dark"
                placeholder="Please enter URL"
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
import { ValidationProvider, extend, ValidationObserver } from "vee-validate";
import { required } from "vee-validate/dist/rules";

extend("required", {
  ...required,
  message: "*This field is required",
});

export default {
  name: "BookAddingView",
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      formModel: {
        bookName: "",
        author: "",
        bookImgUrl: "",
      },
    };
  },
  methods: {
    submitOperation() {
      this.$store.dispatch("addBookAction", this.formModel);
      this.clearForm();
    },
    clearForm() {
      this.formModel.bookName = "";
      this.formModel.author = "";
      this.formModel.bookImgUrl = "";
    },
  },
};
</script>

<style>
</style>