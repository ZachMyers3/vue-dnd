<template>
  <v-card class="map-wrapper">
    <panZoom :options="{minZoom: 0.5, maxZoom: 8, bounds: true}">
      <img src="@/assets/map.png" alt />
    </panZoom>
  </v-card>
</template>

<style lang="scss">
img {
  height: 100%;
  width: 100%;
}
</style>
