<template>
    <div class="container-fluid" style="">
    <b-row class="">
      <div class="col-md-12">
          <img class="img img-responsive" src="../assets/logo.png">
      </div>
      <div class="col-md-12">
        <div class="col-md-6 col-12 mx-auto">
            <div class="card">
                <div class="card-body">
                  <h5>{{ url_alias }}</h5>
                </div>
                <div class="card-footer">
                  <div class="row">
                    <div class="col-md-6 text-left">
                      <span class="">Total visits {{ visit }}</span>
                    </div>
                    <div class="col-md-6 text-right">
                      <span class="">Created at {{ created_at }}</span>
                    </div>
                  </div>
                </div>
            </div>
        </div>
        <div class="col-md-6 col-12 mx-auto" style="padding-top: 10px">
          <div class="row">
            <div class="col-md-6">
              <router-link :to="{name: 'Hello'}" class="btn btn-info">Back to Home</router-link></li>
            </div>
            <div class="col-md-6">
              <a :href="orl_original" class="btn btn-dark">Go to Original URL</a>
            </div>
          </div>    
        </div>
      </div>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'Show',
  data: function () {
    return {
      visit: 0,
      url_alias: 'http://localhost:8081/adad',
      created_at: '',
      orl_original: 'https://google.com'
    }
  }
}
</script>
