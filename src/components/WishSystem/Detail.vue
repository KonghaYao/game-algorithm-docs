<template>
    <div class="flex flex-col">
        <div v-for="{ name, value } in template" class="row">
            <span>{{ name }}</span>
            <span>{{ value }}</span>
        </div>
        <span v-for="{ name, pitchTime, totalTime } in store.pitchArray">
            <div class="row">
                <span>{{ name }}</span>
                <span>{{ totalTime }} 次</span>
            </div>
            <div class="row text-xs pl-4">
                <span>保底</span>
                <span>{{ pitchTime }} 次</span>
            </div>
            <div class="row text-xs pl-4">
                <span>综合概率</span>
                <span>{{ (totalTime * 100 / store.wishCount).toFixed(2) }}%</span>
            </div>
        </span>
        <el-button @click="() => store.wish(100)">抽奖 100 发</el-button>
        <el-button @click="() => store.clearWishRecord()">清空当前记录</el-button>
    </div>
</template>

<style scoped>
.row {
    @apply flex flex-row justify-between;
}
</style>

<script lang="ts" setup>
import { computed, reactive, ref } from 'vue';
import { useWishStore } from './store';

const store = useWishStore()

const template = reactive<{
    name: string,
    value: any
}[]>([])

template.push({
    name: "用户 ID ",
    value: computed(() => store.userID)
},
    {
        name: "抽奖次数",
        value: computed(() => store.wishCount)
    },

    {
        name: "种子",
        value: computed(() => store.seed)
    })


</script>