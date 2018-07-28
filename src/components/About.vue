<template>
  <div class="container-fluid" style="">
    <b-row class="">
      <b-col class="col-md-12">
          <h1 class="h1">{{ msg }}</h1>
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
