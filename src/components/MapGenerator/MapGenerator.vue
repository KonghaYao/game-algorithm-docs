<template>
    <div class="bg-red-50 p-4">
        <div class="select-none pointer-events-none text-lg py-2 text-gray-700">MapGenerator : 代码编辑器</div>
        <div class="flex justify-evenly">
            <!-- 地图展示 -->
            <Map ref="map"></Map>
            <!-- 颜色备注 -->
            <div class="flex flex-col justify-evenly">
                <ColorPattern></ColorPattern>
                <Detail></Detail>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useMapStore } from './store';
import Map from './Map.vue';
import Detail from './Detail.vue';
import { onMounted, onUnmounted, ref } from 'vue';
import { hub } from '../../views/Algorithm/store';
const store = useMapStore()

const map = ref(null)
type input = {
    height?: number
    width?: number
    seed?: string
}
// 输入参数
const { height = 100, width = 100, seed } = defineProps<input>()
store.height = height
store.width = width
store.seed = seed

const event = (form: input) => {
    Object.assign(store, form);
    (map.value as any).createView()
}
onMounted(() => {
    hub.on("Controller-Change", event as any)
})
onUnmounted(() => {
    hub.off("Controller-Change", event as any)
})


</script>