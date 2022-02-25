/** 算法路由集中 */
export const algorithmList = [
    {
        path: "MapGenerator",
        name: "MapGenerator",
        component: () => import("../components/MapGenerator/MapGenerator.vue"),
    },
    {
        path: "createMaze",
        name: "createMaze",
        component: () => import("../components/createMaze/createMaze.vue"),
    },
    {
        path: "WishSystem",
        name: "WishSystem",
        component: () => import("../components/WishSystem/WishSystem.vue"),
    },
    {
        path: "A_Star",
        name: "A_Star",
        component: () => import("../components/A_Star/A_Star.vue"),
    },
    {
        path: "Tracking",
        name: "Tracking",
        component: () => import("../components/Tracking/Tracking.vue"),
    },
    {
        path: "Flock",
        name: "Flock",
        component: () => import("../components/Flock/Flock.vue"),
    },
];
