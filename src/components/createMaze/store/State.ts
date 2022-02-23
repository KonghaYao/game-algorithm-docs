interface State {
    maze: number[][];
    height: number;
    width: number;
    seed?: string;
}
export const createState = (): State => {
    return {
        maze: [],
        height: 20,
        width: 20,
        seed: undefined,
    };
};
