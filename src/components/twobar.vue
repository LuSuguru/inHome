<template>
  <div class="two-bar">
    <img src="../assets/erweima@2x.png" alt="扫描二维码" width="205px" height="205px">
    <h2>提交成功</h2>
    <h3 v-if="!isDefuse">扫描二维码，关注公众号 <br>并留意消息推送喔</h3>
    <h3 v-if="isDefuse">您的预约已提交，请留意手机我们会及时联系您喔 </h3>
  </div>
</template>
<script>
  export default {
    data() {
      return {}
    },
    props: ["isDefuse"]
  }

</script>
<style lang="less">
  .two-bar {
    position: relative;
    z-index: 20;
    img {
      margin: 20px 0 25px;
    }
    h2 {
      font-size: 18px;
      color: #a59371;
      line-height: 30px;
      margin-bottom: 10px;
    }
    h3 {
      letter-spacing: 2px;
      line-height: 20px;
    }
  }

</style>
