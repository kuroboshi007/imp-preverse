export default {
  name: 'g-dailog',
  // mixins: [popup],
  directives: {
    // resize
  },
  props: {
    dialogClass: [String, Array, Object],
    title: String,
    scrollable: Boolean,
    padding: { // 设置scrollable 之后dailog 框距离顶部和底部的值
      type: Number,
      default: 64
    },
    fullscreen: Boolean,
    width: [String, Number],
    maxWidth: [String, Number],
    lockScroll: {
      type: Boolean,
      default: true
    },
    transition: {
      type: String,
      default: 'scale',
      validator (val) {
        return ['slide-top', 'slide-bottom', 'slide-left', 'slide-right', 'fade', 'scale'];
      }
    }
  },
  mounted () {
    this.setMaxDialogContentHeight();
  },
  updated () {
    this.$nextTick(() => {
      this.setMaxDialogContentHeight();
    });
  },
  methods: {
    handleWrapperClick (e) {
      if (this.$el !== e.target) return;
      this.overlayClick(e);
    },
    setMaxDialogContentHeight () {
      const dialogEl = this.$refs.dialog;
      if (!dialogEl) return;
      if (!this.scrollable) {
        dialogEl.style.maxHeight = '';
        return;
      }
      const maxDialogContentHeight = window.innerHeight - 2 * this.padding;
      const { footer, title, elBody } = this.$refs;
      if (elBody) {
        let maxBodyHeight = maxDialogContentHeight;
        if (footer) maxBodyHeight -= footer.offsetHeight;
        if (title) maxBodyHeight -= title.offsetHeight;
        elBody.style.maxHeight = maxBodyHeight + 'px';
      }
      dialogEl.style.maxHeight = maxDialogContentHeight + 'px';
    }
  },
  watch: {
    open (newValue) {
      if (!newValue) return;
      this.$nextTick(() => {
        this.setMaxDialogContentHeight();
        const dialogEl = this.$refs.dialog;
        if (!dialogEl) return;
        dialogEl.focus();
      });
    }
  },
  render (h) {
    const hasTitleSlots = this.$slots.title && this.$slots.title.length > 0;
    const isShowTitle = this.title || hasTitleSlots;
    const dialogTitle = isShowTitle ? h('div', {
      staticClass: 'g-dialog-title',
      ref: 'title'
    }, hasTitleSlots ? this.$slots.title : this.title) : undefined;

    const dialogBody = h('div', {
      staticClass: 'g-dialog-body',
      ref: 'elBody'
    }, this.$slots.default);

    const dialogActions = this.$slots.actions && this.$slots.actions.length > 0 ? h('div', {
      staticClass: 'g-dialog-actions',
      ref: 'footer'
    }, this.$slots.actions) : undefined;

    const data = {
      // staticClass: 'g-dialog ' + convertClass(this.dialogClass).join(' '),
      staticClass: 'g-dialog ',
      attrs: {
        tabindex: -1
      },
      class: {
        'g-dialog-fullscreen': this.fullscreen,
        'g-dialog-scrollable': this.scrollable,
        [`g-${this.transition}`]: true
      },
      ref: 'dialog'
    };

    if (!this.fullscreen) {
      data.style = {
        // 'max-width': this.maxWidth === 'auto' ? undefined : getWidth(this.maxWidth),
        // 'width': this.width === 'auto' ? undefined : getWidth(this.width)
        'max-width': this.maxWidth === 'auto' ? undefined : '100%',
        'width': this.width === 'auto' ? undefined : '100%'
      };
    }
    const dialog = h('div', data, [dialogTitle, dialogBody, dialogActions]);

    return this.open ? h('transition', {
      props: {
        name: `g-dialog-transition`
      }
    }, [
      h('div', {
        staticClass: 'g-dialog-wrapper',
        // directives: [{
        //   name: 'resize',
        //   value: () => this.setMaxDialogContentHeight()
        // }],
        style: {
          'z-index': this.zIndex
        },
        on: {
          click: this.handleWrapperClick
        }
      }, [dialog])
    ]) : null;
  }
};