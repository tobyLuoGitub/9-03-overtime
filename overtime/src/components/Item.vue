<template>
  <div class="item-box">
      <div class="title">
          <span>{{item.applicationNumber}}</span>
          <!-- 状态 -->
          <p v-if="item.status == 0"><span class="iconfont icon-73dengdai"></span> 待审批</p>
          <p v-else-if="item.status == 1"> <span class="iconfont icon-73dengdai"></span> 已发起</p>
          <p v-else> <span class="iconfont icon-73dengdai"></span> 已处理</p>
      </div>
      <div class="content">
          <div>
            <p>
              <span>申请人</span><span>{{item.nickname}}</span>
            </p>
            <p>
              <span>加班日期</span><span>{{new Date(item.startTime).toLocaleDateString()}}</span>
            </p>   
          </div>
          <div>
            <!-- 处理加班类型 -->
            <p v-if="item.type == 1"><span>加班类型</span><span>工作日加班</span></p>
            <p v-else-if="item.type == 2"><span>加班类型</span><span>双休日加班</span></p>
            <p v-else><span>加班类型</span><span>假期加班</span></p>
            <p>
              <span>加班时数</span><span>{{ (new Date(item.endTime) - new Date(item.startTime)) / 3600000 }}</span>
            </p>
          </div>       
      </div>
      
  </div>
</template>

<script>
export default {
    props: ['item']
}
</script>

<style scoped>
.item-box {
    display: flex;
    flex-direction: column;
    background: white;
    padding: 0 10px;
    margin-bottom: 10px;
    font-size: 12px;
}
.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.content {
    display: flex;
    justify-content: space-between;
}
.content div>p>span:first-child {
    display: inline-block;
    width: 70px;
}

</style>