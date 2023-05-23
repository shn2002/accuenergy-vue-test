<template>
  <div class="row justify-content-center">
    <div class="py-3 px-3 "></div>
    <div class="col-8 border border-primary py-3 px-3">
      <h6>Question 3: Display the location on a map and add a marker to each searched location every time the location changes.</h6><br/>
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Location's name" aria-label="Recipient's username"
          aria-describedby="button-addon2">
        <button class="btn btn-primary" type="button" >Search</button>
      </div>
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
    myFunction() {
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
    ...mapMutations(['changeMsgFlag', 'setMsg', 'initState']),
    ...mapActions(['submitChange'])
  }
}

</script>

