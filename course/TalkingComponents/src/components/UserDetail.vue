<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>many details</p>
        <p>User Name: {{ name }}</p>
        <p>User Age: {{ userAge }}</p>
        <p>Name reversed: {{ switchName() }}</p>
        <button @click="resetName">reset Name</button>
    </div>
</template>


<script>
import { eventBus } from "../main";

export default {
  props: {
    name: {
      // adds validation to prop
      type: String,
      required: true
    },
    userAge: Number
  },
  methods: {
    switchName() {
      return this.name
        .split("")
        .reverse()
        .join("");
    },
    resetName() {
      this.name = "Richard";
      this.$emit("nameWasReset", this.name); // custom event
    }
  },
  created() {
    eventBus.$on("ageWasEdited", age => {
      this.userAge = age;
    });
  }
};
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>
