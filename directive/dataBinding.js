const template = /*html*/`
                <!-- 태그 내용 바인딩 -->
                <div>{{htmlString}}</div>
                <div v-text="htmlString"></div>
                <div v-html="htmlString"></div>
                <!-- v-model 폼필드(input) 바인딩 -->
                <input type="text" class="form-control mb-3" v-model="memInfo.valueModel">
                <input type="number" class="form-control mb-3" v-model.number="memInfo.score">
                <p v-text="memInfo.valueModel"></p>
                <textarea v-model.lazy="memInfo.memo" class="form-control mb-3"></textarea>
                <select v-model="memInfo.city">
                <option value="02">서울</option>
                <option value="21">부산</option>
                    <option value="064">제주</option>
                    </select>
                <div class="form-check">
                <label class="form-check-label">
                <input type="checkbox" class="form-check-input" value="02" v-model="memInfo.mainYn">서울
                    </label>
                    </div>
                    <div class="form-check">
                    <label class="form-check-label">
                        <input type="checkbox" class="form-check-input" value="21" v-model="memInfo.mainYn">부산
                    </label>
                    </div>
                <div class="form-check">
                <label class="form-check-label">
                        <input type="checkbox" class="form-check-input" value="064" v-model="memInfo.mainYn">제주
                    </label>
                </div>
                <div class="form-check">
                    <label class="form-check-label">
                        <input type="radio" class="form-check-input" value="02" v-model="memInfo.picked">서울
                    </label>
                    </div>
                    <div class="form-check">
                    <label class="form-check-label">
                    <input type="radio" class="form-check-input" value="21" v-model="memInfo.picked">부산
                    </label>
                    </div>
                    <div class="form-check">
                    <label class="form-check-label">
                    <input type="radio" class="form-check-input" value="064" v-model="memInfo.picked">제주
                    </label>
                </div>
                <button class="btn btn-primary" :disabled="memInfo.valueModel==''">등록</button>
                <!-- v-bind 태그 속성 바인딩 -->
                <img :src="memInfo.profile">
                <!-- 클래스 바인딩 -->
                <div class="container" 
                    :class="{active : isActive, 'text-red' : hasError}">클래스 바인딩</div>
                <div class="container" 
                    :class="[activeClass, errorClass]">클래스 배열 바인딩</div>
                <div class="container" 
                    :style="styleObject">인라인 스타일 바인딩</div>

                <p>{{memInfo}}</p>
                `;

export default {
    template,
    data(){
        return {
            htmlString: /*html*/`<p style='color:red'>this is redString</p>`,
            memInfo: {
                valueModel: /*html*/`south korea`,
                score: 100,
                memo: '메모작성',
                city: "064",
                mainYn: ["02", "21"],
                picked: "02",
                profile: "a.jpg"
            },
            isActive: true,
            hasError: false,
            activeClass: 'active',
            errorClass: 'text-red',
            styleObject: {color: 'red', fontSize: '13px'}
        }
    },
    methods : {

    }
}