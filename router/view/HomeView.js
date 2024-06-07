const template = /*html */`
    <div>
        <h1>home</h1>
        <button @click="goToUser">사용자홈으로 이동</button>
    </div>
`;

export default {
    template,
    data(){
        return{
            
        }
    },
    methods:{
        goToUser: function(){
            // this.$router.push('/user');
            this.$router.push({name:'user', params:{id:'park'} });
        }
    }
}