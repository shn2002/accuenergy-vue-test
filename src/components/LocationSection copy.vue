<template>
  <section>
    <button @click="myFunction">
      Get Current Location:
    </button>
    <!-- <div v-if="state.showElement">
      Latitide : {{ msg.lat }}
      Longitude : {{ msg.long }}
    </div>
    <div v-if="state.showError">
      Err Message : {{ msg.err }}
    </div> -->
  </section>
</template>
   
<script>
import { googleConfig } from '../config.js'

export default {
  name: 'ButtonTestA',
  data() {
    return {
      msg: {},
      showElement: false,
      showError: false,
    }
  },
  methods: {
    myFunction() {
      const location = window.navigator.geolocation
      this.showElement = false
      this.showError = false
      console.log(googleConfig.apiKey)
      if (location) {
        location.getCurrentPosition(
          function (pos) {
            const lat = pos.coords.latitude
            const long = pos.coords.longitude
            this.setLocation(lat, long)
            this.setShowElement()
          }.bind(this),
          function (err) {
            this.setError(err)
          }.bind(this),
        )
      }
    },
    setLocation(lat, long) {
      this.msg.lat = lat
      this.msg.long = long
    },
    setShowElement() {
      this.showElement = true
    },
    setError(err) {
      this.showError = true
      this.msg.err = "Get location failure: " + err.message
    }
  }
}

</script>