const template = /*html*/ `
                <select v-model="selValue" class="form-control mb-3" @change="changeSelect">
                    <option value="">도시선택</option>
                    <option :key="i" v-for="(c, i) in citys" :value="c.value" v-text="c.text">서울</option>
                </select>
                <input @keyup.down="doSomeing" v-model="firstName">
                <input @click.ctrl="doSomeing" v-model="lastName">
                <div v-text="'watch ' + fullName"></div>
                <div v-text="'computed ' + computedFullName"></div>
                `;

export default {
  template,
  data() {
    return {
      selValue: "21",
      citys: [
        {
          value: "02",
          text: "서울",
        },
        {
          value: "21",
          text: "부산",
        },
        {
          value: "064",
          text: "제주",
        },
      ],
      firstName: "길동",
      lastName: "홍",
      fullName: "",
    };
  },
  watch: {
    firstName() {
      return (this.fullName = this.firstName + this.lastName);
    },
    lastName() {
      return (this.fullName = this.firstName + this.lastName);
    },
  },
  computed: {
    computedFullName(){
        return this.fullName = this.firstName + this.lastName;
    }
  },
  methods: {
    changeSelect() {
      const result = this.citys.find((e) => {
        return e.value == this.selValue;
      });
      alert(result.text);
    },
    doSomeing() {
      alert("엔터");
    },
  },
};
