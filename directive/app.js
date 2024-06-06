import headers from './header.js';
import footers from './footer.js';
import dataBinding from './dataBinding.js';
import fors from './for.js';
import ifs from './if.js';
import events from './event.js';
import posts from './post.js';
import todos from './todo.js';

const {createApp} = Vue;
const template = 
/*html*/`   <div>
                <headers/>
                <todos/>
                <footers/>
            </div>`;

// vue 인스턴스 생성
const component = {
    template : template, // 화면
    name : "모듈연습", // 생략 가능
    components: {headers, footers, dataBinding, fors, ifs,events, posts, todos},
    data(){ // 모델
        return {
            name: '홍길동',
            msg : '안녕하세요!!'
        }
    },
    created(){

    },
    mounted(){

    },
    methods : { // 기능
        // function a(){},
        // funca : function(){},
        funca(){},
    },
    computed : {
        fullname(){ },
    }

}

createApp(component).mount('#app')