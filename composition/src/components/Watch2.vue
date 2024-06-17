<template>
    <div>
        <input v-model="a.num1">
        <input v-model="a.num2">
        <div>{{ a.result }}</div>
    </div>
</template>

<script setup>
import { reactive, watch } from 'vue'
let a = reactive(
    {
        num1: 0,
        num2: 0,
        result: 0
    }
);

watch(a, (newNum, oldNum) => {
    a.result = Number(newNum.num1) + Number(newNum.num2)

    console.log(newNum)
})

// watch(a, (newNum, oldNum) => {
//     a.result = a.num1 + newNum
//     console.log(newNum)
// })

</script>

<style></style>