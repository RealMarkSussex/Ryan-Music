<template>
  <b-container fluid>
    <b-row>
      <b-col cols="6">
        <FeaturedBeats :beats="beats" />
      </b-col>
      <b-col cols="6">
        <b-row>
          <b-col>
            <b-card bg-variant="dark" text-variant="white" title="MP3 Licence">
              <b-card-text>Some Shite about MP3 features</b-card-text>
            </b-card>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-card bg-variant="dark" text-variant="white" title="WAV Licence">
              <b-card-text>Some Shite about WAV features</b-card-text>
            </b-card>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-card
              bg-variant="dark"
              text-variant="white"
              title="Premium Licence"
            >
              <b-card-text>Some Shite about premiem features</b-card-text>
            </b-card>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <br />
  </b-container>
</template>

<script>
// @ is an alias to /src
import FeaturedBeats from "@/components/FeaturedBeats.vue";
export default {
  name: "Home",
  components: {
    FeaturedBeats
  },
  data() {
    return {
      beats: [
        {
          id: 1,
          title: "Spider",
          time: "2:33",
          BPM: 0,
          tags: [
            { id: 1, name: "Uk Drill" },
            { id: 2, name: "Uk Afros" }
          ]
        },
        {
          id: 2,
          title: "Hamster",
          time: "3:20",
          BPM: 0,
          tags: [{ id: 2, name: "Uk Afros" }]
        },
        {
          id: 3,
          title: "Sicko Mode",
          time: "1:40",
          BPM: 5,
          tags: [{ id: 2, name: "Uk Afros" }]
        }
      ]
    };
  }
};
</script>
