<template>
  <div>
    <div>
      <h2>Vet Search Near you</h2>

      <label>
        <!--gmap-autocomplete directive shows the location search autocomplete -->
        <gmap-autocomplete @place_changed="initMarker"></gmap-autocomplete>
        <button @click="addLocationMarker">Add</button>
      </label>
      <br />
    </div>
    <br />
    <!-- some basic settings for the google map -->
    <gmap-map class="g-map" :zoom="14" :center="center" style="width: 60%; height: 300px">
      <!--marker for the google map-->
      <gmap-marker
        :key="index"
        v-for="(m, index) in locationMarkers"
        :position="m.position"
        @click="center = m.position"
      ></gmap-marker>
    </gmap-map>
  </div>
</template>
 
<script>
export default {
  name: "AddGoogleMap",
  data() {
    return {
      center: {
        lat: 39.7837304,
        lng: -100.4458825,
      },
      locationMarkers: [],
      locPlaces: [],
      existingPlace: null,
    };
  },

  mounted() {
    this.locateGeoLocation();
  },

  methods: {
    initMarker(loc) {
      this.existingPlace = loc;
    },
    addLocationMarker() {
      if (this.existingPlace) {
        const marker = {
          lat: this.existingPlace.geometry.location.lat(),
          lng: this.existingPlace.geometry.location.lng(),
        };
        this.locationMarkers.push({ position: marker });
        this.locPlaces.push(this.existingPlace);
        this.center = marker;
        this.existingPlace = null;
      }
    },
    //This method is used to auto search the Map for Vets near the users location
    places(query) {
        this.map.removeObjects(this.map.getObjects());
        this.search.request({ "q": query, "at": this.lat + "," + this.lng }, {}, data => {
            for(var i = 0; i < data.results.items.length; i++) {
                // Marker logic here
            }
        }, error => {
            console.error(error);
        });
    },
    //Method to get Geolocation
    locateGeoLocation: function () {
      navigator.geolocation.getCurrentPosition((res) => {
        this.center = {
          lat: res.coords.latitude,
          lng: res.coords.longitude,
        };
      });
    },
  },
};
</script>

<style>
/*Style for map section of map API */
.g-map{
 position: relative;
 display: inline-block;
 padding-bottom: 2fr;
 
}
</style>