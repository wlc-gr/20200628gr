<template>
    <div class="msite">
        <!--首页头部-->
        <HeaderTop title="昌平区北七家宏福科技园(337省道北)">
            <span class="header_search" slot="left">
                <i class="iconfont icon-sousuo"></i>
            </span>
            <span class="header_login" slot="right">
               <span class="header_login_text">登录|注册</span>
             </span>
        </HeaderTop>
        <!--首页导航-->
        <nav class="msite_nav">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <a href="javascript:" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/nav/1.jpg">
                            </div>
                            <span>甜品饮品</span>
                        </a>
                        <a href="javascript:" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/nav/2.jpg">
                            </div>
                            <span>商超便利</span>
                        </a>
                        <a href="javascript:" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/nav/3.jpg">
                            </div>
                            <span>美食</span>
                        </a>
                        <a href="javascript:" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/nav/4.jpg">
                            </div>
                            <span>简餐</span>
                        </a>
                        <a href="javascript:" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/nav/5.jpg">
                            </div>
                            <span>新店特惠</span>
                        </a>
                        <a href="javascript:" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/nav/6.jpg">
                            </div>
                            <span>准时达</span>
                        </a>
                        <a href="javascript:" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/nav/7.jpg">
                            </div>
                            <span>预订早餐</span>
                        </a>
                        <a href="javascript:" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/nav/8.jpg">
                            </div>
                            <span>土豪推荐</span>
                        </a>
                    </div>
                    <div class="swiper-slide">
                        <a href="javascript:" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/nav/9.jpg">
                            </div>
                            <span>甜品饮品</span>
                        </a>
                        <a href="javascript:" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/nav/10.jpg">
                            </div>
                            <span>商超便利</span>
                        </a>
                        <a href="javascript:" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/nav/11.jpg">
                            </div>
                            <span>美食</span>
                        </a>
                        <a href="javascript:" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/nav/12.jpg">
                            </div>
                            <span>简餐</span>
                        </a>
                        <a href="javascript:" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/nav/13.jpg">
                            </div>
                            <span>新店特惠</span>
                        </a>
                        <a href="javascript:" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/nav/14.jpg">
                            </div>
                            <span>准时达</span>
                        </a>
                        <a href="javascript:" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/nav/1.jpg">
                            </div>
                            <span>预订早餐</span>
                        </a>
                        <a href="javascript:" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/nav/2.jpg">
                            </div>
                            <span>土豪推荐</span>
                        </a>
                    </div>
                </div>
                <!-- Add Pagination -->
                <div class="swiper-pagination"></div>
            </div>
        </nav>
        <!--首页附近商家-->
        <div class="msite_shop_list">
            <div class="shop_header">
                <i class="iconfont icon-xuanxiang"></i>
                <span class="shop_header_title">附近商家</span>
            </div>
        </div>
        <ShopList></ShopList>
    </div>
</template>
<script>
    import ShopList from "../../components/ShopList/ShopList";
    import HeaderTop from "../../components/HeaderTop/HeaderTop";
    import Swiper from 'swiper'
    import 'swiper/css/swiper.css'

    export default {
        //父组件传递的参数
        props: {},
        //import引入的组件需要注入到对象中才能使用",
        components: {HeaderTop,ShopList},
        data() {
            //这里存放数据",
            return {}
        },
        //监听属性 类似于data概念",
        computed: {},
        //监控data中的数据变化",
        watch: {},
        //方法集合",
        methods: {},
        //生命周期 - 创建之前",数据模型未加载,方法未加载,html模板未加载
        beforeCreate() {
        },

        //生命周期 - 创建完成（可以访问当前this实例）",数据模型已加载，方法已加载,html模板已加载,html模板未渲染
        created() {

        },
        //生命周期 - 挂载之前",html模板未渲染
        beforeMount() {

        },

        //生命周期 - 挂载完成（可以访问DOM元素）",html模板已渲染
        mounted() {
            let mySwiper = new Swiper('.swiper-container', {
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                },
            })
        },

        //生命周期 - 更新之前",数据模型已更新,html模板未更新
        beforeUpdate() {

        },
        //生命周期 - 更新之后",数据模型已更新,html模板已更新
        updated() {

        },
        //生命周期 - 销毁之前",
        beforeDestroy() {

        },
        destroyed() {

        },
        //生命周期 - 销毁完成",
        //如果页面有keep-alive缓存功能，这个函数会触发",
        activated() {

        },
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
    @import '../../common/stylus/mixins.styl'
    .msite //首页
        width 100%

        .msite_nav
            bottom-border-1px(#e4e4e4)
            margin-top 45px
            height 200px
            background #fff

            .swiper-container
                width 100%
                height 100%

                .swiper-wrapper
                    width 100%
                    height 100%

                    .swiper-slide
                        display flex
                        justify-content center
                        align-items flex-start
                        flex-wrap wrap

                        .link_to_food
                            width 25%

                            .food_container
                                display block
                                width 100%
                                text-align center
                                padding-bottom 10px
                                font-size 0

                                img
                                    display inline-block
                                    width 50px
                                    height 50px

                            span
                                display block
                                width 100%
                                text-align center
                                font-size 13px
                                color #666

                .swiper-pagination
                    > span.swiper-pagination-bullet-active
                        background #02a774

        .msite_shop_list
            top-border-1px(#e4e4e4)
            margin-top 10px
            background #fff

            .shop_header
                padding 10px 10px 0

                .shop_icon
                    margin-left 5px
                    color #999

                .shop_header_title
                    color #999
                    font-size 14px
                    line-height 20px


</style>
