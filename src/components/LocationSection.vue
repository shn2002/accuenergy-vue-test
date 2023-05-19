<template>
  <section>
    <!-- <button @click="myFunction">
      Get Current Location:
    </button>
    <div v-if="showElement">
      Latitide : {{ msg.lat }}
      Longitude : {{ msg.long }}
    </div>
    <div v-if="showError">
      Err Message : {{ msg.err }}
    </div> -->


    <div>
    <p>Count: {{ count }}</p>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
  </div>

  </section>
</template>
   
<script>
//import { googleConfig } from '../config.js'
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
  name: 'ButtonTestA',
  computed: {
    //...mapState(['count'])
    ...mapState(['showError','showElement','msg', 'count'])
  },
  methods: {
    // ...mapMutations(['setLocation', 'setShowElement', 'setError', 'initState']),
    // ...mapActions(['setLocation', 'setShowElement', 'setError', 'initState']),
    // myFunction() {
    //   const location = window.navigator.geolocation
    //   this.initState()
    //   // console.log(googleConfig.apiKey)
    //   if (location) {
    //     location.getCurrentPosition(
    //       function (pos) {
    //         const lat = pos.coords.latitude
    //         const long = pos.coords.longitude
    //         this.setLocation(lat, long)
    //         this.setShowElement()
    //       }.bind(this),
    //       function (err) {
    //         this.setError(err)
    //       }.bind(this),
    //     )
    //   }
    // },
    ...mapMutations(['increment', 'decrement']),
    ...mapActions(['increment', 'decrement'])
  }
}

</script>