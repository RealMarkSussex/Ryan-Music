<template>
  <div class="container">
    <SearchBar @input="filterBeats" />
    <br />
    <BeatList :beats="beats" />
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
      ]
    };
  },
  methods: {
    filterBeats(value) {
      let searchTerm = value.toUpperCase();
      let foundTag = false;
      for (let i = 0; i < this.beats.length; i++) {
        for (let j = 0; j < this.beats[i].tags.length; j++) {
          if (this.beats[i].tags[j].name.toUpperCase().includes(searchTerm)) {
            foundTag = true;
          }
        }
        if (!foundTag) {
          this.beats.splice(i, 1);
        }
      }
    }
  }
};
</script>
