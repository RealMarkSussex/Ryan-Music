<template>
  <div>
    <div v-for="beat in beats" :key="beat.id">
      <div class="mt-3">
        <b-card-group deck>
          <Beat :beat="beat" />
        </b-card-group>
      </div>
    </div>
  </div>
</template>

<script>
import Beat from "./Beat.vue";
export default {
  components: {
    Beat
  },
  props: {
    beats: Array
  }
};
</script>

<style></style>
