<template>
  <div class="menu">
    <div class="logo profile" v-if="model=='admin'">
      <div class="avater">
        <img alt="avater" :src="user.avater" />
      </div>
      <div class="_tag">
        <h3 class="_name">{{ user.name}}</h3>
      </div>
      <hr class="line" />
      <div class="intro">
        Welcome, {{ user.name}}.
      </div>
    </div>
    <g-menu :navType="model" icons :lists="lists"></g-menu>
    <g-button icon="tips_and_updates">test btn?</g-button>
  </div>
</template>

<script>
import { defaultSettings as set } from '../common/ts/settings.ts'

export default {
  name: "Menu",
  props: {
    model: String,
  },
  setup(props) {

    const jumpTo = () => {
      console.log('--------aaa')
    }
    console.log(set)

    // data
    return {
      jumpTo,
      user: set.user[0],
      lists: set.menu
    }
  }
};
</script>

