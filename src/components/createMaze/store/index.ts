import { createMaze } from "game-algorithm";
import { defineStore } from "pinia";
import { createState } from "./State";

export const useMazeStore = defineStore({
    id: "Maze",

    state: createState,
    actions: {
        resetMaze() {
            console.time("迷宫算法生成");
            this.maze = createMaze(this.width, this.height, this.seed);
            console.timeEnd("迷宫算法生成");
        },
    },
});
