<template>
  <div class="Contact">
    <b-container-fluid>
      <b-row>
        <b-col>
          <h1>Contact</h1>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-form-group
              id="input-group-1"
              label="Email address:"
              label-for="input-1"
              description="We'll never share your email with anyone else."
            >
              <b-form-input
                id="input-1"
                v-model="form.email"
                type="email"
                required
                placeholder="Enter email"
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-2"
              label="Your Name:"
              label-for="input-2"
            >
              <b-form-input
                id="input-2"
                v-model="form.name"
                required
                placeholder="Enter name"
              ></b-form-input>
            </b-form-group>
            <br />
            <b-form-textarea
              id="message"
              v-model="form.message"
              placeholder="Enter message..."
              rows="3"
              max-rows="6"
            ></b-form-textarea>
            <br />
            <b-button type="submit" variant="primary pill"
              >Send Message</b-button
            >
            <b-button type="reset" variant="danger pill">Clear</b-button>
          </b-form>
        </b-col>
      </b-row>
    </b-container-fluid>
    <br />
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        name: "",
        message: ""
      },
      show: true
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.message = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>
