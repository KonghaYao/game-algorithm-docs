import { defineStore } from "pinia";
import { nextTick } from "vue";
import { createGame } from "./createGame";
import { createState } from "./State";
let clearGame: ReturnType<typeof createGame> = () => {};
export const useStore = defineStore({
    id: "Flock",

    state: createState,
    actions: {
        reset(element: HTMLElement) {
            clearGame();
            nextTick(() => {
                clearGame = createGame(element, this);
            });
        },
    },
});
