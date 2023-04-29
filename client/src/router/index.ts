import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import home from '../views/home.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () =>
      import('@views/home.vue'),
  },
  {
    path: '/home',
    redirect: { path: '/' }
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
    component: () =>
      import(/* webpackChunkName: "About" */ '@views/about.vue'),
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('@views/contact.vue'),
  },
  {
    path: '/result',
    name: 'result',
    component: () => import('@views/result.vue'),
  },
  {
    path: '/category',
    name: 'category',
    component: () => import('@views/category.vue'),
  },
  {
    path: '/color',
    name: 'color',
    component: () => import('@components/color.vue'),
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