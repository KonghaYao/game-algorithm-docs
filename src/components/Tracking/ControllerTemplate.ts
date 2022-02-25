import { Rule } from "@form-create/element-ui";

const col = {
    span: 16,
    labelWidth: 125,
};
export const ControllerTemplate = [
    {
        type: "InputNumber",
        field: "space",
        title: "最终距离",
        value: 40,
        col,
        props: {
            precision: 0,
            step: 1,
        },
    },
    {
        type: "InputNumber",
        field: "ballsNumber",
        title: "追踪球数目",
        value: 20,
        col,
        props: {
            precision: 0,
            step: 1,
        },
    },
    {
        type: "InputNumber",
        field: "speedScaleRate",
        title: "速度缩放",
        value: 0.1,
        col,
        props: {},
    },
    {
        type: "switch",
        title: "使用PID算法",
        field: "usePID",
        value: true,
        props: {
            activeValue: true,
            inactiveValue: false,
        },
    },
] as Rule;
