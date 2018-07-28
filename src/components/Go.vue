<template>
    <div class="container-fluid" style="">
    <b-row class="">
      <div class="col-md-12">
          <img class="img img-responsive" src="../assets/logo.png">
      </div>
      <div class="col-md-8 ml-auto mr-auto">
        <div class="card bg-light">
          <div class="card-header">
            <h5>You will be redirected in 3 seconds</h5>
          </div>
          <div class="card-body text-center">
            <span>Your destination <b><a class="" :href="url_original">{{ url_title }}</a></b></span>
          </div>
        </div>
      </div>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'Go',
  data: function () {
    return {
      msg: 'Hello',
      url_original: 'https://google.com',
      url_alias: '',
      url_title: 'https://google.com'
    }
  },
  mounted: function () {
    let that = this
    setTimeout(function () {
      console.log(that.url_original)
    }, 3000)
  }
}
</script>
