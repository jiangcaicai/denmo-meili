<template>
    <div>
        <div class="da">
            <img :src="tu"/>
            <div class="xiao">
            <h1>{{tou}}</h1>
            <h2>{{ci}}</h2>
            <p>{{zhe}}</p>
            </div>
        </div>
        <ul class="xiatu">
			<li v-for="data in datalist" @click="handleChangePage(data.filmId)" :key="data.filmId">
                <!-- {{data}} -->
				<img :src="data.imageUrl"/>
                <div class="jianbian">
                    <div class="wenzi">
                        <h1>{{data.englishName}}</h1>
                        <h2>{{data.chineseName}}</h2>
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
        return {
            datalist : [],
            tu : this.tu,
            tou : this.tou,
            ci : this.ci,
            zhe : this.zhe
        }
    },
    mounted(){	
			axios({
				url:"http://www.mei.com/appapi/home/mktBannerApp/v3?silo_id=2013000100000000002&platform_code=PLATEFORM_H5"
				
			}).then(res=>{
				//  console.log(res.data.banners[0])
                 this.tu = res.data.banners[0].main_image,
                 this.tou = res.data.banners[0].main_title,
                 this.ci = res.data.banners[0].sub_title,
                 this.zhe = res.data.banners[0].description
            })
            axios({
				url:"http://www.mei.com/appapi/silo/eventForH5?categoryId=men&pageIndex=1&timestamp=1557312941225&summary=5a35ed17cd9a3f0189bd3b4a3516014a&platform_code=H5"
				
			}).then(res=>{
				//  console.log(res.data.eventList),
                this.datalist = res.data.eventList
                
			})
		},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .da{
        position: relative;
        img{
            width: 7.5rem;
            height: 9rem;
        }
        .xiao{
            position: absolute;
            left:2rem;
            bottom:1.3rem;
            color:white;
            text-align: center;
            
            h1{
                font-size: 0.5rem;
                font-weight:900;
                
            }
            h2{
                font-size: 0.3rem;
               font-weight:900;
               margin-top:0.1rem
            }
            p{
                font-size:0.2rem;
                font-weight:900;
            }
        }
    }
    
        .xiatu{
        li{
            width: 6.90rem;
            height: 4.15rem;
            // border:0.01rem solid red;
            position: relative;
            margin:0.3rem;
        }
        img{
             width: 6.90rem;
            height: 4.15rem;
        }
        .jianbian{
            position:absolute;
            bottom:0;left:0;
            width:100%;
            height: 1.58rem;
            background-image: linear-gradient(180deg,transparent,rgba(0,0,0,.55));
        .wenzi{
            position: absolute;
            left: 0.25rem;
            bottom:0.25rem;
            color:white;
             h1{
                font-size: 0.3rem;     
            }
            h2{
                font-size: 0.3rem;
            }
            p{
                font-size:0.3rem;
            }
        }
         }
    }
   
    
</style>
