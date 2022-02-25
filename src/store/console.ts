import { CONSOLE } from "../utils/Console/Console";
import { defineStore } from "pinia";
import { reactive, watch, WatchStopHandle } from "vue";
const console = new CONSOLE();
interface State {
    originData: CONSOLE["history"];
}
let stop: WatchStopHandle;
export const useConsoleStore = defineStore({
    id: "Console",

    state: (): State => {
        return {
            originData: [],
        };
    },
    actions: {
        useConsole() {
            console.wrapGlobal();
            console.history = reactive(console.history);
            stop = watch(console.history, (value) => {
                this.originData = value;
            });
        },
        revokeConsole() {
            console.unwrapGlobal();
            stop();
        },
    },
});
