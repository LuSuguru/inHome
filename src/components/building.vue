<template>
  <div class="popup-main">
    <div class="gradient"></div>
    <div></div>
    <div class="gradient"></div>
  </div>
</template>

<script>
  export default {

  }

</script>

<style lang="less">
  .popup-main {
    position: relative;
    width: 285px;
    height: 350px;
    padding: 17px 0 20px;
    margin: 0 auto;
  }
  
  .gradient {
    background-image: linear-gradient(-180deg, #ffffff 24%, rgba(255, 255, 255, 0.00) 98%);
    width: 283px;
    height: 50px;
    margin: 0 auto;
    &:first-of-type {
        position: absolute;
    }
    &:last-of-type {
        position: absolute;
        bottom: 20px;
    }
  }

</style>
