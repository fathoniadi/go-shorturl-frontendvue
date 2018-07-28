<template>
    <div class="d-flex justify-content-center align-items-center container-fluid">
        <div class="col-md-6 col-xs-12">
            <b-alert :show="dismissCountDown"
                    dismissible
                    variant="danger"
                    @dismissed="dismissCountDown=0"
                    @dismiss-count-down="countDownChanged">
              <p>{{ error_message }}</p>
              <p>This alert will dismiss after {{dismissCountDown}} seconds...</p>
              <b-progress variant="danger"
                          :max="dismissSecs"
                          :value="dismissCountDown"
                          height="4px">
              </b-progress>
            </b-alert>
            <form @submit.prevent="" class="">
                <div class="row">
                    <div class="col-md-10">
                        <div class="form-group">
                            <input type="" name="url" @keyup.enter="doShort()" v-validate="'required|url'" placeholder="Enter your url here :)" v-model="url" class="form-control form-control-lg">
                        </div>
                        <div class="form-group row text-right" v-show="custom_link">
                            <label for="" style="" class="col-form-label">http://localhost:8081/</label>
                            <input v-model="input_custom_link" type="text" class="form-control col-4">
                        </div>
                    </div>
                    <div class="col-md-2">
                        <b-dropdown title="Click for 'Do IT' or click dropdown for another option" id="ddown-split" @click="doShort()" split text="Do it or " size="lg" class="">
                          <b-dropdown-item v-if="( custom_link == false )" @click="(custom_link = true)" href="#">Use Custom Link</b-dropdown-item>
                          <b-dropdown-item v-if="( custom_link == true )" @click="(custom_link = false)" href="#">Use Random</b-dropdown-item>
                        </b-dropdown>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
  name: 'FormUrl',
  data: function () {
    return {
      url: '',
      dismissSecs: 10,
      dismissCountDown: 0,
      error_message: '',
      custom_link: false,
      input_custom_link: ''
    }
  },
  methods: {
    doShort: function () {
      let url = this.url
      let customLink = this.input_custom_link
      if (url.length <= 0) {
        this.error_message = 'Please input valid URL'
        this.dismissCountDown = this.dismissSecs
        return
      }

      if (this.$validator.errors.first('url')) {
        this.error_message = 'Please input valid URL'
        this.dismissCountDown = this.dismissSecs
        return
      }

      if (this.custom_link && !/^[a-z0-9-]+$/.test(customLink)) {
        this.error_message = 'Please input valid custom link. Custom link only support Number, Alphabet and Dash(-)'
        this.dismissCountDown = this.dismissSecs
        return
      }
    },
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    }
  }
}
</script>
