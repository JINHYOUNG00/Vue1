const template = /*html*/ `
    <div>
        <input v-model="post.userId">
        <input v-model="post.title">
        <input v-model="post.body">
        <button @click="startPost">등록</button>
    </div>
    <table class="table table-striped table-hover">
        <thead>
            <tr>
                <th>userId</th>
                <th>id</th>
                <th>title</th>
                <th>body</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(v,i) in posts">
                <td v-text="v.userId"></td>
                <td v-text="v.id"></td>
                <td v-text="v.title"></td>
                <td v-text="v.body"></td>
                <td><button @click="delBtn(v.id)" class="btn btn-primary">삭제</button></td>
            </tr>
        </tbody>
    </table>
`;

const url = `https://jsonplaceholder.typicode.com/posts`;

export default {
  template,
  data() {
    return {
      posts: [],
      post: {},
    };
  },
  created() {
    axios.get(url)
        .then((json) => {
      console.log(json);
      return (this.posts = json.data);
    });
  },
  methods: {
    startPost() {
    //   console.log(this.post);
    //   alert(JSON.stringify(this.post))
      axios.post(url, this.post)
      .then(json => this.posts.push(json.data))
    },
    delBtn(id){
        axios.delete(url + "/" + id)
            .then(json => {
                let data = this.posts.filter((a, idx) => {
                    return a.id != id
                })
                this.posts = data;
            })
    }
  },
};
