<template>
    <div class="flex flex-col">
        <Detail :template="template"></Detail>
    </div>
</template>

<script lang="ts" setup>
import { computed, reactive, ref } from 'vue';
import { useStore } from './store';
import Detail from '../Common/Detail.vue';

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