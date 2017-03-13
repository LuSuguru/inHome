<template>
  <div class="tab-main" :style="{margin:'0 '+ isFirst +'px'}">
    <img src="../assets/jia@2x.png" alt="佳" v-if="isGood">
    <img src="../assets/bi@2x.png" alt="弊" v-if="!isGood">
    <div class="info">
      <p>玄关旺财，客厅聚财，利于谈事业，谈合作</p>
      <p>主卧卫生设计较佳，其门、床。房门皆不想对，通透、易排浊气</p>
      <p>厨房炉灶对客厅，长期事业易走下坡路</p>
      <p>厨房炉灶对客厅，长期事业易走下坡路</p>
      <p>厨房炉灶对客厅，长期事业易走下坡路</p>
      <p>厨房炉灶对客厅，长期事业易走下坡路</p>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {

      }
    },
    props: ["title"],
    computed: {
      isGood() {
        if (this.title == "good") {
          return true;
        } else {
          return false;
        }
      },
			isFirst() {
				if(this.title=="good") {
					return 20;
				}
			}
    }
  }

</script>
<style lang="less">
  .tab-main {
    display: inline-block;
    vertical-align: top;
    img {
      display: block;
      width: 25px;
      height: 25px;
      margin: 0 auto;
    }
    .info {
      display: inline-block;
      width: 120px;
      height: 144px;
      padding: 0 10px;
      overflow: scroll;
    }
    p {
      font-size: 12px;
      color: #666666;
      line-height: 18px;
      text-align: left;
      margin-bottom: 16px;
      &:first-of-type {
        margin-top: 9px;
      }
    }
  }

</style>
