<template>
    <div>
        <div class="bar">
            <span>&lt;</span>
            <span>简单点餐厅</span>
            <span @click="wifi">WIFI</span>
        </div>
        <div class="bg">欢迎光临，简单点餐厅！</div>
        <div>
            <mt-navbar v-model="active" class="navbar">
                <mt-tab-item id="招牌">招牌</mt-tab-item>
                <mt-tab-item id="主食">主食</mt-tab-item>
                <mt-tab-item id="凉菜">凉菜</mt-tab-item>
                <mt-tab-item id="饮品">饮品</mt-tab-item>
                <mt-tab-item id="甜点">甜点</mt-tab-item>
                <!-- <mt-tab-item :id="active">WIFI</mt-tab-item> -->
            </mt-navbar>
            <mt-tab-container v-model="active" swipeable>
                <mt-tab-container-item id="招牌">
                    <foodlist></foodlist>
                </mt-tab-container-item>
                <mt-tab-container-item id="主食">
                    <foodlist></foodlist>
                </mt-tab-container-item>
                <mt-tab-container-item id="凉菜">
                    <foodlist></foodlist>
                </mt-tab-container-item>
                <mt-tab-container-item id="饮品">
                    <foodlist></foodlist>
                </mt-tab-container-item>
                <mt-tab-container-item id="甜点">
                    <foodlist></foodlist>
                </mt-tab-container-item>
            </mt-tab-container>
        </div>
        <div class="foodcar">
            <img id="cart" src="@/assets/cart.png" alt="">
        </div>
        <div :class="aa">
            <p @click="wifihide" style="text-align:right;padding-right:15px;">X</p>
            <p>WIFI:<span>000000</span></p>
            <p>密码:<span>111111</span></p>
        </div>
    </div>
</template>
<script>
import foodlist from "./foodList"
export default {
    data(){
        return {
            active:"招牌",
            aa:"wifidiv"
        }
    },
    methods:{
        wifi(){
            this.aa = "wifidiv1";
        },
        wifihide(){
            this.aa = "wifidiv";
        }
    },
    components:{
        foodlist
    }
}
</script>
<style scoped>
    .bar{
        height: 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 20px;
        padding-right: 20px; 
        background: #333333;
        color: #ffffff;
        font: bold 20px SimHei;   
    }
    .navbar{
        font-size: 25px; 
    }
    .bg{
        height: 20px;
        line-height: 20px;
        background: #ff7700;
    }
    .foodcar{
        width: 50px;
        height: 50px;
        background: #ff7700;
        border-radius: 50%;
        position: fixed;
        z-index: 999;
        bottom: 50px;
        right: 30px;
    }
    #cart{
        width: 30px;
        height: 30px;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -15px;
        margin-left: -15px; 
        
    }
    .wifidiv{
        width: 0px;
        height: 0px;
        background: #333333;
        position: fixed;
        top: 50%;
        right: 50%;
        margin-top: 0;
        margin-right: 0; 
        border-radius: 5px;
        overflow: hidden;
        color: #ff7700;
        opacity: 0;
        transition: 1s;
    }
    .wifidiv1{
        width: 300px;
        height: 130px;
        background: #333333;
        position: fixed;
        top: 50%;
        right: 50%;
        margin-top: -65px;
        margin-right: -150px; 
        border-radius: 5px;
        overflow: hidden;
        color: #ff7700;
        opacity: 1;
        transition: 1s;
    }
</style>