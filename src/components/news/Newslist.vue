<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media">
        <router-link :to="'/Home/newinfo' "><!-- 有借口时加上 +item.id发起ajex请求ID -->
          <img class="mui-media-object mui-pull-left" src="../../../img/paoge.png" />
          <div class="mui-media-body">
            <h1>幸福</h1>
            <p class="mui-ellipsis">
                <span>发布时间：2019.08.13 12:30</span>
                <span>浏览数据：0次</span>
            </p>
          </div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media">
        <router-link :to="'/Home/newinfo'">
          <img class="mui-media-object mui-pull-left" src="../../../img/paoge.png" />
          <div class="mui-media-body">
            <h1>幸福</h1>
            <p class="mui-ellipsis">
                <span>发布时间：2019.08.13 12:30</span>
                <span>浏览数据：0次</span>
            </p>
          </div>
        </router-link>
      </li><li class="mui-table-view-cell mui-media">
        <router-link :to="'/Home/newinfo'">
          <img class="mui-media-object mui-pull-left" src="../../../img/paoge.png" />
          <div class="mui-media-body">
            <h1>幸福</h1>
            <p class="mui-ellipsis">
                <span>发布时间：2019.08.13 12:30</span>
                <span>浏览数据：0次</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    name:'Newslist',
    data () {
        return {
            
        }
    }
};
</script>

<style scoped>
.mui-table-view li h1{
    font-size: 14px;
}
.mui-ellipsis{
    font-size: 12px;
    color: #226aff;
    display: flex;
    justify-content: space-between;

}
</style>

