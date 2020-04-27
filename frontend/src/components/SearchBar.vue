<template>
  <div class="container">
    <b-input-group
      class="mb-2"
      size="sm"
      @input="$emit('input', $event.target.value)"
    >
      <b-input-group-prepend is-text>
        <b-icon icon="search"></b-icon>
      </b-input-group-prepend>
      <b-form-input aria-label="Search by tag...."></b-form-input>
    </b-input-group>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
