<template>
  <v-container>
    <v-form @submit.prevent="saveMeme">
      <v-row justify="space-between">
        <v-col>
          <v-text-field
            outlined
            v-model="imageURL"
            type="text"
            label="Image URL"
          />
        </v-col>
        <v-col>
          <v-text-field
            outlined
            v-model="topText"
            type="text"
            label="Top Text"
          />
        </v-col>
        <v-col>
          <v-text-field
            outlined
            v-model="bottomText"
            type="text"
            label="Bottom Text"
          />
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-btn
          :disabled="!imageURL"
          text
          color="primary"
          type="submit"
          class="my-5"
        >
          Save meme!
        </v-btn>
      </v-row>
    </v-form>

    <div>
      <meme
        class="mx-auto"
        :top="topText"
        :bottom="bottomText"
        :imageURL="imageURL"
        :width="800"
      />
    </div>
  </v-container>
</template>

<script>
  import Meme from "../components/Meme.vue";
  import { db } from "../firebase";
  export default {
    components: { Meme },
    data() {
      return {
        imageURL: "",
        topText: "",
        bottomText: "",
      };
    },
    methods: {
      async saveMeme() {
        await db.collection("memes").add({
          topText: this.topText,
          bottomText: this.bottomText,
          imageURL: this.imageURL,
          normalized: `${this.topText.toUpperCase()} ${this.bottomText.toUpperCase()}`,
        });
        this.$router.push("/feed");
      },
    },
  };
</script>
