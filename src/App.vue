<template>
  <!-- 设置语言为中文 -->
  <el-config-provider :locale="locale">
    <router-view></router-view>
  </el-config-provider>
</template>

<script setup>
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
const locale = zhCn;
</script>

<style scoped>
/* 自定义顶部加载Loading颜色*/
#nprogress .bar {
  background: #409eff !important;
}
</style>
