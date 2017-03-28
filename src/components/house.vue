<template>
  <div>
    <div class="item item-house" v-for="item in types" :key="item.id">
      <input type="radio" :id="item.id" :value="item" v-model="house">
      <label :for="item.id">{{item.name}}</label>
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
    props: ["value", "types"],
    watch: {
      house(val) {
        this.$emit("input", val.id);
        window.src = val.imgUrl;
        window.typeName = val.name;
      }
    },
    mounted() {

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
      text-align: left;
      text-indent: 30px;
      &::before {
        left: 0px;
        top: 17px;

      }
    }
  }

</style>
