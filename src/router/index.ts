import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import { algorithmList } from "./algorithmList";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "Home",
        redirect: { name: "MapGenerator" },
    },
    {
        path: "/algorithm",
        name: "Algorithm",

        component: () => import("../views/Algorithm.vue"),
        children: [
            ...algorithmList,
            {
                path: "*",
                redirect: {
                    name: "WishSystem",
                },
            },
        ],
    },
    {
        path: "/*",
        redirect: {
            name: "Algorithm",
        },
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
