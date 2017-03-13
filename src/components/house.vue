<template>
  <div>
    <div class="item item-house" v-for="n in 10" :key="'house'+n">
      <input type="radio" :id="'house'+n" :value="n" v-model="house">
      <label :for="'house'+n">{{n}}</label>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        house: ""
      }
    },
    props: ["value"],
    watch: {
      house(val) {
        this.$emit("input", val);
      }
    }
  }

</script>
<style lang="less">
  .item-house {
    &:first-of-type {
      margin-top: 57px;
    }
    input[type="radio"]+label {
        height: 51px;
    }
  }

</style>
