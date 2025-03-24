<template></template>
<script setup lang="ts">
import { onMounted } from "vue";
import TypeIt from "typeit";

onMounted(() => {
  new TypeIt(".tagline", {
    strings: [
      "Java 是一种跨平台、面向对象的编程语言。",
      "Java 具有高安全性和稳定性，广泛应用于企业级开发。",
    ],
    speed: 200,
  }).go();
});
</script>
