<template>
    <div id="cart">
        <div id="list">
            <mt-header fixed title="购物车"></mt-header> 
            <mt-cell title="当前桌号:CZ02">
                <span style="color:#000">人数:3人</span>
                <img src="@/assets/qianbi.png" alt="" width="24" height="24">
            </mt-cell>
            <mt-cell title="备注:" value="">
                <span>请输入备注</span>
            </mt-cell>
            <mt-cell title="减满活动:" value="">
                <span>满30减20</span>
            </mt-cell>
            <mt-cell title="餐具费:" value="">
                <span>￥8.00</span>
            </mt-cell>
            <mt-cell title="消费金额:￥237.00">
                <span style="font-size:14px;color:#f00;">应付:</span>
                <span style="color:red">￥217.00</span>
            </mt-cell>
       </div>
       <div class="addCart">
            <mt-cell  title="已加入购物车:"  label="">
                <img class="dustBox" src="@/assets/lajitong.png" alt="">
            </mt-cell>
                <p>煲类2个,小吃/主食/蔬菜1个,特权、鲜榨果汁1个</p>
       </div>
            
                <mt-cell title="煲类"></mt-cell>
                <mt-cell>
                    <img class="food" src="@/assets/food.jpg" alt="">
                    <div>
                    <p>蟹肉煲</p>
                    <p>不辣</p>
                    <p>￥138.00</p>
                    </div>

                </mt-cell>
         
 
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    }
}
</script>
<style scoped>
    #cart{
        width:100%;    
    }
    [class="mint-header is-fixed"]{
        background-color:#333;
        font-size:18px;
        font-family: "微软雅黑";
    }
    #list{
        color:#000;
        
        text-align: left; 
         display: inline;
        justify-content: space-between; 

    }
    .costom{
        display: flex;
        display: block;
        justify-content: space-between;
    }
    .food{
        width:80px;
        height:80px;
    }
    .dustBox{
        width:20px;
        height:20px;
    }
   .addCart{
       text-align: left;
       font:14px "雅黑";
       padding-left:10px;
       color:#000;
   }
    .costom{
        text-align: left;
    }
</style>

