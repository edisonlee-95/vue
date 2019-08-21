<template>
  <div class="Home">
    <mt-swipe :auto="2000">
      <!-- 拿到轮播图数组的数据循环显示到轮播图中 -->
      <!-- <mt-swipe-item v-for="ietm in lunbotulist" :key="ietm.url">
        <img :src="item.img" alt="">
      </mt-swipe-item>-->
      <mt-swipe-item>
        <img src="../../img/1.jpg" alt />
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../../img/2.jpg" alt />
      </mt-swipe-item>
    </mt-swipe>

    <!-- 按钮区域 九宫格形式 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link :to="{path:'/Home/news'}">
          <span class="mui-icon mui-icon-chatboxes"></span>
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-image">
          </span>
          <div class="mui-media-body">图片分享</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon-extra mui-icon-extra-cart"></span>
          <div class="mui-media-body">商品购买</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-compose"></span>
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-videocam"></span>
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-phone"></span>
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { Toast } from "mint-ui";

export default {
  name: "Home",
  data() {
    return {
      /* lunbotulist:[] */
      //轮播图的数组
    };
  },
  /* created () {
    this.getLunbotu();
}, */
  methods: {
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
.mint-swipe {
  height: 200px;
}
.mint-swipe-item:nth-child(1) {
  background: lightblue;
}
.mint-swipe-item:nth-child(2) {
  background: lightcoral;
}
.mint-swipe-item:nth-child(3) {
  background: lightgreen;
}
.mint-swipe-item img {
  width: 100%;
  height: 100%;
}
.mui-table-view{
  background: #fff;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
  border:none
}
.mui-media-body{
  font-size: 13px;
}
.mui-icon-extra{
  font-size: 2.4em;
}

</style>

