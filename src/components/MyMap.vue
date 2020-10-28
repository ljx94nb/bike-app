<template>
  <div id="map-container" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AMapLoader from '@amap/amap-jsapi-loader';

export default defineComponent({
  name: 'MyMap',
  mounted() {
    AMapLoader.load({
      key: '5d8a8dd1fcc6c74b4f7217e311e046c0', // 申请好的Web端开发者Key，首次调用 load 时必填
      version: '2.0', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
      plugins: ['AMap.Geolocation'] // 需要使用的的插件列表，如比例尺'AMap.Scale'等
      // AMapUI: {
      //   // 是否加载 AMapUI，缺省不加载
      //   version: '1.1', // AMapUI 缺省 1.1
      //   plugins: [] // 需要加载的 AMapUI ui插件
      // },
      // Loca: {
      //   // 是否加载 Loca， 缺省不加载
      //   version: '1.3.2' // Loca 版本，缺省 1.3.2
      // }
    })
      .then((AMap) => {
        const mapOptions: AMap.MapOptions = {
          zoom: 12
        };
        const map = new AMap.Map('map-container', mapOptions);
      })
      .catch((e) => {
        console.log(e);
      });
  }
});
</script>

<style lang="scss" scoped>
#map-container {
  width: 375px;
  height: 400px;
}
</style>
