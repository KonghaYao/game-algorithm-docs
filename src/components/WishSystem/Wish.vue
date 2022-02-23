<template>
    <div class="flex flex-col w-3/4">
        <div class="flex flex-row flex-wrap">
            <div
                v-for="(cell, index) in store.wishRecords"
                class="h-2 w-2"
                :style="{
                    backgroundColor: colors[cell.id]
                }"
                :key="index"
                :title="cell.name + ' ' + (index + 1)"
            ></div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, nextTick } from "vue";

import { ColorToHex } from "enum-color";
import { useWishStore } from "./store";
import { useConsoleStore } from "../../store/console";
const ConsoleStore = useConsoleStore()
const store = useWishStore();
const colors = [ColorToHex.blue200, ColorToHex.yellow600, ColorToHex.violet600]

/** 用于渲染数据的监控 */
const render = () => {
    console.time("渲染图形");
    // nextTick 会在下一次渲染完成之后进行回调函数
    nextTick(() => {
        console.timeEnd("渲染图形");
        console.log("Map 渲染结束");

        ConsoleStore.revokeConsole()
        ConsoleStore.refreshData()
    });
}
/** 创建整个视图 */
const createView = () => {
    ConsoleStore.useConsole()
    store.resetWish()

    render()
}
onMounted(createView)
defineExpose(
    { createView }
)
</script>