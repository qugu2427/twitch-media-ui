<template>
  <v-card
    tile
    class="d-flex justify-space-around align-center ma-5 pa-3"
    style="width: 640px;"
  >
    <div class="text-body">
      <b>Connections: </b>
      {{ connections }}
    </div>
    <div class="text-body">
      <b>Backend Status: </b>
      <span :class="online ? 'green--text' : 'red--text'">{{
        online ? "online" : "offline"
      }}</span>
    </div>
    <a href="https://github.com/qugu2427/twitch-media-ui">
      <v-btn tile outlined dark>
        <v-icon left>
          mdi-github
        </v-icon>
        Github
      </v-btn>
    </a>
  </v-card>
</template>

<script>
export default {
  props: {
    connections: Number,
    online: Boolean,
  },
};
</script>

<style></style>
