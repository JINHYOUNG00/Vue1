<template>
    <Router-Link to="/empForm">사원등록</Router-Link>
    <div>
        <span>employeeId</span>
        <span>firstName</span>
        <span>lastName</span>
    </div>
    <div v-for="e in employees">
        <span v-text="e.employee_id"></span>
        <span @click="gotoUpdateForm" v-text="e.first_name"></span>
        <span v-text="e.last_name"></span>
    </div>
</template>
<script>
import axios from "axios";
export default {
    data() {
        return {
            employees: []
        }
    },
    methods: {
        gotoUpdateForm: function(){
            this.$router.push('/empUpdateForm');
        }
    },
    created() {
        const url = `/empSelect`;
        axios.get(url)
            .then(json => {
                return this.employees = json.data
            })
    }
}
</script>
<style>
    span {
        display: inline-block;
        width: 20%;
    }
</style>