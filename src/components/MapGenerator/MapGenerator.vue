<template>
    <div class="bg-red-50 p-4">
        <div class="select-none pointer-events-none text-lg text-gray-700">MapGenerator : 代码编辑器</div>
        <div class="grid grid-cols-4 gap-2">
            <!-- 地图展示 -->
            <Map></Map>
            <!-- 颜色备注 -->
            <ColorPattern></ColorPattern>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useMapStore } from './store';
import Map from './Map.vue';

const store = useMapStore()


// 输入参数
const { height = 100, width = 100, seed } = defineProps<{
    height?: number
    width?: number
    seed?: string
}>()
store.height = height
store.width = width
store.seed = seed


</script>