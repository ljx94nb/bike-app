<template>
  <div class="home">
    <my-map />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MyMap from '@/components/MyMap.vue';

export default defineComponent({
  name: 'Home',
  components: {
    MyMap
  }
});
</script>
