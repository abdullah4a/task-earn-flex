export const authRoutes = [
    {
        path: "/auth/login",
        name: "LoginView",
        component: () => import("@/views/auth/LoginView.vue"),
    }
]