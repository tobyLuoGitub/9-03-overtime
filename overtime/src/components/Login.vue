<template>
  <div class="login-page">
      <p>
          <input type="text" v-model="phone" placeholder="用户名" />
      </p>
      <p>
          <input type="password" v-model="password" placeholder="密码" />
      </p>
      <button @click="loginFn">登录</button>
  </div>
</template>

<script>
export default {
    data: () => {
        return {
            phone: '',
            password: ''
        }
    },
    methods: {
        loginFn: function(){
            this.axios.post('http://localhost:3000/api/login',{phone: this.phone,password: this.password}).then((res)=>{
                //console.log(res.data)
                if ( res.data.code == 1 ) {
                    localStorage.setItem('token',res.data.token)
                    this.$router.push('/home')
                }
            })
        }
        
    }

}
</script>

<style>

</style>