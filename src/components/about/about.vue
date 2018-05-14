<template>
  <div>
    <div class="row mb-5">
      <div class="col-4">
        <div class="list-group mb-5">
          <router-link tag="li" class="nav-link" to="/about/contact">
            <a class="list-group-item list-group-item-action">联系我们</a>
          </router-link>
          <router-link tag="li" class="nav-link" to="/about/address">
            <a class="list-group-item list-group-item-action">店铺地址</a>
          </router-link>
        </div>
      </div>
      <div class="col-8">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
