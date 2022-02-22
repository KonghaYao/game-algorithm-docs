import { ColorToHex } from "enum-color";

interface State {
    colorPattern: (keyof typeof ColorToHex)[];
    colorDetail: string[];
    map: number[][];
    height: number;
    width: number;
    seed?: string;
}
export const createState = (): State => {
    return {
        colorPattern: [
            "white",
            "black",
            "blue400",
            "red400",
            "cyan400",
            "gray800",
        ],
        colorDetail: ["空气", "普通墙", "连接路径", "空气墙", "有效墙", "地面"],
        map: [],
        height: 100,
        width: 100,
        seed: undefined,
    };
};
