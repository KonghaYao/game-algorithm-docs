import { defineStore } from "pinia";
import { createGame } from "./createGame";
import { createState } from "./State";
let game: ReturnType<typeof createGame>;
export const useStore = defineStore({
    id: "Maze",

    state: createState,
    actions: {
        reset(element: HTMLElement) {
            game = createGame(element);
        },
    },
});
