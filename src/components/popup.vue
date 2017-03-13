<template>
  <div>
    <div :class="[{'popup-show':isShow},'popup']" :style="popStyle">
      <slot name="popup-main"></slot>
    </div>
    <div :class="{'popup-bg':isBg}"></div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        isShow: false,
        isBg: false
      }
    },
    props: ["show","popStyle"],
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
      if(this.show)
      setTimeout(() => {
        this.isShow = true;
        this.isBg = true;
      }, 500);
    }
  }

</script>
<style lang="less">
  .popup-bg {
    position: absolute;
    top: 0;
    transition: all 1s;
    background: rgba(0, 0, 0, 0.59);
    width: 100vw;
    height: 100vh;
    z-index: 4;
  }
  
  .popup {
    transition: all 1s;
    transform: translateY(120px);
    visibility: hidden;
    opacity: 0;
    position: absolute;
    z-index: 5;
    width: 315px;
    height: 460px;
    left: 50%;
    top: 0;
    background: url("../assets/huajuan1@2x.png");
    background-size: 315px 460px;
    padding-top: 50px;
    text-align: center;
    margin-left: -157.5px;
    margin-top: 50px;
  }
  
  .popup-show {
    transition: all 1s;
    transform: translateY(0);
    visibility: visible;
    opacity: 1;
  }
  
</style>
