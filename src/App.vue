<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        transitionName: ""
      }
    },
    watch: {
      '$route' (to, from) {
        const toDepth = to.path.split('/').length;
        const fromDepth = from.path.split('/').length;
        this.transitionName = toDepth < fromDepth ? 'right' : 'left';
      }
    }
  }

</script>
<style lang="less">
  .left-enter,
  .right-leave-active {
    transition: all 0.7s;
    opacity: 0;
    transform: translate(30px, 0);
  }
  
  .left-leave-active,
  .right-enter {
    transition: all 0.5s;
    opacity: 0;
    transform: translate(-30px, 0);
  }

</style>
