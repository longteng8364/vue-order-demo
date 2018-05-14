<template>
  <div class="alert" :class="{'alert-danger': hasWarning, 'alert-success': hasSuccess}" v-show="hasSuccess || hasWarning">{{alertMsg}}</div>
</template>
<script>
export default {
  
  computed: {
      hasWarning(){
          return this.$store.state.hasWarning
      },
      hasSuccess(){
          return this.$store.state.hasSuccess
      },
      alertMsg(){
          return this.$store.state.alertMsg
      }
  }
}
</script>

