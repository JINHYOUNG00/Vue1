<template>
    <hr>
    <input v-model="firstname">
    <input v-model="lastname">
    <div>{{ firstname }} {{ lastname }}</div>
    <div>{{ fullname }}</div>
    <hr>
    <input v-model="name.firstname">
    <input v-model="name.lastname">
    <div>{{ name }}</div>
    <div>{{ fullname2 }}</div>
    <hr>
    <input v-model="reactivename.firstname">
    <input v-model="reactivename.lastname">
    <div>{{ reactivename }}</div>
    <div>{{ fullname3 }}</div>
</template>

<script setup>
import { ref, computed, reactive } from "vue"
let firstname = ref("hong");
let lastname = ref("gildong");

let fullname = computed(() => {
    return firstname.value + ' ' + lastname.value;
})

let name = ref({ firstname: '길동', lastname: '홍' })
let fullname2 = computed(() => {
    return name.value.firstname + ' ' + name.value.lastname;
})
let reactivename = reactive({ firstname: '길동', lastname: '홍' })
let fullname3 = computed(() => {
    return reactivename.firstname + ' ' + reactivename.lastname;
})
</script>

<style></style>