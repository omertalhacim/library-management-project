<template>
  <div class="card">
    <h3 class="mt-2 text-center">{{menuHeader}}</h3>
    <div class="row">
      <button class="btn btn-success col-12 mt-2" @click="buttonOneOp">{{buttonOneText}}</button>
      <br />
      <button class="btn btn-primary col-12 mt-3" @click="buttonTwoOp">{{buttonTwoText}}</button>
      <br />
    </div>
    <br />
  </div>
</template>

<script>
export default {
  name: "HomeNavigator",
  props: {
    isStoreOp: {
      type: Boolean,
      required: true,
    },
    menuHeader: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      buttonOneText: "",
      buttonTwoText: "",
    };
  },
  methods: {
    buttonOneOp() {
      if (this.isStoreOp) {
        this.$router.push("/addBook");
      } else {
        this.$router.push("/setToUser");
      }
    },
    buttonTwoOp() {
      if (this.isStoreOp) {
        this.$router.push("/bookList");
      } else {
        this.$router.push("/getFromUser");
      }
    },
  },
  created() {
    this.buttonOneText = this.isStoreOp ? "Add New Book" : "Set to User";
    this.buttonTwoText = this.isStoreOp ? "Book List" : "Get from User";
  },
};
</script>

<style>
</style>