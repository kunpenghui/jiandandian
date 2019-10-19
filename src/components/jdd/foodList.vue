<template>
  <div class="foodlist">
      <food v-for="(v,i) of list" :key="i"></food>
  </div>
</template>

<script>
import food from "./food"
export default {
    data(){
        return {
            list:[0,1,2,3,4,5]
        }
    },
    components:{
        food
    }

}
</script>

<style scoped>
    .foodlist{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
</style>