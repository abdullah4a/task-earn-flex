<template>
  <div
    class="d-flex flex-column flex-shrink-0 p-3 text-white side-menu-gradient page-overflow"
  >
    <a
      href="/"
      class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
    >
      <img src="../../../assets/images/logo.svg" alt="logo" srcset="" />
    </a>
    <hr />
    <ul class="nav nav-pills flex-column mb-auto">
      <side-menu-item
        v-for="(item, index) in menus"
        :key="index"
        :item="item"
      />
    </ul>
    <hr />
    <footer>
      <div class="d-flex align-items-center justify-content-between">
        <div class="h5">Powered by EarnFlex</div>
      </div>
      <div>
        <div class="small text-muted">Version 1.02</div>
      </div>
    </footer>
  </div>
</template>

<script>
import SideMenuItem from "../actions/SideMenuItem.vue";

export default {
  name: "SideMenuBar",
  components: {
    SideMenuItem,
  },
  props: {
    menus: Array,
  },
};
</script>
