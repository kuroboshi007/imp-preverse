<template>
  <div class="content bg_op">
    <div class="">--- From Test---</div>
    <div class="_block">
      <ul>
        <li>username: <g-input icon="sentiment_satisfied"></g-input></li>
        <li>password: <g-input type="password" icon="lock"></g-input></li>
        <li>email: <g-input type="email" icon="mail"></g-input></li>
        <li>
          <g-button>reset</g-button><g-button>submit</g-button>
        </li>
      </ul>
    </div>
  </div>
  <!-- <a href="https://pikbest.com">click</a> -->
</template>

<script>
import testFunc from "./../components/testFunc.vue";

export default {
  name: "About",
  components: {
    testFunc,
  }
};

</script>

<style lang="less">
.about {

}

</style>

