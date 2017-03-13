<template>
  <div class="mark" :style="{top:top+'px',left:left+'px'}">
    <span>{{value}}</span>
  </div>
</template>
<script>
  export default {
    data() {
      return {}
    },
    props: ["value", "top", "left"],
  }

</script>
<style lang="less">
  .mark {
    position: absolute;
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

</style>
