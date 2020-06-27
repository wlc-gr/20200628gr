<template>
    <div class="header">
        <slot name="left"></slot>
        <span class="header_title">
            <span class="header_title_text ellipsis">{{title}}</span>
        </span>
        <slot name="right"></slot>
    </div>
</template>
<script>
    export default {
        //父组件传递的参数
        props: {
            title: {
                type: String,
                default: ''
            }
        },
        //import引入的组件需要注入到对象中才能使用",
        components: {},
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
    .header
        background-color #02a774
        position fixed
        z-index 100
        left 0
        top 0
        width 100%
        height 45px

        .header_search
            position absolute
            left 15px
            top 50%
            transform translateY(-50%)
            width 10%
            height 50%

            .icon-sousuo
                font-size 25px
                color #fff

        .header_title
            position absolute
            top 50%
            left 50%
            transform translate(-50%, -50%)
            width 50%
            color #fff
            text-align center

            .header_title_text
                font-size 20px
                color #fff
                display block

        .header_login
            font-size 14px
            color #fff
            position absolute
            right 15px
            top 50%
            transform translateY(-50%)

            .header_login_text
                color #fff
</style>
