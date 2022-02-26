<template>
    <Detail :template="template"></Detail>
</template>
<script lang="ts" setup>
import Detail from '../Common/Detail.vue'
import { computed, reactive, ref } from 'vue';
import { useMazeStore } from './store';

const store = useMazeStore()

const template = reactive<{
    name: string,
    value: any
}[]>([])

template.push({
    name: "宽",
    value: computed(() => store.height)
}, {
    name: "高",
    value: computed(() => store.width)
}, {
    name: "种子",
    value: computed(() => store.seed)
})
</script>