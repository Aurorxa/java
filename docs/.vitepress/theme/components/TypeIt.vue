<template></template>
<script setup lang="ts">
import { onMounted } from "vue";
import TypeIt from "typeit";

onMounted(() => {
  new TypeIt(".tagline", {
    strings: [
      "Java 是一种跨平台、面向对象的编程语言。",
    ],
    speed: 200,
  }).go();
});
</script>
