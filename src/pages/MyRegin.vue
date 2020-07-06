<template>
    <div>
        <v-region @values="regionChange"></v-region>
        <hr/>
        <button @click="myalert">提交</button>
        <hr/>
        <button @click="myMask">提交</button>
        <hr/>
        <button @click="myToast">提交</button>
        <hr/>
        <v-suggest
                :data="example"
                show-field="name"
                v-model="myValue"
        ></v-suggest>
    </div>
</template>
<script>

    import { Suggest } from 'v-suggest'
    export default {
        //父组件传递的参数
        props: {},
        //import引入的组件需要注入到对象中才能使用",
        components: {'v-suggest': Suggest},
        data() {
            //这里存放数据",
            return {
                myValue: '',
                example: [
                    { id: 1, name: 'Chicago Bulls', desc: '芝加哥公牛' },
                    { id: 2, name: 'Cleveland Cavaliers', desc: '克里夫兰骑士' },
                ]
            }
        },
        //自定义管道过滤器
        filters: {},
        //监听属性 类似于data概念",
        computed: {},
        //监控data中的数据变化",
        watch: {},
        //方法集合",
        methods: {
            myToast() {
                this.$dlg.toast('message')
            },
            myMask() {
                const key = this.$dlg.mask('Data loading, please hold on a moment...')

// do some stuff
                job().then(resp => {
                    // close mark layer when job done
                    this.$dlg.close(key)
                })
            },
            regionChange(data) {
                console.log(data);
            },
            myalert() {
                // alert message
                this.$dlg.alert('message');
            },
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
<style scoped>

</style>
