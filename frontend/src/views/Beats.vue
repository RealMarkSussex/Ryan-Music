<template>
  <div class="container">
    <div>
      <SearchBar @searchBeats="filterBeats" />
    </div>
    <br />
    <div>
      <BeatList :beats="filteredBeats" />
    </div>
    <div>
      <div>
        <b-card bg-variant="dark" text-variant="white" title="MP3 Licence">
          <b-card-text>Some Shite about MP3 features</b-card-text>
          <b-button href="#" variant="primary">Get Licence</b-button>
        </b-card>
      </div>
      <br />

      <div>
        <b-card bg-variant="dark" text-variant="white" title="WAV Licence">
          <b-card-text>Some Shite about WAV features content.</b-card-text>
          <b-button href="#" variant="primary">Get Licence</b-button>
        </b-card>
      </div>
      <br />

      <div>
        <b-card bg-variant="dark" text-variant="white" title="Premium Licence">
          <b-card-text>Some Shite about premiem features</b-card-text>
          <b-button href="#" variant="primary">Get License</b-button>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SearchBar from "@/components/SearchBar.vue";
import BeatList from "@/components/BeatList.vue";
export default {
  name: "Home",
  components: {
    SearchBar,
    BeatList
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
        },
        {
          id: 4,
          title: "Gods Plan",
          time: "69:21",
          BPM: 21,
          tags: [
            { id: 1, name: "Uk Drill" },
            { id: 2, name: "Uk Afros" }
          ]
        },
        {
          id: 5,
          title: "Rap God",
          time: "2:10",
          BPM: 50,
          tags: [
            { id: 3, name: "Pop" },
            { id: 4, name: "Rap" }
          ]
        },
        {
          id: 6,
          title: "Cold",
          time: "3:30",
          BPM: 0,
          tags: [
            { id: 4, name: "Rap" },
            { id: 5, name: "Hip" }
          ]
        }
      ],
      filteredBeats: []
    };
  },
  methods: {
    filterBeats(value) {
      let foundTag = false;
      this.filteredBeats = [];
      this.beats.forEach(b => {
        b.tags.forEach(t => {
          if (t.name.toUpperCase().includes(value.toUpperCase())) {
            foundTag = true;
          }
        });
        if (foundTag) {
          this.filteredBeats.push(b);
        }
        foundTag = false;
      });
    }
  },
  mounted() {
    this.filteredBeats = this.beats;
  }
};
</script>
