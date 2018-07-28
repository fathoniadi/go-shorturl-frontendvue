<template>
  <div class="container-fluid" style="">
    <b-row class="">
      <div class="col-md-12">
          <img class="img img-responsive" src="../assets/logo.png">
          <h1 class="h1">{{ msg }}</h1>
          <FormUrl/>
      </div>
    </b-row>
  </div>
</template>

<script>
import FormUrl from '@/components/FormUrl'

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Go URL Shortener'
    }
  },
  components: {FormUrl}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
