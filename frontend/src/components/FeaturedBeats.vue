<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <b-carousel-slide
        :caption="beat.title"
        img-src="https://d2p1nnn035jt22.cloudfront.net/spw/images/releases/2018/sickomode960.jpg"
        img-alt="Travis"
        v-for="beat in beats"
        :key="beat.id"
      >
        <p>
          {{ beat.title }} - is a sick tune boasting a {{ beat.BPM }} beats per
          minute and is {{ beat.time }} long
        </p>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  props: {
    beats: Array
  },
  data() {
    return {
      slide: 0,
      sliding: null
    };
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    onSlideStart(slide) {
      this.sliding = true;
    },
    // eslint-disable-next-line no-unused-vars
    onSlideEnd(slide) {
      this.sliding = false;
    }
  }
};
</script>

<style></style>
