<template>
  <div class="popup">
    <h1>楼 盘</h1>
    <building></building>
  </div>
</template>

<script>
  import building from "../components/building"
  export default {
    data() {
      return {

      }
    },
    components: {
        building
    }
  }

</script>

<style scoped lang="less">
  .popup {
    position: relative;
    width: 315px;
    height: 460px;
    background: url("../assets/huajuan2@2x.png");
    background-size: 315px 460px;
    padding-top: 50px;
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
  }

</style>
