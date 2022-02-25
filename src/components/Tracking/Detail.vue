<template>
    <div class="flex flex-col w-full">
        <div v-for="{ name, value } in template" class="row">
            <span>{{ name }}</span>
            <span>{{ value }}</span>
        </div>
    </div>
</template>
<style scoped>
.row {
    @apply flex flex-row justify-between;
}
</style>
<script lang="ts" setup>
import { computed, reactive, ref } from 'vue';
import { useStore } from './store';

const store = useStore()

const template = reactive<{
    name: string,
    value: any
}[]>([])

template.push({
    name: "使用 PID 算法",
    value: computed(() => store.usePID ? "是" : "否")
}, {
    name: "球的数目",
    value: computed(() => store.ballsNumber)
}, {
    name: "最终距离",
    value: computed(() => store.space)
})
</script>