<template>
  <div id="home">
    <nav-bar class='home-nav'>
        <div slot='center'>购物街</div>
    </nav-bar>
    <!-- 父子组件通信 -->
    <home-swiper :banner='banner'></home-swiper>
    <recommend-view :recommends='recommends'> </recommend-view>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import {getHomeMultidata} from 'network/home';
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'

export default {
    name:"Home",
    components:{
      NavBar,
      HomeSwiper,
      RecommendView
      
    },
    data(){
      return{
        // 因为这样写数据太多了，所以：
        // result:null
        banner:[],
        recommends:[]

        // 垃圾回收机制 result不会消失
      }
      
    },
    created(){
      getHomeMultidata().then(res=>{
        // this.result=res;
        // console.log(res);
        this.banner =res.data.banner.list,
        this.recommends =res.data.recommend.list
        
      }
      )
    }
}

</script>

<style>
  .home-nav{
    background-color: var(--color-tint);
    color:white; 
  }
</style>