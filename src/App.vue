<template>
  <div id="app">
    <div class="container">
      <app-header></app-header>
    </div>
    <div class="alert-box">
      <alert></alert>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
    <div class="container mt-5">
      <div class="row">
        <div class="col-sm-12 col-md-6">
          <router-view name="phone"></router-view>
        </div>
        <div class="col-sm-12 col-md-6">
          <router-view name="address"></router-view>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Header from './components/Header'
import Alert from './components/Alert'


export default {
  components: {
    appHeader: Header,
    Alert

  }
}
</script>

<style>
.alert-box {
  position: absolute;
  left: 50%;
  z-index: 999;
  margin-top: 200px;
  transform: translateX(-50%);
}
.alert-box div.alert {
  display: inline-block;
  margin: 0 auto;
  height: 66px;
  line-height: 40px;
  font-size: 20px;
  border-radius: 10px;
}
</style>
