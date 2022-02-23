import { createMaze } from "game-algorithm";
import { defineStore } from "pinia";
import { createState } from "./State";

export const useMazeStore = defineStore({
    id: "Maze",

    state: createState,
    actions: {
        resetMaze() {
            this.maze = createMaze(this.width, this.height, this.seed);
        },
    },
});
