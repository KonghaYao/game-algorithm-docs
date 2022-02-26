<template>
    <div class ref="element"></div>
</template>

<script lang="ts" setup>
import { onMounted, nextTick, ref } from "vue";

import { useStore } from "./store";
import { useConsoleStore } from "../../store/console";
const ConsoleStore = useConsoleStore()
const store = useStore();
const element = ref<HTMLElement>()
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
    store.reset(element.value!)
    render()
}
onMounted(createView)
defineExpose(
    { createView }
)
</script>