<template>
    <div id="searchview" :style="{'height':height}" v-show:false>
    <i class="iconfont icon-fangdajing"></i>
        <input type="text" :placeholder="thatholder">
        <p>搜索发现</p>
        <ul>
            <li v-for="data,index in searchlist">
                {{data.findKeyWord}}
            </li>
        </ul>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data() {
            return {
                searchlist:[],
                thatholder:"",
                height:"0"
            }
        },
        mounted(){
            this.height = window.innerHeight + 'px'
            axios({
                url:"http://www.mei.com/appapi/search/searchFind/v3"
            }).then(res=>{
                this.searchlist = res.data.searchFindList
            }),
            axios({
                url:"http://www.mei.com/appapi/search/searchDefault/v3"
            }).then(res=>{
                this.thatholder = res.data.words
            })
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="../assets/iconfont/iconfont.css"></style>
<style scoped lang="scss">
    #searchview {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background: lightblue;
    }
    ul {
        padding: 0.2rem;
        display: flex;
        flex-wrap: wrap;
    }
    li {
        width: 2.3666667rem;
        text-align: center;
    }
</style>
