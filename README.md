# vue-pagination
简单的分页组件
```

vue-pagination.vue 是单一文件组件，具体使用方法参考 vuejs.org （其实我也不会用那个，所以都没测试）

我用的是 index.html 这个demo里这种简单的方式，容易上手（脚手架那种，nodejs那种自然是好，但是开始的门槛对半路出家的phper有些难度，没爱深入学习）

vue-pagination只要正常使用 vue.js的时候，引入 vue-pagination.css 和 vue-pagination.js 就可以用这个组件了。

传入参数主要是三个
page_cur 当前页
page_total 总页数
on_click 页面切换回调（为了数据统一性，一般应自己处理 page_cur 的变化，回调的时候会传回 点击了哪一页）

简单来说 on_click的function(new_page) {
  this.page_cur = new_page // 至少包含这个
}


<vue-pagination :page_cur="page_cur" :page_total="page_total" :on_click="callback"><vue-pagination>
  
<script type="text/javascript">
  // import vue_pagination from "./vue_pagination.vue";
  var app = new Vue({
      el: '#app',
      data:{
        page_cur: 1,
        page_total: 8,
        msg: ''
      },
      methods:{
        callback(data) {
        this.page_cur = data
         //  this.msg = '你点击了'+data+ '页'
        }
      }
  })

</script>
```
 ![image](https://github.com/cycgit/vue-pagination/blob/master/demo.png)
