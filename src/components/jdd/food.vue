<template>
  <div class="food-item">
      <div class="img-div">
          <img class="food" src="@/assets/588.jpg" alt="">
      </div>
      <div class="foodtitle"><span>红烧排骨套餐</span></div>
      <div class="foodxq"><span>一个主菜加两个配菜加一个</span></div>
      <div class="foodxl"><span>月售555</span><span>赞555</span></div>
      <div class="foodjg"><span>￥25</span><mt-button class="foodbutton">来一份</mt-button></div>
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
    .food-item{
        width: 48%;
        height: 290px;
        border-radius: 6px;
        overflow: hidden;
        box-shadow: 2px 2px 10px #aaa;
        margin: 2px 0;
    }
    .img-div{
        width: 100%;
        /* height: 100px; */

    }
    .food{
        width: 100%;
        /* height: 100%; */
    }
    .foodtitle{
        font-size: 20px;
        font-weight: bold;
        color: #333333;
        margin-bottom: 8px;
    }
    .foodxq{
        font-size: 13px;
        color: #666666;
        margin-bottom: 8px;
    }
    .foodxl{
        display: flex;
        justify-content: space-around;
        font-size: 12px;
        margin-bottom: 8px;

    }
    .foodjg{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 10px;
    }
    .foodjg>span{
        color: #ff0000;
    }
    .foodbutton{
        height: 25px;
        background-color: #ffc900;
    }
</style>