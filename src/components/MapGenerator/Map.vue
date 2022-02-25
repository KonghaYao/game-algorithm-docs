<template>
    <div class="flex flex-col col-span-3">
        <div v-for="(row, index) in store.map" class="flex flex-row">
            <div
                v-for="(cell, index1) in row"
                class="h-1 w-1"
                :style="{
                    backgroundColor: ColorToHex[store.colorPattern[cell]]
                }"
                :title="'x: ' + index1 + ', y: ' + index"
                @click="store.flashRegion(cell)"
            ></div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, nextTick } from "vue";

import { ColorToHex } from "enum-color";
import { useMapStore } from "./store";
import { useConsoleStore } from "../../store/console";
const ConsoleStore = useConsoleStore()
const store = useMapStore();

/** 用于渲染数据的监控 */
const render = () => {
    console.time("渲染图形");
    // nextTick 会在下一次渲染完成之后进行回调函数
    nextTick(() => {
        console.timeEnd("渲染图形");
        console.log("Map 渲染结束");

        ConsoleStore.revokeConsole()
    });
}
/** 创建整个视图 */
const createView = () => {
    ConsoleStore.useConsole()
    store.createMap()
    render()
}
onMounted(createView)
defineExpose(
    { createView }
)
</script>