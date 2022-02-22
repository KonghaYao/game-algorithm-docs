<template>
    <div class="flex flex-col overflow-hidden">
        <Header></Header>
        <div class="flex h-full overflow-hidden">
            <SelecterBar></SelecterBar>
            <div class="flex h-full flex-col">
                <Content></Content>
                <Console></Console>
            </div>
            <Controller class="flex-grow"></Controller>
        </div>
    </div>
</template>

<script lang="ts" setup>
import Header from './Algorithm/Header.vue';
import Content from './Algorithm/Content.vue';
import Controller from './Algorithm/Controller.vue';
import Console from './Algorithm/Console.vue';
import SelecterBar from './Algorithm/SelecterBar.vue';

</script>