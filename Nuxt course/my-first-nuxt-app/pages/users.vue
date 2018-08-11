<template>
    <div>
      <Header />
        <h1>This is the User's page!</h1>
        <hr>
        <input type="text" v-model="userId">
        <button @click="onLoadUser">Load User</button>
        <nuxt-child />
    </div>
</template>

<script>
import Header from "~/components/Header.vue";

export default {
  data() {
    return {
      userId: ""
    };
  },
  methods: {
    onLoadUser() {
      this.$router.push("/users/" + this.userId);
    }
  },
  layout: "users",
  components: {
    Header
  }
};
</script>

<style scoped>
</style>
