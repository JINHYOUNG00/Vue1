<template>
    <div><PageTitle title="부모한테 받은 타이틀"></PageTitle></div>
    <div><pageTitle :title="mytitle"></pageTitle></div>
    <div><page-title title="서브타이틀2"></page-title></div>
    <hr>
    <div><BlogComp :id="blog.id" :title="blog.title"/></div>
    <hr>
    <div><BlogComp :blog/></div>
    <h1>중첩 컴포넌트</h1>
</template>
<script>
import PageTitle from "../components/PageTitle.vue"
import BlogComp from "../components/BlogComp.vue"
export default {
    components:{PageTitle, BlogComp},
    data() {
        return {
            mytitle: '동적으로 전달 타이틀',
            blog: {
                id:3, title: 'post1'
            }
        }
    },
    methods: {
    },
    created() {
    }
}
</script>
<style></style>