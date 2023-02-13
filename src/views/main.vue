<template>
  <div class="main">
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./../components/header.vue";
import testFunc from "./../components/testFunc.vue";
import Profile from "./../components/profile.vue";
export default {
  name: "Main",
  components: {
    testFunc,
    Header,
    Profile,
  },
};
</script>

<style lang="less">
.main {
  color: #353b6f;
}
.content {
  margin: 10px 15px;
  padding: 10px;
  display: flex;
  .cont-lf {
    width: 70%;
    background: rgba(255, 255, 255, 0.6);
    // border-radius: 15px;
    margin-right: 15px;
  }
}
</style>