<template>
  <div class="container">
    <br />
    <h1 class="d-flex justify-content-center">404 - PAGE NOT FOUND :/</h1>
    <br />
    <h5 class="d-flex justify-content-center">Redirecting to home page in 4 second...</h5>
  </div>
</template>

<script>
export default {
  name: "404",
  mounted() {
    setTimeout(() => {
      this.$router.push("/");
    }, 4000);
  },
};
</script>

<style>
</style>