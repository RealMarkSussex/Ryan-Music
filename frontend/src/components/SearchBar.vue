<template>
  <div class="container">
    <b-input-group class="mb-2" size="sm">
      <b-input-group-prepend is-text>
        <b-icon icon="search"></b-icon>
      </b-input-group-prepend>
      <b-form-input
        v-model="searchTerm"
        @keyup="emitSearch"
        aria-label="Search by tag...."
      ></b-form-input>
    </b-input-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchTerm: ""
    };
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    emitSearch(event) {
      this.$emit("searchBeats", this.searchTerm);
    }
  },
};
</script>

<style></style>
