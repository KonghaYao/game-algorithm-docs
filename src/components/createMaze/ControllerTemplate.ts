import { Rule } from "@form-create/element-ui";

const col = {};
export const ControllerTemplate = [
    {
        type: "InputNumber",
        field: "height",
        title: "高",
        value: 20,
        col,
        props: {
            precision: 0,
            step: 1,
        },
    },
    {
        type: "InputNumber",
        field: "width",
        title: "宽",
        value: 20,
        col,
        props: {
            precision: 0,
            step: 1,
        },
    },
    {
        type: "input",
        title: "地图种子",
        field: "seed",
        value: "",
        col,
        props: {
            type: "text",
        },
    },
] as Rule;
