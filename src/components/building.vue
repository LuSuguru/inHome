<template>
  <div>
    <div class="item" v-for="building in buildings" :key="building.loupanId">
      <input type="radio" :id="building.loupanId" :value="building" v-model="build">
      <label :for="building.loupanId">{{building.name}}</label>
    </div>
    <slot name="add-building"></slot>
  </div>
</template>

<script>
  import {
    allEstate
  } from "../Ajax/get.js"
  import {
    dumbWrapper
  } from "../Ajax/vars.js"
  export default {
    data() {
      return {
        buildings: [],
        build: "",
      }
    },
    props: ["value", "haveWord"],
    watch: {
      haveWord(val) {
        if (val) {
          this.build = "";
        }
      },
      build(val) {
        this.$emit("input", val);
        window.buildName = val.name;
      }
    },
    mounted() {
      dumbWrapper({
        promise: allEstate(),
        successCB: (e) => {
          this.buildings = e.data;
        }
      })
    }
  }

</script>

<style lang="less">
  .item {
    &:first-of-type {
      margin-top: 15px;
    }
    input[type="radio"] {
      display: none;
    }
    input[type="radio"]+label {
      display: inline-block;
      margin: 0 auto;
      color: #333333;
      letter-spacing: 2px;
      position: relative;
      left: 20px;
      width: 130px;
      line-height: 47px;
      height: 47px;
      text-align: left;
      &::before {
        content: "";
        position: absolute;
        width: 14px;
        height: 14px;
        left: -25px;
        top: 17px;
        background: rgba(215, 215, 215, 0.00);
        border: 1px solid #888888;
        border-radius: 7px;
      }
    }
    input[type="radio"]:checked+label {
      &::before {
        content: "";
        background: url("../assets/xuanze@2x.png");
        background-size: 15px 14px;
        border: 0;
        width: 15px;
        height: 14px;
        border-radius: 0;
      }
    }
  }

</style>
