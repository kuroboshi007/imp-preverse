<template>
  <nav :class="navType">
    <ul>
      <li
        v-for="(data, index) in lists"
        @click="expandMenu"
        :class="{ active: isActive == index }">
        <div class="_main">
          <span class="material-icons" v-show="icons">{{ data.icon }}</span>
          <span class="_text">{{ data.text }}</span>
        </div>
        <ul v-if="data.sub && expand" >
          <li 
            v-for="(d, i) in data.sub"
            :class="{ 'active-sub': isActive == i }"
            @click="chgNav(d.name, i)">
            <div class="_sub">
              <span class="_text">{{ d.text }}</span>
            </div>
          </li>
        </ul>
        <span class="material-icons _click" v-if="data.sub">
          {{ expand ? "expand_less" : "expand_more" }}
        </span>
      </li>
    </ul>
  </nav>
</template>

<script>
import { useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'
import { defaultSettings as set } from '../common/ts/settings.ts'

export default {
  name: "Navigation",
  props: {
    title: String,
    navType: String,
    icons: Boolean,
  },
  // composition-api
  setup(props) {
    
    const router = useRouter()
    const lists = set.menu
    const isActive = ref(-1);
    const expand = ref(true);

    router.isReady().then(() => {
      // isReady() 取代 onReady()
      const defaultIndex = lists.findIndex(x => x.name === router.currentRoute.value.name);
      isActive.value = defaultIndex;
    })


    const chgNav = (name,i) => {
      console.log(name,i)
      console.log('====, ');
      router.push(name)
      isActive.value = i
    }

    const expandMenu = () => {
      expand.value = !expand.value;
    }

    onMounted(() => {
      console.log('Component is mounted!')
    })

    
    return {
      router,
      chgNav,
      expandMenu,
      lists,
      isActive,
      expand
    }
  }
}
</script>

