<template>
  <ul>
    <li 
      v-for="(item, i) in items"
      :class="{ 'active-sub': isActive == i }"
      @click="changeNavigation(item.name, i)"
    >
      <div class="_sub">
        <span class="_text">{{ item.text }}</span>
      </div>
    </li>
  </ul>
</template>
<script>
import { useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'

export default {
  name: "SubMenu",
  props: {
    title: String,
    navType: String,
    parents: String,
    icons: Boolean,
    items: Array,
  },
  setup(props) {
    const isActive = ref(-1);

    const changeNavigation = (name,i) => {
      console.log(name,i)
      console.log(`/${props.parents}/${name}`)
      // router.push(`/${props.parents}/${name}`)
      router.push('/docs/input')
      isActive.value = i
    }


    return {
      changeNavigation,
      isActive
    }

  }
}
</script>