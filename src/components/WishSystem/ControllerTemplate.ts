import { Rule } from "@form-create/element-ui";

const col = {
    span: 16,
    labelWidth: 125,
};
export const ControllerTemplate = [
    {
        type: "input",
        title: "用户 ID",
        field: "userID",
        value: "KonghaYao",
        col,
        props: {
            type: "userID",
        },
    },
] as Rule;
