<template>
    <div class="bg-red-50 p-4">
        <div class="select-none pointer-events-none text-lg py-2 text-gray-700">WishSystem: 抽卡模拟器</div>
        <div class="flex justify-evenly">
            <!-- 地图展示 -->
            <Wish ref="wish"></Wish>
            <!-- 颜色备注 -->
            <div class="flex flex-col justify-evenly">
                <Detail></Detail>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useWishStore } from './store';
import Wish from './Wish.vue';
import Detail from './Detail.vue';
import { onMounted, onUnmounted, ref } from 'vue';
import { hub } from '../../views/Algorithm/store';
import { ControllerTemplate } from './ControllerTemplate'
const store = useWishStore()

const wish = ref(null)
type input = {
    height?: number
    width?: number
    seed?: string
}
// 输入参数
const { seed } = defineProps<input>()
store.seed = seed


const event = (form: input) => {
    Object.assign(store, form);
    (wish.value as any).createView()
}
onMounted(() => {
    /** 监听参数注入 */
    hub.on("Controller-Change", event as any)
    /** 触发算法加载 */
    hub.emit("openNewAlgorithm", ControllerTemplate)
})
onUnmounted(() => {
    hub.off("Controller-Change", event as any)
})


</script>