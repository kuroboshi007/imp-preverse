import { createApp } from 'vue'
import { store, key } from './store'
import router from './router'
import GUI from '../packages'
import App from './App.vue'


createApp(App)
.use(router)
.use(GUI)
.use(store, key)
.mount('#app')


// const app = createApp(App)
//添加全局组件
// app.component(...)

//添加组件实例的共享变量
// app.config.globalProperties.xxx = "xxx";