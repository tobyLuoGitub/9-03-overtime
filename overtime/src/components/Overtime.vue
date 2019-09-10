<template>
  <div class="overtime-page">
    <div class="box">
      <MyHeader />
      <!-- 用户信息 -->
      <div class="user-info">

      </div>
      <!-- 加班申请表格 -->
      <div class="form">
        <h3 class="title">申请信息</h3>
        <p>
          <span>加班日期：</span> <input type='text' v-model="overTime" @click="$refs.overTimePicker.open()" />
        </p>
        <p>
          <select>
            <option value="">工作加班</option>
            <option value="">双休日加班</option>
            <option value="">休假加班</option>
          </select>
        </p>
        <p>
          <span>加班起始时间</span><input type='text' v-model="startTime" @click="$refs.startTimePicker.open()" />
        </p>
        <p>
          <span>加班截止时间</span><input type='text' v-model="endTime" @click="$refs.endTimePicker.open()" />
        </p>
        <p>
          <span>共计时数 </span>
        </p>
      </div>

      <div class="reason">
        <h3>加班事由</h3>
        <input type="text" v-model="overtime_reason" />
      </div>
    </div>

    <!-- datetimePicker -->
    <mt-datetime-picker ref="overTimePicker" type="date" 
      year-format="{value} 年"
      month-format="{value} 月"
      date-format="{value} 日"
      @confirm="overTimeConfirm"></mt-datetime-picker>
    <mt-datetime-picker ref="startTimePicker" type="date" @confirm="startTimeConfirm"></mt-datetime-picker>
    <mt-datetime-picker ref="endTimePicker" type="date" @confirm="endTimeConfirm"></mt-datetime-picker>
  </div>
</template>

<script>
export default {
  data: function(){
    return {
      overtime_reason: [],
      OvertimeStartTime: '',
      overTime: '',
      startTime: '',
      endTime: ''
    }
  },
  methods: {
    overTimeConfirm(data){ // 加班开始 日期
      this.overTime = new Date(data).toLocaleDateString()
    },
    startTimeConfirm(data){ // 加班开始小时
      this.startTime = new Date(data).toLocaleDateString()
    },
    endTimeConfirm(data){ // 加班结束的时间 -- 小时--分
      this.endTime = new Date(data).toLocaleDateString()
    }
  }
}
</script>

<style scoped>
.box {
  margin: 0 15px;
  background: white;
}
.title {
  width: 100%;
  line-height: 30px;
  border-bottom: 1px solid #ccc;
}
</style>