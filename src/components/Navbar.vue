<template>
  <nav class="navbar navbar-expand-sm bg-info py-3">
    <h3>{{navbarHeader}}</h3>
    <div>
      <router-link to="/" class="ml-4 text-white">{{homeText}}</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    homeText: {
      type: String,
      required: true,
    },
    navbarHeader: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
</style>