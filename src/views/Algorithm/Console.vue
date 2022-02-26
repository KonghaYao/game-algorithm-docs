<template>
    <div
        class="bg-green-400 mx-2 mt-2 p-4 h-20 rounded-t-xl flex flex-col overflow-hidden transition-all duration-300"
        :style="{
            minHeight: showInfo ? '14rem' : '4rem'
        }"
    >
        <div class="text-white select-none flex justify-between items-baseline">
            <span>Console 控制台</span>
            <div class="text-xs text-yellow-200 flex-grow text-right p-r-4">打开 Chrome 控制台也可见</div>
            <div @click="toggleInfo" class="flex-grow w-4">
                <el-icon class="hover:bg-gray-600 rounded-full">
                    <caret-bottom v-show="showInfo" />
                    <caret-top v-show="!showInfo" />
                </el-icon>
            </div>
        </div>
        <div class="overflow-y-scroll px-4 rounded-lg bg-white" v-show="showInfo">
            <ElTreeV2 :data="history" :props="props">
                <template #default="{ node }">
                    <span
                        class="prefix"
                        :class="{ 'is-leaf': node.isLeaf }"
                    >[ {{ node.value }}]-{{ node.type }}</span>
                    <span>{{ node.label.join(' ') }}</span>
                </template>
            </ElTreeV2>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ElIcon, ElTreeV2 } from 'element-plus';


import { CaretTop, CaretBottom } from '@element-plus/icons-vue'
import { historyToTree } from '../../utils/Console/Console';
import { computed, ref } from 'vue';
import { useConsoleStore } from '../../store/console'
const store = useConsoleStore()
const history = computed(() => {
    return historyToTree({ cursor: 0, total: store.originData });
})
const showInfo = ref(true)
const toggleInfo = () => showInfo.value = !showInfo.value
const props = {
    type: "type",
    value: 'id',
    label: 'args',
    children: 'children',
}


</script>