<template>
    <div>
        <h3>New Quote</h3>
        <button @click="counter++"> + </button>
        <p>{{ counter }} </p>
    </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0
    };
  },
  deactivated() {
    console.log("Deactivated");
  },
  activated() {
    console.log("Activated!");
  }
};
</script>

<style>
</style>