<template>
  <div class="func">
    <div class="msg">
      <h3>{{ reverse ? text : msg }}</h3>
    </div>
    <div>
      <input type="number" v-model="number" /> = <span>{{ result }}</span>
    </div>
    <g-button @click="copyToClipborad(result)" icon>copy to clipborad</g-button>
  </div>
</template>

<script>
export default {
  name: "testFunc",
  props: {
    msg: String,
    reverse: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      number: 0,
    };
  },
  computed: {
    text() {
      return this.reverseStr(this.msg);
    },
    result() {
      return this.factorialOfNum(this.number);
    },
  },
  methods: {
    // 反转字符串
    reverseStr(str) {
      return [...str].reverse().join("");
    },
    // 计算阶乘
    factorialOfNum(num) {
      return num < 0
        ? (() => {
            console.log("Error!");
          })()
        : num <= 1
        ? 1
        : num * this.factorialOfNum(num - 1);
    },
    // 复制到剪贴板
    copyToClipborad(str) {
      const el = document.createElement("textarea");
      el.value = str;
      // 文本域不可见
      el.setAttribute("readonly", "");
      el.style.position = "absolute";
      el.style.left = "-9999px";
      document.body.appendChild(el);
      const selected =
        document.getSelection().rangeCount > 0
          ? document.getSelection().getRangeAt(0)
          : false;
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      // 保持原来的选中状态
      if (selected) {
        document.getSelection().removeAllRanges();
        document.getSelection().addRange(selected);
      }
      console.log(`${str} copied to clipboard`);
    },
  },
};
</script>

