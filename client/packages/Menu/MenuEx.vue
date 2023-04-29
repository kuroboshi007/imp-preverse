<template>
  <!-- TODO -->
  <!-- click icon -->
  <nav :class="navType">
    <div class="sideBar">
      <span class="material-icons _click">menu</span>
    </div>
    <ul>
      <li
        v-for="(data, index) in MenuList"
        :class="{ active: isActive == index }">
        <div class="_main" 
          @click="data.sub ? expandMenu(data, index) : changeNavigation(data, index)">
          <span class="material-icons" v-show="icons">{{ data.icon }}</span>
          <span class="_text">{{ data.text }}</span>
          <span class="material-icons _click" v-if="data.sub">
            {{ data.expand ? "expand_less" : "expand_more" }}
          </span>
        </div>
        <ul>
          <li 
            v-if="data.sub && data.expand"
            v-for="(item, i) in data.sub"
            :class="{ 'active-sub': isActiveSub == i && isActive == index }"
            @click="changeSubNavigation(data.name, item.name, i)"
          >
            <div class="_sub">
              <span class="_text">{{ item.text }}</span>
            </div> 
          </li>
        </ul>
        
      </li>
    </ul>
  </nav>
</template>

<script>
import { useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'

export default {
  name: "GMenu",
  components: {
    // SubMenu
  },
  props: {
    title: String,
    navType: String,
    icons: Boolean,
    lists: Array,
  },
  // composition-api
  setup(props) {
    
    const router = useRouter()
    const isActive = ref(-1);
    const isActiveSub = ref(-1);
    const expand = ref(true);
    const MenuList = ref(props.lists)

    router.isReady().then(() => {
      // isReady() 取代 onReady()
      const defaultIndex = MenuList.value.findIndex(x => x.name === router.currentRoute.value.matched[0].name);
      // console.log(MenuList.value);
      // console.log(MenuList.value[defaultIndex].sub);
      // console.log(router.currentRoute.value.matched[1].name);
      const defaultIndexSub = MenuList.value[defaultIndex].sub.findIndex(x => x.name === router.currentRoute.value.matched[1].name);
      isActive.value = defaultIndex;
      isActiveSub.value = defaultIndexSub;
      console.log('isActive.value = ', isActive.value);
      console.log('isActiveSub.value = ', isActiveSub.value);
    })

    const expandMenu = (d, i) => {
      MenuList.value[i].expand = !d.expand
      // console.log('expandMenu is clicked!', MenuList.value[i].expand)
      // console.log('MenuList is ', MenuList)
    }

    const changeNavigation = (d,i) => {
      router.push(`${d.name}`)
      expandMenu(d,i)
    }
    const changeSubNavigation = (parents,name,i) => {
      router.push(`/${parents}/${name}`)
      isActiveSub.value = i
    }

    onMounted(() => {
      // console.log('props.lists is ', props.lists)
    })
    
    return {
      router,
      expandMenu,
      isActive,
      isActiveSub,
      expand,
      MenuList,
      changeNavigation,
      changeSubNavigation
    }
  }
}
</script>


<style lang="less">
@import '../Styles/button';
@import '../Styles/menu';
</style>