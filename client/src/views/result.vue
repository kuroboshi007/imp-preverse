<template>
  <div class="content">
    <div>
      <h1>Result Page</h1>
      <p>Username: {{ formData.username }}</p>
      <p>Password: {{ formData.password }}</p>
      <p>Email: {{ formData.email }}</p>
    </div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import { key } from '../store'


export default {
  name: 'result',
  setup() {
    const route = useRoute();
    const store = useStore(key);

    const formData = store.state.formData;
    console.log('formData = ', formData);

    return {
      formData
    };
  }
};
</script>
