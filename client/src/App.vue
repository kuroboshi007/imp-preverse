<template>
  <div class="main" :class="{ _admin: model=='admin' }">
    <router-view />
    <Menu :model="model" />
  </div>
</template>

<script lang="ts">
import '@common/css/common.less'
import { defineComponent } from 'vue'
import Menu from './components/menu.vue'

export default defineComponent({
  name: 'App',
  components: {
    Menu
  },
  data() {
    return {
      model: 'blog'
    }
  }
})
</script>
