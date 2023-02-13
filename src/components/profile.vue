<template>
  <div class="profile">
    <div class="avater">
      <img alt="avater" src="../assets/logo2.jpg" />
    </div>
    <div class="_tag">
      <h3 class="_name">Gold Bug</h3>
    </div>
    <div class="intro">
      {{ intro }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
  props: {
    // msg: String,
  },
  data() {
    return {
      intro: `All the bright, precious things fade so fast. And they don't come back.`,
    };
  },
  computed: {},
};
</script>

