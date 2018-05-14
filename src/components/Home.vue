<template>
  <div class="row">
    <div class="col-sm-12 text-center" id="home">
      <div class="background rounded">
        <h1>Welcome !</h1>
        <h2>Chose what you want!</h2>
        <button @click="goToMenu" class="btn btn-success btn -lg">Let's Order!</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goToMenu(){
      this.$router.push('/menu');
    }
  }
}
</script>

<style>
#home {
  height: 75vh;
  padding: 10%;
  background: url(../assets/pizza.jpg);
}
h1, h2 {
  margin: 6%;
}
h1 {
  font-size: 40px;
  font-weight: bolder;
}
.background {
  max-width: 70vw;
  margin: 0 auto;
  padding: 20px 0;
  opacity: .8;
  background: #eee;
}
</style>


