<template>
  <div class="two-bar">
    <img :src="yuyueImg" alt="扫描二维码" width="205px" height="205px" v-if="isDefuse">
    <img :src="tijiaoImg" alt="扫描二维码" width="205px" height="205px" v-if="!isDefuse">
    <h2 v-if="isDefuse">预约成功</h2>
    <h2 v-if="!isDefuse">提交成功</h2>
    <h3 v-if="!isDefuse">{{tijiaoTitle}}</h3>
    <h3 v-if="isDefuse">{{yuyueTitle}} </h3>
  </div>
</template>
<script>
  import {
    baseInfo
  } from "../Ajax/get.js";
  import {
    dumbWrapper
  } from "../Ajax/vars.js"
  export default {
    data() {
      return {
        tijiaoImg: "",
        tijiaoTitle: "",
        yuyueImg: "",
        yuyueTitle: ""
      }
    },
    props: ["isDefuse"],
    mounted() {
      let params = {
        url: window.location.href
      };
      dumbWrapper({
        promise: baseInfo(params),
        successCB: (e) => {
          this.tijiaoImg = e.data.activityDesc.tijiaoImg,
            this.tijiaoTitle = e.data.activityDesc.tijiaoTitle,
            this.yuyueImg = e.data.activityDesc.yuyueImg,
            this.yuyueTitle = e.data.activityDesc.yuyueTitle
        }
      })
    }

  }

</script>
<style lang="less">
  .two-bar {
    position: relative;
    z-index: 20;
    img {
      margin: 15px 0 10px;
    }
    h2 {
      font-size: 18px;
      color: #a59371;
      line-height: 30px;
      margin-bottom: 10px;
      font-family: "微软雅黑";
      font-weight: bold;
    }
    h3 {
      letter-spacing: 2px;
      line-height: 20px;
      font-size: 14px;
      padding:0 50px;
    }
  }

</style>
