   
<template>
  <div class="hello" >     
       <button @click="login">登录</button>

  </div>
</template>
<script>
 
export default {
  name: 'HelloWorld',
  data () {
    return {
       
    }
  },
    methods:{
        login(){
          //路由跳转
           this.$router.push('home')
        }
    }
       

       
    
   
    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: pink;
}
</style>
