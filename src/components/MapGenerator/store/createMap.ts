import { MapGenerator, renderUsefulWall, renderGround } from "game-algorithm";
import { ColorToHex } from "enum-color";
import { CONSOLE } from "@/utils/Console/Console";
import { useMapStore } from ".";

/** 只是创建一个地图, 内部使用了 store, 并且依赖 console 代理 */
export const createMapG = (store: ReturnType<typeof useMapStore>) => {
    // 代理 console 为
    const console: CONSOLE = window.console as any;

    const { height, width, seed } = store;
    console.time("创建 Map 类");
    const MapG = new MapGenerator({
        width,
        height,
        seed,
    });
    console.timeEnd("创建 Map 类");
    console.log("使用种子: ", MapG.seed);

    console.timeGroup("构建基础地图");
    MapG.buildMap();
    console.timeGroupEnd("构建基础地图");

    console.timeGroup("额外插件渲染");
    MapG.render(
        // 渲染有效墙壁
        renderUsefulWall(
            (map, x, y) => {
                // 这是边界区域
                MapG.afterRender(() => map.set(x, y, 3));
            },
            (map, x, y) => {
                // 这是不需要进行渲染的区域
                MapG.afterRender(() => map.set(x, y, 4));
            }
        ),

        // 渲染地面方块
        renderGround((map, x, y) => {
            MapG.afterRender(() => map.set(x, y, 5));
        }),

        // 渲染区域方块
        (map, MapG) => {
            const keys = Object.keys(ColorToHex);
            MapG.rooms.forEach((room, index) => {
                // 随机抽取颜色
                const randomKey = keys[Math.floor(Math.random() * keys.length)];

                // 这里不需要进行检查，所以使用 any 避过检查
                const num = store.colorPattern.push(randomKey as any);
                store.colorDetail.push("区域 " + index);

                room.tiles.forEach((tile) => {
                    MapG.afterRender(() =>
                        map.set(tile.tileX, tile.tileY, num - 1)
                    );
                });
            });
            return map;
        }
    );
    console.timeGroupEnd("额外插件渲染");

    return MapG;
};
