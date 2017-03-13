<template>
  <div>
    <div class="defuse-main">
      <div class="defuse-z">
        <h1>次 卧 挨 电 梯 ， 黄 色 水 晶 球 可 化 解</h1>
        <h1>炉 灶 对 客 厅 ， 吃 饭 时 关 门 巧 化 解</h1>
        <img src="../assets/logo2@2x.png" alt="In家生活">
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
  export default {
    data() {
      return {
        isOrder: false
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
      }
    }
  }

</script>
<style lang="less">
  .defuse-main {
    width: 100vw;
    height: 100vh;
    &::before,
    &::after {
      content: "";
      width: 100%;
      position: absolute;
    }
    &::before {
      background: url("../assets/xinB@2x.png");
      background-size: 100% 100%;
      height: 300px;
      bottom: 50px;
    }
    .defuse-z {
      background: url("../assets/xinzhi@2x.png");
      background-size: 100% 100%;
      position: relative;
      z-index: 2;
      width: 96%;
      height: 85%;
      margin: 0 auto;
      h1 {
        position: absolute;
        width: 16px;
        font-size: 16px;
        color: #444444;
        line-height: 22px;
        &:first-of-type {
          left: 44%;
          top: 15%;
        }
        &:last-of-type {
          left: 53%;
          top: 15%;
        }
      }
      img {
        position: absolute;
        height: 6%;
        width: 8%;
        right: 12%;
        top: 72%;
      }
    }
    &::after {
      background: url("../assets/xinA@2x.png");
      background-size: 100% 100%;
      height: 200px;
      bottom: 0;
      z-index: 3;
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
