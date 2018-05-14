<template>
<div class="row">
  <div class="col-sm-12 col-md-8">
    <table class="table">
      <thead class="thead-default">
        <tr>
          <th>尺寸</th>
          <th>价格</th>
          <th>加入</th>
        </tr>
      </thead>
      <tbody v-for="item in items" :key="item.id">
        <tr>
          <td><strong>{{item.name}}</strong></td>
        </tr>
        <tr v-for="option in item.options" :key="option.size">
          <td>{{option.size}}</td>
          <td>{{option.price}}</td>
          <td><button class="btn btn-sm btn-outline-success" @click="addToBasket(item, option)">+</button></td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="col-sm-12 col-md-4">
    <div v-show="basket.length">
      <table class="table">
        <thead class="thead-default">
          <tr>
            <th>数量</th>
            <th>品种</th>
            <th>价格</th>
          </tr>
        </thead>
        <tbody v-for="item in basket" :key="item.id">
          <tr>
            <td>
              <button class="btn btn-sm" @click="decrease(item)">-</button>
              <span>{{item.quantity}}</span>
              <button class="btn btn-sm" @click="increase(item)">+</button>
            </td>
            <td>{{item.name}}-{{item.size}}寸</td>
            <td>{{item.price * item.quantity}}</td>
          </tr>
        </tbody>
      </table>
      <p class="text-danger">总价：{{total}}元</p>
      <button class="btn btn-success btn-block">提交订单</button>
    </div>
    <div v-show="basket.length == 0" class="text-center text-warning border-top" style="padding-top: 200px">购物车是空的~~</div> 
  </div>
</div>
  
</template>

<script>
import axios from 'axios'

export default {
  data(){
    return {
      basket: []
      }
  },

  created(){
    axios.get('/productions')
         .then(res => this.$store.commit('setMenuItems', res.data)
         )
  },

  computed: {
    items(){
      return this.$store.state.menuItems;
    },
    total(){
      let totalCost = 0;
      for(let index in this.basket){
        let chosedItem = this.basket[index];
        totalCost += chosedItem.quantity * chosedItem.price;
      }

      return totalCost;
    }
  },
  methods: {
    addToBasket(item, option){
      let chosedItem = {
        name: item.name,
        size: option.size,
        price: option.price,
        quantity: 1
      }

      if(this.basket.length > 0){
        let result = this.basket.filter((pizza) => {
          return (pizza.name === item.name && pizza.price === option.price)
        })

        if(result != null && result.length > 0){
          result[0].quantity ++;
        }else{
          this.basket.push(chosedItem);
        }
      }else{
        this.basket.push(chosedItem);
      }
      
    },
    increase(item){
      item.quantity ++;
    },
    decrease(item){
      item.quantity --;
      
      if(item.quantity <= 0){
        this.removeFromBasket(item);
      }
    },
    removeFromBasket(item){
      this.basket.splice(this.basket.indexOf(item), 1);
    }
  }
}
</script>

