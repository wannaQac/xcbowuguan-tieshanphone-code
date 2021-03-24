<template>
  <div>
    <el-row>
      <img src="https://ts-1305062858.cos-website.ap-nanjing.myqcloud.com/logo.png" style="width: 100%">
    </el-row>
    <el-row>
      <el-menu router
               :default-active="this.$route.path"
               class="el-menu-demo"
               mode="vertical"
               @select="handleSelect">
        <!-- <el-menu-item index="1" style="margin-top: 3%">处理中心</el-menu-item>-->
        <el-menu-item id="navv" v-for="(item,i) in navList" :key="i" :index="item.name" >
          <template slot="title">
            <!--<i class="el-icon-s-platform"></i>-->
            <template>{{item.navItem}}</template>
          </template>
        </el-menu-item>
        <el-submenu>
          <template slot="title">其他</template>
          <el-menu-item v-for="(item2,j) in navList2" :key="j" :index="item2.name" >
            <template>{{item2.navItem}}</template>
          </el-menu-item>
        </el-submenu>


      </el-menu>
    </el-row>
    <el-main>
      <router-view>

      </router-view>
    </el-main>
    <div class="mainbox-ld bottominfo">
      <p class="crcn">版权所有：乡旅国际数字博物馆</p>
      <p class="cren">Copyright 2020 © All rights reserved by XCGJ.</p>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        navList:[
          {name:'/Quanjing',navItem:'全景展示'},
          {name:'/Cunluo',navItem:'铁山街道'},
        ],
        navList2:[
          {name:'/Lishi',navItem:'历史口述'},
          {name:'/Huanjing',navItem:'环境格局'},
          {name:'/Chuantong',navItem:'传统建筑'},
          {name:'/Minsu',navItem:'乡土文化'},
          {name:'/Meishi',navItem:'美食物产'},
          {name:'/Lvyou',navItem:'旅游导览'},
          {name:'/Zhaoshang',navItem:'招商信息'},
        ],
        navList3:[
          {name:'/Quanjing',navItem:'全景展示'},
          {name:'/Cunluo',navItem:'铁山街道'},
          {name:'/Lishi',navItem:'历史口述'},
          {name:'/Huanjing',navItem:'环境格局'},
          {name:'/Chuantong',navItem:'传统建筑'},
          {name:'/Minsu',navItem:'乡土文化'},
          {name:'/Meishi',navItem:'美食物产'},
          {name:'/Lvyou',navItem:'旅游导览'},
          {name:'/Zhaoshang',navItem:'招商信息'},
        ]
        /*imgIcon: require("../static/logo.png"),*/
      };
    },
    methods: {
    }
  }
</script>

<style>
  /* #navv{
     margin-top: 2%;
     !*margin-left: 1%;
     margin-right: 1%;*!
   }*/

</style>