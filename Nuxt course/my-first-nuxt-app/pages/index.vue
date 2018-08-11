<template>
  <section class="container">
    <Header />
    <div>
      <h1>Hello, I am a first Vue/Nuxt app!</h1>
      <hr>
      <nuxt-link to="/users">Users</nuxt-link>
      <hr>
      <button @click="onLoadProducts">PRODUCTS</button>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    onLoadProducts() {
      this.$router.push("/products");
    }
  }
};
</script>

<style>
</style>
