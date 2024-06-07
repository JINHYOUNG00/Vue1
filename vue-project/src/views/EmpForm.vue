<template>
    <div>
        <h1>사원등록</h1>
        <div>
            사번<input v-model="emp.employee_id">
            firstName<input v-model="emp.first_name">
            lastName<input v-model="emp.last_name">
            email<input v-model="emp.email">
            hireDate<input v-model="emp.hire_date">
        </div>
        <div>
            job_id: <select v-model="emp.job_id">
                <option v-for="j in jobs" :value="j.job_id" v-text="j.job_title"></option>
    
            </select>
        </div>
        <button @click="addHandler">사원등록</button>
    </div>
</template>
<script>
import axios from "axios";
export default {
    data() {
        return {
            emp: {
                employee_id : 100,
                first_name : '',
                last_name : '',
                email : '',
                hire_date: '',
                job_id: ''
            },
            jobs:[]
        }
    },
    methods: {
        addHandler: async function(){
            await axios.post("/empInsert", this.emp);
            // 목록페이지로 이동
            this.$router.push('/emp')
        }
    },
    created() {
        const url = `/empDeptJob`;
        axios.get(url)
            .then(json => {
                return this.jobs = json.data.jobs;
            })
    }
}
</script>
<style></style>