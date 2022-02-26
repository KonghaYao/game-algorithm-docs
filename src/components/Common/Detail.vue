<template>
    <div class="flex flex-col">
        <div v-for="{ name, value } in template" class="row">
            <span class="text-left">{{ name }}</span>
            <span class="text-right">{{ value }}</span>
        </div>
    </div>
</template>
<style scoped>
.row {
    @apply flex flex-row justify-between hover:bg-slate-50 select-none w-full;
}
</style>
<script lang="ts" setup>
const { template } = defineProps<{
    template: {
        name: string,
        value: any
    }[]
}>()

</script>