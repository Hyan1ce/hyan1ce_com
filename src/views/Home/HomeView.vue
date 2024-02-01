<template>
  <Navbar />
  <div class="container card mb-3 home_card">
    <div class="card-body">
      <h1 id="Introduction"><a href="#Introduction" class="headerlink" title="Introduction"></a>主页</h1>
      <p class="card-text"></p>
      <p class="card-text">本网站现在巨丑无比，丑到不忍直视</p>
      <p class="card-text">用现有的网站框架比如hexo搭建会快不少而且漂亮不少，但是由于本人想练习前端，所以决定利用Vue3手写</p>
      <p class="card-text">网站页面许多功能亟待改进，计划持续更新</p>
      <hr>
      <p class="card-text"><small class="text-body-secondary">Last updated 2024/1/31晚</small></p>
    </div>
    <div class="fixed-bottom" align="center">
      <BeiAn />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/NavBar.vue"
import BeiAn from "@/components/BeiAn.vue";

export default {
  name: 'HomeView',
  components: {
    Navbar,
    BeiAn
  }
}
</script>

<style scoped>
border {
  border-width: 3px !important;
}

card {
  border-width: 3px !important;
}

div.home_card {
  margin-top: 30px;
  margin-bottom: 20px;
}
</style>
