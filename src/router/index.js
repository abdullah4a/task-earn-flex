import { createRouter, createWebHistory } from "vue-router";
import { defaultRoutes } from "./default";
import { workersRoutes } from "./workers";
import { complianceAnomaliesRoutes } from "./complianceAnomalies";
import { servicePartnersRoutes } from "./servicePartners";
import { settingsRoutes } from "./settings";
import { authRoutes } from "./authLayout";

// Routing list
const routes = [
  ...defaultRoutes,
  ...workersRoutes,
  ...complianceAnomaliesRoutes,
  ...servicePartnersRoutes,
  ...settingsRoutes,
  ...authRoutes
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
