<template>
  <b-card-group deck>
    <Beat v-for="beat in beats" :key="beat.id" :beat="beat" />
  </b-card-group>
</template>

<script>
import Beat from "./Beat.vue";
export default {
  components: {
    Beat
  },
  props: {
    beats: []
  }
};
</script>

<style></style>
