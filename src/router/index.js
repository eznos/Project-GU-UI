import { createWebHistory, createRouter } from "vue-router";
import HomePage from "@/components/HomePage.vue";
import RegisterPage from "@/components/RegisterPage.vue";
import LoginPage from "@/components/Login/LoginPage.vue";
import AdminPage from "@/components/Admin/AdminPage.vue";
import FormPage from "@/components/Form/FormPage.vue";
const routes = [
    {
        path: "/login",
        name: "LoginPage",
        component: LoginPage,
    },
    {
        path: "/",
        name: "HomePage",
        component: HomePage,
    },
    {
        path: "/register",
        name: "RegisterPage",
        component: RegisterPage,
    },
    {
        path: "/admintool",
        name: "AdminPage",
        component: AdminPage,
    },
    {
        path: "/form",
        name: "FormPage",
        component: FormPage,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;