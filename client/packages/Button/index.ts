// 导入组件，组件必须声明 name
import GButton from './Button.vue'

// 为组件提供 install 安装方法，供按需引入
GButton.install = function (Vue) {
  Vue.component(GButton.name, GButton)
}

// 导出组件
export default GButton
