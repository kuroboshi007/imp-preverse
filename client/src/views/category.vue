<template>
  <div class="content _flex">
    <!-- <testFunc class="cont-lf bg_op" msg="title.Test" :reverse="true" /> -->
    <List />
  </div>
</template>

<script>
import testFunc from "./../components/testFunc.vue";
import Profile from "./../components/profile.vue";
export default {
  name: "Category",
  components: {
    testFunc,
    Profile,
  },
};
</script>

<style lang="less">

</style>