<template>
  <div :class="['defuse',{open:isOpen}]">
    <div class="defuse-main">
      <div :class="['defuse-z',{'open-z':isOpen}]">
        <a class="re-btn" @click="reResult"><img src="../assets/xia@2x.png" alt="返回结果" width="19px" height="8px"></a>
        <img src="../assets/huajiefangshi@2x.png" alt="化解方式" class="huajie">
        <h2 v-for="item in advices">{{item.content}}</h2>
        <img src="../assets/LOGO@2x.png" alt="In家生活" class="logo">
      </div>
      <div class="defuse-footer">
        <a class="brown-btn" @click="order">预约看房</a>
        <h2>如有兴趣，点击预约看房，就能申请实地看风水</h2>
      </div>
    </div>
    <popup :show="isOrder">
      <div slot="popup-main">
        <h1>预约看房</h1>
        <div class="popup-main">
          <twobar :isDefuse="true"></twobar>
        </div>
        <a class="btn" @click="isOk">OK</a>
      </div>
    </popup>
  </div>
</template>
<script>
  import popup from "../components/popup"
  import twobar from "../components/twobar"
  import {
    advice
  } from "../Ajax/get.js"
  import {
    yuyue
  } from "../Ajax/get.js"
  import {
    dumbWrapper,
    sendMessage
  } from "../Ajax/vars.js"
  export default {
    data() {
      return {
        isOrder: false,
        isOpen: false,

        advices: [],
        huxingId: 0
      }
    },
    components: {
      popup,
      twobar
    },
    methods: {
      order() {
        this.isOrder = true;
      },
      isOk() {
        this.isOrder = false;
        let params = {
          huxingId: this.$route.params.house
        };
        dumbWrapper({
          promise: yuyue(params),
          successCB: () => {}
        })
      },
      reResult() {
        router.push({
          name: 'result',
          params: {
            house: this.$route.params.house,
            buildName: window.buildName,
            src: window.src,
            typeName: window.typeName,
          }
        })
      },
    },
    mounted() {
      let params = {
        huxingId: this.$route.params.house
      }
      dumbWrapper({
        promise: advice(params),
        successCB: (e) => {
          e.data.forEach((item) => {
            if (item.type == 4) {
              this.advices.push(item);
              sendMessage(window.location.href);
            }
          });
        }
      })
      setTimeout(() => {
        this.isOpen = true;
      }, 300);
    }
  }

</script>
<style lang="less">
  .defuse {
    &::before,
    &::after {
      content: "";
      width: 100vw;
      position: absolute;
      transition: all 0.5s;
      opacity: 0;
      transform: translate(0, 30px);
    }
    &::before {
      background: url("../assets/xinB@2x.png");
      background-size: 100% 100%;
      height: 80vw;
      bottom: 8vh;
    }
    &::after {
      background: url("../assets/xinA@2x.png");
      background-size: 100% 100%;
      height: 32vh;
      bottom: 0;
      z-index: 3;
    }
  }

  .open {
    &::before,
    &::after {
      opacity: 1;
      transform: translate(0, 0);
    }
  }

  .defuse-main {
    width: 100vw;
    height: 100vh;
    .defuse-z {
      opacity: 0;
      transform: translate(0, -20px);
      transition: all 1s;
      background: url("../assets/xinzhi@2x.png");
      background-size: 100% 100%;
      position: relative;
      z-index: 2;
      width: 96%;
      height: 85%;
      margin: 0 auto;
      .re-btn {
        position: absolute;
        left: 50%;
        top: 20px;
        margin-left: -11px;
      }
      .huajie {
        width: 20px;
        height: 120px;
        position: absolute;
        left: 14%;
        top: 15%;
      }
      h2 {
        position: absolute;
        -webkit-writing-mode: vertical-rl;
        writing-mode: tb-rl;
        writing-mode: vertical-rl;
        width: 25px;
        height: 65%;
        overflow: auto;
        -webkit-overflow-scrolling: touch;
        font-size: 16px;
        color: #444444;
        letter-spacing: 5px;
        line-height: 20px;
        &:first-of-type {
          left: 42%; //一行9%
          top: 20%;
        }
        &:nth-of-type(2) {
          left: 51%;
          top: 20%;
        }
        &:nth-of-type(3) {
          left: 33%;
          top: 20%;
        }
        &:nth-of-type(4) {
          left: 62%;
          top: 20%;
        }
      }
      .logo {
        position: absolute;
        // height: 2.5%;
        width: 8%;
        right: 12%;
        top: 74%;
      }
    }
    .open-z {
      transform: translate(0, 0);
      opacity: 1;
    }
  }

  .defuse-footer {
    display: block;
    position: relative;
    z-index: 4;
    text-align: center;
    a {
      font-size: 12px;
    }
    h2 {
      font-size: 12px;
      letter-spacing: 1px;
      line-height: 20px;
      margin-top: 20px;
    }
  }

</style>
