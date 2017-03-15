<template>
  <div>
    <div class="item item-house" v-for="n in 10" :key="'house'+n">
      <input type="radio" :id="'house'+n" :value="n" v-model="house">
      <label :for="'house'+n">166户型</label>
    </div>
    <img src="../assets/xinzhi@2x.png" alt="" v-show="false">
    <img src="../assets/xin3@2x.png" alt="" v-show="false">
    <img src="../assets/xin4@2x.png" alt="" v-show="false">
    <img src="../assets/xinA@2x.png" alt="" v-show="false">
  </div>
</template>
<script>
  export default {
    data() {
      return {
        house: ""
      }
    },
    props: ["value"],
    watch: {
      house(val) {
        this.$emit("input", val);
      }
    }
  }

</script>
<style lang="less">
  .item-house {
    &:first-of-type {
      margin-top: 15px;
    }
    input[type="radio"]+label {
      height: 51px;
    }
  }

</style>
