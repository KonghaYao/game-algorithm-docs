<template>
    <!-- 算法网站的所有结构 -->
    <div class="flex flex-col overflow-hidden">
        <Header></Header>
        <div class="flex h-full overflow-hidden">
            <SelecterBar></SelecterBar>
            <div class="flex h-full flex-col w-full">
                <Content></Content>
                <Console></Console>
            </div>
        </div>
        <el-drawer v-model="store.Controller.show" title="数据编辑器">
            <Controller class="flex-grow"></Controller>
        </el-drawer>
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