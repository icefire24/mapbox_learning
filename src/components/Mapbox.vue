<template>
  <div id="basicMapbox"></div>
  <div class="buttons">
    <button @click="fly">fly</button>
    <button @click="loadJson">loadJson</button>
    <button @click="loadMarker">loadMarker</button>
  </div>
</template>
<script lang="ts" setup>
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import MapboxLanguage from '@mapbox/mapbox-gl-language' //可以将标签改为中文
import dijishi from '@/assets/geojson/广东21个地级市.json'
console.log("🚀 ~ dijishi:", dijishi)
import polygon from '@/assets/geojson/polygon.json'
mapboxgl.accessToken = 'pk.eyJ1IjoiaWNlZmlyZXNvbmciLCJhIjoiY2x4MGlhNXpjMDB3YTJpb3Brc3BqZjQ3ZyJ9.AK7pWUAumdLnZQ5zPkei4g'
let map
const loadJson = () => {
  map.addSource('customSourceName', {
    type: 'geojson',
    data: polygon
  })
  map.addLayer({
    id: 'my',
    type: 'fill',
    source: 'customSourceName',
    layout: {},
    paint: {
      'fill-color': '#fff',
      'fill-opacity': 0.8
    }
  })
  let layer = map.getLayer('my')
}
// 加载marker
const loadMarker = () => {
  dijishi.features.forEach((element) => {
    new mapboxgl.Marker().setLngLat(element.geometry.coordinates).addTo(map)
  })
}
const fly = () => {
  map.flyTo({
    center: [112.49, 23.05],
    zoom: 13,
    essential: true // this animation is considered essential with respect to prefers-reduced-motion
  })
}
// map.on()
onMounted(() => {
  map = new mapboxgl.Map({
    container: 'basicMapbox',
    style: 'mapbox://styles/icefiresong/cly2kjsdf005w01qphmfeb1qa/draft',
    center: [113.95, 22.53],
    zoom: 13, //zoom你都不懂就别看了
    pitch: 0, // 相对于地面3D视角的角度
    bearing: 0, // 东西南北 方向，正北方为 0
    // projection: 'globe', // 为 3D 地球
    antialias: false, //抗锯齿，通过false关闭提升性能
    essential: true, //不知道什么意思，我看人家写我就写了
    renderWorldCopies: false, //可理解为loop，在projection: 'globe'时无效
    skipOnboarding: true //可选择不等待瓦片加载
  })
  map.addControl(
    new MapboxLanguage({
      defaultLanguage: 'zh-Hans'
    })
  )
})
</script>
<style scoped lang="scss">
#basicMapbox {
  width: 100%;
  height: 800px;
  position: relative;
}
.buttons {
  z-index: 99;
}
</style>
