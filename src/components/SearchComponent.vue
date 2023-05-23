<template>
  <div class="row justify-content-center">
    <div class="py-3 px-3 "></div>
    <div class="col-8 border border-primary py-3 px-3">
      <h6>Question 2: A search module that lets users input the name of a location.</h6><br />
      <h6>The search feature is triggered by both
        button clicks and pressing the enter key on the keyboard.</h6><br />
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Location's name" aria-label="Location's name"
          v-model="inputValue" @keydown.enter="addCityHandler(this.inputValue)">
        <button class="btn btn-primary" type="button" @click="addCityHandler(this.inputValue)">Search</button>
      </div>
      <div class="row justify-content-center">{{ this.inputMsg }}</div>
    </div>
  </div>
</template>
<script>
//import { googleConfig } from '../config.js'
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'ButtonTestA',
  data() {
    return {
      inputValue: ''
    };
  },
  computed: {
    ...mapState(['inputMsg'])
  },
  methods: {
    addCityHandler(payload){
        this.addCity(payload)
        this.inputValue=''
    },
    ...mapMutations(['addCity']),
    // ...mapActions(['submitChange'])
  }
}

</script>

