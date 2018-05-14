<template>
  <div>
      <h3 class="text-muted my-5">添加新产品</h3>
      <div class="form-group row">
          <label class="col-sm-1">品种</label>
          <div class="col-sm-11">
              <input type="text" class="form-control" v-model="newPizza.name">
          </div>
      </div>
      <div class="form-group row">
          <label class="col-sm-1">描述</label>
          <div class="col-sm-11">
              <textarea rows="5" class="form-control" v-model="newPizza.description"></textarea>
          </div>
      </div>
      <p><strong>选项1</strong></p>
      <div class="form-group row">
          <label class="col-sm-1">尺寸</label>
          <div class="col-sm-11">
              <input type="text" class="form-control" v-model="newPizza.size1">
          </div>
      </div>
      <div class="form-group row">
          <label class="col-sm-1">价格</label>
          <div class="col-sm-11">
              <input type="text" class="form-control" v-model="newPizza.price1">
          </div>
      </div>
      <p><strong>选项2</strong></p>
      <div class="form-group row">
          <label class="col-sm-1">尺寸</label>
          <div class="col-sm-11">
              <input type="text" class="form-control" v-model="newPizza.size2">
          </div>
      </div>
      <div class="form-group row">
          <label class="col-sm-1">价格</label>
          <div class="col-sm-11">
              <input type="text" class="form-control" v-model="newPizza.price2">
          </div>
      </div>
      <div class="form-group row">
          <button class="btn btn-success btn-block" @click="addMenuItem">添加</button>
      </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data(){
      return {
          newPizza: {}
      }
  },
  methods: {
    addMenuItem(){
      let data = {
          id: Math.random(),
          name: this.newPizza.name,
          description: this.newPizza.description,
          options: [
              {
                  size: this.newPizza.size1,
                  price: this.newPizza.price1
              },
              {
                  size: this.newPizza.size2,
                  price: this.newPizza.price2
              }
          ]
      }
      if(data.name == undefined || data.description == undefined || data.options[0].size == undefined || data.options[0].price == undefined || data.options[1].size ==undefined || data.options[1].price == undefined){
          this.$store.commit('alertWarning', "还有选项未填写哦~")
          this.$store.dispatch('clearAlert')
      }else{
        axios({
          url: '/productions',
          method: 'post',
          headers: {"Content-Type": "application/json"},
          data
        }).then(res => {
             this.$store.commit('pushToMenuItems', data)
             this.newPizza = {}
             this.$store.commit('alertSuccess', "添加成功")
             this.$store.dispatch('clearAlert')
        })
      }
      
    }
  }
  
}
</script>

