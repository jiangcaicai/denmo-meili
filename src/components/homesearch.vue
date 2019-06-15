<template>
    <div id="homesearch">
        <div class="searchbar">
            <div class="login">登录</div>
            <a href="">
                <p><i class="iconfont icon-fangdajing"></i> {{searchholder}}</p>
            </a>
            <div class="bag">

            </div>
        </div>
        <ul class="homemenu">           
                <router-link to="/home/commend" tag="li" activeClass="active">
                    <i class="iconfont icon-all"></i>推荐
                </router-link>           
                <router-link to="/home/aborad" tag="li" activeClass="active">
                    <i class="iconfont icon-all"></i>海外
                </router-link>            
                <router-link to="/home/women" tag="li" activeClass="active">
                    <i class="iconfont icon-all"></i>女士
                </router-link>            
                <router-link to="/home/men" tag="li" activeClass="active">
                    <i class="iconfont icon-all"></i>男士
                </router-link>            
                <router-link to="/home/makeup" tag="li" activeClass="active">
                    <i class="iconfont icon-all"></i>美妆
                </router-link>           
                <router-link to="/home/gear" tag="li" activeClass="active">
                    <i class="iconfont icon-all"></i>家居
                </router-link>           
                <router-link to="/home/child" tag="li" activeClass="active">
                    <i class="iconfont icon-all"></i>婴童
                </router-link>            
                <router-link to="/home/comingsoon" tag="li" activeClass="active">
                    <i class="iconfont icon-all"></i>即将上新
                </router-link>
                <li>
                    hahahahahaha
                </li>
        </ul>
        <searchview></searchview>
    </div>
</template>

<script>
import axios from 'axios'
import searchview from "./searchview";
export default {
    data() {
        return {
            menu:["推荐","海外","女士","男士","美妆","家居","婴童","即将上新"],
            searchholder:"",
            height:0
        }
    },
    mounted(){
        axios({
            url:"http://www.mei.com/appapi/search/searchDefault/v3"
        }).then(res=>{
            this.searchholder = res.data.words
        })
    },
    components: {
        searchview
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="../assets/iconfont/iconfont.css"></style>
<style scoped lang="scss">
#homesearch {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0);
    z-index: 999;
}
.searchbar {
    display: flex;
}
.login {
    line-height: 0.28rem;
    font-size: 0.28rem;
    margin: 0.33rem 0.3rem 0.37rem 0.28rem;
}
a {
    height: 0.68rem;
    margin: 0.14rem 0;
    flex: 1;
    color: black;
    text-align: center;
    line-height: 0.6rem;
    font-size: 0.28rem;
    color: #999999;
}
.homemenu {
    overflow: scroll;
    white-space: nowrap;
    height: 0.7595rem;
    line-height: 0.6rem;
    padding-left: 0.09rem;
}
.homemenu li {
    display: inline-block;
    font-size: 0.285rem;
    padding: 0 0.18rem;
    text-align: center;

}
.bag {
    width: 1rem;
    height: 0.82rem;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAABICAYAAAHKajb6AAAABGdBTUEAALGPC/xhBQAABn5JREFUaAXtWr1vHEUUvztjCVnCxh/CSihsAYKCFCCkNClsC0oUKoQrCgoqOgoKFDiTCgn/C9BCGfdRfIpokBANFEZEsosEGfkDO4WRLNv8fsu+zdvZ+dq5vYtlvNJqZt77va+ZNx87d62Weqampu6q5pPq5OTk2ZPWf7W2jViAhCklGVD/ZQbQxEIir3SEMDMzs0CgBhfM09PTxf39/baAs1IjSww0CkmTUWnDy40KURO0GX8nQFXXJkkNFYd0OM+IFJHtdjvTsre3t0J6SZLEs7OzDFBiUh07XKutSFJCnnJfgooBuHJycvII9h+ieR9mllF/BJMvipC11B0kANLgzsfSZtnJiV1NdNSvCJ0yRfcIUQfpo5U6QIAxZUWQXSuCUrfFXRHkgFFAwKzb3G/V6BxxJJPxp2QBrVZGqqQWNV4bGxt7gLdzdHR038RUskbiQqasImM+pYA1PtGEDrgtQoq2atKEl5VkMj9LRDRMobTO0Fp0XVvTdNYrA63BzrrW4gQpRrKlJPcqQjpx6Qra3yrvsmpFiMsTM4ACeSZsBYUI0FMDShaCQrn2OQJpbWRkJFsxS4JklAh5w0evxCQKfJntFBJhW5mUsJVJaNM8Pz///MHBwb6Nl9PWEM57Hn4cix2Zv8c2ienp6U8EgyG+ZcNE0ZSS1ZCAYGdnZ19yYaMGDOt3tqa5lGj68fHxh7qt60kDrRXUqkv46O+uKSg8k25rC5ZT0+QLr7I7a6Bvwmgc6zHYqDEzFae2z6cx6XeWjIxjIzTbONmiD0YmSjkm8opBaVOx0GxGhOZNEAGZZUwymDJsByPjgYzK6bmtuySiGAeiI6My6dLc63sol2KM5PhWtDEKMEoU1e1QtAXKYDcG5Guxh2psuAtxnX7ARvk5kmQD72O8d5GJ1+rIRx0LoPQOlN50KZ6YmJjc3Nz828UXetAYIniIU9zVQqDd/h51floug158UuLQdnVnZ+dPwdUuYegLTlq+PGvYFIB3LBgbP5omSmD0G5+Qwn3lwzl5PLiIEicoZ8CZ7POJeB/WOc9wcHnHJ6h5nU7HG7lgncYAKJJCwK4yNjGGOql9kbkCSae7kgCDXmz7Mdo9errCG2pkQzXm3DzrbpQxO/ZQI7s0FpP9Qcz560Y9wVlnCDJRWQZDygHByHLlcz6FxPCG3ochL2iMt0PAbXEeyVxiNNJmSQxv/IHzPkFjXumazNrG5EOjpp0MHmUM3bRgSwRJnFjDQWMcEzw9n0Ji8rXUBwsnCKVxxliHwWxf0qkP1hzpxMQ8wcioBGeMnnhudOmW0BszJop0l8Z2nciyjIpMCww8G7Wxfuq1I7s0ZuuBi3siDn552rrDR8NH49uY+F/jfcuHEx5WoJ/xfra7u2v/+VyANctGAsMm/Sr2zjUE81pN+yU4AtzAMnwTq+PvJUZCo6/A8DvGs4eHhz0EdN1iex20W1jcfoTDpSMR8LxyuwH+bbyLeEsP8D+Nj48v4LLjnxKjRiM5MHzdv4CP7j/g5HPaHpxaRjA/aFqojiA/gB5erhQP9DweHR19ZXt7+6+CWKOSHBic+RXOvK5s7cCZlxHUoaJFV6FvHPoeQGBGhKDvN+irdTcmskm7C+bUu0ZQLVxbvZ8aFJ2hLHWIYyxpg7Y0LbaeFBgMvmEaWFpaqvzqb2JCbZsOm62QHvKHupHFONQUJmnEmjI+SD22u5YeJu26zyjSg3fSbxoYr4yB9TUXDeYv8GfNoJWa8IcypQ/eSmAMChO5W5I0GljBoOusFBhO/EsGLKlpfv3BnzvwZ8WnDP504U8psP9VKvo6J+Px6xNHqG4QmADACJX00laCmno/BooBfumizrfxJ5R2sQYvbCpeBhabAucFd2FHrLKP9dPjvBW2XdZyZcsXHP61OIjpxweRbTQwBoWNsivKpcy3hmwVjcGIXD9l36mIXb/4tdDc/es4RlmeOvhSZx1ZG7bvwLRSbK49XqaaLzHiNOsmn23KktfU02gqupzKN90VF38Q9EZHbBAOpurse8SMc+OcnM555gsdjziX1GLzHWUYSOr5UHdC34Hpc6Oe9LIY0JgOUgcDzD3lTK1fVJSctdpoKnKEZGGIWQyIEXxodK3ee4h9j5hLtytFgW805Vz2BxaYTtHc+EcuJwZBbzQVB+Fgqs7LwFJ77mnJXdgRs90E97AMrz+tnk6xi/1wEXKl6zdbYCm6z53MhU3FfwEfmN7hIOhHKQAAAABJRU5ErkJggg==) no-repeat 0.34rem 0.19rem;
    background-size: 0.36rem;
}
.active::after {
    content: "";
    display: block;
    width: 0.26rem;
    height: 0.04rem;
    background: black;
    margin: 0 auto;
    margin-top: -0.08rem;
}
</style>