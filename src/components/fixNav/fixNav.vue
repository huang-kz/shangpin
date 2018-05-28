<template>
    <ul class="fixNav">
        <li @click="home()" class="/">
            <i class="fa fa-tablet"></i>
            <span>首页</span>
        </li>
        <li @click="type()" class="/type">
            <i class="fa fa-search"></i>
            <span>分类</span>
        </li>
        <li @click="sale()" class="/sale">
            <img src="../../images/sale.jpg"/>
        </li>
        <li @click="brand()" class="/brand">
            <i class="fa fa-connectdevelop"></i>
            <span>品牌</span>
        </li>
        <li @click="person()" class="/person">
            <i class="fa fa-user-o"></i>
            <span>我的</span>
        </li>
    </ul>
</template>

<script>
    export default{
        methods:{
            home(){
                this.$router.push({name:'home'})
            },
            type(){
                this.$router.push({name:'type'})
            },
            sale(){
                this.$router.push({name:'sale'})
            },
            brand(){
                this.$router.push({name:'brand'})
            },
            person(){
                this.$router.push({name:'person'})
            }
        },
        mounted(){     
            $('.fixNav li').map((i,item)=>{           
                if(item.className == this.$route.path){
                    $(item).addClass('fixActive');
                }
            })
        }
    }
</script>

<style lang="scss">
    @import './fixNav.scss';
</style>