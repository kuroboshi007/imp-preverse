import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import home from '../views/home.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: (_) => {
      return { path: '/home' }
    },
  },
  {
    path: '/home',
    name: 'home',
    component: home,
  },
  {
    path: '/404',
    name: '404',
    component: () =>
      import(/* webpackChunkName: "404" */ '@views/404.vue'),
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "About" */ '@views/about.vue'),
  },
  {
    path: '/docs',
    name: 'docs',
    component: () =>
      import(/* webpackChunkName: "Docs" */ '@views/docs.vue'),

    children:[
      {
        path: 'input',
        name: 'input',
        component: () =>
          import('@components/input.vue'),
      },
      {
        path: 'button',
        name: 'button',
        component: () =>
          import('@components/button.vue'),
      },
      {
        path: 'color',
        name: 'color',
        component: () =>
          import('@components/color.vue'),
      },
    ]
  },
  {
    path: '/:currentPath(.*)*', // 路由未匹配到，进入这个
    redirect: (_) => {
      return { path: '/404' }
    },
  },
]
const router = createRouter({
  history: createWebHistory(''),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return {
      el: '#app',
      top: 0,
      behavior: 'smooth',
    }
  },
})
export default router