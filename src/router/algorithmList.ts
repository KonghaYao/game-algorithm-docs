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
];
