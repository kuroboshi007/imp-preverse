// 导入组件，组件必须声明 name
import GInput from './Input.vue'

// 为组件提供 install 安装方法，供按需引入
GInput.install = function (Vue) {
  Vue.component(GInput.name, GInput)
}

// 导出组件
export default GInput
