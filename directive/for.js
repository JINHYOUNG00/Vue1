const template = /*html*/ `
    <table class="table table-striped table-hover">
        <thead>
            <tr>
                <th>인덱스</th>
                <th>제품명</th>
                <th>가격</th>
            </tr>
        </thead>
        <tbody>
            <tr :key="i" v-for="(prod, i) in prod">
                <td v-text="i"></td>
                <td v-text="prod.prodNm"></td>
                <td v-text="prod.price">20000</td>
            </tr>
        </body>
    </table>
`;

export default {
  template: template,
  data() {
    return {
      prod: [
        {
          prodNm: "키보드",
          price: 30000,
        },
        {
          prodNm: "노트북",
          price: 300000,
        },
        {
          prodNm: "모니터",
          price: 25000,
        }
      ],
    };
  },
  methods: {},
};
