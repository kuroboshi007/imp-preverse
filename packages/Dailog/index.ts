// import popup from '../internal/mixins/popup';
// import resize from '../internal/directives/resize';
// import { convertClass, getWidth } from '../utils';

// 导入组件，组件必须声明 name
import GDailog from './dailog'

// 为组件提供 install 安装方法，供按需引入
GDailog.install = function (Vue) {
  Vue.component(GDailog.name, GDailog)
}

// 导出组件
export default GDailog

