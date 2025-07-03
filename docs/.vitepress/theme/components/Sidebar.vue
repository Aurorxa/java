<template></template>
<script setup lang="ts">


</script>

<style scoped>
/* 侧边栏图标 */
/* 选中所有 .VPSidebarItem 元素，排除带有 .is-link 类的 */
:global(#VPSidebarNav .VPSidebarItem:not(.is-link).collapsed >.item) {
  display: inline-flex;
  align-items: center; /* 垂直居中对齐图标和文本 */
}

/* 为所有不带 .is-link 的 .VPSidebarItem 折叠状态添加图标 */
:global(#VPSidebarNav .VPSidebarItem:not(.is-link).collapsed >.item::before) {
  content: '';
  background-image: url('/svg/document.svg'); /* 设置图标路径 */
  width: 16px;
  height: 16px;
  display: inline-block;
  vertical-align: middle; /* 确保图标与文本垂直居中 */
  background-size: cover;
  margin-right: 4px; /* 给图标和文本之间增加间距 */
}

:global(#VPSidebarNav .VPSidebarItem:not(.is-link) >.item) {
  display: inline-flex;
  align-items: center; /* 垂直居中对齐图标和文本 */
}

/* 为所有不带 .is-link 的 .VPSidebarItem 非折叠状态添加图标 */
:global(#VPSidebarNav .VPSidebarItem:not(.is-link) >.item::before) {
  content: '';
  background-image: url('/svg/document-open.svg'); /* 设置图标路径 */
  width: 16px;
  height: 16px;
  display: inline-block;
  vertical-align: middle; /* 确保图标与文本垂直居中 */
  background-size: cover;
  margin-right: 4px; /* 给图标和文本之间增加间距 */
}

/* 选中带有 .is-link 的 .VPSidebarItem 的直接子元素 .item */
:global(#VPSidebarNav .VPSidebarItem.is-link > .item) {
  display: inline-flex;
  align-items: center; /* 垂直居中图标和文字 */
}

/* 为选中的 .item 添加图标 */
:global(#VPSidebarNav .VPSidebarItem.is-link > .item::before) {
  content: '';
  background-image: url('/svg/file.svg'); /* 图标路径 */
  width: 16px;
  height: 16px;
  display: inline-block;
  vertical-align: middle;
  background-size: cover;
  margin-right: 4px; /* 图标与文字间距 */
}

:global(.VPFeatures .items .item:hover) {
  cursor: pointer;
  transform: translateY(-5px);
}

:global(.VPFeatures .items .item) {
  transition: transform .3s;
}

</style>
