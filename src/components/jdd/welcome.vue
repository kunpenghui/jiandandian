<template>
    <div class="add">
        <!-- logo部分 -->
        <div class="firstdiv">
            <img src="../../assets/logo.png"> 
        </div>
        <!-- 餐厅名字 -->
        <div class="dm">
            <span>荷香奇食荷叶饭(西湖店)</span>
        </div>
        <!-- 就餐人数选择 -->
        <div>
            <span>
                请选择就餐人数
            </span>
        </div>
        <!-- 桌子号 -->
        <div class="cz">
            <div class="cz_i">
                <div class="cz_item">1</div>
                <div class="cz_item">2</div>
                <div class="cz_item">3</div>
                <div class="cz_item">4</div>
            </div>
            <div class="cz_i">
                <div class="cz_item">5</div>
                <div class="cz_item">6</div>
                <div class="cz_item">7</div>
                <div class="cz_item">8</div>
            </div>
            <div class="cz_i">
                <div class="cz_item">9</div>
                <div class="cz_item">10</div>
                <div class="cz_item">11</div>
                <div class="cz_item">12</div>
            </div>
        </div>
        <!-- 开始点餐 -->
        <div class="tj">
            <mt-button>开始点餐</mt-button>
            <br>
        </div>
        <div class="jszc">
            <span>
                由鲲鹏会提供技术支持
            </span>
        </div>
    </div>
</template>
<script>
    
</script>
<style scoped>
.add{background-image:url("../../assets/Sweeporder_bg.png");}
.add>.firstdiv{
                margin-top:30%;
                margin:auto;
                width:100px;
                }
.add>.firstdiv>img{
                width:100%;
                border-radius:50%;
                }
.add>.dm{
                text-align: center;
                font-weight:bold;
                }
/* 桌子号 */
.add>.cz>.cz_i{
                width:70%;
                display:flex;
                margin:auto;
                }
.add>.cz>.cz_i>.cz_item{
                width:50px;
                height:40px;
                border:1px solid #ccc;
                margin:10px 0 0 10px;
                padding-top:20px;
                }
.tj{
                margin-top:20px;
                margin-bottom:30%;}
.tj>button{
            background:linear-gradient(to top,#ffc900,#fe9500);
            width:65%;
            color:#fff;
            }
.jszc{color:#ccc;}
</style>

