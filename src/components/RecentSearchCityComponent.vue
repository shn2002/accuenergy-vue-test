<template>
    <div class="row justify-content-center">
      <div class="py-3 px-3 "></div>
      <div class="col-8 border border-primary py-3 px-3">
        <h6>Question 5: Display the time zone and local time of the latest searched location.</h6><br />
        <div class="row justify-content-center">Recent Search City: {{ this.recentSearchCity.name }}</div>
        <div class="row justify-content-center">Recent Time Zone: {{ this.recentSearchCity.timeZoneId }}</div>
        <div class="row justify-content-center">Recent Local Time: {{ this.recentSearchCity.localTime }}</div>
      </div>
    </div>
  </template>
  <script>
  import { mapState } from 'vuex';
  
  export default {
    data() {
      return {
        inputValue: ''
      };
    },
    computed: {
      ...mapState(['recentSearchCity'])
    },
  }
  </script>
  
  