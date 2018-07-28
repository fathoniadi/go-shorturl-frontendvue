<template>
    <div class="container-fluid" style="">
    <b-row class="">
      <div class="col-md-12">
          <img class="img img-responsive" src="../../assets/logo.png">
          <h1><strong v-html="title"></strong> <span v-html="content"></span></h1>
      </div>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'err404',
  data: function () {
    return {
      title: 'Error 404',
      content: 'Page Not Found'
    }
  }
}
</script>
