<template>
  <div class="Home">
    <mt-swipe :auto="2000">
        <!-- 拿到轮播图数组的数据循环显示到轮播图中 -->
      <!-- <mt-swipe-item v-for="ietm in lunbotulist" :key="ietm.url">
        <img :src="item.img" alt="">
      </mt-swipe-item> -->
      <mt-swipe-item><img src="../../img/1.jpg" alt=""></mt-swipe-item>
      <mt-swipe-item><img src="../../img/2.jpg" alt=""></mt-swipe-item>
    </mt-swipe>
    <h3>Home</h3>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'

export default {
  name: "Home",
  data() {
    return {
        /* lunbotulist:[] */ //轮播图的数组
    };
  },
  /* created () {
    this.getLunbotu();
}, */
  methods:{
      /* getLunbotu(){//获取轮播图数据
          this.$http.get("http://image.baidu.com/channel/listjson?pn=0&rn=30&tag1=明星&tag2=全部&ie=utf8").then(result =>{
              console.log(result.body);
            if(result.body.status === 0){
                //成功了
                this.lunbotulist = result.body.message;
            }else{
                //失败了
                Toast('加载轮播图失败...')
            }
          })
      } */
  }
};
</script>

<style  scoped>
.mint-swipe{
    height: 200px;
}
.mint-swipe-item:nth-child(1){
    background: lightblue
    
}
.mint-swipe-item:nth-child(2){
    background:lightcoral
}
.mint-swipe-item:nth-child(3){
    background: lightgreen
}
.mint-swipe-item img{
    width: 100%;
    height: 100%;
}

</style>

