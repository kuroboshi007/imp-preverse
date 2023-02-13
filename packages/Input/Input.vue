<template>
  <div class="g-input" 
    :class="fullWidth?'_fullWidth':''">
    <label class="_title" v-if="label">{{ label }}</label>
    <div class="ipt_box" :class="fullWidth?'_fullWidth':''">
      <input
        :type="type"
        :value="modelValue"
        :class="iptClass"
        @blur="$emit('blur', $event)"
        @input="$emit('update:modelValue', $event.target.value)"
        @change="$emit('change', $event.target.value, e)"
        :placeholder="placeholder"/>
      <span class="material-icons" v-show="icon">{{ icon }}</span>
    </div>
    <span class="err_msg">{{ errMsg }}</span>
  </div>
</template>

<script>
  export default {
    name: 'g-input',
    // mixins: [route, ripple, input, color],
    props: {
      modelValue: String,
      type: String,
      placeholder: String,
      label: String,
      icon: String,
      textColor: String,
      errMsg: String,
      fab: Boolean,
      flat: Boolean,
      small: Boolean,
      large: Boolean,
      fullWidth: Boolean,
      reg: Boolean,
    },
    computed: {
      iptClass () {
        // const colorClass = this.getNormalColorClass(this.color, this.icon || this.flat);
        // const textColorClass = this.getTextColorClass();
        return {
          'g-fab-input': this.fab,
          'g-flat-input': this.flat,
          'g-icon-input': this.icon,
          'g-raised-input': !this.icon && !this.flat && !this.fab,
          'g-input-small': this.small,
          'g-input-large': this.large,
          '_fullWidth': !this.fab && !this.icon && this.fullWidth,
          'g-input-error': this.errMsg,
          // [colorClass]: true,
          // [textColorClass]: true,
        };
      }
    },
    emits: ['change','blur','update:modelValue']
  }
</script>

<style lang="less">
@import '../Styles/input';
</style>