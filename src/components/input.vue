<template>
  <div class="_block">
    <h3>Input</h3>
    <ul>
      <li>
        <g-input 
          type="text"
          v-model="testVal"
          @blur="blur()" 
          label="Default"
          placeholder="Default"
          :errMsg="testVal"></g-input></li>
      <li><g-input type="number" label="Number" ></g-input></li>
      <li><g-input type="text" placeholder="Text" ></g-input></li>
      <li><g-input type="text" label="FullWidth" fullWidth @change="chg()"></g-input></li>
      <li><g-input icon="sentiment_satisfied" label="Icon" errMsg="Error messege Error messege"></g-input></li>
      <li>
        <!-- <g-modal>click</g-modal> -->
      </li>
    </ul>
    <!-- TODO code-->
    <div>
      <pre>
        <code>
          <g-input 
            type="text"
            v-model="testVal"
            @blur="blur()" 
            label="Default"
            placeholder="Default"
            :errMsg="testVal"></g-input>
        </code>
      </pre>
    </div>
    <span v-pre>{{ this will not be compiled }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Input',
  props: {
    type: {
      type: String,
      required: true,
      default: 'text'
    }
  },
  data (){
    return {
      testVal: "test........"
    }
  },
  methods: {
      blur() {
        console.log('blur event -----', this.testVal)

      },
      chg() {
        console.log('value is changed')
      }
    }
})


</script>