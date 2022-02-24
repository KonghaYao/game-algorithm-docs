import { createMaze, FindPath, Point } from "game-algorithm";
import { defineStore } from "pinia";
import { createState } from "./State";
export const useStore = defineStore({
    id: "A_Star",

    state: createState,
    actions: {
        resetMaze() {
            console.time("迷宫算法生成");
            this.maze = createMaze(this.width, this.height, this.seed);
            console.timeEnd("迷宫算法生成");
        },
        _setStart(point: Point) {
            this.inputCache.lastPath.forEach(({ x, y }) => {
                this.maze[y][x] = 0;
            });
            this.inputCache.start = point;
            this.maze[point.y][point.x] = 3;
        },
        record(x: number, y: number) {
            // 只有 1 是墙，作为墙的时候不进行事件
            if (this.inputCache.lock || this.maze[y][x] === 1) return;

            if (this.inputCache.start === undefined) {
                return this._setStart({ x, y });
            } else if (
                x === this.inputCache.start.x &&
                y === this.inputCache.start.y
            ) {
                // 不能点击开始地点
                return;
            }

            const path = FindPath({
                start: this.inputCache.start!,
                end: { x, y },
                isWall: ({ x, y }) => {
                    // 需要越界保护
                    if (typeof this.maze[x]?.[y] === "number") {
                        return this.maze[x][y] === 1;
                    } else {
                        return true;
                    }
                },
                search({ x, y }) {
                    // 原先是进行八方位的查找,使用四方位查找即可
                    // 通过标记可以跳跃的点，甚至可以进行跳跃
                    const step = 1;
                    return [
                        [x - step, y],
                        [x + step, y],
                        [x, y + step],
                        [x, y - step],
                    ];
                },
            });

            if (path.length) this._renderPath(path);
            this.inputCache.start = undefined;
        },
        _renderPath(path: Point[]) {
            this.inputCache.lock = true;
            // 设置结束点
            const { x, y } = path[path.length - 1];
            this.maze[y][x] = 3;

            // 缓存这一次的路径
            this.inputCache.lastPath = [this.inputCache.start!, ...path];
            // 渲染动画
            const animation = path.map(({ x, y }, index) => {
                return new Promise((resolve) => {
                    setTimeout(() => {
                        this.maze[y][x] = 2;
                        resolve(null);
                    }, 20 * index);
                });
            });

            // 动画结束之后的动作
            Promise.all(animation).then(() => {
                this.inputCache.lock = false;
                this.maze[y][x] = 3;
            });
        },
    },
});
