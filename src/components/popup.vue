<template>
  <div>
    <div :class="[{'popup-show':isShow},'popup']" :style="popStyle">
      <slot name="popup-main"></slot>
    </div>
    <div :class="[{'popupBg-show':isBg},'popupBg']" :style="wh"></div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        isShow: false,
        isBg: false,
        wh: {
          width: window.innerWidth + "px",
          height: window.innerHeight + "px"
        }
      }
    },
    props: ["show", "popStyle"],
    watch: {
      show(val) {
        if (!val) {
          this.isShow = false;
          this.isBg = false;
        } else {
          this.isShow = true;
          this.isBg = true;
        }
      }
    },
    mounted() {
      if (this.show)
        setTimeout(() => {
          this.isShow = true;
          this.isBg = true;
        }, 2000);
    }
  }

</script>
<style lang="less">
  .popupBg {
    position: absolute;
    transition: all 1s;
    top: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0);
    visibility: hidden;
  }
  
  .popupBg-show {
    position: absolute;
    top: 0;
    visibility: visible;
    background: rgba(0, 0, 0, 0.59);
    width: 100vw;
    height: 100vh;
    z-index: 4;
  }
  
  .popup {
    transition: all 1s;
    transform: translateY(9vh);
    visibility: hidden;
    opacity: 0;
    position: absolute;
    z-index: 5;
    width: 315px;
    height: 460px;
    left: 50%;
    top: 50%;
    background: url("../assets/huajuan1@2x.jpg");
    background-size: 315px 460px;
    padding-top: 50px;
    text-align: center;
    margin-left: -157.5px;
    margin-top: -230px;
  }
  
  .popup-show {
    transform: translateY(0);
    visibility: visible;
    opacity: 1;
  }

</style>
