/** 算法路由集中 */
export const algorithmList = [
    {
        path: "MapGenerator",
        name: "MapGenerator",
        component: () => import("../components/MapGenerator/MapGenerator.vue"),
        meta: { name: "地图生成器" },
    },
    {
        path: "createMaze",
        name: "createMaze",
        component: () => import("../components/createMaze/createMaze.vue"),
        meta: { name: "迷宫生成器" },
    },
    {
        path: "WishSystem",
        name: "WishSystem",
        component: () => import("../components/WishSystem/WishSystem.vue"),
        meta: { name: "保底抽奖系统" },
    },
    {
        path: "A_Star",
        name: "A_Star",
        component: () => import("../components/A_Star/A_Star.vue"),
        meta: { name: "A* 寻路算法" },
    },
    {
        path: "Tracking",
        name: "Tracking",
        component: () => import("../components/Tracking/Tracking.vue"),
        meta: { name: "视线追踪算法" },
    },
    {
        path: "Flock",
        name: "Flock",
        component: () => import("../components/Flock/Flock.vue"),
        meta: { name: "模拟群算法" },
    },
];
