<template></template>
<script setup lang="ts">
import {onMounted, ref} from "vue";
import {gsap} from "gsap";

function animate() {
  const logo = ref('.VPImage.image-src')
  gsap.from(logo.value, {
    // x: -200,
    x: '-50vw',
    opacity: 0,
    duration: 2,
    ease: 'power3.out',
    yoyo: true,
  })
}

onMounted(() => {
  animate();
});
</script>
