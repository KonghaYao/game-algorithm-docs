<template>
    <div>
        <FormCreate :rule="rule" v-model:api="fApi" :option="options"></FormCreate>
    </div>
</template>

<script lang="ts" setup>
import formCreate, { Rule, Options } from '@form-create/element-ui'
import { reactive, ref } from 'vue'
import { hub } from './store'
const FormCreate = formCreate.$form();
const fApi = reactive({})
const options = ref({
    onSubmit(formData: { height: number, width: number, seed?: string }) {
        console.log(formData);
        if (formData.seed === '') formData.seed = undefined
        hub.emit('Controller-Change', formData)
    },
    resetBtn: true
}) as Options

const col = {
    span: 16,
    labelWidth: 125
}
const rule: Rule = [
    {
        type: "InputNumber",
        field: "height",
        title: "高",
        value: 100,
        col,
        props: {
            precision: 0,
            step: 1,
        },
    }, {
        type: "InputNumber",
        field: "width",
        title: "宽",
        value: 100,
        col,
        props: {
            precision: 0,
            step: 1,
        },
    }, {
        type: "input",
        title: "地图种子",
        field: "seed",
        value: "",
        col,
        props: {
            type: "text",
        }
    }
]

</script>