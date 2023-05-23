<template>
  <img alt="Vue logo" src="./assets/logo.png" style="width: 100px; height: 100px;">
  <LocationComponent />
  <SearchComponent/>
  <MapComponent/>
  <TableComponent/>
</template>

<script>
import LocationComponent from './components/LocationComponent.vue'
import SearchComponent from './components/SearchComponent.vue'
import TableComponent from './components/TableComponent.vue'
import MapComponent from './components/MapComponent.vue'

export default {
  name: 'App',
  components: {
    LocationComponent,
    SearchComponent,
    MapComponent,
    TableComponent,
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
