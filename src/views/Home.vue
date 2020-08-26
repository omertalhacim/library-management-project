<template>
  <div>
    <div class="container">
      <div class="row">
        <HomeNavigator
          :isStoreOp="true"
          :menuHeader="'Book Store Operations'"
          class="col-5 mt-4 mb-4 ml-5"
        />
        <HomeNavigator
          :isStoreOp="false"
          :menuHeader="'User Operations'"
          class="col-5 mt-4 ml-5 mb-4"
        />
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
