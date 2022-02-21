<template>
    <div class="flex flex-col">
        <div v-for="(row, index) in map" class="flex flex-row">
            <div
                v-for="(cell, index1) in row"
                class="h-1 w-1"
                :style="{
                    backgroundColor: ColorToHex[colorPattern[cell]]
                }"
                :title="'x: ' + index1 + ', y: ' + index"
            ></div>
        </div>
    </div>

    <div class="flex flex-col overflow-y-scroll p-4">
        <!-- 颜色备注 -->
        <div
            v-for="(item, index) in colorDetail"
            class="flex flex-row items-center transition-transform hover:scale-125"
            @click="flashRegion(index)"
        >
            <div
                class="h-4 w-4 outline outline-2 outline-black"
                :style="{
                    backgroundColor: ColorToHex[colorPattern[index]]
                }"
            ></div>
            <div class="pl-2 cursor-pointer pointer-events-none select-none">{{ item }}</div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, nextTick, reactive } from 'vue'
import { MapGenerator, renderUsefulWall, renderGround } from 'game-algorithm'
import { ColorToHex } from 'enum-color'
import { CONSOLE, historyToTree } from '../../utils/Console/Console'
const console = new CONSOLE()


// 输入参数
const { height = 100, width = 100, seed } = defineProps<{
    height?: number
    width?: number
    seed?: string
}>()

// 创建响应式参数
const map = ref<number[][]>([])
const _colorPattern = ["white", 'black', "blue400", "red400", "cyan400", "gray800"] as (keyof typeof ColorToHex)[]
const _colorDetail = ['空气', "普通墙", "连接路径", "空气墙", "有效墙", '地面']
const colorPattern = reactive(_colorPattern)
const colorDetail = reactive(_colorDetail)

let BigMap: MapGenerator

// Mounted 生命周期函数
onMounted(() => {
    console.wrapGlobal()

    console.time('创建 Map 类')
    const MapG = new MapGenerator({
        width, height, seed
    })
    console.timeEnd('创建 Map 类')
    console.log('使用种子: ', MapG.seed)

    console.timeGroup('构建基础地图')
    MapG.buildMap()
    console.timeGroupEnd('构建基础地图')

    console.timeGroup('额外插件渲染')
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
            const keys = Object.keys(ColorToHex)
            MapG.rooms.forEach((room, index) => {

                // 随机抽取颜色
                const randomKey = keys[Math.floor(Math.random() * keys.length)]

                // 这里不需要进行检查，所以使用 any 避过检查
                const num = colorPattern.push(randomKey as any)
                colorDetail.push('区域 ' + index)

                room.tiles.forEach(tile => {
                    MapG.afterRender(() =>
                        map.set(tile.tileX, tile.tileY, num - 1)
                    )
                })
            })
            return map
        },

    )
    console.timeGroupEnd('额外插件渲染')

    console.time('渲染图形')
    map.value = MapG.map

    // nextTick 会在下一次渲染完成之后进行回调函数
    nextTick(() => {

        console.timeEnd('渲染图形')
        console.log('Map 渲染结束')
        console.unwrapGlobal()
        window.console.log(historyToTree({ total: console.history, cursor: 0 }))
        BigMap = MapG
        rendered()
    })

})

let flashLock = false
const flashRegion = (index: number) => {
    if (flashLock) return;
    flashLock = true;
    const normal = BigMap.map;
    const reduce = BigMap.map.$map((value) =>
        value === index ? 0 : value
    );
    [...Array(10).keys()]
        .reduce(async (promise, i) => {
            await promise;
            return new Promise<void>((resolve) => {
                setTimeout(() => {
                    map.value = i % 2 ? normal : reduce;
                    resolve();
                }, 10 * (i + 1));
            });
        }, Promise.resolve())
        .then(() => {
            flashLock = false;
        });
};

// 渲染完成，开始铺垫交互行为
const rendered = () => {

}
</script>