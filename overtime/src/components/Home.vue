<template>
  <div class="home-page">
      <MyHeader/>
      <!-- 审核状态 -->
      <div class="status-box">
        <div class="status">
          <!-- <p class="iconfont"> -->
            <span v-for="(item,index) in status_active" :key="index" :class="{active:item.flag}" @click="changeList(item.code)">
              <i :class="item.icon"></i>
              {{item.title}}
            </span>
          <!-- </p> -->
          
        </div>
         <!-- 加班类型 -->
        <div class="type-box">
            <div :class="{active: type_actives[0] }" @click="changeType(0)">加班</div>
            <div :class="{active: type_actives[1] }" @click="changeType(1)">休假</div>
        </div>
      </div>
      <!-- 列表展示 -->
      <div class="list-box">
        <div v-if="(list.length>0)">
          <Item v-for="(item,index) in list" :key="index" :item="item" />
        </div>
        <div v-else>暂无数据</div>
      </div>

      <!-- 发布任务 -->
      <div class="release-task" @click="(showMask=true)">
        <span class="iconfont icon-jia"></span>发起任务
      </div>
      <MyMask v-show="showMask" @click.native="showMask=false"></MyMask>
  </div>
</template>

<script>
import Vue from 'vue'
import Item from './Item'

export default {
  components: {
    Item
  },
  data: () => {
    return {
      //  审批状态
      status_active: [
        {
          title: "待处理",
          icon: "iconfont icon-shijian",
          code: 0,
          flag: true
        },
        {
          title: "已发起",
          icon: "iconfont icon-zhifeiji",
          code: 1,
          flag: false
        },
        {
          title: "已处理",
          icon: "iconfont icon-wancheng",
          code: 2,
          flag: false
        }
      ], 
      list: [],
      length:0,
      type_actives:[true,false], // 加班类型状态
      current_status: 0,   //  默认审核状态
      current_type:　'overtime', // 默认 工作时间 加班方式
      showMask: false // 控制弹层显隐
    }
  },
  methods: {
    changeList: function (code) {  // 默认审核状态 样式
      this.status_active.forEach(element => {
        if(element.code == code){ // 选中高亮
          element.flag = true
          this.current_status = code
        }else{
          element.flag = false
          this.current_status = code
        }
      });

      // 请求对应状态的数据
      this.request_list(code,this.current_type,0)

      console.log(this.$router)
    },
    changeType: function (type) {  
      //  加班类型 样式
      for(var i =0;i < this.type_actives.length;i++)
        {
          if(i == type)
          {
              this.$set( this.type_actives,i,true );
              //this.type_actives[i] = true
              console.log(this.type_actives[i],i)
          }
          else
          {
              this.$set( this.type_actives,i,false );
              //this.type_actives[i] = false
              console.log(this.type_actives[i],i)
          }
        }
        // 保存 加班类型
        this.current_type = (type == 0?"overtime":"vacation");
        // 请求对应状态的数据
        this.request_list(this.current_status,this.current_type,0)
    },
  //  baseUrl    公共的访问路径设置
  //baseUrl
  // 封装 axios
    request_list: function ( status,type,way ) {
      //  请求头
      this.axios.defaults.headers.common['token'] = localStorage.getItem('token')

      if (way == 0){ // 通过 way 判断请求方式 0=get/1=post 
        this.axios.get('http://localhost:3000/api/task/list',{ params: { status: status, type: this.current_type, create_at: 0 }}).then((res)=>{
          this.list = res.data.data
          this.length = this.list.length
          console.log(this.list)
          console.log(this.list.length)
        })
      
      }else{
        this.axios.post('http://localhost:3000/api/task/list',{ params: { status: status, type: this.current_type, create_at: 0 }}).then((res)=>{
          this.list = res.data.data

        })
      }
      
    }
  },
  mounted(){
    this.request_list(this.current_status,this.current_type,0)
  }
}
</script>

<style scoped>
*{
  padding: 0;
  margin: 0;
}

.status {
  display: flex;
  justify-content: space-around;
}
.active {
  color: darkgreen;
}
.iconfont {
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 20px;
}
/* 任务类型 */
.type-box{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 25px 0;
}
.type-box div{
    background-color: white;
    color: darkgreen;
    border: 1px solid darkgreen;
    line-height: 30px;
    width: 100px;
    text-align: center;
    border-radius: 15px 0 0 15px;
}
.type-box div.active{
    background-color: darkgreen;
    color: white;
}
.type-box div:last-child{
    border-radius: 0 15px 15px 0 ;
}

/* 发布任务 */
.release-task {
  position: fixed;
  bottom: 20px;
  right: 10px;
  background-color: darkgreen;
  color: white;
  text-align: center;
  line-height: 30px;
  padding: 0 10px;
  border-radius: 20px;
}
</style>