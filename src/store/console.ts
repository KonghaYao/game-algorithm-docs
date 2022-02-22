import { CONSOLE, historyToTree, Node } from "../utils/Console/Console";
import { defineStore } from "pinia";
const console = new CONSOLE();
interface State {
    data: Node[];
}

export const useConsoleStore = defineStore({
    id: "Console",

    state: (): State => {
        return {
            data: [],
        };
    },
    actions: {
        useConsole() {
            console.wrapGlobal();
        },
        revokeConsole() {
            console.unwrapGlobal();
        },
        refreshData() {
            this.data = historyToTree({ cursor: 0, total: console.history });
        },
    },
});
