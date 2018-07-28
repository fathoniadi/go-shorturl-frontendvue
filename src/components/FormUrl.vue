<template>
  <div class="col-md-6 col-12 mx-auto">
      <b-alert :show="dismissCountDown"
              dismissible
              variant="danger"
              @dismissed="dismissCountDown=0"
              @dismiss-count-down="countDownChanged">
        <p v-html="error_message"></p>
        <p>This alert will dismiss after {{dismissCountDown}} seconds...</p>
        <b-progress variant="danger"
                    :max="dismissSecs"
                    :value="dismissCountDown"
                    height="4px">
        </b-progress>
      </b-alert>
      <form @submit.prevent="" class="">
          <div class="row">
              <div class="col-md-8">
                  <div class="form-group">
                      <input type="" name="url" @keyup.enter="doShort()" placeholder="Enter your url here :)" v-model="url" class="form-control form-control-lg">
                  </div>
                  <div class="form-group row text-right" v-show="custom_link">
                      <label for="" style="" class="col-form-label">http://localhost:8081/</label>
                      <input v-model="input_custom_link" @keyup.enter="doShort()" type="text" class="form-control col-4">
                  </div>
              </div>
              <div class="col-md-2">
                  <b-dropdown title="Click for 'Do IT' or click dropdown for another option" id="ddown-split" @click="doShort()" split :text="mode" size="lg" class="">
                    <b-dropdown-item v-if="( custom_link == false )" @click="changeMode(true, 'Do it (Custom Link Mode)')" href="#">Use Custom Link</b-dropdown-item>
                    <b-dropdown-item v-if="( custom_link == true )" @click="changeMode(false, 'Do it (Random Mode)')" href="#">Use Random</b-dropdown-item>
                  </b-dropdown>
              </div>
          </div>
      </form>
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
      input_custom_link: '',
      mode: 'Do it (Random Mode)'
    }
  },
  methods: {
    doShort: function () {
      let url = this.url
      let customLink = this.input_custom_link
      var error = false
      if (url.length <= 0) {
        error = true
        this.error_message = 'Please input valid URL'
      }

      let regex = /^(http|https)/
      if (url.length > 3 && !url.match(regex)) {
        error = true
        this.error_message = 'Please input valid URL'
      }

      let regexProtocolOnly = /^(http|https)$/
      if (url.length > 3 && !url.match(regexProtocolOnly)) {
        error = true
        this.error_message = 'Please input valid URL'
      }

      if (this.custom_link && !/^[a-z0-9-]+$/.test(customLink)) {
        error = true
        this.error_message = 'Please input valid custom link. <br> Custom link only support Number, Alphabet and Dash (-)'
      }

      if (customLink.length <= 4 && this.custom_link) {
        error = true
        this.error_message = 'Custom link must more than 4 character'
      }

      if (error) {
        this.dismissCountDown = this.dismissSecs
        return
      }
      console.log('Hello')
    },
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    changeMode (mode, text) {
      this.custom_link = mode
      this.input_custom_link = ''
      this.mode = text
    }
  }
}
</script>
