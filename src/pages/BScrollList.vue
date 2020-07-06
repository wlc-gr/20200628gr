<template>
        <scroll class="wrapper"
                :data="data"
                :pulldown="pulldown"
                @pulldown="loadData">
            <ul class="content">
                <li v-for="item in data">{{item.address}}</li>
            </ul>
            <div class="loading-wrapper"></div>
        </scroll>
</template>
<script>
    import scroll from "../components/scroll/scroll";
    import {reqCategorys, reqPosition, reqShops} from '../api'

    export default {
        data() {
            return {
                data: [],
                pulldown: true
            }
        },
        created() {
            this.loadData()
        },
        methods: {
            loadData() {
                reqShops().then((res) => {
                    this.data = res.data.concat(this.data)
                })
            }
        }
    }
</script>
