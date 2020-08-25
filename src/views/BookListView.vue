<template>
  <div class="card ml-5 mr-5">
    <div class="d-flex justify-content-between">
      <h4 class="ml-3">Book List</h4>
      <router-link to="/" class="mr-3">return to home</router-link>
    </div>
    <template>
      <div
        class="row card mt-1 ml-3 mr-3 mb-2"
        v-for="(item, index) in getBookList"
        :key="index"
      >{{item.author}}</div>
    </template>
  </div>
</template>

<script>
export default {
  name: "BookListView",
  computed: {
    getBookList() {
      return this.$store.getters.getBookList;
    },
  },
};
</script>

<style>
</style>