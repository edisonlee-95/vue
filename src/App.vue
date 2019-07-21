<template>
  <div id="app">
    <!-- 顶部 区域header区域 -->
	<!-- 使用了 mint-ui组件 -->
    <mt-header fixed title="主页"></mt-header>
    <!-- 中间 路由区域区域 -->
	
	<router-view></router-view>

    <!-- 底部 路由区域 -->
	<!-- 使用了MUI的组件 -->
    <nav class="mui-bar mui-bar-tab">
			<router-link :to="{path:'/Home'}" class="mui-tab-item ">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link :to="{path:'/Member'}" class="mui-tab-item" >
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link :to="{path:'/Shopcar'}" class="mui-tab-item">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link :to="{path:'/Search'}" class="mui-tab-item" >
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>

    <h1>hello world</h1>
  </div>

</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      
    }
  }
}
</script>

<style scoped>
#app{
  padding-top: 40px;
}
</style>
