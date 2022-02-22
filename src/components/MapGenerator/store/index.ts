import { MapGenerator } from "game-algorithm";
import { defineStore } from "pinia";
import { createMapG } from "./createMap";
import { createState } from "./State";
let flashLock = false;
let BigMap: MapGenerator;
export const useMapStore = defineStore({
    id: "MapGenerator",

    state: createState,
    actions: {
        /** 闪烁被点击区域 */
        flashRegion(index: number) {
            if (BigMap === undefined || flashLock) return;
            flashLock = true;
            const normal = BigMap.map;
            const reduce = BigMap.map.$map((value) =>
                value === index ? 0 : value
            );
            // 通过对比 seed 判断是否为同一个 Map 然后进行闪烁
            const seed = BigMap.seed;
            return [...Array(10).keys()]
                .reduce(async (promise, i) => {
                    await promise;
                    return new Promise<void>((resolve, reject) => {
                        setTimeout(() => {
                            if (BigMap.seed !== seed) reject();
                            this.map = i % 2 ? normal : reduce;
                            resolve();
                        }, 10 * (i + 1));
                    });
                }, Promise.resolve())
                .then(() => {
                    flashLock = false;
                });
        },
        /** 创建并更新整个数据 */
        createMap() {
            // 重置部分数据
            flashLock = false;
            const { colorDetail, colorPattern, map } = createState();
            this.map = map;
            this.colorDetail = colorDetail;
            this.colorPattern = colorPattern;

            BigMap = createMapG(this);
            this.map = BigMap.map;
        },
    },
});
