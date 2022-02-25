<template>
    <div class="flex flex-col col-span-3">
        <div v-for="(row, index) in store.maze" class="flex flex-row">
            <div
                v-for="(cell, index1) in row"
                class="h-1 w-1"
                :style="{
                    backgroundColor: cell ? 'black' : 'white'
                }"
                :title="'x: ' + index1 + ', y: ' + index"
            ></div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, nextTick } from "vue";

import { ColorToHex } from "enum-color";
import { useMazeStore } from "./store";
import { useConsoleStore } from "../../store/console";
const ConsoleStore = useConsoleStore()
const store = useMazeStore();

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
    store.resetMaze()
    render()
}
onMounted(createView)
defineExpose(
    { createView }
)
</script>