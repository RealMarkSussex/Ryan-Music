<template>
  <div class="container">
    <b-card
      :title="beat.title"
      img-src="https://i.ytimg.com/vi/6-HrB1lqTbw/maxresdefault.jpg"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2 card"
      overlay
    >
      <b-card-text>
        <b>
          This song is {{ beat.time }} long with {{ beat.BPM }} beats per
          minute.
        </b>
        <br />
        <label>Tags:</label
        ><b-badge v-for="tag in beat.tags" :key="tag.id">{{
          tag.name
        }}</b-badge>
        <b-button size="sm" href="#" variant="dark" class="button"
          ><b-icon icon="bag-fill"></b-icon
        ></b-button>
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
export default {
  props: {
    beat: {}
  }
};
</script>

<style scoped>
.card {
  font-size: 15px;
  color: whitesmoke;
}
.button {
  width: 100%;
  height: 100%;
}</style
>>
