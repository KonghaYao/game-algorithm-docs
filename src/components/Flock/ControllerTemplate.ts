import { Rule } from "@form-create/element-ui";

const col = {};
export const ControllerTemplate = [
    {
        type: "InputNumber",
        field: "emitterRadius",
        title: "信息素吸引距离",
        value: 100,
        col,
        props: {
            precision: 0,
            step: 1,
        },
    },
    {
        type: "InputNumber",
        field: "boidNumber",
        title: "鸟的数目",
        value: 20,
        col,
        props: {
            precision: 0,
            step: 1,
        },
    },
] as Rule;
