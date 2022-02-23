<template>
    <div class="flex flex-col">
        <span v-for="{ name, value } in template">
            <span>{{ name }}</span>
            <span>{{ value }}</span>
        </span>
        <span v-for="{ name, pitchTime } in store.pitchArray">
            <span>保底的{{ name }}</span>
            <span>{{ pitchTime }}</span>
        </span>
        <div @click="() => store.wish(100)">抽奖 100 发</div>
    </div>
</template>

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