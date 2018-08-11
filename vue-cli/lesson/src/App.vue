<template>
  <div id="app">
    <counter></counter>
    <p v-text="skills"></p>
  </div>
</template>

<script>
import Counter from "./components/Counter.vue";
export default {
  name: "app",
  components: { Counter }
};
</script>
