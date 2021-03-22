<template>
  <v-app>
    <v-app-bar app color="gray" dark>
      <h2>Mai-Mai</h2>
      <v-spacer />
      <router-link class="mx-2" to="/create">Create</router-link>

      <router-link class="mx-2" to="/feed">Memes</router-link>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    name: "App",

    components: {},

    data: () => ({
      //
    }),
  };
</script>

<style scoped>
  a {
    color: aliceblue;
  }
</style>
