<template>
  <div class="row justify-content-center">
    <div class="py-3 px-3 "></div>
    <div class="col-8 border border-primary py-3 px-3">
      <h6>Question 3: Display the location on a map and add a marker to each searched location every time the location
        changes.</h6><br />
      <GoogleMap :api-key="apiKey" style="width: 100%; height: 500px" :center="center" :zoom="10">
          <Marker v-for="(marker, index) in getMarkers" :key="index"
          :options="marker"></Marker>  
      </GoogleMap>

    </div>
  </div>
</template>
<script>

import { mapGetters } from 'vuex'
import { defineComponent } from "vue";
import { GoogleMap, Marker } from "vue3-google-map";
import { googleConfig } from '../config.js'

export default defineComponent({
  computed: {
    ...mapGetters(['getMarkers']),
  },
  components: { GoogleMap, Marker },
  setup() {
    const center = { lat: 43.653226, lng: -79.3831843 };
    return { center };
  },
  data() {
    return {
      apiKey: googleConfig.apiKey,
    }
  }

})

</script>

