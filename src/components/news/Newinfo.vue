<template>
  <div class="conenter-info">
      <h3>幸福</h3><!-- {{id}} 接口对应请求id  -->
      <p class="title-info"><span>发布时间：2019.8.20 12：00</span>
      <span>浏览次数:0次</span></p>
      <hr>
      <p>这是一个内容</p>
      
   </div>
</template>

<script>
export default {
   data(){
      return {
         id:this.$route.params.id
      }
   }
};
</script>

<style>
.conenter-info h3{
font-size: 16px;
color: red;
text-align: center;
margin-top: 30px;
margin-bottom: 30px;
}
.title-info{
   font-size: 13px;
   color: #226aff;
   display: flex;
   justify-content: space-between;
}
</style>