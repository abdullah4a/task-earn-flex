export const menuItems = Object.freeze([
  {
    title: "Dashboard",
    icon: "bi bi-grid",
    path: "/",
  },
  {
    title: "Workers",
    icon: "bi bi-people",
    path: "/workers",
    children: [
      {
        title: "All",
        icon: "",
        image: require("@/assets/images/logo.svg"),
        path: "/workers-all",
      },
      {
        title: "Care",
        icon: "",
        image: require("@/assets/images/logo.svg"),
        path: "/workers-care",
      },
      {
        title: "Security",
        icon: "",
        image: require("@/assets/images/logo.svg"),
        path: "/workers-security",
      },
      {
        title: "Construction",
        icon: "",
        image: require("@/assets/images/logo.svg"),
        path: "/workers-construction",
      },
      {
        title: "Cleaning",
        icon: "",
        image: require("@/assets/images/logo.svg"),
        path: "/workers-cleaning",
      },
      {
        title: "Aviation",
        icon: "",
        image: require("@/assets/images/logo.svg"),
        path: "/workers-aviation",
      },
      {
        title: "Hospitality",
        icon: "",
        image: require("@/assets/images/logo.svg"),
        path: "/workers-hospitality",
      },
      {
        title: "Achieved",
        icon: "",
        image: require("@/assets/images/logo.svg"),
        path: "/workers-achieved",
      },
    ],
  },
  {
    title: "Compliances Anomalies",
    icon: "bi bi-search",
    path: "/compliance-anomalies",
  },
  {
    title: "Compliances Anomalies",
    icon: "bi bi-people",
    path: "/service-partners",
  },
  {
    title: "Settings",
    icon: "bi bi-gear",
    path: "/settings",
    children: [
      {
        title: "Account",
        icon: "",
        image: require("@/assets/images/logo.svg"),
        path: "/settings",
      },
    ],
  },
]);
