import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home/HomeView.vue'
import ArticlesView from '../views/Articles/ArticlesView.vue'
import ProjectsView from '../views/Others/ProjectsView.vue'
import WebPlan from '../views/Others/WebPlan.vue'
import NotFound from '../views/error/404View.vue'

const routes = [
  {
    path: '/home/',
    name: 'home',
    meta: { title: "Hyanice-首页" },
    component: HomeView
  },
  {
    path: '/articles/',
    name: 'articles',
    component: ArticlesView
  },
  {
    path: '/others/projects/',
    name: 'others_projects',
    component: ProjectsView
  },
  //重定向到Home首页
  {
    path: '',
    name: 'redirected_home',
    redirect: '/home/',
    component: HomeView
  },
  {
    path: '/',
    name: 'redirected_home',
    redirect: '/home/',
    component: HomeView
  },
  {
    path: '/404/',
    name: '404 Not Found',
    component: NotFound
  },
  {
    path: '/plan/',
    name: 'web_plan',
    component: WebPlan
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/404/',
    component: NotFound
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
