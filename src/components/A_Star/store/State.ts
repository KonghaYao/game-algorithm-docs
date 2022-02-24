import { Point } from "game-algorithm";

interface State {
    maze: number[][];
    height: number;
    width: number;
    seed?: string;
    inputCache: {
        start?: { x: number; y: number };
        lock: boolean;
        lastPath: Point[];
    };
}
export const createState = (): State => {
    return {
        maze: [],
        height: 20,
        width: 20,
        seed: undefined,
        inputCache: {
            start: undefined,
            lastPath: [],
            lock: false,
        },
    };
};
