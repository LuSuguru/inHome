<template>
  <div class="main">
		<popup></popup>
  </div>
</template>

<script>
import popup from "../components/popup"

  export default {
    data() {
      return {
      }
    },
		components: {
			popup
		},
  }

</script>


<style scoped lang="less">
  .main {
    background: url("../assets/shouye@2x.png");
    background-size: 100% 100%;
    width: 100vw;
    height: 100vh;
  }

</style>
