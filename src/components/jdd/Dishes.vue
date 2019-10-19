<template>
    <div>
        <div class="bar">
            <span>&lt;</span>
            <span>简单点餐厅</span>
            <span>···</span>
        </div>
        <div class="bg">欢迎光临，简单点餐厅！</div>
    </div>
</template>
<script>
export default {
    data(){
        return {

        }
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
    .bg{
        height: 20px;
        line-height: 20px;
        background: #ff7700;
    }
    
</style>