<template>
  <div>
    <div class="item" v-for="n in 10">
      <input type="radio" :id="'building'+n" :value="n" v-model="building">
      <label :for="'building'+n">{{n}}</label>
    </div>
    <slot name="add-building"></slot>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        building: ""
      }
    },
    props: ["value"],
    watch: {
      building(val) {
        this.$emit("input", val);
      }
    },
  }

</script>

<style lang="less">
  .item {
    &:first-of-type {
      margin-top: 31px;
    }
    input[type="radio"] {
      display: none;
    }
    input[type="radio"]+label {
      display: block;
      margin: 0 auto;
      font-size: 14px;
      color: #333333;
      letter-spacing: 2px;
      position: relative;
      width: 70px;
      height: 47px;
      &::before {
        position: absolute;
        width: 12px;
        height: 12px;
        left: -20px;
        top: 1px;
        content: "";
        display: inline-block;
        background: rgba(215, 215, 215, 0.00);
        border: 1px solid #888888;
        border-radius: 7px;
      }
    }
    input[type="radio"]:checked+label {
      &::before {
        background: url("../assets/xuanze@2x.png");
        background-size: 14px 12px;
        border: 0;
        width: 14px;
        border-radius: 0;
      }
    }
  }
  
 

</style>
