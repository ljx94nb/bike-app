<template>
  <router-view />
  <van-tabbar v-model="active">
    <van-tabbar-item replace to="/home">
      <van-icon name="location-o" size="36" />
    </van-tabbar-item>
    <van-tabbar-item replace to="/about">
      <van-icon name="eye-o" size="36" />
    </van-tabbar-item>
    <van-tabbar-item replace to="/about">
      <van-icon name="user-circle-o" size="36" />
    </van-tabbar-item>
  </van-tabbar>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  setup() {
    const active = ref<number>(0);

    return {
      active
    };
  }
});
</script>

<style lang="scss"></style>
