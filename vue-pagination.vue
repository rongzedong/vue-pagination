<template lang="html">
<div class="vue-pagination">
	<ul>
		<li><a @click="btnClick(1)">首页</a></li>
		<li><a @click="btnClick(page_cur-1)">上一页</a></li>
		<li v-for="index in page_list" v-bind:class="{ active: page_cur == index}">
			<a v-on:click="btnClick(index)">{{ index }}</a>
		</li>
		<li><a @click="btnClick(page_cur+1)">下一页</a></li>
		<li><a @click="btnClick(page_total)">尾页(共<i>{{page_total}}</i>页)</a></li>
	</ul>
</div>
</template>

<script>
export default {

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
          return function on_click() {
            // todo
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
            this.page_cur = page
            this.on_click(page)
          }
        }
      }
    }
}
</script>

<style lang="css">
.vue-pagination ul,.vue-pagination li{
    margin: 0px;
    padding: 0px;
}
.vue-pagination li{
    list-style: none
}
.vue-pagination li:first-child>a {
   margin-left: 0px
}
.vue-pagination a{
    border: 1px solid #ddd;
    text-decoration: none;
    position: relative;
    float: left;
    padding: 6px 12px;
    margin-left: -1px;
    line-height: 1.42857143;
    color: #337ab7;
    cursor: pointer
}
.vue-pagination a:hover{
    background-color: #eee;
}
.vue-pagination .active a{
    color: #fff;
    cursor: default;
    background-color: #337ab7;
    border-color: #337ab7;
}
.vue-pagination i{
    font-style:normal;
    color: #d44950;
    margin: 0px 4px;
    font-size: 12px;
}

</style>
