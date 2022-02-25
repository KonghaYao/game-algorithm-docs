<template>
    <div class="py-2 bg-green-50 rounded-2xl">图例</div>
    <div class="flex flex-col overflow-y-scroll overflow-x-hidden p-4 h-64 rounded-lg bg-green-50">
        <div
            class="flex flex-row items-center transition-transform hover:scale-110 hover:translate-x-6"
            v-for="(item, index) in store.colorDetail"
            @click="store.flashRegion(index)"
        >
            <div
                class="h-4 w-4 outline outline-2 outline-black"
                :style="{
                    backgroundColor: ColorToHex[store.colorPattern[index]]
                }"
            ></div>
            <div class="pl-2 cursor-pointer pointer-events-none select-none">{{ item }}</div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ColorToHex } from 'enum-color';
import { useMapStore } from './store'
const store = useMapStore()


</script>