<template>
  <div class="profile _100vh">
    <div class="intro_box">
      <div class="intro">
        <div class="_title">Welcome to <span class="_name"> GoldBug </span>'s World of Creativity! </div>
        <div class="_content">{{ intro }}</div>
      </div>
      <div class="_box_border">
        <div class="_top_left"></div>
        <div class="_top_right"></div>
        <div class="_bottom_left"></div>
        <div class="_bottom_right"></div>
      </div>
    </div>
    <div class="search_bar">
      <g-input type="text" :placeholder="search" iconRight="search" shadow>
      </g-input>
    </div>
    <!-- </div> -->
  </div>
  <div class="nextPage _100vh">
    test page
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
      intro: `Here, you'll find a unique collection of captivating stories, insightful learning notes on IT and Japanese language, as well as glimpses into my personal journey. As a passionate frontend developer by day and an imaginative writer by night, I'm excited to share my thoughts, experiences, and adventures with you. So, embark on this journey with me and let's explore the endless possibilities together.`,
      search: 'Search something......'
    };
  },
  computed: {},
};
</script>