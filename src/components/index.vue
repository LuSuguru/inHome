<template>
  <div class="main">
    <popup :show="isShow">
      <div slot="popup-main">
        <h1>{{heading}}</h1>
        <a class="return" v-if="isReturn" @click="reBuild"><img src="../assets/zuo@2x.png" alt="返回上一层" width="11px" height="18px"></a>
        <div class="popup-main">
          <div class="gradient"></div>
          <div class="popup-message" @scroll="move">
            <transition name="fade" mode="out-in">
              <template v-if="!isHouse">
                <building v-model="buildInfo" v-if="!isAdd" :haveWord="youWord">
                  <div class="add-building" slot="add-building">
                    <input type="text" placeholder="没找到？请输入您的楼盘" class="information" v-model="buildMess" :disabled="isCheck">
                    <a class="brown-btn add-btn" @click="add" :style="addBg">添加</a>
                  </div>
                </building>
                <twobar v-if="isAdd" :isDefuse="false"></twobar>
              </template>
              <house v-model="houseInfo" v-if="isHouse" :types="buildInfo"></house>
            </transition>
          </div>
          <transition name="bottom">
            <div class="gradient" v-if="!isBottom"></div>
          </transition>
        </div>
        <a @click="change" class="btn change-btn" :style="changeBg">{{btn}}</a>
      </div>
    </popup>

  </div>
</template>

<script>
  import popup from "../components/popup.vue"
  import building from "../components/building"
  import twobar from "../components/twobar"
  import house from "../components/house"
  import {
    newEstate
  } from "../Ajax/post.js"

  import {
    dumbWrapper,
    sendMessage
  } from "../Ajax/vars.js"

  export default {
    data() {
      return {
        heading: "楼  盘",
        btn: "下一步",
        title: "building",
        buildInfo: "", //子组件回调的楼市信息
        houseInfo: "", //子组件回调的户型信息
        buildMess: "",
        isAdd: false,
        isHouse: false,
        isReturn: false,
        isShow: true,
        isBottom: false,
      }
    },
    components: {
      popup,
      building,
      twobar,
      house
    },
    computed: {
      addBg() {
        if (!this.buildMess) {
          return {
            background: "#aaa"
          }
        }
      },
      changeBg() {
        if ((this.buildInfo && this.title == "building") || this.houseInfo && this.title == "house") {
          return {
            background: "#000"
          }
        }
      },
      isCheck() {
        if (this.buildInfo) {
          return true;
        } else {
          return false;
        }
      },
      youWord() {
        if (this.buildMess) {
          return true;
        } else {
          return false;
        }
      }
    },

    methods: {
      change() {
        if (this.title == "building" && this.buildInfo) {
          this.heading = "户 型";
          this.btn = "查看结果";
          this.title = "house";
          this.isHouse = true;
          this.isReturn = true;
        } else if (this.title == "house" && this.houseInfo) {
          router.push({
            name: 'result',
            params: {
              house: this.houseInfo
            }
          });
        } else if (this.title == "ok") {
          this.isShow = false;
        }
      },
      reBuild() {
        if (this.title == "house") {
          this.isHouse = false;
          this.heading = "楼  盘";
          this.buildInfo = "";
        } else if (this.title = "ok") {
          this.isAdd = false;
          this.buildMess = "";
        }
        this.btn = "下一步";
        this.title = "building";
        this.isReturn = false;
      },
      add() {
        if (!this.buildInfo) {
          if (this.buildMess) {
            let params = {
              name: this.buildMess
            };
            dumbWrapper({
              promise: newEstate(params),
              successCB: () => {
                this.isAdd = true;
                this.isReturn = true;
              }
            })
            this.btn = "OK";
            this.title = "ok";
            this.isBottom = true;
          } else {
            alert("请输入正确的楼盘");
          }
        }
      },


      move(event) {
        if (event.target.scrollTop > 148 && this.title == "building") {
          this.isBottom = true;
        } else {
          this.isBottom = false;
        }
      }
    },
    created() {
      // sendMessage(window.location.href);
      sendMessage(window.location.href.split('#')[0])
    }
  }

</script>

<style lang="less">
  .fade-enter-active,
  .fade-leave-active {
    transition: all .5s;
  }
  
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
    transform: translateY(10vh);
  }
  
  .bottom-enter-active,
  .bottom-leave-active {
    transition: all .3s;
    visibility: visible;
  }
  
  .bottom-enter,
  .bottom-leave-to {
    opacity: 0;
    visibility: hidden;
  }
  
  .main {
    background: url("../assets/shouye@2x.jpg");
    background-size: 100% 100%;
    width: 100vw;
    height: 100vh;
    .change-btn {
      background: #aaa;
    }
  }
  
  .popup-main {
    position: relative;
    width: 285px;
    height: 350px;
    margin: 0 auto;
  }
  
  .popup {
    h1 {
      position: absolute;
      height: 18px;
      top: 18px;
      width: 100%;
      font-size: 18px;
      line-height: 18px;
    }
    .return {
      position: absolute;
      width: 15px;
      top: 18px;
      left: 16px;
    }
  }
  
  .gradient {
    background-image: linear-gradient(to bottom, #ffffff 24%, rgba(255, 255, 255, 0.00) 98%);
    z-index: 10;
    width: 283px;
    height: 50px;
    margin: 0 auto;
    position: absolute;
    &:last-of-type {
      background-image: linear-gradient(to top, #ffffff 24%, rgba(255, 255, 255, 0.00) 98%);
      bottom: 0;
    }
  }
  
  .popup-message {
    width: 100%;
    height: 100%;
    padding-top: 8px;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    .add-building {
      margin: 0 20px 20px;
      position: relative;
      font-size: 12px;
      &::after {
        content: "";
        display: block;
        clear: both;
        visibility: hidden;
        height: 0
      }
      .information {
        float: left;
        width: 168px;
        height: 30px;
      }
      .add-btn {
        width: 63px;
        height: 30px;
        line-height: 30px;
        float: right;
      }
    }
  }

</style>
