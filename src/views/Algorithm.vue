<template>
    <!-- 算法网站的所有结构 -->
    <div class="flex flex-col overflow-hidden">
        <Header></Header>
        <div
            class="flex h-full overflow-hidden"
            :style="{
                backgroundImage: 'https://source.unsplash.com/random'
            }"
        >
            <SelecterBar></SelecterBar>
            <div class="flex h-full flex-col w-full overflow-hidden">
                <Content class="flex-grow"></Content>
                <Console class="flex-grow"></Console>
            </div>
            <div
                class="transition-all"
                :style="{
                    width: store.Controller.show ? 'auto' : 0,
                    maxWidth: '25%'
                }"
            >
                <Controller></Controller>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>

import Header from './Algorithm/Header.vue';
import Content from './Algorithm/Content.vue';
import Controller from './Algorithm/Controller.vue';
import Console from './Algorithm/Console.vue';
import SelecterBar from './Algorithm/SelecterBar.vue';
import { useAlgorithmStore } from './Algorithm/store';
const store = useAlgorithmStore()

</script>