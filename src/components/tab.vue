<template>
  <div :class="['mark-bg',{make:isOpen}]" :style="{top:top+'px',left:left+'px'}">
    <span>{{value}}</span>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        isOpen: false
      }
    },
    props: ["value", "top", "left"],
    mounted() {
      setTimeout(() => {
        this.isOpen = true;
      }, 2500);
    }
  }

</script>
<style lang="less">
  .mark-bg {
    position: absolute;
    opacity: 0;
    visibility: hidden;
    transition: all 3s;
    width: 64px;
    height: 37px;
    padding-top: 3px;
    background: url("../assets/biaoqian@2x.png");
    background-size: cover;
    span {
      font-size: 12px;
      color: #000000;
      line-height: 10px;
    }
  }

  .make {
    opacity: 1;
    visibility: visible;
  }

</style>
