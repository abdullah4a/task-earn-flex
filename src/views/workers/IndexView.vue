<template>
  <app-page-content :title="title">
    <template #content>
      <div class="btn-group" role="group">
        <button type="button" :class="['ps-6 btn', selectedView === 'list' ? 'btn-primary' : 'btn']"
          @click="selectView('list')">
          List
        </button>
        <button type="button" :class="['pe-6 btn', selectedView === 'map' ? 'btn-primary' : 'btn']"
          @click="selectView('map')">
          Map
        </button>
      </div>
      <div class="p-4">
        <component :is="isSelectedComponent"></component>
      </div>

    </template>
  </app-page-content>
</template>

<script setup>
// imports
import { computed, ref } from 'vue';
import ListView from '@/views/workers/ListView.vue';
import MapView from '@/views/workers/MapView.vue';


// Properties
const title = ref('Workers View');
const selectedView = ref('list');
const components = {
  list: ListView,
  map: MapView
}
const isSelectedComponent = computed(() => components[selectedView.value])

// Methods
const selectView = (view) => {
  selectedView.value = view;
};
</script>

<style lang="scss" scoped>
.btn {
  border-radius: 50px;
}
</style>
