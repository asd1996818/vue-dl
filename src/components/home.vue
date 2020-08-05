<template>
   <div>
        <input type="text" v-model="bin">
        <button @click="search()">搜索</button>
       <!--固定头部-->
       <table>
           <thead>
               <th>用户名id</th>
                 <th>用户名</th>
                   <th>头像</th>
                     <th>缩略图</th>
                       <th>第一个评论人</th>
                         <th>第一个评论内容</th>
                           <th>时间</th>
           </thead>
           <!-- 主题内容 --> 
           <tbody>
               <tr v-for="(item ,index) in login1" :key="index">
                   <td>{{item.uid}}</td>
                   <td>{{item.name}}</td>
                   <td>
                       <img :src="item.header" alt="" style="width:50px;height:50px;">
                   </td>
                   <td>
                       <img :src="item.thumbnail" alt="" style="width:50px;height:50px;">
                   </td>
                   <td>{{item.top_comments_name}}</td>
                   <td>{{item.top_comments_content}}</td>
                   <td>{{item.passtime}}</td>
               </tr>       
           </tbody>
       </table>
       <!-- disabled当页面=1禁止点击-->
   <!--disabled dc不可  禁用-->
       <button @click="login3(true)" v-bind:disabled="page<=1"> 上一页</button>
       <button @click="longin2(item)" v-for="(item,index) in dde" :key="index">{{item}}</button>
       <button @click="login3(false)" v-bind:disabled="page>=dde.length"> 下一页</button>
       
       <input type="text" v-model="page">
       <button @click="seve()">确定</button>
   </div>
</template> 



<script>
      
   //export导出 default 默认值
   export default{
 
       name:'home',
       data(){
           return{
           login1:[],  
           page:1,
           dde:[
               1,2,3,4,5,6,7,8,9,10,11,12
           ],
           bin:""
           }
       },       
       created(){          
          this.requestAction();
       },
       //点击按钮页数加1
       methods:{
           login3(updown){
               
               if(updown == true){
                   this.page--
               }else{
                   this.page++
               }
               //返回登录页面 this.$router.go(-1)
            this.requestAction();
           },
           longin2(item){
                this.page=item      
          this.requestAction();
           },  
             requestAction(){

                 //https://api.apiopen.top/getSingleJoke?sid=this.bin
               this.$axios({
                  //页数数据加一
               url:'https://api.apiopen.top/getJoke?page='+ this.page + '&count=10&type=video'
           }).then(res=>{
               this.login1=res.data.result
           })
       } ,
       search(){
           //在方面里面不能直接找到data 必须用this
           this.$axios({
               url:'https://api.apiopen.top/getSingleJoke?sid='+this.bin
           }).then(res=>{
                 this.login1 = []
                 this.login1.push(res.data.result)
                 console.log(this.login1)
           })
           console.log(this.bin);//加引号是字符串,可打印 反之是变量必须声明才能用
       }
       },    
   }
   //字符串拼接
</script>

<style lang="postcss" scoped>
   button:hover{
       color:skyblue;
   }  
</style>