<template>
  <v-container class="d-flex flex-column align-center pt-5">
    <b>This is a prototype. Expect crashes and outages.</b>
    <div class="d-flex flex-wrap justify-center">
      <player
        :ytid="ytid"
        :start="start"
        :duration="duration"
        :boos="boos"
        :skipQuota="Math.ceil(connections / 3)"
      ></player>
      <queue
        :queue="queue"
        :name="name"
        :addedBy="addedBy"
        :duration="formatSeconds(duration)"
      />
    </div>
    <div class="d-flex flex-wrap justify-center">
      <info
        :connections="connections"
        :online="online"
        :durationLimit="formatSeconds(durationLimit)"
      />
    </div>
  </v-container>
</template>

<script>
import Player from "@/components/Player.vue";
import Queue from "@/components/Queue.vue";
import Info from "@/components/Info.vue";

export default {
  components: { Player, Queue, Info },
  data() {
    return {
      ytid: "",
      start: 0,
      duration: 0,
      showFrame: false,
      queue: [],
      online: false,
      connections: 0,
      boos: 0,
      addedBy: "",
      name: "",
      durationLimit: 0,
    };
  },
  methods: {
    formatSeconds(s) {
      var minutes = Math.floor((((s % 31536000) % 86400) % 3600) / 60);
      var seconds = (((s % 31536000) % 86400) % 3600) % 60;
      var fseconds = seconds < 10 ? "0" + seconds : seconds;
      return `${minutes}:${fseconds}`;
    },
  },
  sockets: {
    connect() {
      console.log("connected to socket");
      this.online = true;
    },
    play(item) {
      console.log(item);
      this.boos = 0;
      this.ytid = item.ytid;
      console.log("istart: " + item.start);
      this.start = item.start == null ? 0 : item.start;
      this.duration = item.duration;
      this.addedBy = item.addedBy;
      this.name = item.name;
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
    connections(n) {
      this.connections = n;
    },
    boos(n) {
      this.boos = n;
    },
    durationLimit(n) {
      this.duration = n;
    },
  },
};
</script>

<style></style>
