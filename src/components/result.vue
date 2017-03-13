<template>
  <div class="res">
    <h1>融创河滨之城-195A户型</h1>
    <img src="../assets/result@1x.png" alt="结果图" width="300px" height="270px">
    <tab v-for="n in 10" :value="n" :top="50" :left="0"></tab>
    <div :class="[{'tab-none':isDefuse},'tab']">
      <div class="z">
        <div class="grad-res"></div>
        <resultMessage title="good"></resultMessage>
        <resultMessage title="bad"></resultMessage>
        <div class="grad-res"></div>
      </div>
    </div>
    <a class="result-btn" @click="defuse">获取化解方法</a>
    <popup :popStyle="resStyle" :show="isDefuse">
      <div slot="popup-main">
        <div class="popup-res">
          <h1>手机验证</h1>
          <input type="text" class="phone" placeholder="手机号">
          <input type="text" class="phone-verify" placeholder="验证码">
          <a class="verify-btn">获取验证码</a>
          <img src="../assets/logo2@2x.png" alt="In家生活" width="50px" height="50px">
        </div>
        <a class="btn" @click="lookUp">查看</a>
      </div>
    </popup>
  </div>
</template>
<script>
  import resultMessage from "../components/resultMessage"
  import tab from "../components/tab"
  import popup from "../components/popup"
  export default {
    data() {
      return {
        isDefuse: false,
        resStyle: {
          height: "410px",
          background: "url('/static/huajuan2@2x.png')",
          "background-size": "100% 100%",
          "margin-top": "80px",
          "padding-top": "60px"
        }
      }
    },
    components: {
      resultMessage,
      tab,
      popup
    },
    methods: {
      defuse() {
        this.isDefuse = true;
      },
      lookUp() {
        router.push({
          name: 'defuse',
          params: {
            building: this.$route.params.building,
            house: this.$route.params.house
          }
        })
      }
    }
  }

</script>
<style lang="less">
  .res {
    background: rgb(244, 240, 235);
    width: 100vw;
    height: 100vh;
    padding-top: 20px;
    text-align: center;
    position: relative;
    h1 {
      font-size: 18px;
      color: #333333;
      line-height: 30px;
      margin-bottom: 10px;
    }
  }
  
  .tab {
    width: 95vw;
    height: 180px;
    margin-top: 20px;
    position: relative;
    background: #FFFFFF;
    &::before {
      position: absolute;
      width: 34px;
      height: 208px;
      background: url("../assets/xin1@2x.png");
      background-size: cover;
      content: "";
      left: 0;
      bottom: -14px;
      z-index: 3;
    }
    .z {
      width: 100%;
      height: 180px;
      position: relative;
      z-index: 2;
      background: #FFFFFF;
      padding-top: 8px;
      box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.20);
    }
    &::after {
      position: absolute;
      width: 118px;
      height: 200px;
      background: url("../assets/xin2@2x.png");
      background-size: cover;
      content: "";
      left: 0;
      bottom: -9px;
      z-index: 1;
    }
  }
  
  .tab-none {
    visibility: hidden;
    opacity: 0;
    transition: all 1s;
  }
  
  .grad-res {
    width: 100%;
    height: 20px;
    position: absolute;
    z-index: 10;
    &:first-child {
      top: 32px;
      background-image: linear-gradient(to bottom, #ffffff 24%, rgba(255, 255, 255, 0.00) 98%);
    }
    &:last-child {
      bottom: 0;
      background-image: linear-gradient(to top, #ffffff 24%, rgba(255, 255, 255, 0.00) 98%);
    }
  }
  
  .result-btn {
    display: inline-block;
    background: #000000;
    width: 140px;
    height: 40px;
    font-size: 14px;
    line-height: 40px;
    color: #ffffff;
    letter-spacing: 2px;
    margin-top: 20px;
  }
  
  .popup-res {
    width: 285px;
    height: 280px;
    margin: 0 auto;
    padding: 0 20px;
    font-size: 12px;
    h1 {
      line-height: 18px;
      top: 20px;
      left: 0;
    }
    input {
      background: #ffffff;
      border: 1px solid #eae4e4;
      width: 243px;
      height: 34px;
      color: #aaaaaa;
      padding-left: 10px;
    }
    .phone {
      margin: 50px 0 20px;
    }
    .phone-verify {
      width: 148px;
      float: left;
    }
    .verify-btn {
      display: inline-block;
      background: #a59371;
      width: 85px;
      height: 34px;
      line-height: 34px;
      color: #ffffff;
      float: right;
    }
    img {
      margin-top: 92px;
    }
  }

</style>
