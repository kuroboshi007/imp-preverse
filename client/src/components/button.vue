<template>
  <div class="_block position_r z999">
    <h3>Button</h3>
    <ul>
      <li><g-button @click="ClickBtn">default</g-button><g-button type="primary">primary</g-button><g-button type="info">info</g-button><g-button disabled>disabled</g-button></li>
      <li><g-button icon="tips_and_updates">icon-button</g-button></li>
      <li><g-button fullWidth>fullWidth</g-button></li>
      <li><g-button :icon="iconText" round @click="ChgBtn">@@@@@hidden@@@@@</g-button></li>
    </ul>
    <g-dialog title="Dialog" width="360" :open.sync="openSimple">
      this is simple Dialog
      <g-button slot="actions" flat color="primary" @click="closeSimpleDialog">Close</g-button>
    </g-dialog>
  </div>
  <div class="_block">
    <div class="g-wrap">
      <div class="g-footer">
        <div class="g-bubble" v-for="i in 250"></div>
      </div>
    </div>
  </div> 
</template>

<script>
import { ref } from 'vue'

export default {
  name: "cButton",
  // composition-api
  setup(props) {
    // data
    const iconText = ref('add')
    const openSimple = ref(false)

    // methods
    const ClickBtn = () => {
      console.log('---- button click??? ----')
    }
    const ChgBtn = () => {
      if(iconText.value == 'add' ) {
        iconText.value = 'remove' 
      } else {
        iconText.value = 'add' 
      }
    }
    const openSimpleDialog = () => {
      this.openSimple = true;
    }
    const closeSimpleDialog = () => {
      this.openSimple = false;
    }

    // data
    return {
      ChgBtn,
      ClickBtn,
      iconText,
      openSimpleDialog,
      closeSimpleDialog,
      openSimple
    }
  }
}
</script>