<template>
<div><p>{{title}}</p></div>
</template>
<script>


export default {
  name: 'sjbd',
  data () {
    return {
      title:''
    }
  },
  created(){
       //获取参数
      this.title = this.$route.query.title
  }
  
    
}
  </script>
<style>
</style>