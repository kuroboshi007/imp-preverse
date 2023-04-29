<template>
  <nav :class="navType">
    <div class="sideBar" :style="{ height: navHeight + 'px' }">
      <div class="changeNav" @click="toggleHidden">
        <span class="material-icons _click">menu</span>
      </div>
    </div>
    <ul>
      <li
        v-for="(data, index) in MenuList"
        :class="{ active: isActive == index }">
        <div class="_main" 
          @click="changeNavigation(data, index)">
          <span class="_text">{{ data.text }}</span>
        </div>        
      </li>
    </ul>
  </nav>
</template>

<script>
import { useRouter } from 'vue-router'
import { ref, onMounted, onUnmounted, watch } from 'vue'

export default {
  name: "GMenu",
  props: {
    title: String,
    navType: String,
    icons: Boolean,
    lists: Array,
  },
  // composition-api
  setup(props, ctx) {
    
    const router = useRouter()
    const isActive = ref(-1);
    const expand = ref(true);
    const MenuList = ref(props.lists)
    const isHidden = ref(false);
    const navHeight = ref(window.innerHeight * 0.5);

    router.isReady().then(() => {
      // isReady() 取代 onReady()
      updateActiveIndex();
    })

    const updateActiveIndex = () => {
      const defaultIndex = MenuList.value.findIndex(x => x.name === router.currentRoute.value.matched[0].name);
      isActive.value = defaultIndex;
      console.log('isActive = ', isActive.value);
    }
    const changeNavigation = (d,i) => {
      router.push(d.name)
    }
    const changeSubNavigation = (parents,name,i) => {
      router.push(`/${parents}/${name}`)
      isActiveSub.value = i
    }
    
    const toggleHidden = () => {
      isHidden.value = !isHidden.value;
      ctx.emit('update:hidden', isHidden.value);
    }


    
    const updateNavHeight = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const minHeight = 60; // 最小高度
      const maxHeight = window.innerHeight * 0.5; // 初始高度是 50vh
      const range = maxHeight - minHeight;
      let newHeight = maxHeight - scrollTop;

      if (newHeight < minHeight) {
        newHeight = minHeight;
      } else if (newHeight > maxHeight) {
        newHeight = maxHeight;
      }

      navHeight.value = newHeight;
    };


    onMounted(() => {
      window.addEventListener("scroll", updateNavHeight);
      // console.log('props.lists is ', props.lists)
    })
    
    onUnmounted(() => {
      window.removeEventListener("scroll", updateNavHeight);
    });

    watch(() => router.currentRoute.value, () => {
      updateActiveIndex();
    });
  
    return {
      router,
      isActive,
      expand,
      MenuList,
      changeNavigation,
      changeSubNavigation,
      isHidden,
      toggleHidden,
      navHeight,
      updateNavHeight,
      updateActiveIndex
    }
  }
}
</script>


<style lang="less">
@import '../Styles/button';
@import '../Styles/menu';
</style>