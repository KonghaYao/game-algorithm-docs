<template>
    <div class="bg-green-400 flex-grow mx-2 mt-2 p-4 rounded-t-xl" ref="root">
        <div class="text-white select-none pointer-events-none flex justify-between items-baseline">
            <span>Console 控制台</span>
            <span class="text-xs text-yellow-200">打开 Chrome 控制台也可见</span>
        </div>
        <ElTreeV2 :data="history" :props="props" :height="height" class="rounded-lg">
            <template #default="{ node }">
                <span
                    class="prefix"
                    :class="{ 'is-leaf': node.isLeaf }"
                >[ {{ node.value }}]-{{ node.type }}</span>
                <span>{{ node.label.join(' ') }}</span>
            </template>
        </ElTreeV2>
    </div>
</template>

<script lang="ts" setup>
;
import { historyToTree } from '../../utils/Console/Console';
import { computed, nextTick, onMounted, ref } from 'vue';
import { useConsoleStore } from '../../store/console'
const store = useConsoleStore()
const height = ref(100)
const history = computed(() => {
    return historyToTree({ cursor: 0, total: store.originData });
})
const root = ref<HTMLDivElement>()
const props = {
    type: "type",
    value: 'id',
    label: 'args',
    children: 'children',
}
const resetHeight = () => {
    nextTick(() => {
        const style = getComputedStyle(root.value!)
        height.value = parseInt(style.height) - 60
        console.log(height.value);

    })
}

onMounted(() => {
    resetHeight()
})
</script>