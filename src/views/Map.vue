<template>
  <div class="page-layout">
    <Sidebar />
    <div class="map-wrap">
      <a href="https://www.maptiler.com" class="watermark"
        ><img
          src="https://api.maptiler.com/resources/logo.svg"
          alt="MapTiler logo"
      /></a>
      <div class="map" ref="mapContainer"></div>
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar.vue";
import { Map, NavigationControl, Marker } from "maplibre-gl";
import { shallowRef, onMounted, onUnmounted, markRaw } from "vue";

export default {
  name: "Map",
  components: {
    Sidebar,
  },
  setup() {
    const mapContainer = shallowRef(null);
    const map = shallowRef(null);

    onMounted(() => {
      const apiKey = "gUeAqEoOqZo5GMaFLlQx";
      if (apiKey == null) {
        throw new Error(
          "You need to configure env VUE_APP_API_KEY first, see README"
        );
      }

      const initialState = { lng: 28.9784, lat: 41.0082, zoom: 12 };

      map.value = markRaw(
        new Map({
          container: mapContainer.value,
          style: `https://api.maptiler.com/maps/streets/style.json?key=${apiKey}`,
          center: [initialState.lng, initialState.lat],
          zoom: initialState.zoom,
        })
      );
      map.value.addControl(new NavigationControl(), "top-right");
      new Marker({ color: "#FF0000" })
        .setLngLat([139.7525, 35.6841])
        .addTo(map.value);
    });

    onUnmounted(() => {
      map.value?.remove();
    });

    return {
      map,
      mapContainer,
    };
  },
};
</script>


<style >
.page-layout {
  display: flex;

  @media (max-width: 1024px) {
    padding-left: 6rem;
  }
}
.map-wrap {
  position: relative;
  width: 100%;
  height: 100vh;
  /* height: calc(
    100vh - 77px
  );  */
}

.map {
  position: absolute;
  width: 100%;
  height: 100%;
}

.watermark {
  position: absolute;
  left: 10px;
  bottom: 10px;
  z-index: 999;
}
</style>