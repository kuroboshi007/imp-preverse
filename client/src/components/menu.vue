<template>
  <div class="menu" :class="{ '_hidden': isHidden }">
    <div class="logo">
      <div class="avater">
        <img alt="avater" :src="user.avater" />
      </div>
      <div class="_tag">
        <h3 class="_name">{{ user.name}}</h3>
      </div>
    </div>
    <g-menu 
      :navType="model" 
      icons 
      :lists="lists" 
      @update:hidden="handleHiddenUpdate"></g-menu>
  </div>
</template>

<script>
import { defaultSettings as set } from '../common/ts/settings.ts'
import { ref, onMounted } from 'vue'

export default {
  name: "Menu",
  props: {
    model: String
  },
  setup(props) {

    console.log(set)

    const isHidden = ref(false);

    const handleHiddenUpdate = (newHiddenValue) =>  {
      isHidden.value = newHiddenValue;
    }

    // data
    return {
      isHidden,
      handleHiddenUpdate,
      user: set.user[0],
      lists: set.menu,
    }
  }
};
</script>

