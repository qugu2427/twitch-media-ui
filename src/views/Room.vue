<template>
  <v-container class="d-flex flex-column align-center pt-5">
    <div class="text-body">{{ lastMessage }}</div>
    <div class="d-flex flex-wrap justify-center">
      <player
        :ytid="ytid"
        :start="start"
        :duration="duration"
        :endTime="endTime"
        :likes="likes"
        :dislikes="dislikes"
        :skipQuota="Math.ceil(connections / 3)"
      ></player>
      <queue
        :queue="queue"
        :name="name"
        :addedBy="addedBy"
        :duration="formatSeconds(duration)"
      />
    </div>
    <info
      :connections="connections"
      :online="online"
      :durationLimit="formatSeconds(durationLimit)"
      class="mt-5"
    />
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
      endTime: 0,
      showFrame: false,
      queue: [],
      online: false,
      connections: 0,
      likes: 0,
      dislikes: 0,
      addedBy: "",
      name: "",
      durationLimit: 0,
      lastMessage: "This is a prototype. Expect bugs/wipes/crashes.",
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
      this.likes = 0;
      this.dislikes = 0;
      this.ytid = item.ytid;
      this.start = item.start == null ? 0 : item.start;
      this.duration = item.duration;
      this.endTime = Date.now() + (this.duration * 1000 - this.start * 1000);
      this.addedBy = item.addedBy;
      this.name = item.name;
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
    likes(n) {
      this.likes = n;
    },
    dislikes(n) {
      this.dislikes = n;
    },
    durationLimit(n) {
      this.durationLimit = n;
    },
    message(msg) {
      this.lastMessage = msg;
    },
  },
};
</script>

<style></style>
