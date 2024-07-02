<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-2 h-100" style="border: solid red">
          <SideMenuBar :menus="menuItemsP" />
        </div>
        <div class="col-10 h-100 page-overflow" style="border: solid red">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// imports
import SideMenuBar from "@/components/common/nav/SideMenuBar.vue";
import { menuItems } from "@/utils/enums/menuItems.enum";

// properties
const menuItemsP = menuItems
</script>

<style lang="scss" scoped></style>
