<template>
  <v-container
    class="d-flex flex-column align-center pt-5"
    style="max-width: 800px;"
  >
    <div class="text-h6" v-if="!online">
      currently offline for development :(
    </div>
    <player :ytid="ytid" :start="start" :duration="duration"></player>
    <queue :queue="queue" />
    <commands />
  </v-container>
</template>

<script>
import Player from "@/components/Player.vue";
import Queue from "@/components/Queue.vue";
import Commands from "../components/Commands.vue";
export default {
  components: { Player, Queue, Commands },
  data() {
    Commands;
    return {
      ytid: "",
      start: 0,
      duration: 0,
      showFrame: false,
      queue: [],
      online: false,
    };
  },
  sockets: {
    connect() {
      console.log("connected to socket");
      this.online = true;
    },
    play(item) {
      console.log(item);
      this.ytid = item.ytid;
      console.log("istart: " + item.start);
      this.start = item.start == null ? 0 : item.start;
      this.duration = item.duration;
      console.log(item.duration);
      this.queue.shift();
    },
    enqueue(item) {
      this.queue.push(item);
    },
    enqueueMany(items) {
      for (let i = 0; i < items.length; i++) {
        this.queue.push(items[i]);
      }
    },
    error(msg) {
      alert("Error:\n" + msg);
    },
  },
};
</script>

<style></style>
