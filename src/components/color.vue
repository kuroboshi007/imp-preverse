<template>
  <div class="_block">
    <h3>Color</h3>
    <div class="palette">
      <div 
        class="palette_list" 
        v-for="(d,i) in colorList">
        <span class="color_tit">{{ d.title }}</span>
        <div class="color_body">
        <ul class="tonal-palettes">
          <li 
            class="tonal-row"
            v-for="j in 10">{{j*10}}</li>
        </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import '@packages/Styles/palette.less'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Color',
  props: {
    type: {
      type: String,
      required: true,
      default: 'text'
    }
  },
  data() {
    return {
      colorList: [
        { title: "Red" },
        { title: "Ocean" },
        { title: "Green" },
        { title: "Purple" },
        { title: "Orange" },
        { title: "Yellow" },
        { title: "Black" },
        { title: "Other" },
      ]
    }
  }
})


</script>