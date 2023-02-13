<template>
  <div class="content _flex">
    <testFunc class="cont-lf bg_op" msg="title.Test" :reverse="true" />
    <Profile />
  </div>
</template>

<script>
import testFunc from "./../components/testFunc.vue";
import Profile from "./../components/profile.vue";
export default {
  name: "Home",
  components: {
    testFunc,
    Profile,
  },
};
</script>

<style lang="less">

</style>