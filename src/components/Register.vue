<template>
  <div class="row mt-3">
    <div class="col-md-12 col-lg-12">
      <div class="card">
        <div class="card-body">
          <img src="../assets/timg.jpg" class="mx-auto d-block my-5">
          <form @submit.prevent="onSubmit">
            <div class="form-group">
              <label for="email">邮箱</label>
              <input type="email" id="email" class="form-control" v-model="email">
            </div>
            <div class="form-group">
              <label for="password">密码</label>
              <input type="password" id="password" class="form-control" v-model="password">
            </div>
            <div class="form-group">
              <label for="confirm-password">确认密码</label>
              <input type="password" id="confirm-password" class="form-control" v-model="confirmPassword">
            </div>
            <button type="submit" class="btn btn-block btn-success">注册</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data(){
    return {
      id: Math.random(),
      email: '',
      password: '',
      confirmPassword: ''
    }
  },
  methods: {
    onSubmit(){
      if(this.password === this.confirmPassword){
        const formData = {
          id: this.id,
          email: this.email,
          password: this.password,
          confirmPassword: this.confirmPassword
        }

        // axios.post('/users', formData)
        //      .then(res => this.$router.push('/login'))
        axios({
          url: '/users',
          method: 'post',
          headers: {
            "Content-Type": "application/json"
          },
          data: formData
        }).then(res => {
          this.$router.push('/login')
          this.$store.commit('alertSuccess', "注册成功，请登录")
          this.$store.dispatch('clearAlert')
        });
      }else{
        this.$store.commit('alertWarning', "两次密码不一致！");
        this.$store.dispatch('clearAlert')
      }
    }
  }
}
</script>

