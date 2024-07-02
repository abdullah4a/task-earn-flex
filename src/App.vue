<template>
  <component :is="layout()"></component>
</template>
<script setup>
import { useRoute } from 'vue-router';

const route = useRoute()
const layout = () => {
  return route.meta.layout || "default-layout";
};
</script>

<style lang="scss"></style>
