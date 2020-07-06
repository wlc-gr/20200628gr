<template>
    <div>
        <div class="star" :class="'star-'+size">
            <span class="star-item" v-for="(sc,index) in calsses" :class="sc" :key="index"></span>
        </div>
    </div>
</template>
<script>

    export default {
        //父组件传递的参数
        props: {
            scrore: {
                type: Number,
                default: 0
            },
            size: {
                type: Number,
                default: 24
            }
        },
        //import引入的组件需要注入到对象中才能使用",
        components: {},
        data() {
            //这里存放数据",
            return {}
        },
        //自定义管道过滤器
        filters: {},
        //监听属性 类似于data概念",
        computed: {
            calsses() {
                let array = [];
                let onnumber = Math.floor(this.scrore);
                for (let i = 0; i < onnumber; i++) {
                    array.push('on');
                }
                if ((this.scrore - onnumber) * 10 >= 5) {
                    array.push('half')
                }
                while (array.length <5) {
                    array.push('off')
                }
                console.log(array)
                return array;
            }
        },
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
    .star //2x图 3x图
        float left
        font-size 0

        .star-item
            display inline-block
            background-repeat no-repeat

        &.star-48
            .star-item
                width 20px
                height 20px
                margin-right 22px
                background-size 20px 20px

                &:last-child
                    margin-right: 0

                &.on
                    bg-image('./images/stars/star48_on')

                &.half
                    bg-image('./images/stars/star48_half')

                &.off
                    bg-image('./images/stars/star48_off')

        &.star-36
            .star-item
                width 15px
                height 15px
                margin-right 6px
                background-size 15px 15px

                &:last-child
                    margin-right 0

                &.on
                    bg-image('./images/stars/star36_on')

                &.half
                    bg-image('./images/stars/star36_half')

                &.off
                    bg-image('./images/stars/star36_off')

        &.star-24
            .star-item
                width 10px
                height 10px
                margin-right 3px
                background-size 10px 10px

                &:last-child
                    margin-right 0

                &.on
                    bg-image('./images/stars/star24_on')

                &.half
                    bg-image('./images/stars/star24_half')

                &.off
                    bg-image('./images/stars/star24_off')

</style>
