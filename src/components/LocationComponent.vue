<template>
  <div class="row justify-content-center">
    <div class="py-3 px-3 "></div>
    <div class="col-8 border border-primary py-3 px-3">
      <h6>Question 1: A button to allow users to acquire their current location from their browser.</h6><br/>
      <h6 v-if="showMsg" class="text-center">{{ msg }}</h6><br/>
      <button class="btn btn-primary" @click="locationHandler">Get Current Location</button>
    </div>
  </div>
</template>
   
<script>
//import { googleConfig } from '../config.js'
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
  name: 'ButtonTestA',
  computed: {
    ...mapState(['showMsg', 'msg'])
  },
  methods: {
    locationHandler() {
      const location = window.navigator.geolocation
      this.initState()
      // console.log(googleConfig.apiKey)
      if (location) {
        location.getCurrentPosition(
          function (pos) {
            const lat = pos.coords.latitude
            const long = pos.coords.longitude
            const msg = 'Latitude: ' + lat.toString() + ' Longitude: ' + long.toString()
            this.submitChange(msg)
          }.bind(this),
          function (err) {
            this.submitChange(err.message)
          }.bind(this),
        )
      }
    },
    ...mapMutations(['initState']),
    ...mapActions(['submitChange'])
  }
}

</script>

