Vue.component('vue-pagination', {
  template:'<div class="vue-pagination">'+
  '<ul>'+
  '  <li><a @click="btnClick(1)">首页</a></li>'+
  '  <li><a @click="btnClick(page_cur-1)">上一页</a></li>'+
  '  <li v-for="index in page_list" v-bind:class="{ active: page_cur == index}">'+
  '    <a v-on:click="btnClick(index)">{{ index }}</a>'+
  '  </li>'+
  '  <li><a @click="btnClick(page_cur+1)">下一页</a></li>'+
  '  <li><a @click="btnClick(page_total)">尾页(共<i>{{page_total}}</i>页)</a></li>'+
  '</ul>'+
  '</div>',
 props: {
      page_cur: {
        type: [String, Number],
        required: true
      },
      page_total: {
        type: [String, Number],
        required: true
      },
      on_click: {
        default() {
          return function on_click(data) {
            // todo
            this.page_cur = data
          }
        }
      }
    },
    computed: {
      page_list() {
        var left = 1
        var right = this.page_total
        var ar = [] 
        if (this.page_total >= 11) {
          if (this.page_cur > 5 && this.page_cur < this.page_total - 4) {
            left = this.page_cur - 5
            right = this.page_cur + 4
          } else {
            if (this.page_cur <= 5) {
              left = 1
              right = 10
            } else {
              right = this.page_total
              left = this.page_total -9
            }
          }
        }
        while (left <= right) {
          ar.push(left)
          left ++
        }   
        return ar
      }
    },
    methods: {
      btnClick(page) {
        if (page != this.page_cur) {
          if(page>0 && page <= this.page_total){
            // this.page_cur = page
            this.on_click(page)
          }
        }
      }
    }
});
