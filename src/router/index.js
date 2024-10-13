import { createRouter, createWebHistory } from "vue-router";
import Bookmarks from "../views/Bookmarks.vue";
import Explore from "../views/Explore.vue";
import Home from "../views/Home.vue";
import Lists from "../views/Lists.vue";
import Messages from "../views/Messages.vue";
import More from "../views/More.vue";
import Notifications from "../views/Notifications.vue";
import Profile from "../views/Profile.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import EditProfile from "../views/EditProfile.vue";

const routes = [
    {
        path: "/",
        name: "Home_",
        component: Home,
    },
    {
        path: "/home",
        name: "Home",
        component: Home,
    },
    {
        path: "/explore",
        name: "Explore",
        component: Explore,
    },
    {
        path: "/notifications",
        name: "Notifications",
        component: Notifications,
    },
    {
        path: "/messages",
        name: "Messages",
        component: Messages,
    },
    {
        path: "/bookmarks",
        name: "Bookmarks",
        component: Bookmarks,
    },
    {
        path: "/lists",
        name: "Lists",
        component: Lists,
    },
    {
        path: "/profile",
        name: "Profile",
        component: Profile,
        meta:{requiresAuth:true}
    },
    {
        path: "/more",
        name: "More",
        component: More,
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
    },
    {
        path: "/edit-profile",
        name: "EditProfile",
        component: EditProfile,
        meta:{requiresAuth:true}
    }
];

const router = createRouter({
    history: createWebHistory('/'), // 手动设置为根路径
    routes,
});
export default router;
