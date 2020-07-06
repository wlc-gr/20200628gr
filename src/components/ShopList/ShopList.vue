<template>
    <div class="shop_container">
        <ul class="shop_list" v-if="shops.length">
            <li class="shop_li border-1px" v-for="(shop,index) in shops" :key="index">
                <a>
                    <div class="shop_left">
                        <img class="shop_img" src="./images/shop/3.jpg">
                    </div>
                    <div class="shop_right">
                        <section class="shop_detail_header">
                            <h4 class="shop_title ellipsis">{{shop.name}}</h4>
                            <ul class="shop_detail_ul">
                                <li class="supports" v-for="item in shop.supports">{{item.icon_name}}</li>
                            </ul>
                        </section>
                        <section class="shop_rating_order">
                            <section class="shop_rating_order_left">
                                <start :size="24" :scrore="shop.rating"/>
                                <div class="rating_section">
                                    {{shop.rating}}
                                </div>
                                <div class="order_section">
                                    月售{{shop.recent_order_num}}单
                                </div>
                            </section>
                            <section class="shop_rating_order_right">
                                <span class="delivery_style delivery_right">{{shop.delivery_mode.text}}</span>
                            </section>
                        </section>
                        <section class="shop_distance">
                            <p class="shop_delivery_msg">
                                <span>¥{{shop.float_minimum_order_amount}}起送</span>
                                <span class="segmentation">/</span>
                                <span>{{shop.piecewise_agent_fee.tips}}</span>
                            </p>
                        </section>
                    </div>
                </a>
            </li>
        </ul>
        <ul v-else>
            <li v-for="item in 6">
                <img src="./images/shop_back.svg" alt="back">
            </li>
        </ul>
    </div>
</template>
<script>
    import {mapState} from 'vuex'
    import Start from "../Start/Start";

    export default {
        //父组件传递的参数
        props: {},
        //import引入的组件需要注入到对象中才能使用",
        components: {Start},
        data() {
            //这里存放数据",
            return {
                options: {
                    pullup: true, pulldown: true
                }
            }
        },
        //监听属性 类似于data概念",
        computed: {
            ...mapState(['shops'])
        },
        //监控data中的数据变化",
        watch: {},
        //方法集合",
        methods: {
            pulldown() {
                console.log('xxxxx')
            },
            pullup() {
                console.log('xxxx')
            }
        },
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
    .shop_container
        margin-bottom 50px

        .shop_list
            .shop_li
                bottom-border-1px(#f1f1f1)
                width 100%

                > a
                    clearFix()
                    display block
                    box-sizing border-box
                    padding 15px 8px
                    width 100%

                    .shop_left
                        float left
                        box-sizing border-box
                        width 23%
                        height 75px
                        padding-right 10px

                        .shop_img
                            display block
                            width 100%
                            height 100%

                    .shop_right
                        float right
                        width 77%

                        .shop_detail_header
                            clearFix()
                            width 100%

                            .shop_title
                                float left
                                width 200px
                                color #333
                                font-size 16px
                                line-height 16px
                                font-weight 700

                                &::before
                                    content '品牌'
                                    display inline-block
                                    font-size 11px
                                    line-height 11px
                                    color #333
                                    background-color #ffd930
                                    padding 2px 2px
                                    border-radius 2px
                                    margin-right 5px

                            .shop_detail_ul
                                float right
                                margin-top 3px

                                .supports
                                    float left
                                    font-size 10px
                                    color #999
                                    border 1px solid #f1f1f1
                                    padding 0 2px
                                    border-radius 2px

                        .shop_rating_order
                            clearFix()
                            width 100%
                            margin-top 18px
                            margin-bottom 8px

                            .shop_rating_order_left
                                float left
                                color #ff9a0d


                                .rating_section
                                    float left
                                    font-size 10px
                                    color #ff6000
                                    margin-left 4px

                                .order_section
                                    float left
                                    font-size 10px
                                    color #666
                                    transform scale(.8)

                            .shop_rating_order_right
                                float right
                                font-size 0

                                .delivery_style
                                    transform-origin 35px 0
                                    transform scale(.7)
                                    display inline-block
                                    font-size 12px
                                    padding 1px
                                    border-radius 2px

                                .delivery_left
                                    color #fff
                                    margin-right -10px
                                    background-color #02a774
                                    border 1px solid #02a774

                                .delivery_right
                                    color #02a774
                                    border 1px solid #02a774

                        .shop_distance
                            clearFix()
                            width 100%
                            font-size 12px

                            .shop_delivery_msg
                                float left
                                transform-origin 0
                                transform scale(.9)
                                color #666

                            .segmentation
                                color #ccc
</style>
