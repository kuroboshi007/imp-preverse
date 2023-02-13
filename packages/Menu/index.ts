import GMenu from './Menu.vue'

// 为组件提供 install 安装方法，供按需引入
GMenu.install = function (Vue) {
  Vue.component(GMenu.name, GMenu)
}

// 导出组件
export default GMenu