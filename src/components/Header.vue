<template>
  <v-card
    tile
    class="d-flex justify-space-around ma-5 pa-3"
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
