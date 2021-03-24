import Vue from 'vue'
import VueRouter from 'vue-router'
import App from "../App";
import Cunluo from "../views/Cunluo";
import Quanjing from "../views/Quanjing";
import Chuantong from "../views/Chuantong";
import Huanjing from "../views/Huanjing";
import Lvyou from "../views/Lvyou";
import Lishi from "../views/Lishi";
import Meishi from "../views/Meishi";
import Minsu from "../views/Minsu";
import Zhaoshang from "../views/Zhaoshang";

Vue.use(VueRouter)

const routes = [

  {
    path: '*',
    redirect: '/Cunluo',
  },
  {
    path: '/Cunluo',
    name: 'xxx村',
    component: Cunluo,
    meta:{
      title:'铁山街道'
    },
  },
  {
    path: '/Quanjing',
    name: '全景展示',
    component: Quanjing,
    meta:{
      title:'全景展示'
    },
  },
  {
    path: '/Lishi',
    name: '历史文化',
    component: Lishi,
    meta:{
      title:'历史口述'
    },
  },
  {
    path: '/Huanjing',
    name: '环境格局',
    component: Huanjing,
    meta:{
      title:'环境格局'
    },
  },
  {
    path: '/Chuantong',
    name: '传统建筑',
    component: Chuantong,
    meta:{
      title:'传统建筑'
    },
  },
  {
    path: '/Minsu',
    name: '民俗文化',
    component: Minsu,
    meta:{
      title:'乡土文化'
    },
  },
  {
    path: '/Meishi',
    name: '美食物产',
    component: Meishi,
    meta:{
      title:'美食物产'
    },
  },
  {
    path: '/Lvyou',
    name: '旅游导览',
    component: Lvyou,
    meta:{
      title:'旅游导览'
    },
  },
  {
    path: '/Zhaoshang',
    name: '招商信息',
    component: Zhaoshang,
    meta:{
      title:'招商信息'
    },
  },
  /*{
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/!* webpackChunkName: "about" *!/ '../views/About.vue')
  }*/
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
