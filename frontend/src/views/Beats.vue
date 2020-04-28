<template>
  <div>
    <div>
      <SearchBar @searchBeats="filterBeats" />
    </div>
    <br />
    <div>
      <BeatList :beats="filteredBeats" />
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

<style>
.guitar {
  width: 100%;
  height: 100%;
}
</style>
