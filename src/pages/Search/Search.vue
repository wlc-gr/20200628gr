<template>
    <div class="search">
        <HeaderTop title="搜索"></HeaderTop>
        <form class="search_form" action="#">
            <input type="search" name="search" placeholder="请输入商家或美食名称" class="search_input">
            <input type="submit" name="submit" class="search_submit">
        </form>
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
    .search  //搜索
        width 100%
        .search_form
            clearFix()
            margin-top 45px
            background-color #fff
            padding 12px 8px
            input
                height 35px
                padding 0 4px
                border-radius 2px
                font-weight bold
                outline none
                &.search_input
                    float left
                    width 79%
                    border 4px solid #f2f2f2
                    font-size 14px
                    color #333
                    background-color #f2f2f2
                &.search_submit
                    float right
                    width 18%
                    border 4px solid #02a774
                    font-size 16px
                    color #fff
                    background-color #02a774
</style>
