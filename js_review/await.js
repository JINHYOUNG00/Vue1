// 비동기, 동기
async function callAPI(){
    let post = await fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(resolve => resolve.json())

        console.log(post.userId)
        console.log("fetch comp");
}

callAPI();