<template>
  <div id="app">
    <Navbar />
    <br />
    <router-view />
    <footer class="text-center fixed-bottom bg-info">
      “Sleep is good, he said, and books are better.”
      – George R.R. Martin
    </footer>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>

<style>
</style>
