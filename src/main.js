import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// async imports
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/assets/styles/bootstrap.scss";
import "../src/assets/styles/main.scss";
import "bootstrap-icons/font/bootstrap-icons.css";

const app = createApp(App);

// Global Components
// Layouts
import AuthLayout from "@/layouts/AuthLayout.vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import NotFoundLayout from "@/layouts/NotFound.vue";

// Components
import AppDropDown from "@/components/common/actions/AppDropDown.vue";
import PageContent from "./components/common/content/PageContent.vue";
import AppDataTable from "@/components/common/dataTable/AppDataTable.vue";

app
  .component("auth-layout", AuthLayout)
  .component("default-layout", DefaultLayout)
  .component("not-found-layout", NotFoundLayout)
  .component("app-drop-down", AppDropDown)
  .component("app-page-content", PageContent)
  .component("app-data-table", AppDataTable);

app.use(router).mount("#app");
