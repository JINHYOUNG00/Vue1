const template = /*html*/`
    <div>
        <input v-model="todo.userId">
        <input v-model="todo.id">
        <input v-model="todo.title">
        <button @click="addHandler">등록</button>
    </div>
    <table class="table table-striped table-hover">
    <thead>
        <tr>
            <th>userId</th>
            <th>id</th>
            <th>title</th>
            <th>completed</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="(v,i) in todos">
            <td v-text="v.userId"></td>
            <td v-text="v.id"></td>
            <td v-text="v.title"></td>
            <td @click="modHandler(v.id)" v-text="v.completed"></td>
            <td><button class="btn btn-primary" @click="removeHandler(v.id)">삭제</button></td>
        </tr>
    </tbody>
    </table>
`;

const url = `https://jsonplaceholder.typicode.com/todos`;

export default {
    template,
    data() {
        return {
            todos:[],
            todo:{}
        }
    },
    created() {
        axios.get(url)
            .then((json) => {
                console.log(json.data);
                this.todos = json.data;
            })
    },
    methods: {
        addHandler: function(){
            axios.post(url, this.todo)
                .then(json => {
                    console.log(json.data);
                    console.log(this.todo);
                    json.data.completed = false;
                    this.todos.push(json.data);
                    
                })
        },
        removeHandler: function(id){
            axios.delete(`${url}/${id}`)
                .then((json)=>{
                        let newTodos = this.todos.filter((val, idx) => {
                        return val.id != id;
                    });
                    this.todos = newTodos;
                })
        },
        modHandler: function(id){
            
            axios.put(`${url}/${id}`)
                .then((json) => {
                    console.log(json.data);
                    console.log(this.todos)
                    this.todos.forEach((val,idx) => {
                            if(val.id == id && val.completed == false){
                                val.completed = true;
                            } else if (val.id == id && val.completed == true){
                                val.completed = false;
                            }
                            })
                })
        }
        

    }
}