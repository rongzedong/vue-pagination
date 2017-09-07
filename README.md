# vue-pagination
简单的分页组件
```
  <vue-nav :page_cur="page_cur" :page_total="page_total" :on_click="callback"></vue-nav>
  
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
