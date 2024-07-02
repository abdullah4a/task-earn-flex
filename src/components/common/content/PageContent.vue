<template>
  <div>
    <TopNavBar :title="title" />
    <div class="container-fluid">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script setup>
// imports 
import { ref, defineProps } from 'vue'
import TopNavBar from '@/components/common/nav/TopNavBar.vue';

// properties
const props = defineProps({
  title: String
})
const title = ref(props.title)

</script>

<style lang="scss" scoped></style>
