<template>
  <v-card tile class="d-flex flex-column ma-5">
    <div
      id="overlay"
      style="height: 360px;margin-bottom: -360px;background-color: transparent;z-index: 10;"
    ></div>
    <youtube
      :video-id="ytid"
      :player-vars="{ autoplay: 1, controls: 0 }"
      ref="youtube"
      @playing="playing"
    ></youtube>

    <div class="d-flex justify-space-between align-center">
      <div style="width: 200px">
        <v-slider
          min="0"
          max="100"
          v-model="volume"
          color="white"
          dense
          :prepend-icon="volumeIcon"
          @click:prepend="toggleVolume()"
          class="mb-n5 px-3"
        ></v-slider>
      </div>
      <div>
        <v-icon>mdi-thumb-up-outline</v-icon> {{ likes }} &nbsp;&nbsp;
        {{ dislikes }}
        <v-icon>mdi-thumb-down-outline</v-icon>
      </div>
      <div>{{ formatSeconds(timeLeft) }}</div>
      <div>
        <v-btn fab tile text @click="forcePlay">
          <v-icon>
            mdi-refresh
          </v-icon>
        </v-btn>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    ytid: String,
    start: Number,
    likes: Number,
    dislikes: Number,
    skipQuota: Number,
    endTime: Number,
    duration: Number,
  },
  data() {
    return {
      volume: 50,
      seeked: false,
      now: Date.now(),
    };
  },
  created() {
    var self = this;
    setInterval(function() {
      self.now = Date.now();
    }, 1000);
  },
  computed: {
    player() {
      return this.$refs.youtube.player;
    },
    volumeIcon() {
      if (this.volume == 0) {
        return "mdi-volume-mute";
      } else if (this.volume < 10) {
        return "mdi-volume-low";
      } else if (this.volume < 60) {
        return "mdi-volume-medium";
      }
      return "mdi-volume-high";
    },
    timeLeft() {
      let t = Math.floor((this.endTime - this.now) / 1000);
      return t > 0 ? t : 0;
    },
  },
  methods: {
    toggleVolume() {
      if (this.volume == 0) {
        this.volume = 100;
      } else {
        this.volume = 0;
      }
    },
    playing() {
      if (!this.seeked) {
        this.$refs.youtube.player.seekTo(this.start);
        this.seeked = true;
        this.$refs.youtube.player.setVolume(this.volume);
        this.$refs.youtube.player.playVideo();
      }
    },
    formatSeconds(s) {
      var minutes = Math.floor((((s % 31536000) % 86400) % 3600) / 60);
      var seconds = (((s % 31536000) % 86400) % 3600) % 60;
      var fseconds = seconds < 10 ? "0" + seconds : seconds;
      return `${minutes}:${fseconds}`;
    },
    forcePlay() {
      let tl = Math.floor((this.endTime - this.now) / 1000);
      if (tl > 1) {
        let newStart =
          this.duration - Math.floor((this.endTime - this.now) / 1000);
        this.$refs.youtube.player.playVideo();
        this.$refs.youtube.player.seekTo(newStart);
      } else {
        console.log("can't refresh because video is over");
      }
    },
  },
  watch: {
    ytid() {
      this.seeked = false;
    },
    volume() {
      this.$refs.youtube.player.setVolume(this.volume);
    },
  },
};
</script>

<style></style>
