const template = /*html */`
    <div>
        <h1>User</h1>
        <div>props : {{id}}</div>
        <div>params : {{this.$route.params.id}}</div>
        <div>query : {{this.$route.query.username}}</div>
        <RouterView/>
    </div>
`;

export default {
    template,
    props: {
        id:String
    },
    data(){
        return{
            
        }
    }
}