<template>
    <div>
        <div class="box">
            <img :src="imgsrc" alt="">
            <div class="box1">
                <strong>{{c1}}</strong>
                <p>{{c2}}</p>
                <p>{{c3}}</p>
            </div>
        </div>
        <ul>
            <li v-for="data,index in datalist">
                <!-- {{data}} -->
                <img :src="data.imageUrl"class="smallimg" alt="">
                <div class="box22">
                    <div class="box2">
                        <div class="box3">海外直发</div>
                        <p>{{data.englishName}}</p>
                        <p>{{data.chineseName}}</p>
                        <p>{{data.discountText}}</p>
                    </div>
                </div>
            </li>
        </ul>
    </div> 
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            datalist:[],
            imgsrc:this.imgsrc,
            c1:this.c1,
            c2:this.c2,
            c3:this.c3,
           
        }
    },
    // components:{
    //     homesearch
    // },
    mounted(){
        axios({
            url:'http://www.mei.com/appapi/home/mktBannerApp/v3?silo_id=2013000100000000011&platform_code=PLATEFORM_H5'
        }).then(res=>{
            //console.log(res.data.banners[0].main_image);
            this.imgsrc=res.data.banners[0].main_image
            this.c1=res.data.banners[0].main_title
            this.c2=res.data.banners[0].sub_title
            this.c3=res.data.banners[0].description
        }),
        axios({
            url:'http://www.mei.com/appapi/silo/eventForH5?categoryId=crossborder&pageIndex=1&timestamp=1557320015600&summary=141a5139a8831568bdc2f6259db0cf4a&platform_code=H5'
        }).then(res=>{
            console.log(res.data.eventList)
            this.datalist=res.data.eventList
        })
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    img{
        width:7.5rem;
    }
    .box{
        position:relative;
        color:white
    }
    strong{
        margin-bottom: .08rem;
        line-height: .84rem;
        font-size:.49rem;
    }
    .box1{
        width:2.9rem;
        height:1.25rem;
        text-align:center;
        position:absolute;
        top:6.47rem;
        left:2.33rem;   
    }
    p{
        font-size:.26rem;
    }
    li{
        width:6.88rem;
        height:4.15rem;
        margin:.2rem auto;
        position:relative;
    }
    li .smallimg{
        width:100%;
    }
    .box2{
        width:2.86rem;
        height:1.42rem;
        position:absolute;
        left:.22rem;
    }
    .box2 p{
        color:white;
        font-size:.26rem;
        line-height:.4rem;
    }
    .box2 p:first-of-type{
        font-size:.36rem;
    }
    .box3{
        width:1.02rem;
        height:.29rem;
        background:white;
        color:black;
        font-size:.22rem;
        text-align:center;
        line-height:.29rem;
    }
    .box22{
        position:absolute;
        bottom:0;left:0;
        width:6.88rem;
        height:1.58rem;
        background-image: linear-gradient(180deg,transparent,rgba(0,0,0,.55));
    }
</style>
