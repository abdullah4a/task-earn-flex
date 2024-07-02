<template>
  <div>
    <h1>{{ title }}</h1>
    <p v-for="(item, index) in 100" :key="index">
      {{ item }}
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime obcaecati nam enim similique natus commodi numquam nostrum ullam dolor voluptatum consequatur aperiam esse voluptate, architecto provident. Dolorem, accusamus? Dolorum, sequi.
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue";
const title = ref("Dashboard View");
</script>

<style lang="scss" scoped></style>
