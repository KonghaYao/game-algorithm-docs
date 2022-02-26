<template>
    <div class="flex flex-col">
        <Detail :template="template"></Detail>
    </div>
</template>

<script lang="ts" setup>
import { computed, reactive, ref } from 'vue';
import { useMapStore } from './store';
import Detail from '../Common/Detail.vue';

const store = useMapStore()

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