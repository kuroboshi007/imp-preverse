<template>
  <div class="content">
    <div class="Contact">
      <div class="_tit">--- Contact---</div>
    </div>
    <div class="_form">
      <ul>
        <li>username: <g-input icon="sentiment_satisfied" v-model="formData.username"></g-input>
        </li>
        <li>password: <g-input type="password" icon="lock" v-model="formData.password"></g-input>
        </li>
        <li>email: <g-input type="email" icon="mail" v-model="formData.email"></g-input>
        </li>
        <li>
          <g-button @click="resetForm">reset</g-button>
          <g-button @click="submitForm">submit</g-button>
        </li>
      </ul>
    </div>
  </div>
  <!-- <a href="https://pikbest.com">click</a> -->
</template>
<script>
import { useRouter } from 'vue-router';
import { useStore } from 'vuex'
import { key } from '../store'

export default {
  name: "Contact",
  setup() {
    const router = useRouter();
    const store = useStore(key);
    const formData = {
      username: "",
      password: "",
      email: ""
    }

    const submitForm = () => {
      console.log("Form data:", formData);
      store.dispatch('updateFormData', formData)
      router.push('result');
    }
    const resetForm = () => {
      formData = {
        username: "",
        password: "",
        email: ""
      }
      console.log("Form data:", formData);

    }

    return {
      formData,
      submitForm
    }
  }
};
</script>

<style lang="less">
.about {}
</style>