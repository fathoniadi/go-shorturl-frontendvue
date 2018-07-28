<template>
  <div class="container-fluid" style="">
    <b-row class="">
      <div class="col-md-12">
          <img class="img img-responsive" src="../assets/logo.png">
      </div>
      <b-col class="col-md-12">
          <h1 class="h1">{{ msg }}</h1>
          <p>This project is free to use</p>
          <p>Special thanks to <a href="https://intip.in">https://intip.in</a>. Your project is good. So I can learn from you</p>
      </b-col>
    </b-row>
  </div>
</template>

<script>

export default {
  name: 'about',
  data () {
    return {
      msg: 'About'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
