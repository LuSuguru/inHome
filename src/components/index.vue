<template>
  <div class="main">
    <popup :show="isShow">
      <div slot="popup-main">
        <h1>{{heading}}</h1>
        <div class="popup-main">
          <div class="gradient"></div>
          <div class="popup-message">
            <template v-if="!isHouse">
              <building v-model="buildInfo" v-if="!isAdd">
                <div class="add-building" slot="add-building">
                  <input type="text" placeholder="没找到？请输入您的楼盘" class="information" v-model="buildMess">
                  <a class="add" @click="add">添加</a>
                </div>
              </building>
              <twobar v-if="isAdd" :isDefuse="false"></twobar>
            </template>
            <house v-model="houseInfo" v-if="isHouse"></house>
          </div>
          <div class="gradient"></div>
        </div>
        <a @click="change" class="btn">{{btn}}</a>
      </div>
    </popup>
  </div>
</template>

<script>
  import popup from "../components/popup.vue"
  import building from "../components/building"
  import twobar from "../components/twobar"
  import house from "../components/house"


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
        isShow: true
      }
    },
    components: {
      popup,
      building,
      twobar,
      house
    },
    methods: {
      change() {
        if (this.title == "building" && this.buildInfo) {
          this.heading = "户 型";
          this.btn = "查看结果";
          this.title = "house";
          this.isHouse = true;
        } else if (this.title == "house" && this.houseInfo) {

          router.push({
            name: 'result',
            params: {
              building: this.buildInfo,
              house: this.houseInfo
            }
          });
        } else if (this.title == "ok") {
          this.isShow = false;
        }
      },
      add() {
        if (this.buildMess) {
          this.isAdd = !this.isAdd;
          this.btn = "OK";
          this.title = "ok";
        }
      }
    }
  }

</script>

<style lang="less">
  .main {
    background: url("../assets/shouye@2x.png");
    background-size: 100% 100%;
    width: 100vw;
    height: 100vh;
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
      color: #333333;
      line-height: 18px;
      text-align: center;
    }
    .btn {
      display: inline-block;
      margin-top: 10px;
      background: #000000;
      width: 140px;
      height: 40px;
      font-size: 14px;
      color: #ffffff;
      letter-spacing: 2px;
      text-align: center;
      line-height: 40px;
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
    overflow-y: scroll;
    .add-building {
      margin: 0 20px 20px;
      position: relative;
      z-index: 11;
      font-size: 12px;
      &:after {
        display: block;
        clear: both;
        content: "";
        visibility: hidden;
        height: 0
      }
      .information {
        float: left;
        background: #ffffff;
        border: 1px solid #eae4e4;
        width: 168px;
        height: 30px;
        line-height: 30px;
        padding-left: 10px;
        color: #aaaaaa;
      }
      .add {
        background: #a59371;
        width: 63px;
        height: 30px;
        line-height: 30px;
        float: right;
        color: #ffffff;
      }
    }
  }

</style>
