<template>
  <div class="result-main">
    <h1>融创河滨之城-195A户型</h1>
    <img src="../assets/result@1x.png" alt="结果图" class="img-result">
    <tab v-for="n in 10" :value="n" :top="50" :left="0" :key="'tab'+n"></tab>
    <div :class="[{'tab-none':isDefuse},'tab']">
      <img src="../assets/xin4@2x.png" alt="" :class="['xinBottom',{afterChange1:isOpen}]">
      <div class="z">
        <div class="grad-res"></div>
        <resultMessage title="good"></resultMessage>
        <resultMessage title="bad"></resultMessage>
        <div class="grad-res"></div>
      </div>
      <img src="../assets/xin3@2x.png" alt="" :class="['xinTop',{afterChange2:isOpen}]">
    </div>
    <a class="btn result-btn" @click="defuse">获取化解方法</a>
    <popup :popStyle="resStyle" :show="isDefuse">
      <div slot="popup-main">
        <div class="popup-res">
          <h1>手机验证</h1>
          <a class="close" @click="close"><img src="../assets/guanbi@2x.png" alt="关闭" width="18px" height="18px"></a>
          <input type="number" class="phone" placeholder="手机号">
          <input type="number" class="phone-verify" placeholder="验证码" v-model="verify">
          <a class="brown-btn verify-btn" @click="ver">
            <span v-if="!isClick">获取验证码</span>
            <span v-if="isClick">{{number}}s后重试</span>
          </a>
          <img src="../assets/logo2@2x.png" alt="In家生活" width="50px" height="50px" class="logo">
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
        isClick: false,
        isOpen: false,
        number: 60,
        resStyle: {
          height: "410px",
          background: "url('/static/huajuan2@2x.png')",
          "background-size": "100% 100%",
          "margin-top": "-205px",
          "padding-top": "60px"
        }
      }
    },
    components: {
      resultMessage,
      tab,
      popup
    },
    watch: {
      number(val) {
        if (val != 0) {
          setTimeout(() => {
            this.number--
          }, 1000);
        } else {
          this.isClick = !this.isClick;
        }
      }
    },
    methods: {
      defuse() {
        if (window.isFirst) {
          this.isDefuse = true;
        } else {
          this.lookUp();
        }

      },
      lookUp() {
        router.push({
          name: 'defuse',
          params: {
            building: this.$route.params.building,
            house: this.$route.params.house
          }
        })
      },
      ver() {
        window.isFirst = false;
        if (!this.isClick) {
          this.number = 60;
          this.isClick = !this.isClick;
          this.number--;
        }
      },
      close() {
        this.isDefuse = false;
      }
    },
    mounted() {
      setTimeout(() => {
        this.isOpen = true;
      }, 1000);

    }
  }

</script>
<style lang="less">
  .result-main {
    background: rgb(244, 240, 235);
    width: 100vw;
    height: 100vh;
    padding-top: 20px;
    text-align: center;
    position: relative;
    .img-result {
      width: 80vw;
      height: 42vh;
    }
    h1 {
      font-size: 18px;
      line-height: 30px;
      margin-bottom: 10px;
    }
    .result-btn {
      margin-top: 20px;
    }
  }
  
  .tab {
    width: 95vw;
    height: 180px;
    margin-top: 20px;
    position: relative;
    transition: all 1s;
    .xinBottom {
      position: absolute;
      left: 0;
      top: -10px;
      z-index: 1;
      width: 100%;
      height: 200px;
      transition: all 3s;
    }
    .z {
      width: 96%;
      height: 180px;
      position: relative;
      z-index: 2;
      background: #FFFFFF;
      padding-top: 8px;
      box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.20);
    }
    .xinTop {
      position: absolute;
      left: 0;
      top: -10px;
      z-index: 3;
      width: 94%;
      height: 200px;
      transition: all 3s;
    }
    .afterChange1 {
      transform: translateX(-85%);
    }
    .afterChange2 {
      transform: translateX(-90%);
    }
  }
  
  .tab-none {
    visibility: hidden;
    opacity: 0;
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
    .close {
      position: absolute;
      top: 20px;
      right: 14px;
    }
    input {
      width: 243px;
      height: 34px;
    }
    .phone {
      margin: 50px 0 20px;
    }
    .phone-verify {
      width: 148px;
      float: left;
    }
    .verify-btn {
      float: right;
    }
    .logo {
      margin-top: 70px;
    }
  }

</style>
