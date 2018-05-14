<template>
  <div class="row">
    <div class="col-sm-12 col-md-8">
      <app-new-pizza></app-new-pizza>
    </div>
    <div class="col-sm-12 col-md-4">
      <h3 class="text-muted my-5">管理</h3>
      <table class="table">
        <thead class="table table-default">
          <tr>
            <th>品种</th>
            <th>删除</th>
          </tr>
        </thead>
        <tbody v-for="item in getMenuItems" :key="item.id">
          <tr>
            <td>{{item.name}}</td>
            <td>
              <button class="btn btn-outline-danger btn-sm" @click="deleteData(item)">&times;</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import NewPizza from './NewPizza'
import axios from 'axios'

export default {
  data(){
    return {

    }
  },
  computed: {
    getMenuItems:{
      get(){
        return this.$store.state.menuItems;
      },
      set(){

      }
    }
  },
  components: {
    'app-new-pizza': NewPizza
  },
  methods: {
    deleteData(item){
      axios({
        url: '/productions/' + item.id,
        method: 'delete',
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(res => this.$store.commit('removeMenuItems', item))
    }
  },
  created(){
    axios.get('/productions')
         .then(res => this.$store.commit('setMenuItems', res.data))
  }
}
</script>

