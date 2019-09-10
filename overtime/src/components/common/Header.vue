<template>
  <div class="header">
      <span class="iconfont icon-fanhui" @click='goBack'></span>
  </div>
</template>

<script>
export default {
  methods: {
    goBack: function () {
      //console.log(this.$router)
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
.header {
  height: 40px;
  width: 100%;
  background: white;
  line-height: 40px;
}
</style>