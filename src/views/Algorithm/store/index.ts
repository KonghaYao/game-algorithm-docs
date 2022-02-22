import mitt from "mitt";
import { defineStore } from "pinia";
const createState = () => ({
    Controller: {
        show: true,
    },
});
export const hub = mitt();
export const useAlgorithmStore = defineStore({
    id: "Algorithm",

    state: createState,
    actions: {
        toggleShow(name: keyof ReturnType<typeof createState>) {
            this[name].show = !this[name].show;
        },
    },
});
