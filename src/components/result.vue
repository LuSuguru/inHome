<template>
  <div class="result-main">
    <h1>{{buildName}}-{{typeName}}</h1>
    <div class="dingwei">
      <img :src="imgSrc||'/static/img/result@1x.png'" alt="结果图" :class="['img-result',{'afternoon':isOpen}]">
      <tab v-for="pointer in pointers" :value="pointer.content" :top="(pointer.y)/500*250-33" :left="(pointer.x)/500*250" :key="pointer.id"></tab>
    </div>
    <div :class="[{'tab-none':isDefuse},'tab',{'tab-afternoon':isOpen}]">
      <img src="../assets/xin4@2x.png" alt="" class="xinBottom">
      <div class="z">
        <div class="grad-res"></div>
        <resultMessage title="good" :arr="goods"></resultMessage>
        <resultMessage title="bad" :arr="bads"></resultMessage>
        <div class="grad-res"></div>
      </div>
      <img src="../assets/xin3@2x.png" alt="" class="xinTop">
      <a class="btn result-btn" @click="defuse">获取化解方法</a>
    </div>
    <popup :popStyle="resStyle" :show="isDefuse">
      <div slot="popup-main">
        <div class="popup-res">
          <h1>手机验证</h1>
          <a class="close" @click="close"><img src="../assets/guanbi@2x.png" alt="关闭" width="18px" height="18px"></a>
          <input type="number" class="phone" placeholder="手机号" v-model="phone">
          <input type="number" class="phone-verify" placeholder="验证码" v-model="verify">
          <a class="brown-btn verify-btn" @click="ver">
            <span v-if="!isClick">获取验证码</span>
            <span v-if="isClick">{{number}}s后重试</span>
          </a>
          <img src="../assets/logo2x@2x.png" alt="In家生活" width="100px" height="50px" class="logo">
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
  import {
    advice
  } from "../Ajax/get.js"
  import {
    sendCode
  } from "../Ajax/get.js"
  import {
    defuse
  } from "../Ajax/get.js"
  import {
    dumbWrapper,
    sendMessage
  } from "../Ajax/vars.js"
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
        },

        goods: [],
        bads: [],
        pointers: [],

        imgSrc: "",
        buildName: "",
        typeName: "",

        phone: "",
        verify: ""
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
        if (window.isFirst) {
          if (!this.phone && this.verify) {
            alert("请输入手机号");
            return "";
          } else if (this.phone && !this.verify) {
            alert("请输入验证码");
            return "";
          } else if (!this.phone && !this.verify) {
            alert("请输入手机号和验证码");
            return "";
          }
        }
        if (window.isFirst) {
          let params = {
            scode: this.verify,
            phone: this.phone,
            huxingId: this.$route.params.house
          };
          dumbWrapper({
            promise: defuse(params),
            successCB: (e) => {
              window.isFirst = false;
              router.push({
                name: 'defuse',
                params: {
                  house: this.$route.params.house
                }
              })
            }
          });
        } else {
          router.push({
            name: 'defuse',
            params: {
              house: this.$route.params.house
            }
          })
        }
      },
      ver() {
        if (!this.isClick) {
          let params = {
            phone: this.phone
          }
          dumbWrapper({
            promise: sendCode(params),
            successCB: () => {
              this.number = 60;
              this.isClick = !this.isClick;
              this.number--;
            }
          })
        }
      },
      close() {
        this.isDefuse = false;
      }
    },
    created() {
      sendMessage(window.location.href);
    },
    mounted() {
      this.imgSrc = window.src;
      this.buildName = window.buildingName;
      this.typeName = window.typeName;
      setTimeout(() => {
        this.isOpen = true;
      }, 1000);
      let params = {
        huxingId: this.$route.params.house
      }
      dumbWrapper({
        promise: advice(params),
        successCB: (e) => {
          e.data.forEach((item) => {
            switch (item.type) {
              case 0:
                this.goods.push(item);
                break;
              case 1:
                this.bads.push(item);
                break;
              case 4:
                break;
              default:
                this.pointers.push(item);
                break;
            }
          });
        }
      })
    }
  }

</script>
<style lang="less">
  .result-main {
    background: rgb(244, 240, 235);
    width: 100vw;
    height: 100vh;
    padding-top: 3vh;
    text-align: center;
    position: relative;
    .img-result {
      width: 250px;
      height: 250px;
      transform: scale(1.5, 1.5);
      transition: all 2s;
    }
    .afternoon {
      transform: scale(1, 1);
    }
    h1 {
      font-size: 18px;
      line-height: 30px;
      margin-bottom: 2vh;
    }
    .result-btn {
      margin-top: 5vw;
      width: 38vw;
      height: 7vh;
    }
  }
  
  .tab {
    width: 95vw;
    height: 180px;
    margin-top: 20px;
    position: relative;
    top: 300px;
 
    transition: all 2s;
    .xinBottom {
      position: absolute;
      left: 0;
      top: -10px;
      z-index: 1;
      width: 100%;
      height: 200px;
      transform: translateX(-85%);
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
      transform: translateX(-90%);
    }
  }

  .tab-afternoon {
    top:0;
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
      font-size: 14px;
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
  
  .dingwei {
    position: relative;
    display: inline-block;
  }

</style>
