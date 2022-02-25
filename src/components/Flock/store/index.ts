import { defineStore } from "pinia";
import { createGame } from "./createGame";
import { createState } from "./State";
let clearGame: ReturnType<typeof createGame> = () => {};
export const useStore = defineStore({
    id: "Maze",

    state: createState,
    actions: {
        reset(element: HTMLElement) {
            clearGame();
            clearGame = createGame(element, this);
        },
    },
});
