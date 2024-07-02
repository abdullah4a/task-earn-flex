export const workersRoutes = [
  {
    path: "/workers",
    name: "workers",
    component: () => import("../views/workers/IndexView.vue"),
  },
  {
    path: "/workers-all",
    name: "WorkersAll",
    component: () => import("../views/workers/IndexView.vue"),
  },
  {
    path: "/workers-care",
    name: "WorkersCare",
    component: () => import("../views/workers/IndexView.vue"),
  },
  {
    path: "/workers-security",
    name: "WorkersSecurity",
    component: () => import("../views/workers/IndexView.vue"),
  },
  {
    path: "/workers-construction",
    name: "WorkersConstruction",
    component: () => import("../views/workers/IndexView.vue"),
  },
  {
    path: "/workers-cleaning",
    name: "WorkersCleaning",
    component: () => import("../views/workers/IndexView.vue"),
  },
  {
    path: "/workers-aviation",
    name: "WorkersAviation",
    component: () => import("../views/workers/IndexView.vue"),
  },
  {
    path: "/workers-hospitality",
    name: "WorkersHospitality",
    component: () => import("../views/workers/IndexView.vue"),
  },
  {
    path: "/workers-achieved",
    name: "WorkersAchieved",
    component: () => import("../views/workers/IndexView.vue"),
  },
];
