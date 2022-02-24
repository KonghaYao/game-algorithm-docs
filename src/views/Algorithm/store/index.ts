import { Rule } from "@form-create/element-ui";
import mitt from "mitt";
import { defineStore } from "pinia";
const createState = () => ({
    Controller: {
        show: true,
        templateRules: [] as Rule[],
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

// 接收 页面中的算法页面变化，并重置编辑器
const handle = (template: Rule[]) => {
    const store = useAlgorithmStore();
    console.log(template);
    store.Controller.templateRules = template;
};
hub.on("openNewAlgorithm", handle as any);
