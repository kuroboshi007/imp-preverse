<template>
  <button class="g-button" :type="type" :class="btnClass">
    <span class="material-icons" v-show="icon">{{ icon }}</span>
    <slot v-if="!round"></slot>
  </button>
</template>

<script>
  export default {
    name: 'GButton',
    // mixins: [route, ripple, button, color],
    props: {
      type: String,
      icon: String,
      textColor: String,
      disabled: Boolean,
      fab: Boolean,
      flat: Boolean,
      small: Boolean,
      large: Boolean,
      round: Boolean,
      fullWidth: Boolean
    },
    computed: {
      btnClass () {
        // const colorClass = this.getNormalColorClass(this.color, this.icon || this.flat);
        // const textColorClass = this.getTextColorClass();
        return {
          'g-fab-button': this.fab,
          'g-flat-button': this.flat,
          'g-icon-button': this.icon,
          'g-button-small': this.small,
          'g-button-large': this.large,
          'g-button-full-width': !this.fab && !this.icon && this.fullWidth,
          // [colorClass]: true,
          // [textColorClass]: true,
          'g-button-round': this.round,
          'g-button-disabled': this.disabled,
        };
      }
    }
  }
</script>

<style lang="less">
@import '../Styles/button';
@import '../Styles/bubble';
</style>