<template>
    <div class="order">
        <header-top title="订单列表"></header-top>
        <section class="order_no_login">
            <img src="./images/person.png">
            <h3>登录后查看外卖订单</h3>
            <button>立即登陆</button>
        </section>
    </div>
</template>
<script>
import HeaderTop from "../../components/HeaderTop/HeaderTop";
    export default {
        //父组件传递的参数
        props: {},
        //import引入的组件需要注入到对象中才能使用",
        components: {HeaderTop},
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
    .order  //订单
        width 100%
        .order_no_login
            padding-top 140px
            width 60%
            margin 0 auto
            text-align center
            >img
                display block
                width 100%
                height 30%
            >h3
                padding 10px 0
                font-size 17px
                color #6a6a6a
            >button
                display inline-block
                background #02a774
                font-size 14px
                color #fff
                border 0
                outline none
                border-radius 5px
                padding 10px 20px
</style>
