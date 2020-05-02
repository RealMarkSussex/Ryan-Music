<template>
  <b-container fluid>
    <b-row>
      <b-col>
        <SearchBar @searchBeats="filterBeats" />
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <table class="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Time</th>
              <th scope="col">Beats Per Minute</th>
              <th scope="col">Tags</th>
            </tr>
          </thead>
          <tbody v-for="(beat, index) in filteredBeats" :key="beat.id">
            <tr>
              <th scope="row">{{ index }}</th>
              <td>{{ beat.title }}</td>
              <td>{{ beat.time }}</td>
              <td>{{ beat.BPM }}</td>
              <td>
                <a
                  v-for="tag in beat.tags"
                  :key="tag.id"
                  href="#"
                  class="badge badge-primary"
                  >{{ tag.name }}</a
                >
              </td>
            </tr>
          </tbody>
        </table>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import SearchBar from "@/components/SearchBar.vue";

export default {
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
      filteredBeats: Array
    };
  },
  components: {
    SearchBar
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
