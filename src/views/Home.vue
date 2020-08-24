<template>
  <div>
    <div class="container">
      <div class="row">
        <HomeNavigator :isStoreOp="true" class="col-5 mt-4 mb-4 ml-5" />
        <HomeNavigator :isStoreOp="false" class="col-5 mt-4 ml-5 mb-4" />
      </div>
    </div>
  </div>
</template>

<script>
import HomeNavigator from "../components/HomeNavigator";

export default {
  name: "Home",
  components: {
    HomeNavigator,
  },
};
</script>
